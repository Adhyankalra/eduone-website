import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, MessageSquare, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CTASection({
  title = "Let's Simplify Your School's Requirements.",
  description = "Tell us what your school needs. Our team will help you identify suitable products, infrastructure and support solutions with consolidated procurement and responsive after-sales service.",
  primaryButtonText = "Discuss Your Requirements",
  primaryButtonHref = "/quote",
  secondaryButtonText = "WhatsApp Us Directly",
  secondaryButtonHref,
}: CTASectionProps) {
  const whatsappUrl =
    secondaryButtonHref ||
    `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
      SITE_CONFIG.whatsappDefaultMessage
    )}`;

  return (
    <section className="bg-edu-navy py-16 lg:py-20 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-btn bg-white/10 text-white text-xs font-semibold tracking-wider uppercase border border-white/10">
            <ShieldCheck className="w-4 h-4 text-edu-green" />
            Institutional Solutions Partner • Delhi NCR
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryButtonHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-edu-green hover:bg-edu-green-hover text-white text-base font-semibold px-7 py-3.5 rounded-btn transition-colors shadow-subtle"
            >
              <span>{primaryButtonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-base font-semibold px-6 py-3.5 rounded-btn border border-white/20 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-edu-green" />
              <span>{secondaryButtonText}</span>
            </a>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-edu-green" />
              Single Point of Contact
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-edu-green" />
              Transparent Commercials
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-edu-green" />
              On-Site Commissioning & AMC
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-edu-green" />
              <a href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`} className="hover:text-white underline font-medium">
                Call {SITE_CONFIG.phone}
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
