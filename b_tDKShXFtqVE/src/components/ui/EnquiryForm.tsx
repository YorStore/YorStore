"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/lib/config";

interface EnquiryFormProps {
  subject?: string;
  compact?: boolean;
}

export default function EnquiryForm({ subject = "General Enquiry", compact = false }: EnquiryFormProps) {
  const pathname = usePathname();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          message: data.get("message"),
          serviceType: data.get("serviceType"),
          source: data.get("source"),
          website: data.get("website"),
        }),
      });

      const result = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setError(result.error ?? "We could not send your enquiry. Please try again or call us.");
        setSending(false);
        return;
      }

      setSent(true);
    } catch {
      setError("We could not send your enquiry. Please check your connection and try again.");
      setSending(false);
    }
  }

  if (sent) {
    return (
      <EnquirySuccess />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative" noValidate>
      <input type="hidden" name="serviceType" value={subject} />
      <input type="hidden" name="source" value={pathname || "/"} />
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden"
        aria-hidden="true"
      />

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
        <div className={compact ? "flex flex-col gap-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="07700 000000"
              autoComplete="tel"
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              className="form-input"
            />
          </div>
        </div>
      </div>

      <p className="text-xs text-slate-400 -mt-1">Phone or email required</p>

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

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3" role="alert">
          {error}
        </p>
      )}

      <button type="submit" disabled={sending} className="btn-primary justify-center disabled:opacity-60">
        {sending ? "Sending…" : "Send Enquiry →"}
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

function EnquirySuccess() {
  return (
    <div className="text-center py-8">
      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
        <CheckIcon />
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-1">Thanks — we&apos;ll be in touch!</h3>
      <p className="text-slate-500 text-sm">We aim to respond within a few hours during business hours.</p>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}
