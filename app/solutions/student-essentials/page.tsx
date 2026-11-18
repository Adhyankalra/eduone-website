import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shirt,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Scissors,
  Check,
  ShieldCheck,
  Package,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Student Essentials – School Uniforms, Bags & Stationery | EDUONE",
  description:
    "Institutional procurement of school uniforms, shoes, socks, school bags, ties, badges and student ID cards for Delhi NCR schools.",
};

const ESSENTIALS_CATEGORIES = [
  {
    title: "School Uniforms",
    tagline: "Summer, Winter & Athletic Wear",
    desc: "Custom tailored and standardized school uniforms designed for longevity and comfort. Breathable cotton-rich blends for summer, colorfast twills, winter blazers, cardigans, sweaters, tracksuits and sports house jerseys.",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    specs: [
      "Custom pantone shade matching & crest embroidery",
      "Reinforced double-stitch stress points for active school wear",
      "Antipilling winter knitwear and blazers",
      "Sizing camps and pre-session fitting coordination",
    ],
  },
  {
    title: "Shoes & Socks",
    tagline: "Daily Formal & Physical Education Footwear",
    desc: "Durable school footwear meeting strict school uniform codes. Genuine leather formal shoes, non-marking rubber sole sports sneakers, PT shoes, and custom elastic ribbed socks with woven school names.",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
    specs: [
      "Slip-resistant, shock-absorbing outsoles",
      "Breathable cotton blend socks with reinforced heel & toe",
      "Full range of UK/India sizing from pre-primary to senior grades",
      "Bulk sizing buffer management for mid-term admissions",
    ],
  },
  {
    title: "School Bags & Backpacks",
    tagline: "Ergonomic & School Crest Printed Bags",
    desc: "Ergonomically designed backpacks with padded shoulder straps and spinal support, engineered to withstand heavy textbook loads. Available with reinforced base panels and custom school branding.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    specs: [
      "Water-resistant high-denier polyester fabrics",
      "Heavy-duty self-repairing zippers",
      "Multi-compartment organizational pockets",
      "Grade-appropriate volume capacities (Prep to Class 12)",
    ],
  },
  {
    title: "Belts, Ties & Badges",
    tagline: "Woven Jacquard Ties & School Insignias",
    desc: "Precise institution accessories manufactured with authentic school emblems. Woven jacquard neckties, elastic ties for juniors, brass buckle belts with laser-engraved school monograms, and epoxy badges.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    specs: [
      "High-density micro-polyester woven ties",
      "House color striping and prefect leadership sashes",
      "Rust-proof zinc/brass buckle mechanisms",
      "Magnetic and pin-backed enamel house badges",
    ],
  },
  {
    title: "School Stationery & Notebooks",
    tagline: "Standardized Academic Notebooks & Exam Stationery",
    desc: "Custom ruled student notebooks, registers, graph pads, drawing files and practical scrapbooks imprinted with school rules, prayer hymns, and institution emblems.",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
    specs: [
      "70+ GSM chlorine-free high-brightness paper",
      "Section-sewn and hardbound durability options",
      "Exam answer booklets with official school watermark",
      "Pre-packaged student kits organized by grade",
    ],
  },
  {
    title: "Student & Staff ID Cards",
    tagline: "RFID, Barcode & High-Durability Lanyards",
    desc: "High-definition thermal laminated identity cards for students, teaching faculty, and administrative staff. Compatible with campus biometric access gates, bus tracking and library checkouts.",
    image:
      "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=800&q=80",
    specs: [
      "Mifare / RFID 13.56MHz chip integration",
      "Custom woven jacquard or satin printed lanyards",
      "Scratch-resistant break-away safety releases",
      "Annual student photo ingestion & rapid reprints",
    ],
  },
];

export default function StudentEssentialsPage() {
  return (
    <div className="flex flex-col">
      {/* Category Hero */}
      <section className="bg-edu-navy text-white py-16 lg:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/10">
                <Shirt className="w-3.5 h-3.5 text-edu-green" />
                Category 01 • Institutional Apparel & Stationery
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Everything Students Need for the School Day.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Uniforms, footwear, bags, stationery and everyday student requirements
                coordinated to your exact school pantone shades, fabric specifications,
                and session timelines.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 bg-edu-green hover:bg-edu-green-hover text-white text-sm font-semibold px-6 py-3 rounded-btn transition-colors"
                >
                  <span>Enquire About Student Essentials</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-5 py-3 rounded-btn border border-white/20 transition-colors"
                >
                  <span>Request Sizing Sample Kit</span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 hidden lg:block">
              <div className="p-6 bg-white/5 border border-white/10 rounded-card space-y-3 text-xs text-slate-300">
                <div className="font-bold text-white text-sm">
                  Procurement Highlights
                </div>
                <div>• Verified fabric colorfastness & GSM</div>
                <div>• Pre-session sizing camps on campus</div>
                <div>• Buffer stock coordination for admissions</div>
                <div>• Single invoice & delivery milestone tracking</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coordination Model Explainer */}
      <section className="py-12 bg-edu-light-grey border-b border-edu-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-btn bg-edu-navy text-white flex items-center justify-center shrink-0">
                <Scissors className="w-4 h-4 text-edu-green" />
              </div>
              <div>
                <h4 className="font-bold text-edu-navy">School-Specific Customization</h4>
                <p className="text-xs text-edu-muted mt-0.5">
                  We match exact house colors, crest embroidery, and collar piping.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-btn bg-edu-navy text-white flex items-center justify-center shrink-0">
                <Package className="w-4 h-4 text-edu-green" />
              </div>
              <div>
                <h4 className="font-bold text-edu-navy">Bulk Institutional Procurement</h4>
                <p className="text-xs text-edu-muted mt-0.5">
                  Direct coordination with vetted mills ensures institutional wholesale pricing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-btn bg-edu-navy text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-edu-green" />
              </div>
              <div>
                <h4 className="font-bold text-edu-navy">Pre-Session Delivery Guarantee</h4>
                <p className="text-xs text-edu-muted mt-0.5">
                  Scheduled delivery weeks before academic session opening in March/April.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Detailed Categories"
            title="Coordinated Student Essentials Portfolio"
            description="EDUONE coordinates sample development, sizing camps, quality verification, and timely bulk fulfillment across these product lines."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ESSENTIALS_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="institutional-card flex flex-col justify-between overflow-hidden bg-white border border-edu-border rounded-card group"
              >
                <div>
                  <div className="relative h-48 w-full bg-edu-light-grey overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-edu-navy/10" />
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] font-bold text-edu-green uppercase tracking-wider">
                      {cat.tagline}
                    </span>
                    <h3 className="text-xl font-bold text-edu-navy mt-1 mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-edu-muted leading-relaxed mb-4">
                      {cat.desc}
                    </p>

                    <div className="pt-3 border-t border-edu-border">
                      <div className="text-[11px] font-semibold text-edu-navy mb-2">
                        Institutional Specifications:
                      </div>
                      <ul className="space-y-1.5 text-xs text-edu-charcoal">
                        {cat.specs.map((spec, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-1.5">
                            <span className="text-edu-green font-bold">✓</span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href="/quote"
                    className="w-full inline-flex items-center justify-between text-xs font-semibold py-2.5 px-3 rounded-btn border border-edu-border bg-edu-light-grey hover:bg-edu-navy hover:text-white transition-colors text-edu-navy"
                  >
                    <span>Request Sample / Spec Sheet</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Streamline Your School Uniform & Essentials Procurement?"
        description="Share your school's uniform design guidelines and student enrollment estimates. Our team will prepare samples and an itemized institutional proposal."
        primaryButtonText="Enquire About Student Essentials"
        primaryButtonHref="/quote"
      />
    </div>
  );
}
