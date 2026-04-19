import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import EnquiryForm from "@/components/ui/EnquiryForm";

export const metadata: Metadata = {
  title: "YORSTORE | Mobile Self Storage Yorkshire",
  description: SITE_CONFIG.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <HowItWorks />
      <MobileStorageFeature />
      <CrateStorageFeature />
      <ServicesGrid />
      <WhyChooseUs />
      <QuoteSection />
    </>
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

      <div className="relative container-site py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: copy */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-300 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
              Yorkshire's Mobile Storage Specialists
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Storage that<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
                comes to you.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed mb-8 max-w-lg">
              We deliver a storage unit straight to your door.
              You load it yourself — or we can load it for you.
              Flexible, secure, and completely local.
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

            <p className="text-sm text-blue-200/60 font-medium">
              No obligation &nbsp;·&nbsp; Quick response &nbsp;·&nbsp; Local team
            </p>
          </div>

          {/* Right: hero image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#1a3d78] to-[#0d2552] border border-white/10 flex flex-col items-center justify-center text-center p-8 overflow-hidden">
              {/* Decorative inner glow */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-64 h-64 rounded-full bg-brand-blue-mid" />
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-brand-blue/40 border border-white/20 flex items-center justify-center mx-auto mb-5">
                  <TruckIconLg />
                </div>
                <p className="text-white font-semibold mb-1">Photo coming soon</p>
                <p className="text-blue-300/70 text-sm">Mobile storage unit at your door</p>
              </div>
              {/* Corner label */}
              <div className="absolute bottom-4 left-4 bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl px-3 py-2">
                <p className="text-xs font-semibold text-white">We come to you</p>
                <p className="text-xs text-blue-200/70">Yorkshire-wide delivery</p>
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
    { icon: <TruckIcon />,    label: "We Come to You"      },
    { icon: <LockIcon />,     label: "Secure Storage"      },
    { icon: <PeopleIcon />,   label: "Local & Friendly"    },
    { icon: <PoundIcon />,    label: "Competitive Pricing" },
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
      title: "Get in touch",
      benefit: "Quick & easy",
      desc: "Call or send a short enquiry. Tell us what you need — we'll sort the rest.",
    },
    {
      num: "02",
      title: "We deliver to your door",
      benefit: "No van hire needed",
      desc: "We bring the storage unit or trailer straight to your property at a time that suits you.",
    },
    {
      num: "03",
      title: "You load — or we do",
      benefit: "Your choice",
      desc: "Take your time loading yourself, or let our team handle it. Completely flexible.",
    },
    {
      num: "04",
      title: "Safe & secure storage",
      benefit: "Fully insured",
      desc: "We collect and store everything securely. Retrieval whenever you need it.",
    },
  ];

  return (
    <section className="bg-brand-navy section-pad">
      <div className="container-site">
        <div className="text-center mb-14">
          <span className="eyebrow text-blue-400 mb-3 block">Simple process</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            How it works
          </h2>
          <p className="text-blue-200/70 max-w-xl mx-auto">
            Four simple steps from enquiry to secure storage — no complicated forms, no awkward logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative bg-white/8 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
            >
              {/* Step number */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {step.num}
                </span>
                <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 border border-blue-400/20 px-2.5 py-1 rounded-full">
                  {step.benefit}
                </span>
              </div>

              <h3 className="font-bold text-white text-base mb-2">{step.title}</h3>
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
    "We deliver a storage unit or trailer directly to your property",
    "Load it yourself at your own pace — day or evening",
    "Or choose our loading service and we handle everything",
    "We collect and store it securely. Retrieval any time you need",
  ];

  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image placeholder */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#0d2552] to-[#1a4fa0] flex flex-col items-center justify-center text-center p-10 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white/10 border border-white/20 rounded-xl px-3 py-1.5">
                <span className="text-xs font-bold text-white">Most popular</span>
              </div>
              <div className="w-20 h-20 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-5">
                <TruckIconLg />
              </div>
              <p className="text-white font-semibold mb-1">Photo coming soon</p>
              <p className="text-blue-200/70 text-sm">Trailer at customer's property</p>

              {/* Two mini stat pills */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                <div className="flex-1 bg-white/10 border border-white/20 rounded-xl p-2.5 text-center">
                  <p className="text-white text-xs font-bold">We deliver</p>
                  <p className="text-blue-200/70 text-xs">to your door</p>
                </div>
                <div className="flex-1 bg-white/10 border border-white/20 rounded-xl p-2.5 text-center">
                  <p className="text-white text-xs font-bold">You choose</p>
                  <p className="text-blue-200/70 text-xs">load or we load</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="eyebrow text-brand-blue mb-3 block">Our headline service</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 leading-tight">
              Mobile Self Storage —<br />storage made easy
            </h2>
            <p className="text-slate-600 leading-relaxed mb-7">
              Forget hiring a van and driving to a facility. With YORSTORE, the storage comes to you.
              We deliver a unit straight to your door — you choose how involved you want to be.
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
    "Robust, stackable storage crates for your belongings",
    "Cost-efficient — often cheaper than a full self-storage unit",
    "Secure facility storage — not just a garage",
    "Easy retrieval — just let us know when you need things back",
  ];

  return (
    <section className="section-pad bg-brand-blue-xlt">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Content */}
          <div>
            <span className="eyebrow text-brand-blue mb-3 block">Secure & cost-effective</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 leading-tight">
              Crate Storage —<br />practical and affordable
            </h2>
            <p className="text-slate-600 leading-relaxed mb-7">
              Your items packed into secure, stackable crates and stored safely in our facility.
              A smart alternative when you don't need regular access — and often better value.
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
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#0f3060] to-[#1d5baa] flex flex-col items-center justify-center text-center p-10 relative overflow-hidden">
              <div className="w-20 h-20 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-5">
                <CrateIconLg />
              </div>
              <p className="text-white font-semibold mb-1">Photo coming soon</p>
              <p className="text-blue-200/70 text-sm">Secure storage crates in facility</p>

              <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                <div className="flex-1 bg-white/10 border border-white/20 rounded-xl p-2.5 text-center">
                  <p className="text-white text-xs font-bold">Secure</p>
                  <p className="text-blue-200/70 text-xs">facility storage</p>
                </div>
                <div className="flex-1 bg-white/10 border border-white/20 rounded-xl p-2.5 text-center">
                  <p className="text-white text-xs font-bold">Cost-efficient</p>
                  <p className="text-blue-200/70 text-xs">flexible duration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   SERVICES GRID — lighter cards for secondary services
───────────────────────────────────────────────────────── */
function ServicesGrid() {
  const secondary = [
    {
      icon: <BoxIconSm />,
      title: "Student & Box Storage",
      desc:  "Small volume, short-term storage. Ideal for students or anyone with a few boxes to keep safe.",
      href:  "/student-storage",
    },
    {
      icon: <BuildingIconSm />,
      title: "Business Storage",
      desc:  "Flexible storage for businesses — stock, equipment, documents. Just get in touch.",
      href:  "/business-storage",
    },
  ];

  return (
    <section className="section-pad-sm bg-white border-t border-slate-100">
      <div className="container-site">
        <div className="text-center mb-10">
          <span className="eyebrow text-brand-blue mb-3 block">Also available</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy">
            More ways we can help
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {secondary.map((svc) => (
            <Link
              key={svc.href}
              href={svc.href}
              className="group card hover:border-brand-blue/30 hover:shadow-md transition-all duration-200"
            >
              <span className="block text-brand-blue mb-3">{svc.icon}</span>
              <h3 className="font-bold text-brand-navy text-base mb-2 group-hover:text-brand-blue transition-colors">
                {svc.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">{svc.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue group-hover:gap-2 transition-all">
                Learn more <ArrowIcon />
              </span>
            </Link>
          ))}
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
      title: "Secure & insured",
      desc:  "Your belongings are stored safely. We take that responsibility seriously.",
    },
    {
      icon: <CalendarIcon />,
      title: "No long contracts",
      desc:  "Store for as long as you need — short or long term, no lock-ins.",
    },
    {
      icon: <PeopleIcon />,
      title: "Local team",
      desc:  "We're a Yorkshire business. Real people, straight answers, no fuss.",
    },
    {
      icon: <FlexIcon />,
      title: "Flexible access",
      desc:  "Need your things back? Just let us know and we'll arrange it.",
    },
  ];

  return (
    <section className="section-pad bg-brand-navy">
      <div className="container-site">
        <div className="text-center mb-12">
          <span className="eyebrow text-blue-400 mb-3 block">Why YORSTORE</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Storage made simple
          </h2>
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
          <div className="text-center mb-10">
            <span className="eyebrow text-brand-blue mb-3 block">Get started</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-3">
              Get a free quote
            </h2>
            <p className="text-slate-500">
              Tell us what you need and we'll come back to you quickly — no pressure, no commitment.
            </p>
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
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 4v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  );
}
function CrateIconLg() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
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
function CalendarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
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
function BoxIconSm() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5" rx="1"/><line x1="10" y1="12" x2="14" y2="12"/>
    </svg>
  );
}
function BuildingIconSm() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
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
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
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
