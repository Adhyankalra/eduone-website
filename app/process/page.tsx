import React from "react";
import Link from "next/link";
import {
  FileText,
  Eye,
  CheckCircle2,
  PackageCheck,
  Truck,
  Wrench,
  FileCheck,
  ShieldAlert,
  Headphones,
  ArrowRight,
  ClipboardList,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Our 9-Stage Procurement & Implementation Process | EDUONE",
  description:
    "Explore the step-by-step customer journey at EDUONE: from requirement discussion and site assessment to transparent commercial quotation, quality checks, installation and AMC support.",
};

const PROCESS_STEPS_FULL = [
  {
    stage: "01",
    title: "Requirement Discussion & Needs Analysis",
    subtitle: "Initial Institutional Consultation",
    icon: FileText,
    summary:
      "A structured consultation with school principals, trustees, procurement officers and IT heads to document student strength, academic calendar deadlines, specific brand requirements and budget parameters.",
    deliverables: [
      "Documented institution requirement brief",
      "Academic session timeline milestones agreed upon",
      "Preliminary category scope identification",
    ],
  },
  {
    stage: "02",
    title: "Site Visit & Physical Assessment",
    subtitle: "On-Campus Technical Evaluation",
    icon: Eye,
    summary:
      "When required, our technical team visits your campus in Delhi NCR to inspect computer lab dimensions, electrical distribution, classroom lighting, network rack locations, and cable routing pathways.",
    deliverables: [
      "Physical campus infrastructure report",
      "Network cabling & Wi-Fi coverage map",
      "Power adequacy & UPS sizing assessment",
    ],
  },
  {
    stage: "03",
    title: "Product & Solution Recommendations",
    subtitle: "Specification Engineering",
    icon: ClipboardList,
    summary:
      "We select vetted manufacturers and specific product models matching CBSE/ICSE board compliance, durability standards, energy efficiency guidelines and school budget constraints.",
    deliverables: [
      "Detailed technical datasheets and fabric swatches",
      "Demo unit / sample provision for uniform fit or smart board trials",
      "Comparison matrix of recommended hardware options",
    ],
  },
  {
    stage: "04",
    title: "Transparent Commercial Quotation",
    subtitle: "Itemized Institutional Proposal",
    icon: FileCheck,
    summary:
      "We prepare a clean, itemized commercial quote detailing individual unit costs, taxes, delivery milestones, warranty terms, and scope of installation. No hidden charges or ambiguous exclusions.",
    deliverables: [
      "Itemized commercial quotation with GST breakdown",
      "Official institutional payment terms & schedules",
      "Scope of work documentation for installation teams",
    ],
  },
  {
    stage: "05",
    title: "Purchase Order & Milestone Confirmation",
    subtitle: "Formal Engagement & Scheduling",
    icon: CheckCircle2,
    summary:
      "Upon receipt of the school's official Purchase Order (PO), we finalize batch manufacturing timelines, reserve factory inventory, and align the delivery schedule with upcoming school vacation or session dates.",
    deliverables: [
      "Order confirmation and procurement schedule",
      "Dedicated single point of contact (SPOC) assignment",
      "Pre-delivery staging milestones established",
    ],
  },
  {
    stage: "06",
    title: "Procurement & Factory Quality Checks",
    subtitle: "Quality Assurance & Batch Verification",
    icon: PackageCheck,
    summary:
      "Our team inspects apparel batches for fabric GSM, stitching strength, and color consistency. For IT and security hardware, we verify OEM serial numbers, warranty certificates, and tamper-evident packaging.",
    deliverables: [
      "Quality verification checklist sign-off",
      "OEM institutional warranty registration",
      "Dispatch clearance and transport consignment tracking",
    ],
  },
  {
    stage: "07",
    title: "Delivery, Installation & Commissioning",
    subtitle: "On-Campus Technical Implementation",
    icon: Wrench,
    summary:
      "Carefully coordinated logistics ensure goods arrive directly at designated campus gates. Our technicians unbox, assemble, cable, mount interactive panels, configure network switches, and align CCTV angles.",
    deliverables: [
      "Scheduled non-disruptive installation outside class hours",
      "Network structured cabling and patch panel termination",
      "Operating system, software image and driver deployment",
    ],
  },
  {
    stage: "08",
    title: "Administrative Handover & User Training",
    subtitle: "Institutional Sign-Off",
    icon: Truck,
    summary:
      "We walk the school administration and IT staff through the newly installed systems, conduct live testing, provide hands-on teacher orientation for interactive boards, and obtain formal sign-off.",
    deliverables: [
      "Comprehensive asset handover document with serial register",
      "Teacher & staff quick-reference training guides",
      "Satisfactory installation sign-off certificate",
    ],
  },
  {
    stage: "09",
    title: "Warranty Coordination & Ongoing AMC Support",
    subtitle: "Long-Term Operational Partnership",
    icon: Headphones,
    summary:
      "We coordinate all manufacturer warranty claims on behalf of the school. Ongoing support is maintained through routine preventive servicing visits, standby exam technicians, and structured AMC agreements.",
    deliverables: [
      "Centralized ticketing and helpdesk escalation",
      "Preventive maintenance visits during school vacations",
      "Rapid warranty replacement and repair coordination",
    ],
  },
];

export default function ProcessPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-edu-navy text-white py-16 lg:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/10">
              <span className="w-2 h-2 rounded-full bg-edu-green" />
              Standard Operating Procedure
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Our 9-Stage Customer Journey.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Every school project is managed with corporate precision. From the initial
              requirement discussion to ongoing AMC support, our structured methodology
              ensures transparency, verified quality and zero academic disruption.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {PROCESS_STEPS_FULL.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.stage}
                  className="institutional-card p-6 sm:p-8 bg-white border border-edu-border rounded-card hover:border-edu-navy transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                    {/* Stage Number & Icon */}
                    <div className="flex sm:flex-col items-center sm:items-start gap-3 shrink-0">
                      <div className="w-14 h-14 rounded-btn bg-edu-navy text-white flex items-center justify-center font-mono font-bold text-lg">
                        {step.stage}
                      </div>
                      <span className="text-[11px] font-bold text-edu-green uppercase tracking-wider">
                        Stage {idx + 1} of 9
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-edu-muted">
                          {step.subtitle}
                        </div>
                        <h3 className="text-xl font-bold text-edu-navy mt-0.5">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-edu-muted leading-relaxed">
                        {step.summary}
                      </p>

                      <div className="pt-3 border-t border-edu-border bg-edu-light-grey/50 p-3.5 rounded-btn">
                        <div className="text-[11px] font-bold text-edu-navy uppercase tracking-wider mb-2">
                          Key Deliverables & Quality Gates:
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-edu-charcoal">
                          {step.deliverables.map((d, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-1.5">
                              <span className="w-3.5 h-3.5 rounded-full bg-edu-green-light text-edu-green flex items-center justify-center shrink-0 mt-0.5">
                                ✓
                              </span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Governance & Accountability Notice */}
      <section className="py-12 bg-edu-light-grey border-y border-edu-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-xl font-bold text-edu-navy">
              Single Point of Contact Accountability
            </h3>
            <p className="text-xs sm:text-sm text-edu-muted leading-relaxed">
              Throughout all 9 stages, your school is assigned a dedicated Institutional
              Relationship Manager in Delhi NCR. You never have to track separate
              delivery couriers, third-party technicians or factory dispatchers.
            </p>
            <div className="pt-2">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-edu-navy hover:bg-edu-navy-dark text-white text-xs font-semibold px-5 py-2.5 rounded-btn transition-colors"
              >
                <span>Initiate Stage 01: Discuss Requirements</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
