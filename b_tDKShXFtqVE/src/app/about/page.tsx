import type { Metadata } from "next";
import CTABand from "@/components/ui/CTABand";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "YORSTORE is a local Yorkshire storage business. Flexible, friendly, and secure mobile self storage and crate storage. Find out more about who we are.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About YORSTORE"
        heading="Local, friendly, and straight-talking storage"
        subtext="We're a Yorkshire-based storage business built on keeping things simple, honest, and helpful. No fuss. No jargon. Just good storage."
      />
      <OurStory />
      <OurValues />
      <CTABand
        heading="Ready to get started?"
        subtext="We'd love to help — get in touch today for a free, no-obligation quote."
      />
    </>
  );
}

/* ── Story ──────────────────────────────────── */
function OurStory() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site max-w-3xl">
        <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest block mb-3">Who we are</span>
        <h2 className="text-3xl font-extrabold text-brand-navy mb-6">A local team with a simple mission</h2>
        <div className="space-y-5 text-slate-600 leading-relaxed">
          <p>
            YORSTORE is a local storage business serving customers across Yorkshire. We started because we
            believed storage should be easier — more flexible, more convenient, and less of a headache than
            the traditional model.
          </p>
          <p>
            Our main focus is mobile self storage: we bring a storage unit or trailer directly to your door,
            so you don't have to hire a van or make multiple trips to a storage facility. You load it yourself,
            or we load it for you — whichever works best.
          </p>
          <p>
            We also offer crate storage, student and box storage, and flexible solutions for small businesses.
            Whatever you need to store, we'll find a practical, cost-effective way to help.
          </p>
          <p>
            When you get in touch, you're talking to real people who live and work in Yorkshire — not a call
            centre. We keep things honest, straightforward, and hassle-free.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Values ─────────────────────────────────── */
function OurValues() {
  const values = [
    { title: "Convenient",   desc: "We come to you. No van hire, no trips to a facility, no awkward logistics." },
    { title: "Flexible",     desc: "No rigid contracts. Store for as long — or as short — as you need." },
    { title: "Secure",       desc: "Your belongings are stored safely. We take that responsibility seriously." },
    { title: "Honest",       desc: "Clear pricing, straight answers, and no unexpected surprises." },
    { title: "Local",        desc: "We're a Yorkshire business, serving Yorkshire customers." },
    { title: "Friendly",     desc: "Approachable, easy to talk to, and always happy to help." },
  ];

  return (
    <section className="section-pad bg-brand-navy">
      <div className="container-site">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest block mb-2">Our principles</span>
          <h2 className="text-3xl font-extrabold text-white">What we stand for</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v) => (
            <div key={v.title} className="bg-white/8 border border-white/12 rounded-2xl p-6 hover:border-white/20 transition-colors">
              <span className="block w-2 h-2 rounded-full bg-brand-blue-mid mb-4" />
              <h3 className="font-bold text-white mb-2">{v.title}</h3>
              <p className="text-sm text-blue-200/60 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
