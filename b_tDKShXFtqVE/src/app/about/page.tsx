import type { Metadata } from "next";
import CTABand from "@/components/ui/CTABand";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Local Yorkshire storage: mobile self storage, crates, student and business options. Straight answers, flexible terms, collection from your door.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About YORSTORE"
        heading="Local, friendly, and straight-talking storage"
        subtext="Yorkshire storage, built on simplicity and straight answers — no jargon, no runaround."
      />
      <OurStory />
      <OurValues />
      <CTABand
        heading="Ready to get started?"
        subtext="Free, no-obligation quote — call, email, or use the contact form."
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
            YORSTORE serves Yorkshire with storage that feels simpler than the old model: flexible, affordable collection service, less time lost to vans and depots.
          </p>
          <p>
            Mobile self storage is our headline offer — a unit or trailer to your door. You self-load or we load. We also run crate storage, student and box storage, and practical options for small businesses.
          </p>
          <p>
            When you message or call, you reach people based here — not a distant call centre. Honest pricing, clear timelines, minimal hassle.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Values ─────────────────────────────────── */
function OurValues() {
  const values = [
    { title: "Convenient",   desc: "Collection from your door. Fewer van trips, fewer facility headaches." },
    { title: "Flexible",     desc: "Store short-term or long-term — terms that match real life." },
    { title: "Secure",       desc: "Safe storage, handled with care." },
    { title: "Honest",       desc: "Clear quotes, no surprise add-ons." },
    { title: "Local",        desc: "Yorkshire team, Yorkshire customers." },
    { title: "Friendly",     desc: "Easy to reach, quick to help." },
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
