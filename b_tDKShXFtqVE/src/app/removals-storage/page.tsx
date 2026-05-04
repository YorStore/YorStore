import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import EnquiryForm from "@/components/ui/EnquiryForm";

export const metadata: Metadata = {
  title: "Removals & Storage",
  description:
    "Full house moves into storage with YORSTORE and Yorkshire Rhodes Removals — loading, transport, secure storage, and return delivery across Yorkshire.",
};

export default function RemovalsStoragePage() {
  return (
    <>
      <PageHero
        label="Removals & storage"
        heading="A complete house move into storage"
        subtext={`Need more than storage? Through our sister company, Yorkshire Rhodes Removals, we can help with the full move — from loading at your home, transporting your belongings, placing them into secure storage, and returning them when you're ready.`}
        ctaLabel="Get a removals & storage quote"
        ctaHref="/contact#quote"
      />
      <IdealSection />
      <HowItWorksSection />
      <VanStressSection />
      <CTABand
        heading="Questions about removals and storage?"
        subtext="Tell us your situation — we'll explain how we can help, with no obligation."
        primaryLabel="Get in Touch"
      />
      <EnquirySection />
    </>
  );
}

function IdealSection() {
  const benefits = [
    { title: "Full loading support", desc: "Our team can handle the heavy lifting so you don't have to." },
    { title: "Transport arranged", desc: "Collection and delivery coordinated as part of one service." },
    { title: "Secure crate storage", desc: "Your belongings stored safely at our facility until you need them." },
    { title: "Return delivery when needed", desc: "We bring everything back when you're settled and ready." },
  ];

  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest block mb-3">
              When it makes sense
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy mb-4">
              Ideal for house moves, delays and downsizing
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Whether you&apos;re between properties, waiting for keys, renovating, downsizing, or need a
              temporary place for your belongings, we can make the whole process easier.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="bg-brand-blue-xlt border border-brand-blue-lt rounded-2xl p-5">
                  <span className="block w-2 h-2 rounded-full bg-brand-navy mb-3" />
                  <h3 className="font-bold text-brand-navy text-sm mb-1">{b.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:sticky lg:top-28">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#0f3060] to-[#1d5baa] border border-brand-blue-lt flex flex-col items-center justify-center text-center p-8">
              <p className="text-white font-semibold mb-1">Illustration coming soon</p>
              <p className="text-blue-200/80 text-sm max-w-[14rem]">
                Removals &amp; storage — Yorkshire Rhodes Removals &amp; YORSTORE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    { num: "01", title: "Tell us what you're moving", desc: "Share what you need to move, your timeline, and where you're headed." },
    { num: "02", title: "We arrange collection and loading", desc: "Yorkshire Rhodes Removals can load and transport as part of the plan." },
    { num: "03", title: "Your items go into secure storage", desc: "Everything is placed into secure storage with YORSTORE until you need it." },
    { num: "04", title: "We return them when you're ready", desc: "When you're set up in your new place, we arrange delivery back to you." },
  ];

  return (
    <section className="section-pad bg-brand-blue-xlt border-t border-slate-100">
      <div className="container-site">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest block mb-2">Simple steps</span>
          <h2 className="text-3xl font-extrabold text-brand-navy">How it works</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div key={step.num} className="bg-white rounded-2xl p-6 border border-brand-blue-lt shadow-sm">
              <div className="w-10 h-10 rounded-full bg-brand-navy text-white text-sm font-bold flex items-center justify-center mb-4">
                {step.num}
              </div>
              <h3 className="font-bold text-brand-navy mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VanStressSection() {
  return (
    <section className="section-pad bg-brand-navy">
      <div className="container-site max-w-3xl mx-auto text-center">
        <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest block mb-3">All in one</span>
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Storage without the stress of hiring a van
        </h2>
        <p className="text-blue-200/70 leading-relaxed mb-8">
          You don&apos;t need to organise a van, lift heavy furniture, or coordinate multiple suppliers. We can
          help bring removals and storage together in one simple service.
        </p>
        <Link href="/contact#quote" className="btn-white px-8 py-3.5 inline-flex">
          Ask about removals &amp; storage
        </Link>
      </div>
    </section>
  );
}

function EnquirySection() {
  return (
    <section className="section-pad bg-brand-blue-xlt">
      <div className="container-site max-w-xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-brand-navy">Removals &amp; storage enquiry</h2>
          <p className="text-slate-500 mt-2 text-sm">
            Tell us about your move and we&apos;ll come back with next steps — no pressure.
          </p>
        </div>
        <div className="card shadow-md">
          <EnquiryForm subject="Removals & Storage Enquiry" />
        </div>
      </div>
    </section>
  );
}
