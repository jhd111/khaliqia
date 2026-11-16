import { Poppins, Noto_Nastaliq_Urdu, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";

const heading = Poppins({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-heading", display: "swap" });

const urdu = Noto_Nastaliq_Urdu({ subsets: ["arabic"], weight: ["400", "700"], variable: "--font-urdu", display: "swap" });

const navFont = Roboto_Condensed({ subsets: ["latin"], weight: ["700"], variable: "--font-nav", display: "swap" });

// TODO: replace with your real domain
export const SITE_URL = "https://www.khaliqia.edu.pk";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Khaliqia Educational Complex | School in Gujranwala",
    template: "%s | Khaliqia Educational Complex",
  },
  description:
    "Khaliqia Educational Complex offers quality pre-school, primary and secondary education in Gujranwala, Punjab. Apply for admission today.",
  keywords: ["Khaliqia Educational Complex", "school in Gujranwala", "admission", "primary school", "secondary school"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Khaliqia Educational Complex",
    title: "Khaliqia Educational Complex",
    description: "Quality education with strong values in Gujranwala.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#14532d" };

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "School",
    name: "Khaliqia Educational Complex",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    address: { "@type": "PostalAddress", addressLocality: "Gujranwala", addressRegion: "Punjab", addressCountry: "PK" },
    // telephone: "+92-XXX-XXXXXXX",
  };
  return (
    <html lang="en" className={`${heading.variable} ${urdu.variable} ${navFont.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">
          <PageBanner />
          {children}
        </main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
