import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

interface CTABandProps {
  heading?:      string;
  subtext?:      string;
  primaryLabel?: string;
  primaryHref?:  string;
}

export default function CTABand({
  heading      = "Ready to get started?",
  subtext      = "Get in touch today for a free, no-obligation quote.",
  primaryLabel = "Get a Free Quote",
  primaryHref  = "/contact#quote",
}: CTABandProps) {
  return (
    <section className="bg-brand-navy">
      <div className="container-site py-14 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">{heading}</h2>
            <p className="text-blue-200/70 max-w-lg">{subtext}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-navy font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              {primaryLabel}
            </Link>
            <a
              href={SITE_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold text-sm px-5 py-3.5 rounded-xl hover:bg-white/20 transition-colors whitespace-nowrap"
            >
              <PhoneIcon />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
    </svg>
  );
}
