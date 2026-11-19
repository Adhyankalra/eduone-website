import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Mail,
  Phone,
  ArrowRight,
  FileText,
  Lock,
  UserCheck,
  Eye,
  Server,
  RefreshCw,
  Building2,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy | EDUONE – Complete School Solutions",
  description:
    "Privacy Policy for EDUONE. Learn how we handle and protect personal and institutional information in compliance with India's Digital Personal Data Protection Act, 2023.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 19, 2026";

  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-edu-navy text-white py-14 lg:py-16 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-edu-green" />
              Legal & Compliance Documentation
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-heading">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              This Privacy Policy explains how EDUONE collects, uses, shares, and protects
              information provided through our corporate website and procurement inquiry channels.
            </p>
            <div className="pt-2 text-xs text-slate-400 font-mono">
              Last Updated: <span className="text-white font-semibold">{lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Policy Content */}
      <section className="py-14 lg:py-20 bg-edu-light-grey">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-card border border-edu-border p-6 sm:p-10 lg:p-12 shadow-subtle space-y-10 text-edu-charcoal">
            
            {/* Regulatory Notice Banner */}
            <div className="p-4 sm:p-5 bg-edu-blue-light border border-edu-border rounded-btn text-xs leading-relaxed text-edu-navy space-y-1">
              <div className="font-bold uppercase tracking-wider text-[11px] text-edu-navy flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-edu-green" />
                Compliance Notice – DPDP Act, 2023
              </div>
              <p className="text-edu-charcoal">
                EDUONE is an Indian B2B school procurement and technology services partner.
                We respect privacy rights and process personal data in accordance with
                applicable Indian law, including the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> and the Information Technology Act, 2000.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-edu-navy font-heading border-b border-edu-border pb-2">
                1. Introduction
              </h2>
              <p className="text-sm text-edu-muted leading-relaxed">
                Welcome to <strong>EDUONE – Complete School Solutions</strong> ("EDUONE", "we", "us", or "our").
                EDUONE operates as an integrated procurement, technology infrastructure, and technical support coordinator
                for private schools, educational trusts, colleges, and school chains.
              </p>
              <p className="text-sm text-edu-muted leading-relaxed">
                We are committed to maintaining the confidentiality, integrity, and security of personal and institutional
                information entrusted to us by school representatives, principals, trustees, procurement officers,
                and administrative personnel who interact with our website (<span className="text-edu-navy font-medium">eduone.in</span>) or submit inquiries through our portal.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-edu-navy font-heading border-b border-edu-border pb-2">
                2. Information We Collect
              </h2>
              <p className="text-sm text-edu-muted leading-relaxed">
                We collect information directly from you when you submit an institutional inquiry, request a quotation,
                contact our support desk, or communicate with our coordinators.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs text-edu-charcoal">
                <div className="p-3.5 bg-edu-light-grey rounded-btn border border-edu-border">
                  <strong className="text-edu-navy block text-sm mb-1">Directly Submitted Details</strong>
                  <ul className="space-y-1 text-edu-muted">
                    <li>• Full Name and Designation (e.g. Principal, Director, IT Head)</li>
                    <li>• School or Educational Institution Name</li>
                    <li>• Official / Work Email Address</li>
                    <li>• Contact Phone / Mobile Number</li>
                    <li>• City, District, or State of the Campus</li>
                  </ul>
                </div>

                <div className="p-3.5 bg-edu-light-grey rounded-btn border border-edu-border">
                  <strong className="text-edu-navy block text-sm mb-1">Inquiry & Procurement Scope</strong>
                  <ul className="space-y-1 text-edu-muted">
                    <li>• Selected Service Categories and Product Requirements</li>
                    <li>• Approximate Quantities (e.g. uniform counts, PC seats)</li>
                    <li>• Project Notes, Specifications, or Attached BOQ documents</li>
                    <li>• Academic Calendar Timelines or Urgency Details</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-edu-muted leading-relaxed pt-1">
                <strong>Basic Technical Information:</strong> When you access our website, our web server may log standard,
                non-identifying technical data such as IP address, browser type, device category, referring URL, and page timestamps
                to maintain platform stability, prevent malicious activity, and optimize page load speed.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-edu-navy font-heading border-b border-edu-border pb-2">
                3. How We Use Information
              </h2>
              <p className="text-sm text-edu-muted leading-relaxed">
                EDUONE uses the collected information strictly for legitimate institutional and commercial purposes, including:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-edu-muted list-disc pl-5 leading-relaxed">
                <li><strong>Responding to Inquiries:</strong> Reviewing and addressing institutional requests for information, catalog requests, or pricing queries.</li>
                <li><strong>Preparing Quotations & Proposals:</strong> Formulating itemized commercial bids, technical datasheets, sizing camp schedules, or Bill of Quantities (BOQ).</li>
                <li><strong>Service Discussion:</strong> Conducting technical discussions regarding uniforms, student essentials, IT hardware, interactive smart boards, campus CCTV, Wi-Fi networks, and firewalls.</li>
                <li><strong>Installation, Maintenance & Support:</strong> Coordinating delivery milestones, on-site campus technician visits, installation, and Annual Maintenance Contracts (AMC).</li>
                <li><strong>Operational Communication:</strong> Following up via email, telephone, or WhatsApp regarding pending inquiries or ongoing project handovers.</li>
                <li><strong>Platform Optimization:</strong> Analyzing website performance and user flows to maintain usability and responsiveness.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-edu-navy font-heading border-b border-edu-border pb-2">
                4. Sharing of Information
              </h2>
              <p className="text-sm text-edu-muted leading-relaxed">
                <strong>We do not sell, rent, or trade your personal or institutional information to third-party advertisers or brokers.</strong>
              </p>
              <p className="text-sm text-edu-muted leading-relaxed">
                Information is disclosed only on a need-to-know basis under the following limited circumstances:
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-edu-muted list-disc pl-5 leading-relaxed">
                <li><strong>Authorized Suppliers & OEM Partners:</strong> Shared with vetted fabricators, hardware manufacturers, or distributors strictly where necessary to generate authentic pricing, prepare product samples, or fulfill orders.</li>
                <li><strong>Technical Contractors & Logistics:</strong> Shared with on-site installation technicians, structured cabling teams, or delivery personnel involved in fulfilling your school's order.</li>
                <li><strong>Service Providers:</strong> Shared with hosting providers (e.g. Vercel), transaction email dispatchers, and messaging tools utilized solely for business operations under strict data confidentiality obligations.</li>
                <li><strong>Legal Requirements:</strong> Disclosed if required by a court order, statutory regulation, or law enforcement agency acting in accordance with Indian law.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-edu-navy font-heading border-b border-edu-border pb-2">
                5. Data Security
              </h2>
              <p className="text-sm text-edu-muted leading-relaxed">
                We implement reasonable administrative, technical, and organizational measures to protect personal data
                from unauthorized access, alteration, disclosure, or accidental destruction.
              </p>
              <p className="text-sm text-edu-muted leading-relaxed">
                All communications between your browser and our website are transmitted over secure HTTPS using TLS protocols.
                Access to submitted institutional inquiries is restricted to authorized coordinators with operational need.
                While we exercise industry-standard care, please note that no method of electronic storage or Internet transmission
                is completely infallible.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-edu-navy font-heading border-b border-edu-border pb-2">
                6. Data Retention
              </h2>
              <p className="text-sm text-edu-muted leading-relaxed">
                We retain personal and institutional information only for as long as is necessary to fulfill the specific purposes
                outlined in this policy—such as addressing your inquiry, fulfilling contractual procurement commitments,
                honoring warranty periods, maintaining AMC records, or complying with statutory tax and accounting obligations under Indian law.
              </p>
              <p className="text-sm text-edu-muted leading-relaxed">
                When information is no longer needed, it is deleted or de-identified in a secure manner.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-edu-navy font-heading border-b border-edu-border pb-2">
                7. Cookies and Analytics
              </h2>
              <p className="text-sm text-edu-muted leading-relaxed">
                Our website uses only essential session and performance cookies strictly necessary for core navigation,
                page rendering, and server security. We do not employ third-party advertising tracking cookies or cross-site tracking pixels.
              </p>
              <p className="text-sm text-edu-muted leading-relaxed">
                You can manage or disable cookies via your browser settings. However, disabling essential cookies may impact certain
                website functionalities such as form submission states.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-edu-navy font-heading border-b border-edu-border pb-2">
                8. Third-Party Services
              </h2>
              <p className="text-sm text-edu-muted leading-relaxed">
                Our website utilizes select reputable third-party infrastructure providers to deliver a fast and reliable experience:
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-edu-muted list-disc pl-5 leading-relaxed">
                <li><strong>Cloud Hosting:</strong> Hosted securely via Vercel Inc., operating distributed global edge nodes with encrypted transit.</li>
                <li><strong>WhatsApp Messaging:</strong> When you initiate contact via WhatsApp links, communication takes place directly on the WhatsApp platform subject to WhatsApp / Meta's Privacy Policy.</li>
                <li><strong>Email Routing:</strong> Inquiries submitted via web forms may be routed through transactional email services to reach our official inbox.</li>
              </ul>
              <p className="text-xs text-edu-muted leading-relaxed">
                We encourage you to review the privacy notices of external platforms when interacting with them directly.
              </p>
            </div>

            {/* Section 9 */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-edu-navy font-heading border-b border-edu-border pb-2">
                9. User Rights and Data Requests
              </h2>
              <p className="text-sm text-edu-muted leading-relaxed">
                Under applicable Indian data protection laws, including the DPDP Act, 2023, individuals whose data is processed by us have specific rights:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-edu-charcoal pt-1">
                <div className="p-3 bg-edu-light-grey rounded-btn border border-edu-border">
                  <strong className="text-edu-navy block mb-0.5">Right to Access & Review</strong>
                  <span className="text-edu-muted">Request a summary of personal information we have received from your institution.</span>
                </div>
                <div className="p-3 bg-edu-light-grey rounded-btn border border-edu-border">
                  <strong className="text-edu-navy block mb-0.5">Right to Correction</strong>
                  <span className="text-edu-muted">Request correction of inaccurate or outdated contact or organizational information.</span>
                </div>
                <div className="p-3 bg-edu-light-grey rounded-btn border border-edu-border">
                  <strong className="text-edu-navy block mb-0.5">Right to Erasure</strong>
                  <span className="text-edu-muted">Request deletion of your inquiry details when there is no ongoing contractual or legal obligation.</span>
                </div>
                <div className="p-3 bg-edu-light-grey rounded-btn border border-edu-border">
                  <strong className="text-edu-navy block mb-0.5">Withdrawal of Consent</strong>
                  <span className="text-edu-muted">Withdraw consent for further follow-up communications at any time.</span>
                </div>
              </div>
              <p className="text-xs text-edu-muted leading-relaxed pt-1">
                To exercise any of these rights, please write to us at <a href={`mailto:${SITE_CONFIG.email}`} className="text-edu-navy font-semibold underline">{SITE_CONFIG.email}</a>.
                We will respond within a reasonable timeframe in accordance with statutory guidelines.
              </p>
            </div>

            {/* Section 10 */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-edu-navy font-heading border-b border-edu-border pb-2">
                10. Children's Privacy
              </h2>
              <p className="text-sm text-edu-muted leading-relaxed">
                EDUONE is an institutional B2B service. Our website and digital forms are directed exclusively at adult decision-makers,
                school principals, administrative directors, procurement heads, and IT staff.
              </p>
              <p className="text-sm text-edu-muted leading-relaxed">
                We do not knowingly solicit or collect personal information directly from minor children under 18 years of age.
                Schools, administrators, and parents should not submit personal details of individual students through general public enquiry forms.
                Any student-level data required for uniform sizing or identity card issuance is coordinated under specific, bilaterally agreed institutional contracts with appropriate authorizations.
              </p>
            </div>

            {/* Section 11 */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-edu-navy font-heading border-b border-edu-border pb-2">
                11. Policy Updates
              </h2>
              <p className="text-sm text-edu-muted leading-relaxed">
                We may review and update this Privacy Policy from time to time to reflect operational modifications,
                evolving technical practices, or legislative updates under Indian law.
              </p>
              <p className="text-sm text-edu-muted leading-relaxed">
                When changes are made, the revised policy will be posted on this page with an updated "Last Updated" date.
                We encourage institutional users to periodically check this page for any revisions.
              </p>
            </div>

            {/* Section 12 */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-edu-navy font-heading border-b border-edu-border pb-2">
                12. Contact Us
              </h2>
              <p className="text-sm text-edu-muted leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data handling practices,
                please contact our institutional coordination desk:
              </p>

              <div className="p-5 bg-edu-light-grey rounded-btn border border-edu-border space-y-2 text-xs sm:text-sm text-edu-charcoal">
                <div className="font-bold text-edu-navy text-base">EDUONE – Complete School Solutions</div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-edu-green shrink-0" />
                  <span>Official Email: </span>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="font-semibold text-edu-navy hover:underline">
                    {SITE_CONFIG.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-edu-green shrink-0" />
                  <span>Contact Number: </span>
                  <a href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`} className="font-semibold text-edu-navy hover:underline">
                    {SITE_CONFIG.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-edu-green shrink-0" />
                  <span>Operating Region: </span>
                  <span>{SITE_CONFIG.region} ({SITE_CONFIG.coverage})</span>
                </div>
              </div>
            </div>

            {/* Navigation back */}
            <div className="pt-6 border-t border-edu-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
              <Link
                href="/"
                className="text-edu-navy font-semibold hover:underline inline-flex items-center gap-1"
              >
                ← Return to Homepage
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-btn bg-edu-navy text-white hover:bg-edu-navy-dark transition-colors font-medium"
              >
                <span>Have an Inquiry? Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
