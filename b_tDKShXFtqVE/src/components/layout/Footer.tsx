import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      {/* Main footer content */}
      <div className="container-site pt-14 pb-10 md:pt-16 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

          {/* Brand column — wider */}
          <div className="md:col-span-5">
            <Image
              src="/logo.png"
              alt="YORSTORE"
              width={180}
              height={54}
              className="h-12 w-auto brightness-0 invert mb-5"
            />
            <p className="text-blue-200/70 text-sm leading-relaxed max-w-xs mb-6">
              Flexible, secure, local storage across Yorkshire.
              We come to you — you load, or we load for you.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={SITE_CONFIG.phoneHref}
                className="inline-flex items-center gap-2.5 text-sm font-semibold text-white hover:text-blue-300 transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors flex-shrink-0">
                  <PhoneIcon />
                </span>
                {SITE_CONFIG.phone}
              </a>
              <a
                href={SITE_CONFIG.emailHref}
                className="inline-flex items-center gap-2.5 text-sm font-semibold text-white hover:text-blue-300 transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors flex-shrink-0">
                  <MailIcon />
                </span>
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Services</h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-200/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Company</h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/about" className="text-sm text-blue-200/60 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-blue-200/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact#quote" className="text-sm text-blue-200/60 hover:text-white transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
            <div className="mt-6 p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs text-blue-200/50">{SITE_CONFIG.address}</p>
              <p className="text-xs text-blue-200/50 mt-0.5">Serving Yorkshire</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-blue-200/40">
            © {year} {SITE_CONFIG.businessName}. All rights reserved.
          </p>
          <p className="text-xs text-blue-200/30 tracking-widest uppercase">
            Secure · Flexible · Local
          </p>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/>
    </svg>
  );
}
