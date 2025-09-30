import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import CanvasBackdrop from "@/components/CanvasBackdrop";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Pavan Kapoor | Software Engineer | React, FastAPI, AI Systems",
  description:
    "Software Engineer with 2.5+ years building scalable applications. Founding Engineer at Bolna (YC 25). React, FastAPI, TypeScript, Python developer in Bengaluru.",
  keywords: [
    "Software Engineer",
    "React Developer",
    "FastAPI Developer", 
    "TypeScript",
    "Python Developer",
    "Full Stack Developer",
    "Bengaluru",
    "Y Combinator",
    "Bolna",
    "ExactSpace",
    "AI Systems",
    "Web Development"
  ],
  metadataBase: new URL("https://pavankapoor.in"),
  openGraph: {
    title: "Pavan Kapoor | Software Engineer | React, FastAPI, AI Systems",
    description:
      "Software Engineer with 2.5+ years building scalable applications. Founding Engineer at Bolna (YC 25). React, FastAPI, TypeScript, Python developer.",
    url: "https://pavankapoor.in",
    siteName: "Pavan Kapoor",
    images: [
      {
        url: "/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Pavan Kapoor - Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavan Kapoor | Software Engineer | React, FastAPI, AI Systems",
    description:
      "Software Engineer with 2.5+ years building scalable applications. Founding Engineer at Bolna (YC 25).",
    images: ["/images/banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <div className="fixed inset-0 -z-10">
          <CanvasBackdrop className="w-full h-full" />
        </div>
        <div className="relative z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm min-h-screen">
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-base font-semibold tracking-tight">
              <span className="inline-block rounded bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 mr-2">PK</span>
              Pavan Kapoor
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/projects" className="hover:opacity-80">Projects</Link>
              {/* Resume hidden from nav as requested */}
              <a href="https://github.com/pavankapoor31" target="_blank" rel="noreferrer" className="hover:opacity-80">GitHub</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-6 py-10">
          {children}
        </main>
        <footer className="border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-600 dark:text-gray-300 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Pavan Kapoor</p>
            <div className="flex items-center gap-4">
              <a href="mailto:pavankapoor31@gmail.com" className="hover:underline">Email</a>
              <a href="https://www.linkedin.com/in/pavankapoor31" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              <a href="https://github.com/pavankapoor31" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
            </div>
          </div>
        </footer>
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
