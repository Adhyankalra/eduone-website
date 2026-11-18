import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  MessageSquare,
  Building2,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "Contact EDUONE – Institutional School Solutions Desk | Delhi NCR",
  description:
    "Get in touch with the EDUONE institutional team in Delhi NCR. Discuss school uniforms, IT hardware, CCTV surveillance, campus Wi-Fi and AMC support.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappDefaultMessage
  )}`;

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-edu-navy text-white py-16 lg:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/10">
              <span className="w-2 h-2 rounded-full bg-edu-green" />
              Direct Institutional Communication
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Let's Discuss Your School's Requirements.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Connect directly with our institutional solutions desk. Whether you
              require student uniforms, computer lab refurbishment, security audits or
              an annual maintenance contract, our team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Contact Form & Institutional Directory */}
      <section className="py-16 lg:py-20 bg-edu-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Institutional Desk Information */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Office Box */}
              <div className="institutional-card p-6 sm:p-8 bg-white border border-edu-border space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-edu-navy">
                    Delhi NCR Institutional Desk
                  </h3>
                  <p className="text-xs text-edu-muted mt-1">
                    Dedicated support for principals, school trustees and procurement
                    administrators.
                  </p>
                </div>

                <div className="space-y-4 text-sm text-edu-charcoal">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-btn bg-edu-light-grey border border-edu-border flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-edu-navy" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-edu-navy uppercase tracking-wider">
                        Operating Region
                      </div>
                      <div className="font-medium mt-0.5">{SITE_CONFIG.region}</div>
                      <div className="text-xs text-edu-muted mt-0.5">
                        {SITE_CONFIG.coverage}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-btn bg-edu-light-grey border border-edu-border flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-edu-navy" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-edu-navy uppercase tracking-wider">
                        Phone Helpline
                      </div>
                      <a
                        href={`tel:${SITE_CONFIG.phone}`}
                        className="font-medium text-edu-navy hover:underline block mt-0.5"
                      >
                        {SITE_CONFIG.phone}
                      </a>
                      <div className="text-xs text-edu-muted">
                        Monday to Saturday: 9:00 AM – 6:30 PM IST
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-btn bg-edu-light-grey border border-edu-border flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-edu-navy" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-edu-navy uppercase tracking-wider">
                        Official Procurement Email
                      </div>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="font-medium text-edu-navy hover:underline block mt-0.5"
                      >
                        {SITE_CONFIG.email}
                      </a>
                      <div className="text-xs text-edu-muted">
                        Send BOQ, RFP documents and tendering specifications
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-edu-border">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-edu-green hover:bg-edu-green-hover text-white text-sm font-semibold py-3 px-4 rounded-btn transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open Instant WhatsApp Conversation</span>
                  </a>
                </div>
              </div>

              {/* Protocol Assurance */}
              <div className="institutional-card p-6 bg-white border border-edu-border space-y-3">
                <div className="flex items-center gap-2 font-bold text-edu-navy text-sm">
                  <ShieldCheck className="w-4 h-4 text-edu-green" />
                  Institutional Privacy & Compliance
                </div>
                <p className="text-xs text-edu-muted leading-relaxed">
                  All institution inquiries, student enrollment figures, and technical
                  network topologies shared with EDUONE are handled under strict
                  confidentiality standards. We do not sell or share school contacts
                  with third-party marketing agencies.
                </p>
              </div>

              {/* Campus Walkthrough Box */}
              <div className="p-5 bg-edu-blue-light rounded-card border border-edu-border text-xs text-edu-charcoal space-y-2">
                <strong className="text-edu-navy block text-sm">
                  On-Site Campus Visits
                </strong>
                <p className="text-edu-muted leading-relaxed">
                  Our regional technical coordinators regularly visit educational
                  institutions in Delhi, Gurugram, Noida, Faridabad, and Greater Noida
                  for physical audits and committee presentations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
