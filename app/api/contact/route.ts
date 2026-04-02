import { NextResponse } from "next/server";

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

  // Placeholder — replace with email service integration
  console.log("Contact form submission:", {
    name: body.name,
    email: body.email,
    message: body.message,
  });

  return NextResponse.json({ success: true });
}
