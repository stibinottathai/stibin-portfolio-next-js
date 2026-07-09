import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stibin Augustine — Flutter & Front-End Developer",
  description:
    "Portfolio of Stibin Augustine, a Flutter and Next.js developer in Dubai with 4+ years of experience shipping fintech, GovTech, and e-commerce applications.",
  keywords: [
    "Stibin Augustine",
    "Flutter Developer",
    "Next.js Developer",
    "React Developer",
    "Dubai",
    "Mobile App Developer",
  ],
  openGraph: {
    title: "Stibin Augustine — Flutter & Front-End Developer",
    description:
      "4+ years building production-grade mobile and web apps across fintech, GovTech, and e-commerce. Based in Dubai, available immediately.",
    type: "website",
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
        {/* Applies the saved theme before first paint to avoid a flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{document.documentElement.dataset.theme=localStorage.getItem("theme")||"dark"}catch(e){document.documentElement.dataset.theme="dark"}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
