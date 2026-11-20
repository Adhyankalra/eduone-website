import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  MessageSquare,
  Shield,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG, SOLUTIONS } from "@/lib/constants";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappDefaultMessage
  )}`;

  return (
    <footer className="bg-edu-navy-dark text-white border-t border-white/10">
      {/* Top pre-footer assurance band */}
      <div className="border-b border-white/10 bg-[#0A1E35] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-btn bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-edu-green" />
              </div>
              <div>
                <div className="font-semibold text-white">Single Point of Contact</div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Consolidated accountability across vendors & categories
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-btn bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-edu-green" />
              </div>
              <div>
                <div className="font-semibold text-white">Vetted Supplier Network</div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Strict quality adherence to institutional specifications
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-btn bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-edu-green" />
              </div>
              <div>
                <div className="font-semibold text-white">Dedicated On-Site AMC</div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Reliable technical support and preventive maintenance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="dark" size="md" asLink href="/" />

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              {SITE_CONFIG.shortDescription} We coordinate products, vetted suppliers,
              campus installation and ongoing technical support through one dependable
              point of contact.
            </p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-edu-green hover:bg-edu-green-hover text-white text-xs font-semibold px-4 py-2.5 rounded-btn transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Direct WhatsApp: +91 98110 99529</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 font-heading">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About EDUONE
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-300 hover:text-white transition-colors font-medium flex items-center gap-1.5"
                >
                  <span>Privacy Policy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 font-heading">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SOLUTIONS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Regional Office */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 font-heading">
              Institutional Desk
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-edu-green shrink-0 mt-0.5" />
                <span>
                  {SITE_CONFIG.region}
                  <br />
                  <span className="text-xs text-slate-400">
                    {SITE_CONFIG.coverage}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-edu-green shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors font-medium"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-edu-green shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>

              <div className="pt-2">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-1.5 text-xs text-edu-green hover:underline font-semibold"
                >
                  Submit Institutional RFP <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/10 text-xs text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p>
              &copy; {new Date().getFullYear()} EDUONE – Complete School Solutions. All rights reserved.
            </p>
            <span>•</span>
            <Link
              href="/privacy-policy"
              className="text-slate-300 hover:text-white underline transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-[11px] text-slate-400 text-center md:text-right">
            EDUONE simplifies school procurement by coordinating products, vetted
            vendors, installation and after-sales support through a single point of
            contact.
          </p>
        </div>
      </div>
    </footer>
  );
}
