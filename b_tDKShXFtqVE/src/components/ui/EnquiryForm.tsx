"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/lib/config";

interface EnquiryFormProps {
  subject?: string;
  compact?: boolean;
}

export default function EnquiryForm({ subject = "General Enquiry", compact = false }: EnquiryFormProps) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Build a mailto link as the simplest zero-backend approach.
    // Replace this block with a fetch() to your API route or Formspree endpoint later.
    const name    = data.get("name") as string;
    const contact = data.get("contact") as string;
    const message = data.get("message") as string;
    const body    = encodeURIComponent(`Name: ${name}\nContact: ${contact}\n\n${message}`);
    const mailtoUrl = `${SITE_CONFIG.emailHref}?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoUrl;

    // Mark as sent after brief delay
    setTimeout(() => {
      setSent(true);
      setSending(false);
    }, 600);
  }

  if (sent) {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckIcon />
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-1">Thanks — we'll be in touch!</h3>
        <p className="text-slate-500 text-sm">We aim to respond within a few hours during business hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className={compact ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "flex flex-col gap-4"}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
            Your name <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="e.g. Sarah Johnson"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-slate-700 mb-1">
            Phone or email <span className="text-red-400">*</span>
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            required
            placeholder="07700 000000 or email@example.com"
            className="form-input"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          What do you need to store?
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          placeholder="Tell us roughly what you need to store, how long for, and any questions you have…"
          className="form-input resize-none"
        />
      </div>

      <button type="submit" disabled={sending} className="btn-primary justify-center">
        {sending ? "Opening email…" : "Send Enquiry →"}
      </button>

      <p className="text-xs text-slate-400 text-center">
        Or call us directly:{" "}
        <a href={SITE_CONFIG.phoneHref} className="text-brand-blue font-medium hover:underline">
          {SITE_CONFIG.phone}
        </a>
      </p>
    </form>
  );
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}
