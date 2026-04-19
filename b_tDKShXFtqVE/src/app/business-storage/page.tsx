import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import EnquiryForm from "@/components/ui/EnquiryForm";

export const metadata: Metadata = {
  title: "Business Storage",
  description:
    "Flexible business storage solutions from YORSTORE across Yorkshire. We can store a wide range of items for businesses — get in touch to discuss your requirements.",
};

export default function BusinessStoragePage() {
  return (
    <>
      <PageHero
        label="Business storage"
        heading="Flexible storage for businesses of all sizes"
        subtext="Need extra space for stock, equipment, or documents? We offer practical, flexible storage for businesses across Yorkshire — just get in touch."
        ctaLabel="Discuss Your Requirements"
        ctaHref="/contact#quote"
      />
      <BusinessDetails />
      <CTABand
        heading="Tell us what your business needs"
        subtext="Every business is different. Get in touch and we'll work out the best solution for you."
        primaryLabel="Get in Touch"
      />
      <EnquirySection />
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
              Running out of space at your business premises? We work with small businesses and sole traders
              across Yorkshire to provide straightforward, flexible storage solutions.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Whether you need to store a few boxes or a larger volume of goods, we'll work with you to find
              a practical arrangement that fits your needs and your budget.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Just get in touch and tell us what you're looking for — we'll take it from there.
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
