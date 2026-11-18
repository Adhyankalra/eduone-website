import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Monitor,
  CheckCircle2,
  ArrowRight,
  Server,
  Printer,
  Cast,
  Cpu,
  Layers,
  Wrench,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "IT & Digital Infrastructure for Schools | EDUONE Delhi NCR",
  description:
    "Complete school IT solutions: computer labs, interactive smart boards, classroom projectors, high-volume printers, campus servers and school ERP setup.",
};

const IT_SERVICES = [
  {
    title: "Desktop Computers & Laptops",
    category: "Hardware Procurement",
    icon: Monitor,
    desc: "Commercial-grade desktops and laptops engineered for heavy student laboratory use and administrative workloads. We coordinate with tier-1 brands (Dell, HP, Lenovo, ASUS) with multi-year onsite institutional warranties.",
    specs: [
      "Latest Intel/AMD processor configurations tailored for CBSE/ICSE coding curricula",
      "Solid State Storage (SSD) for lightning-fast classroom boot times",
      "Admin desktops configured with multi-monitor & accounting support",
      "All-in-One (AIO) desktop setups for space-constrained library stations",
    ],
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Turnkey Computer Laboratories",
    category: "Specialized Lab Setup",
    icon: Cpu,
    desc: "Complete end-to-end computer lab design and deployment. We coordinate electrical wiring, modular student workstation furniture, clean cable trays, centralized server connections, and centralized lab power management.",
    specs: [
      "Ergonomic student lab desks with concealed wire channels",
      "Centralized master PC with screen monitoring & broadcast capabilities",
      "Pre-configured Linux/Windows dual boot options for coding standards",
      "Online UPS integration preventing data loss during power transitions",
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Interactive Smart Boards & Digital Panels",
    category: "Smart Classroom Tech",
    icon: Cast,
    desc: "Ultra HD 4K interactive flat panels (IFPD) that replace traditional blackboards. Featuring multi-touch writing, built-in Android/Windows OPS modules, anti-glare toughened glass and integrated sound systems.",
    specs: [
      "Sizes: 65, 75, and 86-inch 4K panels with 20-point simultaneous touch",
      "Dual OS (Android + Windows OPS slot) for complete curriculum compatibility",
      "Preloaded digital whiteboarding, shape recognition and annotation software",
      "Wireless screen mirroring from teacher laptops and tablets",
    ],
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "High-Volume Printers & Scanners",
    category: "Institutional Printing",
    icon: Printer,
    desc: "Reliable examination printing machines and heavy-duty office multi-function printers (MFP). Designed for rapid question paper runs, student report cards, certificates and OMR sheet scanning.",
    specs: [
      "Heavy-duty duplex mono & color network laser printers",
      "High-speed automatic document feeders (ADF) for administrative scanning",
      "OMR scanner coordination for standardized testing evaluation",
      "Cost-per-page consulting to minimize school ink/toner operational expenditure",
    ],
    image:
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Campus Servers & Storage Solutions",
    category: "Centralized IT Backbone",
    icon: Server,
    desc: "Secure on-premise servers and Network Attached Storage (NAS) units for student records, exam archives, video lectures, and biometric data with automated off-site backups.",
    specs: [
      "Tower and 1U/2U rack-mounted servers configured for school ERPs",
      "Redundant storage (RAID) protecting critical student databases",
      "Scheduled automated daily cloud/offline backup configurations",
      "Uninterrupted Power Supply (UPS) protection and climate monitoring",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "School Management & ERP Software",
    category: "Digital Administration",
    icon: Layers,
    desc: "Assisting institutions with the evaluation, procurement and configuration of comprehensive school ERPs, fee payment gateways, parent communication apps and digital attendance trackers.",
    specs: [
      "Student information systems & automated fee reconciliation",
      "Parent mobile apps for homework, notices, and bus tracking",
      "Digital report card generation aligned with NEP & board formats",
      "Staff payroll and timetable management modules",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ITInfrastructurePage() {
  return (
    <div className="flex flex-col">
      {/* Category Hero */}
      <section className="bg-edu-navy text-white py-16 lg:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/10">
              <Monitor className="w-3.5 h-3.5 text-edu-green" />
              Category 02 • Technology & Digital Campus
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Technology Infrastructure for Smarter Schools.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We design, supply and deploy modern computing laboratories, 4K smart
              classroom panels, examination printers and secure server backbones tailored
              for schools in Delhi NCR.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-edu-green hover:bg-edu-green-hover text-white text-sm font-semibold px-6 py-3 rounded-btn transition-colors"
              >
                <span>Discuss Your IT Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-5 py-3 rounded-btn border border-white/20 transition-colors"
              >
                <span>Book a Campus IT Audit</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Four Phase IT Deployment Process */}
      <section className="py-12 bg-edu-light-grey border-b border-edu-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs text-edu-charcoal">
            <div className="p-4 bg-white rounded-btn border border-edu-border">
              <span className="font-mono font-bold text-edu-green text-sm block mb-1">
                STEP 01
              </span>
              <strong className="text-edu-navy block text-sm mb-1">
                Requirement Mapping
              </strong>
              <span>
                Assessment of class strength, lab dimensions, curriculum demands and school budget.
              </span>
            </div>

            <div className="p-4 bg-white rounded-btn border border-edu-border">
              <span className="font-mono font-bold text-edu-green text-sm block mb-1">
                STEP 02
              </span>
              <strong className="text-edu-navy block text-sm mb-1">
                Specification Design
              </strong>
              <span>
                Recommending verified commercial hardware with genuine OEM onsite warranties.
              </span>
            </div>

            <div className="p-4 bg-white rounded-btn border border-edu-border">
              <span className="font-mono font-bold text-edu-green text-sm block mb-1">
                STEP 03
              </span>
              <strong className="text-edu-navy block text-sm mb-1">
                Turnkey Deployment
              </strong>
              <span>
                On-site unboxing, desk cabling, OS installation, and software image cloning.
              </span>
            </div>

            <div className="p-4 bg-white rounded-btn border border-edu-border">
              <span className="font-mono font-bold text-edu-green text-sm block mb-1">
                STEP 04
              </span>
              <strong className="text-edu-navy block text-sm mb-1">
                Support & Maintenance
              </strong>
              <span>
                Preventive hardware testing, software patches and committed technician SLAs.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Solutions Catalog"
            title="Comprehensive IT & Computing Services"
            description="Built to eliminate technical downtime and empower teachers with intuitive classroom technology."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {IT_SERVICES.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="institutional-card flex flex-col justify-between overflow-hidden bg-white border border-edu-border rounded-card group"
                >
                  <div>
                    <div className="relative h-48 w-full bg-edu-light-grey overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-edu-navy/10" />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComp className="w-4 h-4 text-edu-green" />
                        <span className="text-[10px] font-bold text-edu-muted uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-edu-navy mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-edu-muted leading-relaxed mb-4">
                        {item.desc}
                      </p>

                      <div className="pt-3 border-t border-edu-border">
                        <div className="text-[11px] font-semibold text-edu-navy mb-2">
                          Key Capabilities:
                        </div>
                        <ul className="space-y-1.5 text-xs text-edu-charcoal">
                          {item.specs.map((spec, sIdx) => (
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
                      <span>Request IT Specs & Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Modernize Your School's IT & Smart Classrooms"
        description="Schedule a technical consultation for computer laboratory refurbishment or interactive panel trials at your Delhi NCR campus."
        primaryButtonText="Discuss Your IT Requirements"
        primaryButtonHref="/quote"
      />
    </div>
  );
}
