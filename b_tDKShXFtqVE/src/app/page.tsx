import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import EnquiryForm from "@/components/ui/EnquiryForm";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.brandDisplayName} | Mobile Self Storage — Leeds, Harrogate & Wharfe Valley`,
  description:
    "Flexible mobile self storage, student storage and business storage collected from your door across the Wharfe Valley, Leeds, Harrogate and wider West Yorkshire. Secure storage — you load, or we load for you.",
};

export default function HomePage() {
  return (
    <>
      <AvailabilityStrip />
      <HeroSection />
      <TrustBar />
      <HowItWorks />
      <MobileStorageFeature />
      <CrateStorageFeature />
      <WhyChooseUs />
      <QuoteSection />
    </>
  );
}

function AvailabilityStrip() {
  return (
    <section className="bg-brand-blue-xlt border-b border-brand-blue-lt">
      <div className="container-site py-2.5">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center">
          <p className="text-sm font-medium text-brand-navy">
            <Link href="/student-storage" className="text-brand-blue hover:underline">
              Student storage
            </Link>{" "}
            for Leeds, Headingley, Horsforth and university accommodation, plus{" "}
            <Link href="/business-storage" className="text-brand-blue hover:underline">
              business storage
            </Link>{" "}
            — covering the Wharfe Valley, Leeds, Harrogate and the wider area. Full{" "}
            <span className="whitespace-nowrap">mobile self storage</span> trailer service{" "}
            <span className="font-semibold text-brand-blue">launching soon</span> —{" "}
            <Link href="/contact#quote" className="font-semibold text-brand-blue hover:underline">
              enquire now for early access
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   HERO — dark navy, bold headline, strong CTAs
───────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative bg-brand-navy overflow-hidden">
      {/* Subtle geometric background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-brand-blue/10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-brand-blue-mid/5" />
      </div>

      <div className="relative container-site py-14 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: copy */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-300 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
              Mobile Storage Specialists
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Storage that<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
                comes to you.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed mb-8 max-w-lg">
              Storage brought to your door. You load, or we can load it for you. Convenient,
              flexible and secure — covering the Wharfe Valley, Leeds, Harrogate and the wider area.
            </p>
            <p className="text-sm text-blue-200/70 mb-5 max-w-lg">
              Trailer-based mobile self storage launching soon. Storage made simple.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/contact#quote"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-navy font-bold text-base px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href={SITE_CONFIG.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-xl hover:bg-white/20 transition-colors"
              >
                <PhoneIcon />
                {SITE_CONFIG.phone}
              </a>
            </div>

            <p className="text-xs sm:text-sm text-blue-200/50 font-medium tracking-wide">
              No obligation · Quick response · Friendly, reliable team
            </p>
          </div>

          {/* Right: hero image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-transparent flex flex-col items-center justify-center text-center p-8 overflow-hidden">
              <Image
                src="/images/HPH.png"
                alt="Mobile self storage unit at your door — Leeds, Harrogate and Wharfe Valley"
                fill
                className="object-contain scale-110"
                style={{ objectPosition: "center 90%" }}
                priority
              />
              {/* Corner label */}
              <div className="absolute bottom-4 left-4 z-10 bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl px-3 py-2">
                <p className="text-xs font-semibold text-white">We come to you</p>
                <p className="text-xs text-blue-200/70">Leeds, Harrogate &amp; beyond</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blue sweep accent strip — echoes the logo */}
      <div className="h-1 bg-gradient-to-r from-brand-blue-mid via-blue-400 to-brand-blue" />
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   TRUST BAR
───────────────────────────────────────────────────────── */
function TrustBar() {
  const items = [
    { icon: <TruckIcon />,  label: "We Come to You" },
    { icon: <LockIcon />,   label: "Secure Storage" },
    { icon: <PoundIcon />,  label: "Cost Effective" },
    { icon: <FlexIconSm />, label: "Flexible Terms" },
  ];

  return (
    <section className="bg-white border-b border-slate-100">
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-3 py-5 px-4"
            >
              <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-brand-blue-xlt flex items-center justify-center text-brand-blue">
                {item.icon}
              </span>
              <span className="text-sm font-semibold text-slate-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   HOW IT WORKS — dark section for premium feel
───────────────────────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Get in Touch",
      benefit: "Quick & Easy",
      desc: "Call or send an enquiry and tell us what you need.",
    },
    {
      num: "02",
      title: "We Deliver to Your Door",
      benefit: "Let the Storage Come to You",
      desc: "We bring the storage unit to your home, business or accommodation at a convenient time.",
    },
    {
      num: "03",
      title: "You Load — or We Can Do it For You",
      benefit: "Your Choice",
      desc: "Load at your own pace or let our experienced team handle everything.",
    },
    {
      num: "04",
      title: "Safe & Secure Storage",
      benefit: "We Store it For You",
      desc: "We collect and securely store your belongings, then return them whenever you need them back.",
    },
  ];

  return (
    <section className="bg-brand-navy section-pad">
      <div className="container-site">
        <div className="text-center mb-10 md:mb-12">
          <span className="eyebrow text-blue-400 mb-3 block">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            How it Works
          </h2>
          <p className="text-blue-200/70 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            From initial enquiry to secure storage. Storage made simple with Yorstore.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative bg-white/8 border border-white/10 rounded-2xl p-5 md:p-6 hover:border-white/20 transition-colors"
            >
              {/* Step number */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                <span className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {step.num}
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-blue-400 bg-blue-400/10 border border-blue-400/20 px-2.5 py-1 rounded-full leading-snug max-w-full w-fit">
                  {step.benefit}
                </span>
              </div>

              <h3 className="font-bold text-white text-[15px] md:text-base mb-2 leading-snug">{step.title}</h3>
              <p className="text-sm text-blue-200/60 leading-relaxed">{step.desc}</p>

              {/* Connector arrow for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-11 -right-3 w-6 items-center justify-center z-10">
                  <ChevronRight />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   MOBILE STORAGE FEATURE — split image + text
───────────────────────────────────────────────────────── */
function MobileStorageFeature() {
  const points = [
    "Mobile self storage that comes to you",
    "Storage unit delivered to your door",
    "Load at your convenience — or we can load it for you",
    "We collect and securely store everything",
    "Re-delivery when you need it back",
  ];

  return (
    <section className="section-pad bg-[#f4f7fd]">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image placeholder */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-3xl bg-[#f4f7fd] flex flex-col items-center justify-center text-center p-5 md:p-6 relative overflow-hidden">
              <div className="relative z-0 w-full h-full min-h-[220px]">
                <Image
                  src="/images/Trailer2TBC.png"
                  alt="Mobile self storage trailer — Leeds, Harrogate and Wharfe Valley"
                  fill
                  className="object-contain object-center mix-blend-multiply scale-[1.28]"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-3 leading-tight">
              Mobile Self Storage
            </h2>
            <p className="text-lg font-semibold text-brand-blue mb-6">Storage made simple.</p>

            <ul className="flex flex-col gap-3 mb-8">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center">
                    <CheckIcon />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/mobile-self-storage" className="btn-primary text-sm px-6 py-3">
                Find out more
              </Link>
              <Link href="/contact#quote" className="btn-outline text-sm px-6 py-3">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   CRATE STORAGE FEATURE — reversed layout, light blue bg
───────────────────────────────────────────────────────── */
function CrateStorageFeature() {
  const points = [
    "Robust crates stacked and stored securely",
    "Often better value than a full self-storage unit",
    "Secure facility storage — not a spare garage or shed",
    "Re-delivery available whenever needed",
  ];

  return (
    <section className="section-pad bg-brand-blue-xlt">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Content */}
          <div>
            <span className="eyebrow text-brand-blue mb-3 block">Secure &amp; cost-effective</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 leading-tight">
              Containerised Crate Storage —<br />
              practical and affordable
            </h2>
            <p className="text-slate-600 leading-relaxed mb-7 text-sm md:text-base">
              Belongings packed, stacked and stored securely at the Yorstore facility. Ideal when regular
              access is not required — often better value than traditional self-storage.
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center">
                    <CheckIcon />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/crate-storage" className="btn-primary text-sm px-6 py-3">
                Find out more
              </Link>
              <Link href="/contact#quote" className="btn-outline text-sm px-6 py-3">
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Image placeholder */}
          <div>
            <div className="aspect-[4/3] rounded-3xl bg-brand-blue-xlt flex flex-col items-center justify-center text-center p-5 md:p-6 relative overflow-hidden">
              <div className="relative z-0 w-full h-full min-h-[220px]">
                <Image
                  src="/images/TrailerTBC.png"
                  alt="Crate storage — Leeds, Harrogate and Wharfe Valley"
                  fill
                  className="object-contain object-center mix-blend-multiply scale-[1.28]"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   WHY CHOOSE US — dark section
───────────────────────────────────────────────────────── */
function WhyChooseUs() {
  const reasons = [
    {
      icon: <ShieldIcon />,
      title: "Safe & Secure",
      desc: "Your belongings are handled with care and stored securely.",
    },
    {
      icon: <TruckIconLg />,
      title: "Collection & Delivery",
      desc: "Flexible collection and return times that work around you.",
    },
    {
      icon: <FlexIcon />,
      title: "Flexible Arrangements",
      desc: "Short or long-term storage with flexible terms.",
    },
    {
      icon: <PeopleIconLg />,
      title: "Local, Experienced Team",
      desc: "Friendly, reliable people making storage simple.",
    },
  ];

  return (
    <section className="section-pad bg-brand-navy">
      <div className="container-site">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Why Yorstore</h2>
          <p className="text-blue-200/70 text-sm md:text-base">Storage made simple.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white/8 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
            >
              <span className="block text-blue-300 mb-4">{r.icon}</span>
              <h3 className="font-bold text-white mb-2">{r.title}</h3>
              <p className="text-sm text-blue-200/60 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact#quote" className="btn-white text-sm px-8 py-3.5">
            Get a Free Quote Today
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   QUOTE SECTION — clean light bg
───────────────────────────────────────────────────────── */
function QuoteSection() {
  return (
    <section id="quote" className="section-pad bg-brand-blue-xlt">
      <div className="container-site">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10">
            <span className="eyebrow text-brand-blue mb-3 block text-center">Get started</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 text-center">
              Get a free quote
            </h2>
            <div className="max-w-xl mx-auto space-y-3">
              <p className="text-slate-600 text-sm md:text-base leading-relaxed text-center md:text-left">
                Flexible, secure storage brought to your door. You load — or we can load it for you.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed text-center md:text-left">
                Mobile self storage, crate storage and business storage — Wharfe Valley, Leeds,
                Harrogate and wider West Yorkshire. Fast replies, no pressure to commit.
              </p>
              <p className="text-xs text-slate-400 tracking-wide text-center md:text-right pt-1">
                Convenient • Flexible • Secure
              </p>
            </div>
          </div>

          <div className="card shadow-md">
            <EnquiryForm subject="Website Quote Request" />
          </div>

          <p className="text-center text-sm text-slate-400 mt-6">
            Prefer to talk? Call{" "}
            <a href={SITE_CONFIG.phoneHref} className="text-brand-blue font-semibold hover:underline">
              {SITE_CONFIG.phone}
            </a>{" "}
            or email{" "}
            <a href={SITE_CONFIG.emailHref} className="text-brand-blue font-semibold hover:underline">
              {SITE_CONFIG.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   ICONS
───────────────────────────────────────────────────────── */
function PhoneIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
    </svg>
  );
}
function TruckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 4v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  );
}
function TruckIconLg() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 4v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  );
}
function LockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
    </svg>
  );
}
function PeopleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
    </svg>
  );
}
function PeopleIconLg() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}
function PoundIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M9 8h3a3 3 0 010 6H9v2h6"/>
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}
function FlexIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/>
    </svg>
  );
}
function FlexIconSm() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 014-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 01-4 4H3" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );
}
