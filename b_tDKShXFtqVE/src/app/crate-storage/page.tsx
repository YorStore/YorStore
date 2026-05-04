import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import EnquiryForm from "@/components/ui/EnquiryForm";
import CrateStorageCarousel from "@/components/ui/CrateStorageCarousel";

export const metadata: Metadata = {
  title: "Crate Storage",
  description:
    "Secure, cost-efficient crate storage from YORSTORE. Your belongings stored safely in robust crates — practical, affordable, and flexible across Yorkshire.",
};

export default function CrateStoragePage() {
  return (
    <>
      <PageHero
        label="Crate storage"
        heading="Secure crate storage — simple and cost-effective"
        subtext="We store your goods in robust, secure crates at our facility. A practical, affordable option that keeps your belongings safe and well-organised."
        ctaLabel="Enquire Now"
        ctaHref="/contact#quote"
      />
      <WhatIsCrateStorage />
      <WhatFitsInACrate />
      <CrateBenefits />
      <CTABand
        heading="Want to know more about crate storage?"
        subtext="Get in touch — we'll explain the options and give you a no-obligation quote."
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
              Crate storage is a practical, cost-efficient way to store your belongings. Your items are packed
              into secure, stackable crates which we then store safely in our facility.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              It's a great option if you don't need regular access to your things — and it can work out
              significantly cheaper than a traditional self-storage unit.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              When you need your belongings back, just let us know and we'll arrange a convenient time to return them.
            </p>
            <Link href="/contact#quote" className="btn-primary px-8 py-3.5">Get a Quote</Link>
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
              Here&apos;s what typically fits in one YORSTORE crate
            </p>
            <p className="text-slate-600 leading-relaxed mb-7">
              Our storage crates are designed for everyday household items, small furniture and boxed belongings.
              If you&apos;re unsure what will fit, just ask — we&apos;ll help you choose the right option.
            </p>
            <p className="text-slate-600 mb-4">See exactly what fits in a YORSTORE crate</p>
            <Link href="/#enquiry-form" className="btn-primary px-8 py-3.5">
              Starting from £15 a week
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="aspect-square w-full max-w-full flex items-center justify-center text-center">
              <div className="w-full max-w-[90%] mx-auto flex items-center justify-center">
                <Image
                  src="/images/Whatfits.png"
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
    { title: "Cost-efficient",     desc: "Crate storage is often more affordable than renting a full self-storage unit." },
    { title: "Secure",             desc: "Robust crates keep your items protected and safely stored at our facility." },
    { title: "Organised",          desc: "Items are packed and inventoried so you always know what's where." },
    { title: "Flexible duration",  desc: "Store for as long as you need — short-term or ongoing, no long contracts." },
    { title: "Easy retrieval",     desc: "Just let us know when you need something back and we'll arrange it." },
    { title: "No van hire needed", desc: "We handle the collection — no van rental, no heavy lifting headaches." },
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
