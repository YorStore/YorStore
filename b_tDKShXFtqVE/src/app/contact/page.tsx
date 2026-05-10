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
      fullCard: false as const,
    },
    {
      icon: <MailIcon />,
      title: "Email us",
      detail: SITE_CONFIG.email,
      href:   SITE_CONFIG.emailHref,
      note:   "We aim to reply same day",
      fullCard: false as const,
    },
    {
      icon: <WhatsAppIcon />,
      title: "WhatsApp",
      detail: "Message us on WhatsApp",
      href:   SITE_CONFIG.whatsappHref,
      note:   "Quickest for student storage, crate storage and general questions",
      fullCard: true as const,
    },
    {
      icon: <MapPinIcon />,
      title: "Based in",
      detail: SITE_CONFIG.address,
      href:   null,
      note:   "Serving Yorkshire",
      fullCard: false as const,
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

            {contactMethods.map((method) => {
              const isWhatsApp = method.title === "WhatsApp";
              const inner = (
                <>
                  <span
                    className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white ${
                      isWhatsApp ? "bg-[#25D366]" : "bg-brand-navy"
                    }`}
                  >
                    {method.icon}
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{method.title}</p>
                    {method.fullCard ? (
                      <p className="font-bold text-brand-navy text-sm">{method.detail}</p>
                    ) : method.href ? (
                      <a href={method.href} className="font-bold text-brand-navy hover:text-brand-blue transition-colors text-sm">
                        {method.detail}
                      </a>
                    ) : (
                      <p className="font-bold text-brand-navy text-sm">{method.detail}</p>
                    )}
                    <p className="text-xs text-slate-400 mt-0.5">{method.note}</p>
                  </div>
                </>
              );

              const cardClass = isWhatsApp
                ? "flex items-start gap-4 p-5 rounded-2xl bg-[#25D366]/12 border border-[#25D366]/40 transition-colors"
                : "flex items-start gap-4 p-5 rounded-2xl bg-brand-blue-xlt border border-brand-blue-lt transition-colors";

              if (method.fullCard && method.href) {
                return (
                  <a
                    key={method.title}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${cardClass} ${
                      isWhatsApp
                        ? "hover:border-[#25D366]/70 hover:bg-[#25D366]/16 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
                        : "hover:border-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                    }`}
                  >
                    {inner}
                  </a>
                );
              }

              return (
                <div key={method.title} className={cardClass}>
                  {inner}
                </div>
              );
            })}

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
function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  );
}
