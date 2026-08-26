import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactBody {
  name?: string;
  email?: string;
  message?: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

let client: Resend | null = null;

function getResend(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  if (!client) client = new Resend(apiKey);
  return client;
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const errors: FieldErrors = {};

  if (!body.name?.trim()) errors.name = "Name is required.";
  if (!body.email?.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!body.message?.trim()) errors.message = "Message is required.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const resend = getResend();

  if (!resend) {
    return NextResponse.json(
      { error: "Email service is not configured. Missing RESEND_API_KEY." },
      { status: 500 }
    );
  }

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "luizvictorred@gmail.com",
    subject: `Contato através do Portfólio feito por ${body.name}`,
    replyTo: body.email,
    text: `Name: ${body.name}\nEmail: ${body.email}\n\n${body.message}`,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
