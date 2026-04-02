"use client";

import { useState } from "react";
import Button from "./button";
import { useLanguage } from "./language-provider";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(n: string, e: string, m: string): FormErrors {
    const errs: FormErrors = {};
    if (!n.trim()) errs.name = t.contact.nameRequired;
    if (!e.trim()) {
      errs.email = t.contact.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
      errs.email = t.contact.emailInvalid;
    }
    if (!m.trim()) errs.message = t.contact.messageRequired;
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const fieldErrors = validate(name, email, message);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        if (data.errors) {
          setErrors(data.errors);
          setStatus("idle");
        } else {
          setStatus("error");
        }
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-lg flex-col gap-5">
      {status === "success" && (
        <div className="rounded-lg bg-green-100 px-4 py-3 text-sm text-green-800 dark:bg-green-900/30 dark:text-green-300">
          {t.contact.success}
        </div>
      )}
      {status === "error" && (
        <div className="rounded-lg bg-red-100 px-4 py-3 text-sm text-red-800 dark:bg-red-900/30 dark:text-red-300">
          {t.contact.error}
        </div>
      )}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-text">
          {t.contact.name}
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg border border-border bg-bg px-3 py-2 text-text placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder={t.contact.namePlaceholder}
        />
        {errors.name && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.name}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-text">
          {t.contact.email}
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-border bg-bg px-3 py-2 text-text placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder={t.contact.emailPlaceholder}
        />
        {errors.email && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.email}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-text">
          {t.contact.message}
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-lg border border-border bg-bg px-3 py-2 text-text placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder={t.contact.messagePlaceholder}
        />
        {errors.message && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.message}</p>
        )}
      </div>

      <Button type="submit" disabled={status === "submitting"} className="self-start">
        {status === "submitting" ? t.contact.sending : t.contact.send}
      </Button>
    </form>
  );
}
