import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const defaultTitle = `${SITE_CONFIG.brandDisplayName} | Mobile Self Storage — Leeds, Harrogate & Wharfe Valley`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_CONFIG.brandDisplayName}`,
  },
  description: SITE_CONFIG.description,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
  openGraph: {
    siteName: SITE_CONFIG.brandDisplayName,
    locale: "en_GB",
    type: "website",
    title: defaultTitle,
    description: SITE_CONFIG.socialDescription,
    images: [
      {
        url: "/logo.png",
        width: 446,
        height: 231,
        alt: `${SITE_CONFIG.brandDisplayName} logo`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE_CONFIG.socialDescription,
    images: [`${SITE_CONFIG.siteUrl}/logo.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={poppins.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
