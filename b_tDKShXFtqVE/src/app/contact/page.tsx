import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import EnquiryForm from "@/components/ui/EnquiryForm";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with YORSTORE. Call, email, or send an enquiry for a free, no-obligation storage quote across Yorkshire.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get in touch"
        heading="We'd love to hear from you"
        subtext="Call, email, or send us a message. We aim to respond quickly — no pressure, no obligation."
      />
      <ContactSection />
    </>
  );
}

function ContactSection() {
  const contactMethods = [
    {
      icon: <PhoneIcon />,
      title: "Call us",
      detail: SITE_CONFIG.phone,
      href:   SITE_CONFIG.phoneHref,
      note:   "Best for quick questions",
    },
    {
      icon: <MailIcon />,
      title: "Email us",
      detail: SITE_CONFIG.email,
      href:   SITE_CONFIG.emailHref,
      note:   "We aim to reply same day",
    },
    {
      icon: <MapPinIcon />,
      title: "Based in",
      detail: SITE_CONFIG.address,
      href:   null,
      note:   "Serving Yorkshire",
    },
  ];

  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Contact methods sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div>
              <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest block mb-2">Contact details</span>
              <h2 className="text-2xl font-extrabold text-brand-navy mb-1">Get in touch</h2>
              <p className="text-slate-500 text-sm">Choose whichever way suits you best.</p>
            </div>

            {contactMethods.map((method) => (
              <div key={method.title} className="flex items-start gap-4 p-5 rounded-2xl bg-brand-blue-xlt border border-brand-blue-lt">
                <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center text-white">
                  {method.icon}
                </span>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{method.title}</p>
                  {method.href ? (
                    <a href={method.href} className="font-bold text-brand-navy hover:text-brand-blue transition-colors text-sm">
                      {method.detail}
                    </a>
                  ) : (
                    <p className="font-bold text-brand-navy text-sm">{method.detail}</p>
                  )}
                  <p className="text-xs text-slate-400 mt-0.5">{method.note}</p>
                </div>
              </div>
            ))}

            <div className="p-5 rounded-2xl bg-brand-navy border border-white/10">
              <p className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-2">Response times</p>
              <p className="text-xs text-blue-200/70 leading-relaxed">
                We aim to respond to all enquiries within a few hours during normal business hours.
                For urgent requirements, calling is always fastest.
              </p>
            </div>
          </div>

          {/* Enquiry form */}
          <div id="quote" className="lg:col-span-3">
            <div className="card shadow-md">
              <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest block mb-2">Quick enquiry</span>
              <h2 className="text-2xl font-extrabold text-brand-navy mb-1">Send an enquiry</h2>
              <p className="text-slate-500 text-sm mb-6">
                Fill in your details below and we'll come back to you with a free, no-obligation quote.
              </p>
              <EnquiryForm subject="Website Enquiry" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/>
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
