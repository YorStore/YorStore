import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import EnquiryForm from "@/components/ui/EnquiryForm";

export const metadata: Metadata = {
  title: "Student & Box Storage",
  description:
    "Affordable student and box storage from YORSTORE. Perfect for students at end of term or anyone with a small volume of items to store. Flexible and low-cost.",
};

export default function StudentStoragePage() {
  return (
    <>
      <PageHero
        label="Student & box storage"
        heading="Small volume storage, big on convenience"
        subtext="Ideal for students, people between moves, or anyone with a smaller amount to store. Flexible, affordable, and easy to arrange."
        ctaLabel="Get a Quote"
        ctaHref="/contact#quote"
      />
      <StudentDetails />
      <WhoIsItFor />
      <CTABand
        heading="Need student or box storage?"
        subtext="Get in touch and we'll sort a simple, affordable solution for you."
      />
      <EnquirySection />
    </>
  );
}

/* ── Main content ───────────────────────────── */
function StudentDetails() {
  const points = [
    "Perfect for end-of-term storage when you can't take everything home",
    "Ideal for boxes, bags, small furniture items, and bikes",
    "Flexible rental periods — store over summer or just a few weeks",
    "Affordable pricing for smaller volumes of items",
    "Safe, secure storage — not just a garden shed",
    "Easy to arrange — just call or send a message",
  ];

  return (
    <section className="section-pad bg-white">
      <div className="container-site max-w-3xl">
        <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest block mb-3">Perfect for</span>
        <h2 className="text-3xl font-extrabold text-brand-navy mb-4">Storage without the stress</h2>
        <p className="text-slate-600 leading-relaxed mb-8">
          Moving out of student accommodation? Going travelling? Between flats? Our student and box storage
          service is designed for exactly these moments — when you don't have a full house-worth to store,
          just a collection of important things that need somewhere safe.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-3 text-sm text-slate-700 font-medium bg-brand-blue-xlt border border-brand-blue-lt rounded-xl p-4">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-navy flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </span>
              {p}
            </li>
          ))}
        </ul>
        <Link href="/contact#quote" className="btn-primary px-8 py-3.5">Get a Quote</Link>
      </div>
    </section>
  );
}

/* ── Who is it for ──────────────────────────── */
function WhoIsItFor() {
  const groups = [
    { title: "Students",            desc: "End-of-term or end-of-year storage. Keep your things safe over summer without dragging them home." },
    { title: "Young professionals", desc: "Between renting and buying, or moving cities? A simple, flexible solution." },
    { title: "Travellers",          desc: "Going away for a few months? Keep your belongings safe while you're on the move." },
    { title: "Declutterers",        desc: "A few boxes of things you can't quite part with but don't have room for right now." },
  ];

  return (
    <section className="section-pad bg-brand-navy">
      <div className="container-site">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest block mb-2">Who uses it</span>
          <h2 className="text-3xl font-extrabold text-white">Who is it for?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {groups.map((g) => (
            <div key={g.title} className="bg-white/8 border border-white/12 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-2">{g.title}</h3>
              <p className="text-sm text-blue-200/60 leading-relaxed">{g.desc}</p>
            </div>
          ))}
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
          <h2 className="text-2xl font-extrabold text-brand-navy">Get in touch about student storage</h2>
          <p className="text-slate-500 mt-2 text-sm">Tell us what you need and we'll come back with a straightforward quote.</p>
        </div>
        <div className="card shadow-md">
          <EnquiryForm subject="Student / Box Storage Enquiry" />
        </div>
      </div>
    </section>
  );
}
