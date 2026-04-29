"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/config";

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname                = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-lg shadow-black/10" : "shadow-sm"
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between py-3 md:py-4">

        {/* Logo */}
<Link href="/" className="flex-shrink-0 group -ml-3" aria-label="YORSTORE home">
  <Image
    src="/logo.png"
    alt="YORSTORE"
    width={220}
    height={66}
    className="h-14 md:h-16 w-auto group-hover:opacity-90 transition-opacity"
    priority
  />
</Link>
</div>
          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  pathname === link.href
                    ? "text-brand-navy bg-brand-navy/10"
                    : "text-brand-navy/70 hover:text-brand-navy hover:bg-brand-navy/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SITE_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy bg-brand-navy/5 border border-brand-navy/20 px-4 py-2.5 rounded-xl hover:bg-brand-navy/10 transition-colors duration-150"
            >
              <PhoneIcon />
              {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact#quote"
              className="inline-flex items-center justify-center gap-2 bg-brand-navy text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-brand-navy/90 transition-colors duration-150"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-brand-navy/80 hover:bg-brand-navy/5 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-brand-navy/10 bg-white">
          <div className="container-site py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-brand-navy bg-brand-navy/10"
                    : "text-brand-navy/70 hover:text-brand-navy hover:bg-brand-navy/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-brand-navy/10 flex flex-col gap-2.5">
              <a
                href={SITE_CONFIG.phoneHref}
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-brand-navy bg-brand-navy/5 border border-brand-navy/20 px-4 py-3 rounded-xl hover:bg-brand-navy/10 transition-colors"
              >
                <PhoneIcon /> {SITE_CONFIG.phone}
              </a>
              <Link
                href="/contact#quote"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-brand-navy text-white text-sm font-bold px-4 py-3 rounded-xl hover:bg-brand-navy/90 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}
