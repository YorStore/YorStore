import type { Metadata } from "next";
import Image from "next/image";
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
        whatsapp={{
          href: "https://wa.me/447368185565?text=Hi%20I%27m%20looking%20for%20student%20storage",
          label: "Get a quick quote on WhatsApp",
          supportingText: "No forms. Just message us.",
        }}
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
  const bullets = [
    "Store boxes, bags & small furniture",
    "Flexible from a few weeks to all summer",
    "We can drop boxes off before collection",
  ];

  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 max-w-xl lg:max-w-none">
            <h2 className="text-3xl font-extrabold text-brand-navy mb-8">Storage without the stress</h2>
            <p className="text-slate-600 leading-relaxed mb-10">
              Perfect for students moving out, travelling, or between flats. Store just what you need — quickly,
              easily, and affordably.
            </p>
            <ul className="space-y-4 mb-12 text-slate-600 leading-relaxed">
              {bullets.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="text-brand-navy shrink-0" aria-hidden>
                    •
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-500 text-sm mb-3">Simple storage from just</p>
            <Link href="#student-enquiry" className="btn-primary px-8 py-3.5 inline-flex">
              £4 a week
            </Link>
          </div>

          <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end py-4 lg:py-0">
            <div className="w-full max-w-[90%] flex items-center justify-center">
              <Image
                src="/images/Student.png"
                alt="Student storage"
                width={1200}
                height={1200}
                className="w-full h-auto object-contain object-center"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
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
    <section id="student-enquiry" className="section-pad bg-brand-blue-xlt">
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
