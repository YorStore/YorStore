import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import EnquiryForm from "@/components/ui/EnquiryForm";

export const metadata: Metadata = {
  title: "Mobile Self Storage",
  description:
    "YORSTORE mobile self storage — we deliver a storage unit to your door across Yorkshire. Load it yourself or let us load it for you. Flexible, secure, and local.",
};

export default function MobileSelfStoragePage() {
  return (
    <>
      <PageHero
        label="Our main service"
        heading="Mobile Self Storage"
        subtext="We bring the storage unit to your door. You choose how involved you want to be — load it yourself or let our team take care of everything."
        ctaLabel="Get a Free Quote"
        ctaHref="/contact#quote"
      />
      <HowMobileWorks />
      <LoadingOptions />
      <WhoIsItFor />
      <CTABand
        heading="Interested in mobile self storage?"
        subtext="Get in touch and we'll talk you through the options — no jargon, no pressure."
      />
      <EnquirySection />
    </>
  );
}

/* ── How it works ───────────────────────────── */
function HowMobileWorks() {
  const steps = [
    { num: "01", title: "Get in touch",        desc: "Call or send an enquiry. Tell us what you need to store, your location, and when." },
    { num: "02", title: "We deliver",          desc: "We bring a storage unit or trailer to your property at a time that suits you." },
    { num: "03", title: "You load (or we do)", desc: "Take your time loading at home, or choose our loading service — completely up to you." },
    { num: "04", title: "We store it safely",  desc: "We collect and store everything securely. When you need it back, just let us know." },
  ];

  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest block mb-2">Step by step</span>
          <h2 className="text-3xl font-extrabold text-brand-navy">How mobile self storage works</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div key={step.num} className="bg-brand-blue-xlt rounded-2xl p-6 border border-brand-blue-lt">
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

/* ── Two ways to use it ─────────────────────── */
function LoadingOptions() {
  return (
    <section className="section-pad bg-brand-navy">
      <div className="container-site">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest block mb-2">Fully flexible</span>
          <h2 className="text-3xl font-extrabold text-white">Two ways to use it</h2>
          <p className="text-blue-200/70 mt-2 max-w-lg mx-auto">
            Your storage, your way. We fit around you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          {/* Self load */}
          <div className="bg-white/8 border border-white/15 rounded-2xl p-7">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 7.65l1.06 1.06L12 21.23l7.77-7.77 1.06-1.06a5.4 5.4 0 00-.41-7.82z"/>
              </svg>
            </div>
            <h3 className="font-extrabold text-white text-lg mb-3">You load it</h3>
            <p className="text-blue-200/70 text-sm leading-relaxed">
              We leave the unit at your property and you pack it yourself — at your own pace, in your own time.
              Perfect for decluttering, moving, or longer storage projects.
            </p>
          </div>

          {/* We load — highlighted */}
          <div className="bg-brand-blue border border-white/20 rounded-2xl p-7 relative">
            <span className="absolute top-4 right-4 text-xs bg-white/20 text-white px-2.5 py-1 rounded-full font-semibold">Popular</span>
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 4v4h-7V8z"/>
                <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            <h3 className="font-extrabold text-white text-lg mb-3">We load it</h3>
            <p className="text-blue-100/80 text-sm leading-relaxed">
              Let our team handle the loading for you. Great if you're short on time, need help with heavy items,
              or simply want a completely hands-off experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Who is it for ──────────────────────────── */
function WhoIsItFor() {
  const audience = [
    "Moving home and need temporary storage",
    "Decluttering or renovating",
    "Students needing end-of-year storage",
    "Downsizing and need extra space",
    "Between properties and need flexibility",
    "Small businesses with overflow stock",
  ];

  return (
    <section className="section-pad bg-white">
      <div className="container-site max-w-3xl">
        <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest block mb-3">Ideal for</span>
        <h2 className="text-3xl font-extrabold text-brand-navy mb-4">Who is it for?</h2>
        <p className="text-slate-500 mb-8 leading-relaxed">Mobile self storage works for all kinds of situations:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {audience.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-slate-700 font-medium bg-brand-blue-xlt border border-brand-blue-lt rounded-xl p-4">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-navy flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
        <Link href="/contact#quote" className="btn-primary px-8 py-3.5">Get a Free Quote</Link>
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
          <h2 className="text-2xl font-extrabold text-brand-navy">Ask us about mobile self storage</h2>
          <p className="text-slate-500 mt-2 text-sm">Quick response — we're a friendly local team.</p>
        </div>
        <div className="card shadow-md">
          <EnquiryForm subject="Mobile Self Storage Enquiry" />
        </div>
      </div>
    </section>
  );
}
