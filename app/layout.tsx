import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/lib/constants";
import { MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://eduone.in"),
  title: {
    default: `${SITE_CONFIG.name} – Complete School Solutions | Delhi NCR`,
    template: `%s | ${SITE_CONFIG.name} Complete School Solutions`,
  },
  description:
    "Integrated school procurement partner for Delhi NCR private schools. Coordinating student essentials, IT infrastructure, campus CCTV, enterprise networking and AMC maintenance through one dependable point of contact.",
  keywords: [
    "school procurement Delhi NCR",
    "school uniforms bulk procurement",
    "school IT infrastructure",
    "smart classroom smart boards",
    "school computer lab setup",
    "school CCTV and surveillance",
    "campus networking Wi-Fi",
    "school annual maintenance contract AMC",
    "school solutions India",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${SITE_CONFIG.name} – Complete School Solutions`,
    description: SITE_CONFIG.shortDescription,
    url: "https://eduone.in",
    siteName: SITE_CONFIG.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappDefaultMessage
  )}`;

  return (
    <html lang="en">
      <body className="font-sans min-h-screen flex flex-col bg-white text-edu-charcoal antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Floating WhatsApp Action for quick institutional coordinator access */}
        <div className="fixed bottom-6 right-6 z-40">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-edu-green hover:bg-edu-green-hover text-white px-4 py-3 rounded-full shadow-card-hover border border-white/20 transition-all hover:scale-105 group"
            aria-label="Enquire via WhatsApp"
          >
            <MessageSquare className="w-5 h-5 fill-white text-edu-green" />
            <span className="text-xs font-bold tracking-wide hidden sm:inline">
              WhatsApp Desk
            </span>
          </a>
        </div>
      </body>
    </html>
  );
}
