// ─────────────────────────────────────────────
//  YORSTORE — Site Configuration
//  Edit this file to update contact details,
//  business info, and nav links across the site.
// ─────────────────────────────────────────────

export const SITE_CONFIG = {
  businessName: "YORSTORE",
  tagline:      "Storage that comes to you.",

  // ── Contact details ──────────────────────────
  phone:        "XXXXX XXXXXX",
  phoneHref:    "tel:XXXXXXXXXX",
  email:        "hello@yorstore.co.uk",
  emailHref:    "mailto:hello@yorstore.co.uk",
  address:      "Yorkshire, UK",

  // ── Meta ─────────────────────────────────────
  siteUrl:      "https://yorstore.co.uk",
  description:
    "YORSTORE offers flexible mobile self storage, crate storage, and box storage across Yorkshire. We come to you — you load, or we load for you.",
} as const;

export const NAV_LINKS = [
  { label: "Mobile Self Storage", href: "/mobile-self-storage" },
  { label: "Crate Storage",       href: "/crate-storage"       },
  { label: "Student Storage",     href: "/student-storage"     },
  { label: "Business Storage",    href: "/business-storage"    },
  { label: "About",               href: "/about"               },
  { label: "Contact",             href: "/contact"             },
] as const;
