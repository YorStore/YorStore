import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import EnquiryForm from "@/components/ui/EnquiryForm";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Student & Box Storage",
  description:
    "Affordable student and box storage from YORSTORE. Perfect for students at end of term or anyone with a small volume of items to store. Flexible and low-cost.",
};

export default function StudentStoragePage() {
  return (
    <>
      <PageHero
        label="Student storage"
        heading="We collect from your door. You skip the van and the storage unit."
        subtext="Box-based student storage with clear weekly rates. We come to you — perfect for summer, move-out week, or a few months away."
        bullets={[
          "Pickup at your hall, house, or flat — no self-storage runarounds.",
          "Simple per-box pricing — premium feel, student-sensible numbers.",
          "Built for term-time chaos: travel, switching flats, or heading home.",
        ]}
        pricingLine="Starting from £2.50 per box per week"
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
      <StudentStorageFaqSection />
      <EnquirySection />
    </>
  );
}

const STUDENT_STORAGE_FAQ = [
  {
    question: "How does student storage work?",
    answer:
      "YORSTORE offers box-based student storage built around term dates and hand-in stress. You tell us what needs keeping, we arrange storage collected from your door, and your items stay secure until you want them back. It is a calm alternative to hauling boxes to a facility or juggling keys and lift slots during university storage crunch time.",
  },
  {
    question: "Do you collect my boxes from my house or accommodation?",
    answer:
      "Yes. We collect from private homes and student accommodation across Yorkshire, including York and nearby university towns. Whether you are in halls, a shared house, or finishing a placement further afield, we agree a pickup window that works — so your box storage starts without a frantic last-mile trip.",
  },
  {
    question: "How much does student storage cost?",
    answer:
      "Affordable student storage here is priced in a simple, per-box way so you can budget in advance. Your quote reflects how many boxes you store and how long you need them held — no cryptic facility add-ons. Many students find it compares well to self-storage when they only have a modest volume between moves.",
  },
  {
    question: "Can I store things over summer?",
    answer:
      "Summer student storage is one of our most common requests. From move-out day to the moment you arrive back — or head to a new city — we keep your belongings safe while you work, travel, or decompress at home. Share your dates when you enquire and we will shape flexible storage around the academic calendar.",
  },
  {
    question: "What can I store?",
    answer:
      "Typical student storage includes packed boxes, suitcases, small furniture, sports kit, and instruments that fit a sensible crate footprint. If something is oversized, fragile, or valuable, message us first — we will give honest guidance so collection day feels predictable, not improvised.",
  },
  {
    question: "Can you provide boxes, tape and packing materials?",
    answer:
      "Yes. For many students we can supply boxes and packing materials — tape, labels, and other basics — ahead of your collection service. Box delivery can be arranged straight to your accommodation or shared house, so you are not hunting supplies the night before hand-in. It is one less job when you are moving home from university or clearing a flat between terms, and it keeps affordable student storage feeling genuinely low-effort from start to finish.",
  },
  {
    question: "Do I need to hire a van or visit a storage unit?",
    answer:
      "Usually not. Because storage is collected from your door, there is often no need to hire a van, borrow a car, or spend an afternoon at a remote self-storage site. You pack, we collect, and you get back to exams, goodbyes, or the train — without turning moving day into a logistics project.",
  },
  {
    question: "How long can I store my belongings for?",
    answer:
      "We offer flexible storage from a few weeks through a full summer or longer if plans shift — gap years, retakes, and last-minute tenancy changes happen. Tell us what you think you need up front; if dates move, a quick message is usually enough for us to adjust your student storage timeline sensibly.",
  },
  {
    question: "Can you return my items to a different address?",
    answer:
      "Often yes. If you are student moving home first, then into a new flat — or switching from York to another city — we can usually deliver to a different drop-off than pickup. Flag it when you book and again when you are ready for return; clear timing helps us route your university storage delivery without fuss.",
  },
] as const;

function StudentStorageFaqSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: STUDENT_STORAGE_FAQ.map((item) => ({
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
        id="student-storage-faq"
        eyebrow="FAQ"
        heading="Student storage questions, answered"
        items={[...STUDENT_STORAGE_FAQ]}
      />
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
