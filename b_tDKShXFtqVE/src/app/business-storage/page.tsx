import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import EnquiryForm from "@/components/ui/EnquiryForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { whatsappHref } from "@/lib/whatsapp";

const BUSINESS_STORAGE_WHATSAPP_HREF = whatsappHref(
  "Hi Yorstore, I'd like to discuss business storage options."
);

export const metadata: Metadata = {
  title: "Business Storage",
  description:
    "Business and commercial storage in Leeds, Harrogate and West Yorkshire: stock, equipment, archives. Flexible terms, secure storage and collection where it suits you.",
};

export default function BusinessStoragePage() {
  return (
    <>
      <PageHero
        label="Business storage"
        heading="Business Storage"
        subtext="Flexible storage for stock, tools and archives across Leeds, Harrogate and the Wharfe Valley."
        whatsappCta={{
          href: BUSINESS_STORAGE_WHATSAPP_HREF,
          label: "Discuss on WhatsApp",
        }}
        secondaryCta={{ href: "/contact#quote", label: "Get a Quote" }}
      />
      <BusinessDetails />
      <CTABand
        heading="Tell us what your business needs"
        subtext="Flexible, secure storage brought to your door — we propose options that fit volume and budget."
        primaryLabel="Get in touch"
      />
      <BusinessStorageFaqSection />
      <EnquirySection />
    </>
  );
}

const BUSINESS_STORAGE_FAQ = [
  {
    question: "What types of businesses use YORSTORE?",
    answer:
      "We support small businesses, online sellers, tradespeople, startups, and local teams who need affordable business storage without taking on a long lease. Typical customers are juggling stock storage, spare equipment, or archive boxes — and want commercial storage that feels straightforward, not corporate-heavy. If you operate in or around York and Yorkshire, we are built for that practical, day-to-day overflow.",
  },
  {
    question: "Can you collect stock, equipment or boxes from our premises?",
    answer:
      "Yes, in many cases we can arrange a collection service from your shop, studio, warehouse, or office — packed stock, business inventory storage in crates or boxes, and sensible equipment storage are all common. Tell us what you are moving, access constraints, and timing; we will confirm what works and schedule pickup so your team stays focused on customers, not loading bays.",
  },
  {
    question: "Is business storage flexible if our storage needs change?",
    answer:
      "Flexible storage is the point. Seasonal spikes, slower quarters, or a sudden office move all change how much space you need — we adjust where it is practical, with clear communication rather than rigid contracts. Whether you are scaling stock storage up for a launch or winding a project down, we aim to keep commercial storage proportionate and predictable.",
  },
  {
    question: "What can we store with YORSTORE?",
    answer:
      "Most teams use us for boxed goods, palletised stock where agreed, tools, seasonal kit, marketing materials, and document archives — essentially business storage for items that belong in secure, organised commercial storage rather than a corridor. Bulky, hazardous, or highly specialised goods may need a different provider; ask upfront and we will be direct about what fits YORSTORE’s model.",
  },
  {
    question: "Why use YORSTORE instead of a traditional storage unit?",
    answer:
      "Traditional self-storage can mean van runs, lift queues, and staff time lost to moving stock — our model leans on collection service and local, human coordination so affordable business storage feels closer to an ops partner than a padlock and a postcode. For many small businesses, especially around storage in York and wider Yorkshire, that convenience plus flexible terms is the difference between storage that helps and storage that gets in the way.",
  },
] as const;

function BusinessStorageFaqSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: BUSINESS_STORAGE_FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqAccordion
        id="business-storage-faq"
        eyebrow="FAQ"
        heading="Business storage questions, answered"
        items={[...BUSINESS_STORAGE_FAQ]}
      />
    </>
  );
}

/* ── Details ────────────────────────────────── */
function BusinessDetails() {
  const useCases = [
    { title: "Stock & inventory overflow",  desc: "Keep excess stock safe and accessible without cluttering your workspace." },
    { title: "Equipment & tools",           desc: "Secure storage for tools, equipment, or seasonal business items." },
    { title: "Document & archive storage",  desc: "Keep important records safe and organised off-site." },
    { title: "Short-term flexible needs",   desc: "Refurbishing? Moving offices? We offer short-term storage with no fuss." },
  ];

  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest block mb-3">Practical & flexible</span>
            <h2 className="text-3xl font-extrabold text-brand-navy mb-4">Business storage, made simple</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Space tight at your shop, studio, or office? We support small businesses and sole traders across Yorkshire with commercial storage that stays practical — from a few crates to larger stock runs.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Tell us volume, access, and timing; we suggest an arrangement that fits. Collection service available where agreed.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {useCases.map((u) => (
              <div key={u.title} className="bg-brand-blue-xlt border border-brand-blue-lt rounded-2xl p-5">
                <span className="block w-2 h-2 rounded-full bg-brand-navy mb-3" />
                <h3 className="font-bold text-brand-navy text-sm mb-1">{u.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Enquiry ────────────────────────────────── */
function EnquirySection() {
  return (
    <section className="section-pad bg-brand-blue-xlt">
      <div className="container-site max-w-xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-brand-navy">Business storage enquiry</h2>
          <p className="text-slate-500 mt-2 text-sm">
            Tell us about your business storage needs and we'll come back with a practical solution.
          </p>
        </div>
        <div className="card shadow-md">
          <EnquiryForm subject="Business Storage Enquiry" />
        </div>
      </div>
    </section>
  );
}
