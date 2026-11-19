import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  MessageSquare,
  Building2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "Contact Us | EDUONE – Complete School Solutions",
  description:
    "Connect directly with EDUONE – Complete School Solutions in Delhi NCR. Call +91 98110 99529 or email cyber.itsolutions@gmail.com for school uniforms, IT hardware, CCTV surveillance and maintenance support.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappDefaultMessage
  )}`;

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-edu-navy text-white py-14 lg:py-18 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/10">
              <span className="w-2 h-2 rounded-full bg-edu-green" />
              Institutional Solutions Desk • Delhi NCR
            </div>
            
            {/* Required exact heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-heading">
              Let's Build Better-Equipped Schools Together.
            </h1>

            {/* Short professional introduction */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Connect directly with EDUONE – Complete School Solutions. Whether your
              school requires customized student uniforms, computer laboratory modernization,
              campus-wide CCTV surveillance, high-density Wi-Fi or dependable annual
              maintenance, our institutional team is ready to assist.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300">
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-edu-green" />
                <span>{SITE_CONFIG.phone}</span>
              </a>
              <span>•</span>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-edu-green" />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <span>•</span>
              <span className="text-slate-400">{SITE_CONFIG.coverage}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Contact Form & Institutional Directory */}
      <section className="py-14 lg:py-20 bg-edu-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Institutional Desk Information */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Office Box */}
              <div className="institutional-card p-6 sm:p-8 bg-white border border-edu-border space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-edu-navy font-heading">
                    Official Institutional Contact
                  </h3>
                  <p className="text-xs text-edu-muted mt-1 leading-relaxed">
                    Direct communication channels for school owners, principals,
                    trustees, administrators and procurement committees.
                  </p>
                </div>

                <div className="space-y-4 text-sm text-edu-charcoal">
                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-btn bg-edu-light-grey border border-edu-border flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-edu-navy" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-edu-navy uppercase tracking-wider">
                        Contact Number
                      </div>
                      <a
                        href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`}
                        className="font-bold text-base text-edu-navy hover:text-edu-navy-dark hover:underline block mt-0.5"
                      >
                        {SITE_CONFIG.phone}
                      </a>
                      <div className="text-xs text-edu-muted mt-0.5">
                        Mon to Sat: 9:00 AM – 6:30 PM IST
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-btn bg-edu-light-grey border border-edu-border flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-edu-navy" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-edu-navy uppercase tracking-wider">
                        Official Email Address
                      </div>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="font-semibold text-sm text-edu-navy hover:text-edu-navy-dark hover:underline block mt-0.5 break-all"
                      >
                        {SITE_CONFIG.email}
                      </a>
                      <div className="text-xs text-edu-muted mt-0.5">
                        Submit RFPs, BOQs and official tender specifications
                      </div>
                    </div>
                  </div>

                  {/* Operating Region */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-btn bg-edu-light-grey border border-edu-border flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-edu-navy" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-edu-navy uppercase tracking-wider">
                        Service Region
                      </div>
                      <div className="font-semibold text-sm text-edu-navy mt-0.5">
                        {SITE_CONFIG.region}
                      </div>
                      <div className="text-xs text-edu-muted mt-0.5">
                        {SITE_CONFIG.coverage}
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <div className="pt-2 border-t border-edu-border">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-edu-green hover:bg-edu-green-hover text-white text-sm font-semibold py-3.5 px-4 rounded-btn transition-colors shadow-subtle"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open WhatsApp Chat: +91 98110 99529</span>
                  </a>
                </div>
              </div>

              {/* Protocol Assurance */}
              <div className="institutional-card p-6 bg-white border border-edu-border space-y-2.5">
                <div className="flex items-center gap-2 font-bold text-edu-navy text-sm font-heading">
                  <ShieldCheck className="w-4 h-4 text-edu-green" />
                  Institutional Confidentiality
                </div>
                <p className="text-xs text-edu-muted leading-relaxed">
                  All institution requirements, student enrollment numbers, and campus
                  specifications shared with EDUONE are handled with strict commercial confidentiality.
                  We process data in compliance with our{" "}
                  <Link href="/privacy-policy" className="text-edu-navy underline font-medium hover:text-edu-navy-dark">
                    Privacy Policy
                  </Link>.
                </p>
              </div>

              {/* Campus Walkthrough Box */}
              <div className="p-5 bg-edu-blue-light rounded-card border border-edu-border text-xs text-edu-charcoal space-y-1.5">
                <strong className="text-edu-navy block text-sm font-heading">
                  On-Campus Technical Evaluations
                </strong>
                <p className="text-edu-muted leading-relaxed">
                  Our regional technical coordinators visit private educational
                  institutions across Delhi, Noida, Greater Noida, Gurugram, and Faridabad
                  for physical audits, sample showcases, and management presentations.
                </p>
                <div className="pt-1">
                  <Link
                    href="/quote"
                    className="text-edu-navy font-semibold inline-flex items-center gap-1 hover:underline text-xs"
                  >
                    <span>Request an on-site campus audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
