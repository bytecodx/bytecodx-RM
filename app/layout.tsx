import type { Metadata } from "next";
import { Space_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ByteCodX`,
  },
  description: siteConfig.seo.description,
  applicationName: "ByteCodX",
  referrer: "origin-when-cross-origin",
  keywords: [
    "bytecodx",
    "ByteCodX",
    "byte codx",
    "bytecodx.ai",
    "bytecodx ai",
    "bytecodx web development",
    "bytecodx studio",
    "web development",
    "MERN stack",
    "Next.js web development",
    "full stack development",
    "e-commerce development",
    "custom web applications",
    "freelance web developer",
    "Tamil Nadu web developer",
    "India web development agency",
    "UK web development services",
  ],
  authors: [{ name: "ByteCodX", url: siteConfig.url }],
  creator: "ByteCodX",
  publisher: "ByteCodX",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "ByteCodX — Web Development & Full-Stack Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
    creator: "@bytecodx",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ByteCodX",
  alternateName: ["ByteCodX Studio", "ByteCodX AI", "bytecodx", "byte codx"],
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo/bytecodx-logo.png`,
  image: `${siteConfig.url}/og-image.png`,
  description: siteConfig.description,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Tamil Nadu",
  },
  sameAs: ["https://github.com/bytecodx"],
  priceRange: "$$",
  knowsAbout: [
    "Web Development",
    "MERN Stack Development",
    "Full-Stack Development",
    "React",
    "Next.js",
    "E-Commerce Solutions",
    "Custom Web Applications",
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ByteCodX",
  alternateName: ["bytecodx", "bytecodx.ai"],
  url: siteConfig.url,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${firaCode.variable}`}>
      <head>
        <meta name="theme-color" content="#020407" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
