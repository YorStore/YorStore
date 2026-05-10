// ─────────────────────────────────────────────
//  YORSTORE — Site Configuration
//  Edit this file to update contact details,
//  business info, and nav links across the site.
// ─────────────────────────────────────────────

export const SITE_CONFIG = {
  businessName: "YORSTORE",
  tagline:      "Storage that comes to you.",

  // ── Contact details ──────────────────────────
  phone:        "07368 185565",
  phoneHref:    "tel:+447368185565",
  email:        "hello@yorstore.co.uk",
  emailHref:    "mailto:hello@yorstore.co.uk",
  /** Default WhatsApp deep link */
  whatsappHref: `https://wa.me/447368185565?text=${encodeURIComponent("Hi Yorstore, I'm looking for storage")}`,
  address:      "Yorkshire, UK",

  // ── Meta ─────────────────────────────────────
  siteUrl:      "https://yorstore.co.uk",
  description:
    "Yorkshire storage collected from your door: mobile self storage, crate storage, student and business storage. Flexible, affordable, local — you load or we load.",
} as const;

export const NAV_LINKS = [
  { label: "Mobile Self Storage", href: "/mobile-self-storage" },
  { label: "Crate Storage",       href: "/crate-storage"       },
  { label: "Student Storage",     href: "/student-storage"     },
  { label: "Business Storage",    href: "/business-storage"    },
  { label: "Removals",            href: "/removals-storage"    },
  { label: "About",               href: "/about"               },
  { label: "Contact",             href: "/contact"             },
] as const;
