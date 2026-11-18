import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Target,
  Compass,
  ArrowRight,
  Shield,
  Layers,
  HeartHandshake,
  FileCheck,
  Building,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "About EDUONE – Integrated School Solutions Partner",
  description:
    "Learn how EDUONE simplifies school procurement, IT infrastructure and campus maintenance across Delhi NCR through a single reliable partner model.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-edu-navy text-white py-16 lg:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/10">
              <span className="w-2 h-2 rounded-full bg-edu-green" />
              Corporate Profile & Operational Model
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Making School Procurement and Infrastructure Simpler.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              EDUONE was created to address a critical operational challenge faced
              by educational institutions: managing fragmented suppliers for essentials,
              technology, security and maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Our Company & Why Established */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="Our Company"
                title="A Specialized Partner for Modern Schools"
              />
              <div className="space-y-4 text-sm sm:text-base text-edu-muted leading-relaxed">
                <p>
                  Running a modern school involves complex operational coordination.
                  Every academic session, principals, school owners, administrative
                  directors and procurement teams are forced to interact with dozens
                  of disparate vendors—uniform fabricators, computer dealers, CCTV
                  installers, electrical contractors and software providers.
                </p>
                <p>
                  This fragmentation leads to delivery delays, mismatched quality,
                  administrative fatigue and unclear warranty accountability when
                  problems arise.
                </p>
                <p className="font-medium text-edu-charcoal">
                  EDUONE solves this by serving as an integrated procurement and
                  technology solutions coordinator. We bring all essential requirements
                  under one reliable roof, providing institutional leaders with a
                  single, dependable point of contact.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-edu-light-grey rounded-btn border border-edu-border">
                  <div className="flex items-center gap-2 font-bold text-edu-navy text-sm mb-1">
                    <Shield className="w-4 h-4 text-edu-green" />
                    Zero Manufacturing Bias
                  </div>
                  <p className="text-xs text-edu-muted">
                    We recommend products based strictly on school specifications,
                    durability and board compliance—not sales quotas.
                  </p>
                </div>

                <div className="p-4 bg-edu-light-grey rounded-btn border border-edu-border">
                  <div className="flex items-center gap-2 font-bold text-edu-navy text-sm mb-1">
                    <FileCheck className="w-4 h-4 text-edu-green" />
                    Itemized Commercials
                  </div>
                  <p className="text-xs text-edu-muted">
                    Clear, transparent quotations with zero hidden markups or ambiguous
                    delivery terms.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-card overflow-hidden border border-edu-border shadow-card bg-edu-light-grey">
                <div className="relative h-[420px] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
                    alt="School leadership discussing educational campus development"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-edu-navy/10" />
                </div>
                <div className="p-4 bg-white border-t border-edu-border">
                  <div className="text-xs font-bold text-edu-navy">
                    Serving Private K-12 Institutions
                  </div>
                  <div className="text-[11px] text-edu-muted mt-0.5">
                    Coordinated solutions across Delhi, Gurugram, Noida, Faridabad & Ghaziabad
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Mission & Vision */}
      <section className="py-16 lg:py-20 bg-edu-light-grey border-y border-edu-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Purpose"
            title="Our Mission & Strategic Vision"
            description="Guiding principles that define our commitment to Indian educational institutions."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission */}
            <div className="institutional-card p-8 bg-white border border-edu-border">
              <div className="w-12 h-12 rounded-btn bg-edu-navy text-white flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-edu-green" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-edu-green">
                Our Mission
              </span>
              <h3 className="text-xl font-bold text-edu-navy mt-1 mb-3">
                Simplify School Management
              </h3>
              <p className="text-base text-edu-charcoal font-medium italic border-l-2 border-edu-green pl-3 py-1 mb-4">
                "To simplify school procurement and infrastructure management through
                coordinated solutions, dependable suppliers and responsive support."
              </p>
              <p className="text-xs text-edu-muted leading-relaxed">
                We empower educators to focus on their core mission—delivering quality
                education—while EDUONE handles the physical, technological and supply-chain
                execution.
              </p>
            </div>

            {/* Vision */}
            <div className="institutional-card p-8 bg-white border border-edu-border">
              <div className="w-12 h-12 rounded-btn bg-edu-navy text-white flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 text-edu-green" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-edu-navy">
                Our Vision
              </span>
              <h3 className="text-xl font-bold text-edu-navy mt-1 mb-3">
                National Standards of Trust
              </h3>
              <p className="text-base text-edu-charcoal font-medium italic border-l-2 border-edu-navy pl-3 py-1 mb-4">
                "To become a trusted school solutions partner for educational institutions
                across India."
              </p>
              <p className="text-xs text-edu-muted leading-relaxed">
                Building long-term institutional relationships founded on integrity,
                consistent delivery timelines, verified product specifications and proactive
                after-sales care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Our Approach to Procurement */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Operational Philosophy"
            title="Our Approach to School Procurement"
            description="How we coordinate with vetted suppliers, conduct quality checks, and manage deployments."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-edu-border rounded-card">
              <div className="text-xl font-bold text-edu-navy font-mono mb-2">01</div>
              <h4 className="text-base font-bold text-edu-navy mb-2">
                Curriculum & Board Alignment
              </h4>
              <p className="text-xs text-edu-muted leading-relaxed">
                Whether adhering to CBSE laboratory guidelines, ICSE computer science
                ratios, or international school acoustic and smart-screen standards,
                we ensure all recommendations strictly meet compliance requirements.
              </p>
            </div>

            <div className="p-6 bg-white border border-edu-border rounded-card">
              <div className="text-xl font-bold text-edu-navy font-mono mb-2">02</div>
              <h4 className="text-base font-bold text-edu-navy mb-2">
                Vetted Tier-1 Supply Chains
              </h4>
              <p className="text-xs text-edu-muted leading-relaxed">
                We work directly with authorized distributors and established OEM
                partners. We verify fabric GSM, stitching tolerances, hardware
                specifications, and original warranty certificates before dispatch.
              </p>
            </div>

            <div className="p-6 bg-white border border-edu-border rounded-card">
              <div className="text-xl font-bold text-edu-navy font-mono mb-2">03</div>
              <h4 className="text-base font-bold text-edu-navy mb-2">
                Turnkey Campus Deployment
              </h4>
              <p className="text-xs text-edu-muted leading-relaxed">
                Deliveries are scheduled during non-instructional hours or holiday
                breaks to eliminate classroom disruptions. Our technicians perform
                racking, cabling, software configuration and user handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Why Schools Need an Integrated Partner */}
      <section className="py-16 lg:py-20 bg-edu-light-grey border-y border-edu-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              eyebrow="Comparative Analysis"
              title="Why Schools Need an Integrated Partner"
              description="A clear comparison between the traditional vendor approach and the EDUONE coordinated model."
              align="center"
            />

            <div className="mt-12 bg-white rounded-card border border-edu-border overflow-hidden shadow-subtle">
              <div className="grid grid-cols-2 bg-edu-navy text-white text-xs font-bold uppercase tracking-wider p-4">
                <div>Traditional Vendor Model</div>
                <div className="text-edu-green">The EDUONE Model</div>
              </div>

              <div className="divide-y divide-edu-border text-xs text-edu-charcoal">
                <div className="grid grid-cols-2 p-4">
                  <div className="pr-4 text-edu-muted">
                    8–12 different vendors for uniforms, smart boards, CCTV, Wi-Fi and AMCs.
                  </div>
                  <div className="pl-4 font-semibold text-edu-navy">
                    1 dedicated institutional coordinator managing all categories.
                  </div>
                </div>

                <div className="grid grid-cols-2 p-4 bg-edu-light-grey/40">
                  <div className="pr-4 text-edu-muted">
                    Vendors blame each other when IT hardware and networking fail to integrate.
                  </div>
                  <div className="pl-4 font-semibold text-edu-navy">
                    Unified technical responsibility spanning cabling, hardware and setup.
                  </div>
                </div>

                <div className="grid grid-cols-2 p-4">
                  <div className="pr-4 text-edu-muted">
                    Uniform sizing issues and sample delays during peak April admission periods.
                  </div>
                  <div className="pl-4 font-semibold text-edu-navy">
                    Pre-session sizing drives, coordinated buffers, and guaranteed delivery milestones.
                  </div>
                </div>

                <div className="grid grid-cols-2 p-4 bg-edu-light-grey/40">
                  <div className="pr-4 text-edu-muted">
                    Unresponsive local technicians when school equipment breaks down before exams.
                  </div>
                  <div className="pl-4 font-semibold text-edu-navy">
                    Structured AMC with scheduled preventive maintenance and committed technical dispatch.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Partner with EDUONE for Your School's Requirements."
        description="Connect with our institutional consulting team in Delhi NCR to discuss your upcoming academic session procurement or campus infrastructure upgrade."
      />
    </div>
  );
}
