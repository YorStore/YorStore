import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import EnquiryForm from "@/components/ui/EnquiryForm";
import CrateStorageCarousel from "@/components/ui/CrateStorageCarousel";
import { WHATSAPP_BUTTON_CORE, WhatsAppMark } from "@/components/ui/WhatsAppCta";

const CRATE_STORAGE_WHATSAPP_QUOTE_HREF = `https://wa.me/447368185565?text=${encodeURIComponent(
  "Hi Yorstore, I'd like a quote for crate storage."
)}`;

export const metadata: Metadata = {
  title: "Crate Storage",
  description:
    "Affordable crate storage in Yorkshire: robust crates, secure facility, collection service. Practical when you do not need daily access.",
};

export default function CrateStoragePage() {
  return (
    <>
      <PageHero
        label="Crate storage"
        heading="Secure crate storage — simple and cost-effective"
        subtext="Robust crates, secure facility, sensible pricing — ideal when you do not need a full self-storage unit."
        ctaLabel="Enquire Now"
        ctaHref="/contact#quote"
      />
      <WhatIsCrateStorage />
      <WhatFitsInACrate />
      <CrateBenefits />
      <CTABand
        heading="Want to know more about crate storage?"
        subtext="Message us — we explain options and quote with no obligation."
      />
      <EnquirySection />
    </>
  );
}

/* ── What is it ─────────────────────────────── */
function WhatIsCrateStorage() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest block mb-3">How it works</span>
            <h2 className="text-3xl font-extrabold text-brand-navy mb-4">What is crate storage?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Items go into secure, stackable crates at our facility — affordable crate storage when you do not need constant access, often cheaper than a full unit.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Need things back? Tell us and we arrange return — collection service available across Yorkshire.
            </p>
            <a
              href={CRATE_STORAGE_WHATSAPP_QUOTE_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={`${WHATSAPP_BUTTON_CORE} px-8 py-3.5`}
            >
              <WhatsAppMark />
              Get a Quote
            </a>
          </div>

          <div className="aspect-[4/3] rounded-3xl relative overflow-hidden">
            <CrateStorageCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── What fits in a crate ───────────────────── */
function WhatFitsInACrate() {
  return (
    <section className="section-pad bg-white border-t border-slate-100">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest block mb-3">
              Crate storage guide
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy mb-3 leading-tight">
              How much can you fit in a crate?
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6 max-w-xl">
              Typical contents of one YORSTORE crate
            </p>
            <p className="text-slate-600 leading-relaxed mb-7">
              Everyday household items, small furniture, boxed goods. Unsure on volume? Ask — we will size it honestly.
            </p>
            <p className="text-slate-600 mb-4">From £15 a week — get a tailored quote</p>
            <Link href="/contact#quote" className="btn-primary px-8 py-3.5">
              Get a quote
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="aspect-square w-full max-w-full flex items-center justify-center text-center">
              <div className="w-full max-w-[90%] mx-auto flex items-center justify-center">
                <Image
                  src="/images/WhatFits.png"
                  alt="What fits in a YORSTORE crate sketch"
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-contain object-center scale-[1.05]"
                  sizes="(min-width: 1024px) 24rem, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Benefits ───────────────────────────────── */
function CrateBenefits() {
  const benefits = [
    { title: "Cost-efficient",     desc: "Often beats a full self-storage unit when volume is modest." },
    { title: "Secure",             desc: "Robust crates in our facility — not ad-hoc garage space." },
    { title: "Organised",          desc: "Packed and inventoried so you know what is where." },
    { title: "Flexible duration",  desc: "Short jobs or long stays — no long lock-in." },
    { title: "Easy retrieval",     desc: "Request a return; we schedule delivery." },
    { title: "No van hire needed", desc: "We can collect — fewer van-and-lift days for you." },
  ];

  return (
    <section className="section-pad bg-brand-navy">
      <div className="container-site">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest block mb-2">The benefits</span>
          <h2 className="text-3xl font-extrabold text-white">Why choose crate storage?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white/8 border border-white/12 rounded-2xl p-6 hover:border-white/20 transition-colors">
              <span className="block w-2 h-2 rounded-full bg-brand-blue-mid mb-4" />
              <h3 className="font-bold text-white mb-2">{b.title}</h3>
              <p className="text-sm text-blue-200/60 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/contact#quote" className="btn-white px-8 py-3.5">Get a Crate Storage Quote</Link>
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
          <h2 className="text-2xl font-extrabold text-brand-navy">Enquire about crate storage</h2>
          <p className="text-slate-500 mt-2 text-sm">Tell us what you need and we'll get back to you promptly.</p>
        </div>
        <div className="card shadow-md">
          <EnquiryForm subject="Crate Storage Enquiry" />
        </div>
      </div>
    </section>
  );
}
