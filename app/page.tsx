import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Headphones,
  Check,
  Building2,
  Users,
  Award,
  BookOpen,
  School,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import CTASection from "@/components/CTASection";
import { SITE_CONFIG, SOLUTIONS, TARGET_INSTITUTIONS } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* SECTION 1: HERO */}
      <section className="bg-white border-b border-edu-border pt-12 pb-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-edu-blue-light border border-edu-border text-xs font-semibold text-edu-navy uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-edu-green" />
                YOUR SCHOOL'S COMPLETE SOLUTIONS PARTNER
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-edu-navy tracking-tight leading-[1.12]">
                Everything Your School Needs,{" "}
                <span className="text-edu-navy border-b-4 border-edu-green pb-1">
                  Under One Roof.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-edu-muted leading-relaxed max-w-2xl">
                From student essentials and school infrastructure to advanced
                technology, security and ongoing maintenance, EDUONE simplifies
                the way schools procure, manage and maintain their essential
                requirements.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-edu-navy hover:bg-edu-navy-dark text-white text-base font-semibold px-7 py-3.5 rounded-btn transition-colors shadow-subtle"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="#solutions"
                  className="inline-flex items-center justify-center gap-2 bg-edu-light-grey hover:bg-edu-border text-edu-navy text-base font-semibold px-6 py-3.5 rounded-btn border border-edu-border transition-colors"
                >
                  <span>Explore Our Solutions</span>
                </Link>
              </div>

              {/* Trust statement */}
              <div className="pt-6 border-t border-edu-border/80 flex items-center gap-4 text-xs font-medium text-edu-charcoal">
                <div className="flex items-center gap-1.5 text-edu-green font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Integrated procurement</span>
                </div>
                <span className="text-edu-muted">•</span>
                <div className="flex items-center gap-1.5 text-edu-navy font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-edu-green" />
                  <span>Reliable technology</span>
                </div>
                <span className="text-edu-muted">•</span>
                <div className="flex items-center gap-1.5 text-edu-navy font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-edu-green" />
                  <span>Ongoing support</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Clean frame without gradients */}
                <div className="relative rounded-card overflow-hidden border border-edu-border shadow-card bg-edu-light-grey">
                  <div className="relative h-[380px] sm:h-[460px] w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80"
                      alt="Modern school campus and educational infrastructure"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-edu-navy/10" />
                  </div>

                  {/* Operational Assurance Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-none p-4 rounded-btn border border-edu-border shadow-subtle">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-btn bg-edu-navy text-white flex items-center justify-center shrink-0">
                          <Building2 className="w-4 h-4 text-edu-green" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-edu-navy">
                            Institutional Desk • Delhi NCR
                          </div>
                          <div className="text-[11px] text-edu-muted">
                            Dedicated support for private educational institutions
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold bg-edu-green-light text-edu-green px-2 py-0.5 rounded border border-edu-green/20">
                        Operational
                      </span>
                    </div>
                  </div>
                </div>

                {/* Regional badge indicator */}
                <div className="mt-3 flex items-center justify-between px-1 text-[11px] text-edu-muted">
                  <span>Serving Delhi, Noida, Gurugram & Faridabad</span>
                  <span className="text-edu-navy font-medium">B2B Coordination Model</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Integrated Partner Model"
            title="One Partner. Multiple School Solutions."
            description="Managing multiple suppliers for uniforms, equipment, technology and maintenance can be complex. EDUONE brings these requirements together through a coordinated, dependable and service-focused approach."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Prop 1 */}
            <div className="institutional-card p-8 bg-white border border-edu-border">
              <div className="w-12 h-12 rounded-btn bg-edu-blue-light border border-edu-border flex items-center justify-center text-edu-navy mb-6">
                <Layers className="w-6 h-6 text-edu-navy" />
              </div>
              <h3 className="text-lg font-bold text-edu-navy mb-2">
                Simplified Procurement
              </h3>
              <p className="text-sm text-edu-muted leading-relaxed">
                Eliminate the operational overhead of managing dozens of independent
                vendors. We consolidate quotes, ordering, timelines and deliveries
                through a single dedicated institutional manager.
              </p>
            </div>

            {/* Value Prop 2 */}
            <div className="institutional-card p-8 bg-white border border-edu-border">
              <div className="w-12 h-12 rounded-btn bg-edu-blue-light border border-edu-border flex items-center justify-center text-edu-navy mb-6">
                <ShieldCheck className="w-6 h-6 text-edu-navy" />
              </div>
              <h3 className="text-lg font-bold text-edu-navy mb-2">
                Integrated Solutions
              </h3>
              <p className="text-sm text-edu-muted leading-relaxed">
                From uniform fabric quality and computer lab specifications to
                campus-wide firewalls and CCTV storage, our solutions are coordinated
                to work smoothly across your campus.
              </p>
            </div>

            {/* Value Prop 3 */}
            <div className="institutional-card p-8 bg-white border border-edu-border">
              <div className="w-12 h-12 rounded-btn bg-edu-blue-light border border-edu-border flex items-center justify-center text-edu-navy mb-6">
                <Headphones className="w-6 h-6 text-edu-navy" />
              </div>
              <h3 className="text-lg font-bold text-edu-navy mb-2">
                Ongoing Support
              </h3>
              <p className="text-sm text-edu-muted leading-relaxed">
                Procurement is only the first step. EDUONE provides structured
                Annual Maintenance Contracts, preventive servicing, troubleshooting
                and on-site technical support throughout the school term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR SOLUTIONS */}
      <section id="solutions" className="py-16 lg:py-20 bg-edu-light-grey border-y border-edu-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Category Portfolio"
              title="Complete Solutions for Modern Schools"
              description="Explore our five core institutional solution areas. Each service is tailored to meet the exacting operational standards of private educational institutions."
            />
            <Link
              href="/quote"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-edu-navy hover:text-edu-navy-dark shrink-0"
            >
              <span>Download Comprehensive Scope</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.map((solution, index) => (
              <ServiceCard
                key={solution.id}
                solution={solution}
                featured={index === 0}
              />
            ))}

            {/* Sixth Panel: Consolidated Custom Requirement */}
            <div className="institutional-card p-8 bg-edu-navy text-white flex flex-col justify-between border border-edu-navy rounded-card">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 text-white text-xs font-semibold tracking-wider uppercase mb-4 border border-white/10">
                  <Sparkles className="w-3.5 h-3.5 text-edu-green" />
                  Custom RFP & Turnkey Scope
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Combined Campus Requirements?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Planning a new school wing, annual session upgrade, or complete
                  campus refurbishment? We prepare unified commercial proposals
                  spanning student apparel, smart classrooms, IT and surveillance.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  href="/quote"
                  className="w-full inline-flex items-center justify-center gap-2 bg-edu-green hover:bg-edu-green-hover text-white text-sm font-semibold py-3 px-4 rounded-btn transition-colors"
                >
                  <span>Submit Institutional RFP</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE EDUONE? */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                eyebrow="The EDUONE Difference"
                title="A More Reliable Way to Manage School Requirements."
                description="Traditional school procurement involves coordinating with multiple independent vendors, leading to delivery delays, inconsistent quality, and fragmented after-sales accountability."
              />

              <div className="p-6 bg-edu-light-grey rounded-card border border-edu-border space-y-3">
                <div className="text-xs font-bold text-edu-navy uppercase tracking-wider">
                  Our Service Commitment
                </div>
                <p className="text-xs text-edu-charcoal leading-relaxed">
                  EDUONE acts as your school’s dedicated coordination partner. We do
                  not manufacture generic products or maintain unneeded inventory; we
                  align your institution with vetted tier-one manufacturers, negotiate
                  institutional rates, and oversee quality at every milestone.
                </p>
              </div>

              <div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-edu-navy hover:underline"
                >
                  <span>Learn more about our operational model</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: 4 Value Propositions */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Prop 1 */}
              <div className="institutional-card p-6 bg-white border border-edu-border">
                <div className="w-10 h-10 rounded-btn bg-edu-light-grey border border-edu-border flex items-center justify-center text-edu-navy font-bold text-sm mb-4">
                  01
                </div>
                <h4 className="text-base font-bold text-edu-navy mb-2">
                  Single Point of Contact
                </h4>
                <p className="text-xs text-edu-muted leading-relaxed">
                  Coordinate multiple school requirements through one dependable partner,
                  drastically reducing administrative overhead for principals and trustees.
                </p>
              </div>

              {/* Prop 2 */}
              <div className="institutional-card p-6 bg-white border border-edu-border">
                <div className="w-10 h-10 rounded-btn bg-edu-light-grey border border-edu-border flex items-center justify-center text-edu-navy font-bold text-sm mb-4">
                  02
                </div>
                <h4 className="text-base font-bold text-edu-navy mb-2">
                  Carefully Coordinated Procurement
                </h4>
                <p className="text-xs text-edu-muted leading-relaxed">
                  Work with appropriate suppliers vetted for quality, board compliance,
                  exact product specifications and institution budgets.
                </p>
              </div>

              {/* Prop 3 */}
              <div className="institutional-card p-6 bg-white border border-edu-border">
                <div className="w-10 h-10 rounded-btn bg-edu-light-grey border border-edu-border flex items-center justify-center text-edu-navy font-bold text-sm mb-4">
                  03
                </div>
                <h4 className="text-base font-bold text-edu-navy mb-2">
                  Installation & Implementation
                </h4>
                <p className="text-xs text-edu-muted leading-relaxed">
                  Coordinate on-site delivery, rack setup, classroom device configuration
                  and complete commissioning with zero academic disruption.
                </p>
              </div>

              {/* Prop 4 */}
              <div className="institutional-card p-6 bg-white border border-edu-border">
                <div className="w-10 h-10 rounded-btn bg-edu-light-grey border border-edu-border flex items-center justify-center text-edu-navy font-bold text-sm mb-4">
                  04
                </div>
                <h4 className="text-base font-bold text-edu-navy mb-2">
                  Continued Support
                </h4>
                <p className="text-xs text-edu-muted leading-relaxed">
                  Access ongoing maintenance contracts, preventive servicing, troubleshooting
                  and dedicated technician assistance whenever required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW WE WORK (TIMELINE) */}
      <section className="py-16 lg:py-20 bg-edu-light-grey border-y border-edu-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionHeading
              eyebrow="Structured Execution"
              title="From Requirement to Reliable Support."
              description="A disciplined, step-by-step methodology built for school boards, administrative councils and procurement committees."
              align="center"
            />
          </div>

          <ProcessTimeline />

          <div className="mt-10 text-center">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-xs font-semibold text-edu-navy hover:underline uppercase tracking-wider"
            >
              <span>View full 6-phase customer journey & SLA details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: TARGET INSTITUTIONS */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Institutional Coverage"
            title="Supporting the Needs of Modern Educational Institutions"
            description="Our solutions are tailored to the distinct operational protocols, academic calendars and compliance standards of diverse educational setups in Delhi NCR."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TARGET_INSTITUTIONS.map((inst, idx) => (
              <div
                key={idx}
                className="institutional-card p-6 bg-white border border-edu-border flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <School className="w-5 h-5 text-edu-navy" />
                    <h4 className="text-base font-bold text-edu-navy">
                      {inst.name}
                    </h4>
                  </div>
                  <p className="text-xs text-edu-muted leading-relaxed">
                    {inst.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-edu-border text-[11px] font-semibold text-edu-navy flex items-center justify-between">
                  <span>Customized Spec Coordination</span>
                  <Check className="w-3.5 h-3.5 text-edu-green" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-edu-light-grey rounded-card border border-edu-border text-center max-w-2xl mx-auto">
            <p className="text-xs text-edu-muted">
              <strong className="text-edu-navy">Institutional Notice:</strong> EDUONE
              coordinates procurement and technical integration according to CBSE, ICSE,
              State Board, and International school standards. Specific approvals are
              conducted with school management prior to order finalization.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: STRONG CTA */}
      <CTASection />
    </div>
  );
}
