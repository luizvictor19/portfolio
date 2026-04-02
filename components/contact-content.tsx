"use client";

import SectionTitle from "./section-title";
import ContactForm from "./contact-form";
import { useLanguage } from "./language-provider";

export default function ContactContent() {
  const { t } = useLanguage();

  return (
    <div>
      <SectionTitle title={t.contact.title} subtitle={t.contact.subtitle} />
      <ContactForm />
    </div>
  );
}
