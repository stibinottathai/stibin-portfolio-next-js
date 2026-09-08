import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppButton from "@/components/whatsapp-button";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://stibinaugustine.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Stibin Augustine — Flutter & Web Developer | Dubai, UAE",
    template: "%s | Stibin Augustine",
  },
  description:
    "Portfolio of Stibin Augustine from Ottathai, Kannur — Flutter, Android, iOS & Web Developer based in Dubai, UAE. 4+ years shipping fintech, GovTech, and e-commerce apps. Available for freelance.",
  keywords: [
    "Stibin Augustine",
    "stibin",
    "StibinAugustine",
    "ottathai",
    "Kannur",
    "alakode",
    "ottathai church",
    "kappimala",
    "paithalmala",
    "web developer",
    "app developer",
    "Dubai",
    "UAE",
    "freelance",
    "freelancer",
    "Mudavanattu house",
    "Bt banana",
    "Mudavanattu",
    "St Antonys church Ottathai",
    "St Marys church Alakode",
    "karuvanchal",
    "paalakkayamthattu",
    "Software",
    "Computer Engineer",
    "Web Developer",
    "Flutter Developer",
    "App Developer",
    "Android Developer",
    "iOS Developer",
    "IOS Developer",
    "Oduvallythattu",
    "Kannur developer",
    "top freelancers in Kannur",
    "top app developer",
    "top web developer Dubai",
    "freelance app developer UAE",
    "Flutter developer Dubai",
    "mobile app developer Kannur",
    "Next.js Developer",
    "React Developer",
    "Mobile App Developer",
  ],
  authors: [{ name: "Stibin Augustine" }],
  creator: "Stibin Augustine",
  openGraph: {
    title: "Stibin Augustine — Flutter & Web Developer | Dubai, UAE",
    description:
      "4+ years building production-grade mobile and web apps across fintech, GovTech, and e-commerce. From Ottathai, Kannur. Based in Dubai, available for freelance.",
    url: siteUrl,
    siteName: "Stibin Augustine Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stibin Augustine — Flutter & Web Developer | Dubai, UAE",
    description:
      "Flutter, Android, iOS & Web Developer based in Dubai. Available for freelance.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{document.documentElement.dataset.theme=localStorage.getItem("theme")||"dark"}catch(e){document.documentElement.dataset.theme="dark"}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Stibin Augustine",
              url: siteUrl,
              jobTitle: "Flutter & Web Developer",
              description:
                "Flutter, Android, iOS & Web Developer from Ottathai, Kannur. Based in Dubai, UAE.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressCountry: "UAE",
              },
              knowsAbout: [
                "Flutter",
                "Android Development",
                "iOS Development",
                "Web Development",
                "Next.js",
                "React",
                "Firebase",
                "Software Engineering",
              ],
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
