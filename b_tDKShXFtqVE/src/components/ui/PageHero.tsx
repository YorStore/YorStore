import Link from "next/link";

export interface PageHeroWhatsappCta {
  href: string;
  label: string;
  supportingText: string;
}

interface PageHeroProps {
  label?:    string;
  heading:   string;
  subtext:   string;
  bullets?:  string[];
  pricingLine?: string;
  ctaLabel?: string;
  ctaHref?:  string;
  whatsapp?: PageHeroWhatsappCta;
}

export default function PageHero({ label, heading, subtext, bullets, pricingLine, ctaLabel, ctaHref, whatsapp }: PageHeroProps) {
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
        {bullets && bullets.length > 0 ? (
          <ul className="mb-6 max-w-2xl space-y-2 text-base text-blue-200/80 leading-snug">
            {bullets.map((line) => (
              <li key={line} className="flex gap-2.5">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-400" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {(ctaLabel && ctaHref) || whatsapp ? (
          <div className="flex flex-col items-stretch sm:items-start gap-3">
            {pricingLine ? (
              <p className="text-base font-semibold text-white tracking-tight">
                {pricingLine}
              </p>
            ) : null}
            {ctaLabel && ctaHref && (
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-navy font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
              >
                {ctaLabel}
              </Link>
            )}
            {whatsapp && (
              <>
                <a
                  href={whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-[#20BD5A] transition-colors"
                >
                  <WhatsAppIcon />
                  {whatsapp.label}
                </a>
                <p className="text-sm text-blue-200/70">{whatsapp.supportingText}</p>
              </>
            )}
          </div>
        ) : null}
      </div>

      <div className="h-1 bg-gradient-to-r from-brand-blue-mid via-blue-400 to-brand-blue" />
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  );
}
