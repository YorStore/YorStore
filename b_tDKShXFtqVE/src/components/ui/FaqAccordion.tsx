"use client";

import { useId, useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  id?: string;
  heading: string;
  eyebrow?: string;
  items: FaqItem[];
}

export default function FaqAccordion({ id, heading, eyebrow, items }: FaqAccordionProps) {
  const reactId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id={id} className="section-pad bg-white" aria-labelledby={id ? `${id}-heading` : undefined}>
      <div className="container-site max-w-3xl mx-auto">
        {eyebrow ? (
          <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest block mb-3 text-center">
            {eyebrow}
          </span>
        ) : null}
        <h2
          id={id ? `${id}-heading` : undefined}
          className="text-2xl md:text-3xl font-extrabold text-brand-navy text-center mb-10 md:mb-12 leading-tight"
        >
          {heading}
        </h2>

        <dl className="space-y-3 md:space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${reactId}-${index}`;
            const headerId = `faq-header-${reactId}-${index}`;
            return (
              <div
                key={item.question}
                className="rounded-2xl bg-brand-blue-xlt/80 border border-brand-blue-lt/60 overflow-hidden transition-colors hover:border-brand-blue-lt"
              >
                <dt>
                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 text-left px-4 py-4 md:px-5 md:py-5 text-brand-navy font-semibold text-sm md:text-base leading-snug focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    <span>{item.question}</span>
                    <span
                      className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-brand-blue transition-transform duration-300 ease-out ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    >
                      <ChevronIcon />
                    </span>
                  </button>
                </dt>
                <dd id={panelId} role="region" aria-labelledby={headerId} className="m-0">
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="px-4 pb-4 pt-0 md:px-5 md:pb-5 text-slate-600 text-sm md:text-[0.9375rem] leading-relaxed">
                        <p className="pt-1">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

function ChevronIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
