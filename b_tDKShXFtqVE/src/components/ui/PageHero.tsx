import Link from "next/link";
import { WHATSAPP_BUTTON_CORE, WhatsAppMark } from "@/components/ui/WhatsAppCta";

export interface PageHeroCta {
  href: string;
  label: string;
}

export interface PageHeroWhatsappCta {
  href: string;
  label: string;
  supportingText: string;
}

interface PageHeroProps {
  label?: string;
  heading: string;
  subtext: string;
  bullets?: string[];
  pricingLine?: string;
  whatsappCta?: PageHeroCta;
  secondaryCta?: PageHeroCta;
  ctaLabel?: string;
  ctaHref?: string;
  ctaWhatsApp?: boolean;
  whatsapp?: PageHeroWhatsappCta;
}

export default function PageHero({
  label,
  heading,
  subtext,
  bullets,
  pricingLine,
  whatsappCta,
  secondaryCta,
  ctaLabel,
  ctaHref,
  ctaWhatsApp,
  whatsapp,
}: PageHeroProps) {
  const hasServiceCtas = Boolean(whatsappCta || secondaryCta);
  const hasLegacyCta = Boolean(ctaLabel && ctaHref);
  const hasLegacyWhatsapp = Boolean(whatsapp && !whatsappCta);

  return (
    <section className="relative bg-brand-navy overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-blue/10" />
        <div className="absolute bottom-0 left-0 w-64 h-48 rounded-full bg-brand-blue-mid/5" />
      </div>

      <div className="relative container-site py-16 md:py-20">
        {label ? (
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-300 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
            {label}
          </span>
        ) : null}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 max-w-3xl leading-tight">
          {heading}
        </h1>
        <p className="text-lg text-blue-200/70 max-w-2xl leading-relaxed mb-8">{subtext}</p>
        {bullets && bullets.length > 0 ? (
          <ul className="mb-8 max-w-2xl space-y-2 text-base text-blue-200/80 leading-snug">
            {bullets.map((line) => (
              <li key={line} className="flex gap-2.5">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-400" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {hasServiceCtas ? (
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
            {whatsappCta ? (
              <a
                href={whatsappCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${WHATSAPP_BUTTON_CORE} px-7 py-3.5`}
              >
                <WhatsAppMark />
                {whatsappCta.label}
              </a>
            ) : null}
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-navy font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        ) : null}
        {!hasServiceCtas && (hasLegacyCta || hasLegacyWhatsapp) ? (
          <div className="flex flex-col items-stretch sm:items-start gap-3">
            {pricingLine ? (
              <p className="text-base font-semibold text-white tracking-tight">{pricingLine}</p>
            ) : null}
            {hasLegacyCta && ctaWhatsApp ? (
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${WHATSAPP_BUTTON_CORE} px-7 py-3.5`}
              >
                <WhatsAppMark />
                {ctaLabel}
              </a>
            ) : null}
            {hasLegacyCta && !ctaWhatsApp ? (
              <Link
                href={ctaHref!}
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-navy font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
              >
                {ctaLabel}
              </Link>
            ) : null}
            {hasLegacyWhatsapp ? (
              <>
                <a
                  href={whatsapp!.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${WHATSAPP_BUTTON_CORE} px-7 py-3.5`}
                >
                  <WhatsAppMark />
                  {whatsapp!.label}
                </a>
                <p className="text-sm text-blue-200/70">{whatsapp!.supportingText}</p>
              </>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="h-1 bg-gradient-to-r from-brand-blue-mid via-blue-400 to-brand-blue" />
    </section>
  );
}
