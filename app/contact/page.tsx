import type { Metadata } from "next";
import ContactContent from "@/components/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — send me a message and I'll respond as soon as I can.",
  openGraph: {
    title: "Contact | Portfolio",
    description: "Get in touch — send me a message and I'll respond as soon as I can.",
    images: ["/og-default.png"],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
