import Link from "next/link";

interface PageHeroProps {
  label?:    string;
  heading:   string;
  subtext:   string;
  ctaLabel?: string;
  ctaHref?:  string;
}

export default function PageHero({ label, heading, subtext, ctaLabel, ctaHref }: PageHeroProps) {
  return (
    <section className="relative bg-brand-navy overflow-hidden">
      {/* Subtle bg accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-blue/10" />
        <div className="absolute bottom-0 left-0 w-64 h-48 rounded-full bg-brand-blue-mid/5" />
      </div>

      <div className="relative container-site py-16 md:py-20">
        {label && (
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-300 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
            {label}
          </span>
        )}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 max-w-3xl leading-tight">
          {heading}
        </h1>
        <p className="text-lg text-blue-200/70 max-w-2xl leading-relaxed mb-6">
          {subtext}
        </p>
        {ctaLabel && ctaHref && (
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-navy font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
          >
            {ctaLabel}
          </Link>
        )}
      </div>

      <div className="h-1 bg-gradient-to-r from-brand-blue-mid via-blue-400 to-brand-blue" />
    </section>
  );
}
