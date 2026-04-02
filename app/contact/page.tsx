import type { Metadata } from "next";
import { cookies } from "next/headers";
import ContactContent from "@/components/contact-content";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = cookieStore.get("language")?.value ?? "pt";
  const title = lang === "en" ? "Contact" : "Contato";
  const siteName = lang === "en" ? "Portfolio" : "Portfólio";
  const description = "Get in touch — send me a message and I'll respond as soon as I can.";

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      images: ["/og-default.png"],
    },
  };
}

export default function ContactPage() {
  return <ContactContent />;
}
