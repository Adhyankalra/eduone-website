import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Network,
  Wifi,
  Shield,
  Server,
  Cable,
  Activity,
  ArrowRight,
  CheckCircle2,
  Lock,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Campus Networking & High-Density Wi-Fi Solutions | EDUONE",
  description:
    "Structured LAN cabling, campus-wide Wi-Fi, enterprise switches, next-generation firewalls and cybersecurity for Delhi NCR educational institutions.",
};

const NETWORK_CAPABILITIES = [
  {
    title: "Structured LAN & Fiber Backbone",
    icon: Cable,
    desc: "Certified Cat6 and Cat6A structured cabling linking computer labs, administrative blocks, libraries and smart classrooms. Inter-building multi-strand optical fiber backbones ensuring gigabit speeds across separate campus wings.",
    points: [
      "Inter-building armored fiber optic cabling between campus blocks",
      "Standard 19-inch wall and floor-standing server rack installations",
      "Fluke-certified cable testing and permanent patch panel labeling",
      "Concealed conduits minimizing wire exposure in student corridors",
    ],
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Campus-Wide High-Density Wi-Fi",
    icon: Wifi,
    desc: "Enterprise Wi-Fi 6 access points capable of supporting 60+ simultaneous student tablets or laptops per classroom without drops. Centralized cloud or on-premise controller for seamless campus roaming.",
    points: [
      "Heatmap RF survey optimizing access point placement and channel overlap",
      "Isolated guest Wi-Fi network for visiting parents, inspectors and guests",
      "Bandwidth throttling ensuring administrative tasks are prioritized",
      "Band steering and fast roaming between academic blocks and auditoriums",
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Managed Switches & Core Routers",
    icon: Server,
    desc: "Layer 2 and Layer 3 Gigabit PoE+ switches powering smart boards, IP cameras, and Wi-Fi access points directly through ethernet cables. Dual-WAN load-balancing routers combining multiple ISP connections.",
    points: [
      "VLAN segregation separating exam records, CCTV traffic, and student Wi-Fi",
      "Power over Ethernet (PoE/PoE+) eliminating extra power adapters",
      "Dual internet failover preventing campus blackout during ISP outages",
      "Quality of Service (QoS) prioritization for online classes & ERP sync",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Firewalls & Student Safe Browsing",
    icon: Shield,
    desc: "Next-Generation Firewalls (NGFW) with advanced Unified Threat Management (UTM). Provides deep packet inspection, real-time intrusion prevention, and automated blocking of non-educational content.",
    points: [
      "Content filtering blocking adult, gaming, gambling, and violent websites",
      "Application control restricting social media, torrents, and gaming apps",
      "SafeSearch enforcement across Google, Bing and YouTube for all school devices",
      "Encrypted VPN access enabling remote staff and teachers to access files securely",
    ],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
  },
];

export default function NetworkingSolutionsPage() {
  return (
    <div className="flex flex-col">
      {/* Category Hero */}
      <section className="bg-edu-navy text-white py-16 lg:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/10">
              <Network className="w-3.5 h-3.5 text-edu-green" />
              Category 04 • Campus Connectivity & Cybersecurity
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Reliable Connectivity Across Your Campus.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We design, install and configure structured LAN cabling, high-density
              Wi-Fi 6 access points, enterprise switches and student-safe firewalls for
              schools in Delhi NCR.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-edu-green hover:bg-edu-green-hover text-white text-sm font-semibold px-6 py-3 rounded-btn transition-colors"
              >
                <span>Discuss Your Network Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-5 py-3 rounded-btn border border-white/20 transition-colors"
              >
                <span>Request Wi-Fi Heatmap Survey</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Network Architecture Overview */}
      <section className="py-12 bg-edu-light-grey border-b border-edu-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h3 className="text-lg font-bold text-edu-navy mb-2">
              The 3-Tier Campus Network Hierarchy
            </h3>
            <p className="text-xs text-edu-muted leading-relaxed">
              We engineer school networks to prevent single-point failures and isolate
              sensitive administrative records from public student browsing.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-edu-charcoal">
            <div className="p-5 bg-white rounded-btn border border-edu-border">
              <span className="font-mono text-edu-green font-bold block mb-1">
                TIER 1 • PERIMETER
              </span>
              <strong className="text-edu-navy text-sm block mb-1">
                Dual WAN + Next-Gen Firewall
              </strong>
              <span>
                Combines 2 separate internet providers for 100% uptime, filters all
                content and enforces student safe-search rules.
              </span>
            </div>

            <div className="p-5 bg-white rounded-btn border border-edu-border">
              <span className="font-mono text-edu-green font-bold block mb-1">
                TIER 2 • DISTRIBUTION
              </span>
              <strong className="text-edu-navy text-sm block mb-1">
                Core Fiber Switches & VLANs
              </strong>
              <span>
                Routes high-speed gigabit traffic between academic blocks with segmented
                VLANs for exams, accounts, and student labs.
              </span>
            </div>

            <div className="p-5 bg-white rounded-btn border border-edu-border">
              <span className="font-mono text-edu-green font-bold block mb-1">
                TIER 3 • ACCESS
              </span>
              <strong className="text-edu-navy text-sm block mb-1">
                PoE Switches & Wi-Fi 6 APs
              </strong>
              <span>
                Powers interactive smart boards, classroom access points and security
                cameras directly through network cabling.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Network Capabilities"
            title="Engineered for Academic Demands"
            description="From high-stakes online examinations to everyday classroom video streaming, our network solutions deliver uninterrupted bandwidth."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {NETWORK_CAPABILITIES.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="institutional-card flex flex-col justify-between overflow-hidden bg-white border border-edu-border rounded-card group"
                >
                  <div>
                    <div className="relative h-56 w-full bg-edu-light-grey overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-edu-navy/10" />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComp className="w-5 h-5 text-edu-green" />
                        <h3 className="text-xl font-bold text-edu-navy">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs text-edu-muted leading-relaxed mb-4">
                        {item.desc}
                      </p>

                      <div className="pt-3 border-t border-edu-border">
                        <div className="text-[11px] font-semibold text-edu-navy mb-2">
                          Engineering Specifications:
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
                      <span>Inquire About Network Implementation</span>
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
        title="Resolve School Wi-Fi Dead Zones & Cabling Bottlenecks"
        description="Our Delhi NCR network engineers can conduct an on-site RF heatmap survey and assess your school's structured cabling."
        primaryButtonText="Discuss Your Network Requirements"
        primaryButtonHref="/quote"
      />
    </div>
  );
}
