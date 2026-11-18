import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Camera,
  HardDrive,
  Fingerprint,
  Users2,
  Lock,
  ArrowRight,
  Eye,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "School CCTV & Campus Security Systems | EDUONE Delhi NCR",
  description:
    "Integrated school security: IP CCTV surveillance, NVR video storage, biometric staff attendance, smart access control and visitor management for Delhi NCR campuses.",
};

const SECURITY_SOLUTIONS = [
  {
    title: "High-Definition IP CCTV Systems",
    icon: Camera,
    tagline: "Classroom, Corridor & Playground Surveillance",
    desc: "Commercial 4MP/8MP IP cameras with infrared night vision, wide-dynamic range (WDR) for backlit corridors, and weatherproof IP67 enclosures for outdoor school grounds.",
    points: [
      "Dome cameras for classrooms and quiet study corridors",
      "Vandal-resistant bullet cameras for campus perimeter and boundary walls",
      "Pan-Tilt-Zoom (PTZ) 360-degree cameras for sports fields and bus parking zones",
      "AI tripwire detection and perimeter intrusion alerts",
    ],
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "NVR & Extended Video Storage",
    icon: HardDrive,
    tagline: "Regulatory Compliance & Video Retention",
    desc: "Enterprise Network Video Recorders (NVR) with surveillance-grade Western Digital/Seagate hard drives engineered for 24/7 continuous writing and mandatory 30 to 90 days retention compliance.",
    points: [
      "16, 32, 64 and 128 channel NVR recording consoles",
      "Redundant storage options (RAID) preventing video loss during disk failure",
      "Watermarked video export for official administrative documentation",
      "Centralized principal viewing console and remote security desk feeds",
    ],
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Biometric Staff Attendance Systems",
    icon: Fingerprint,
    tagline: "Touchless Face Recognition & Fingerprint Terminals",
    desc: "Government and board compliant biometric terminals for teaching and non-teaching staff. Featuring high-speed facial recognition with live anti-spoofing detection and automated payroll sync.",
    points: [
      "Sub-second recognition speed preventing morning staff bottlenecks",
      "Contactless infrared temperature & mask verification compatibility",
      "Battery backup functionality operating during campus power cuts",
      "Direct integration with leading school ERP attendance databases",
    ],
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Access Control & Turnstiles",
    icon: Lock,
    tagline: "Authorized Entry for Secure Zones",
    desc: "Restricting unauthorized access to critical zones including computer laboratories, examination vaults, administrative server rooms, and hostel entryways.",
    points: [
      "Electromagnetic locks and emergency breakaway panic hardware",
      "RFID card and PIN keypad authorization mechanisms",
      "Tripod and flap barrier turnstiles for main campus pedestrian gates",
      "Detailed access audit logs tracking timestamps for every entry",
    ],
    image:
      "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Digital Visitor Management Systems",
    icon: Users2,
    tagline: "Parent & Contractor Identity Verification",
    desc: "Replacing paper visitor registers with professional touchscreen kiosks. Captures visitor photography, mobile OTP verification, host approval and prints visitor badges instantly.",
    points: [
      "Touchscreen receptionist tablet with instant camera capture",
      "Automated SMS or WhatsApp notification to the host faculty member",
      "Thermal badge printing with time-stamped visitor photo",
      "Overstay alerts and digital blacklist monitoring for campus security",
    ],
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Perimeter & Gate Security Infrastructure",
    icon: Eye,
    tagline: "Boom Barriers & Number Plate Recognition (ANPR)",
    desc: "Vehicle access management for school buses, staff vehicles, and parent drop-off zones. Fast-operating motorized boom barriers with optional automatic number plate recognition.",
    points: [
      "High-speed motorized boom barriers designed for heavy peak morning traffic",
      "ANPR cameras capturing registration numbers of all vehicles entering campus",
      "Under-vehicle surveillance mirrors and handheld metal detectors",
      "Emergency panic button alarms connecting security gate to main office",
    ],
    image:
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800&q=80",
  },
];

export default function SecuritySurveillancePage() {
  return (
    <div className="flex flex-col">
      {/* Category Hero */}
      <section className="bg-edu-navy text-white py-16 lg:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-edu-green" />
              Category 03 • Campus Safety & Surveillance
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Better Visibility. Smarter Campus Security.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We design, supply and coordinate end-to-end security architectures:
              regulatory-compliant CCTV, biometric attendance, smart access control and
              visitor management systems tailored to your campus layout.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-edu-green hover:bg-edu-green-hover text-white text-sm font-semibold px-6 py-3 rounded-btn transition-colors"
              >
                <span>Request a Security Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-5 py-3 rounded-btn border border-white/20 transition-colors"
              >
                <span>Book a Campus Security Walkthrough</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Customization Explainer */}
      <section className="py-16 bg-edu-light-grey border-b border-edu-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Custom Engineering"
              title="Security Solutions Designed Around Your Campus"
              description="No two school campuses are identical. A comprehensive security deployment depends directly on campus acreage, perimeter vulnerabilities, entry gates, lighting conditions and local regulatory guidelines."
            />
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-card border border-edu-border">
              <div className="font-bold text-edu-navy text-base mb-2">
                1. Campus Layout Mapping
              </div>
              <p className="text-xs text-edu-muted leading-relaxed">
                We conduct physical walkthroughs identifying blind spots in stairwells,
                behind sports pavilions, bus bays and remote utility rooms.
              </p>
            </div>

            <div className="p-6 bg-white rounded-card border border-edu-border">
              <div className="font-bold text-edu-navy text-base mb-2">
                2. Storage & Bandwidth Sizing
              </div>
              <p className="text-xs text-edu-muted leading-relaxed">
                Ensuring video compression (H.265+) and hard drive arrays accommodate
                mandatory 30 to 90 days footage preservation requirements.
              </p>
            </div>

            <div className="p-6 bg-white rounded-card border border-edu-border">
              <div className="font-bold text-edu-navy text-base mb-2">
                3. Privacy & Governance
              </div>
              <p className="text-xs text-edu-muted leading-relaxed">
                Configuring role-based access so only authorized principals, trustees,
                and police authorities can review or export archived video.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Security Modules"
            title="Complete Campus Protection Capabilities"
            description="Integrated technologies that give administrators complete visibility and proactive control."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SECURITY_SOLUTIONS.map((item, idx) => {
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
                          {item.tagline}
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
                          Standard Features:
                        </div>
                        <ul className="space-y-1.5 text-xs text-edu-charcoal">
                          {item.points.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-1.5">
                              <span className="text-edu-green font-bold">✓</span>
                              <span>{pt}</span>
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
                      <span>Inquire About Security Specs</span>
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
        title="Upgrade Your Campus Safety and Surveillance"
        description="Book a technical audit of your school's current CCTV coverage, NVR health, and visitor security protocol across Delhi NCR."
        primaryButtonText="Request a Security Assessment"
        primaryButtonHref="/quote"
      />
    </div>
  );
}
