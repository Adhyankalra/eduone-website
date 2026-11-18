import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  CheckCircle2,
  Calendar,
  Clock,
  ShieldAlert,
  ArrowRight,
  MonitorCheck,
  Check,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "School AMC & Annual Maintenance Contracts | EDUONE Delhi NCR",
  description:
    "Annual maintenance contracts for schools: computer labs, smart classroom panels, CCTV systems, campus Wi-Fi networks and resident technician support across Delhi NCR.",
};

const AMC_SERVICES = [
  {
    title: "Computer Lab & Desktop AMCs",
    desc: "Routine physical cleaning, internal fan dust extraction, thermal repasting, OS optimization, driver updates and anti-virus status verification across student lab PCs and admin desks.",
    frequency: "Monthly or Bi-Monthly Scheduled Visits",
    specs: [
      "Hardware diagnostics identifying failing RAM modules or hard disks early",
      "Software image cloning to restore student lab PCs after semester exams",
      "Peripherals check (keyboards, optical mice, monitors and power cords)",
      "Standby backup desktop allocation during emergency repairs",
    ],
  },
  {
    title: "Interactive Smart Board & Projector Care",
    desc: "Preventive optical care and calibration for classroom interactive flat panels and auditorium projectors. Ensuring maximum brightness, color accuracy and glitch-free touch response.",
    frequency: "Pre-Term & Quarterly Servicing",
    specs: [
      "Touch screen sensor calibration and surface cleaning",
      "Projector air filter cleaning and lamp/laser life monitoring",
      "HDMI/VGA and audio cable testing at teacher lecterns",
      "Firmware updates for Android/Windows OPS embedded modules",
    ],
  },
  {
    title: "CCTV & Video Surveillance Maintenance",
    desc: "Critical health verification of the campus safety grid. Camera lens cleaning, focus adjustment, power supply checks, and thorough NVR hard drive integrity monitoring.",
    frequency: "Monthly Health Diagnostics",
    specs: [
      "Camera housing cleaning and spider-web removal on outdoor cameras",
      "Verification that 30/90 days retention compliance is strictly preserved",
      "Time synchronization across all cameras for legal evidentiary validity",
      "BNC/RJ45 connector crimping and weatherproof junction box inspection",
    ],
  },
  {
    title: "Campus Network & Wi-Fi Optimization",
    desc: "Ensuring server switches, Wi-Fi access points, and firewall security policies operate without packet drops, unauthorized user access, or performance degradation.",
    frequency: "Continuous Monitoring & Monthly Audits",
    specs: [
      "Managed switch port error checking and loop-detection verification",
      "Wi-Fi frequency channel re-balancing to overcome external interference",
      "Firewall security patch updates and content filter blacklist refresh",
      "Server rack cable untangling and thermal airflow verification",
    ],
  },
  {
    title: "Exam Period Standby Technician Support",
    desc: "Dedicated on-campus technical personnel positioned during critical board exams, annual day events, parent-teacher meetings, and teacher recruitment days.",
    frequency: "On-Demand Special Academic Events",
    specs: [
      "Standby printer technician during high-volume morning exam paper runs",
      "Audio-visual (AV) technicians managing auditorium sound and projectors",
      "Immediate troubleshooting for principal, director and examination desks",
      "Pre-event dry runs to verify all hardware components 24 hours prior",
    ],
  },
  {
    title: "Resident Campus IT Engineers",
    desc: "For institutions requiring everyday hands-on support, EDUONE provides trained, full-time resident technicians stationed on your school campus under corporate supervision.",
    frequency: "Full-Time Daily Stationing",
    specs: [
      "Dedicated resident technician reporting directly to the school IT head",
      "Immediate classroom assistance for teachers experiencing AV issues",
      "Centralized logging of every staff ticket and resolution time",
      "Corporate escalation and substitute engineer provision during leave",
    ],
  },
];

export default function AMCServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Category Hero */}
      <section className="bg-edu-navy text-white py-16 lg:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/10">
              <Wrench className="w-3.5 h-3.5 text-edu-green" />
              Category 05 • Annual Maintenance & SLA Support
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Keep Your School's Technology Running Reliably.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We provide structured Annual Maintenance Contracts (AMC), scheduled
              preventive servicing, exam standby support and resident technicians to
              ensure your school never experiences costly downtime.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-edu-green hover:bg-edu-green-hover text-white text-sm font-semibold px-6 py-3 rounded-btn transition-colors"
              >
                <span>Enquire About AMC Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-5 py-3 rounded-btn border border-white/20 transition-colors"
              >
                <span>Request Asset Inventory Audit</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Strategic Value of Coordinated AMCs */}
      <section className="py-16 bg-edu-light-grey border-b border-edu-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <SectionHeading
                eyebrow="Preventive Philosophy"
                title="Preventing Equipment Failure Before Exams Begin"
                description="Most schools only call a technician when a smart board stops responding during a lecture or an exam printer jams thirty minutes before morning assembly."
              />
              <p className="text-xs sm:text-sm text-edu-muted leading-relaxed">
                Emergency break-fix repairs are expensive, cause acute stress for
                school leadership, and disrupt the academic timetable. EDUONE's
                structured AMC model replaces chaotic reactive repairs with disciplined,
                routine preventive maintenance conducted during school holidays and
                weekends.
              </p>
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-btn border border-edu-border">
                  <strong className="text-edu-navy text-sm block mb-1">
                    Scheduled Holiday Servicing
                  </strong>
                  <span className="text-xs text-edu-muted">
                    Deep cleaning, software image restoration, and lab servicing done
                    during summer, autumn and winter breaks.
                  </span>
                </div>
                <div className="p-4 bg-white rounded-btn border border-edu-border">
                  <strong className="text-edu-navy text-sm block mb-1">
                    Single Contract Coverage
                  </strong>
                  <span className="text-xs text-edu-muted">
                    One unified AMC agreement covering computers, smart boards, CCTV
                    and network switches under one accountable team.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-card overflow-hidden border border-edu-border shadow-card bg-edu-light-grey">
                <div className="relative h-80 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80"
                    alt="Technician conducting computer maintenance for school lab"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-edu-navy/10" />
                </div>
                <div className="p-4 bg-white border-t border-edu-border text-xs text-edu-navy font-semibold">
                  Trained Technicians • Delhi NCR Institutional Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMC Services Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Maintenance Contracts"
            title="Comprehensive & Non-Comprehensive AMC Packages"
            description="Choose between full parts-inclusive agreements or labour-only preventive servicing plans structured around your school's equipment asset register."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AMC_SERVICES.map((item, idx) => (
              <div
                key={idx}
                className="institutional-card p-6 bg-white border border-edu-border rounded-card flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-edu-green uppercase tracking-wider block mb-1">
                    {item.frequency}
                  </span>
                  <h3 className="text-xl font-bold text-edu-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-edu-muted leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="pt-3 border-t border-edu-border">
                    <div className="text-[11px] font-semibold text-edu-navy mb-2">
                      Covered Scope:
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

                <div className="pt-6">
                  <Link
                    href="/quote"
                    className="w-full inline-flex items-center justify-between text-xs font-semibold py-2.5 px-3 rounded-btn border border-edu-border bg-edu-light-grey hover:bg-edu-navy hover:text-white transition-colors text-edu-navy"
                  >
                    <span>Request AMC Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Protect Your School's IT & Campus Infrastructure"
        description="Let our technical coordinators review your campus asset list and provide a tailored AMC contract proposal."
        primaryButtonText="Enquire About AMC Services"
        primaryButtonHref="/quote"
      />
    </div>
  );
}
