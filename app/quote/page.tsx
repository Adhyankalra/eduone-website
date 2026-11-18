import React from "react";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Clock,
  HelpCircle,
} from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "Request an Institutional Quote | EDUONE School Solutions",
  description:
    "Submit your school's procurement, IT infrastructure or maintenance requirements to receive a comprehensive, itemized commercial proposal from EDUONE.",
};

export default function QuotePage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-edu-navy text-white py-16 lg:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/10">
              <span className="w-2 h-2 rounded-full bg-edu-green" />
              Institutional RFP & Proposal Desk
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Request a Comprehensive Institutional Proposal.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Tell us what your school requires. Whether you are budgeting for the
              upcoming academic year or need immediate campus technology deployment,
              our team will provide transparent, itemized commercial options.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 lg:py-20 bg-edu-light-grey">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            <QuoteForm />
          </div>

          {/* Quote Process Steps */}
          <div className="mt-16 pt-12 border-t border-edu-border">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-xl font-bold text-edu-navy">
                What Happens After You Submit?
              </h3>
              <p className="text-xs text-edu-muted mt-1">
                Our commercial desk operates with enterprise turnaround discipline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-edu-charcoal">
              <div className="p-5 bg-white rounded-card border border-edu-border">
                <span className="font-mono text-edu-green font-bold text-sm block mb-1">
                  STAGE 1 • 24 HOURS
                </span>
                <strong className="text-edu-navy text-sm block mb-1">
                  Scope Review & Verification
                </strong>
                <p className="text-edu-muted leading-relaxed">
                  A regional coordinator reviews your specifications, checks board
                  compliance and calls to clarify any specific nuances.
                </p>
              </div>

              <div className="p-5 bg-white rounded-card border border-edu-border">
                <span className="font-mono text-edu-green font-bold text-sm block mb-1">
                  STAGE 2 • 48-72 HOURS
                </span>
                <strong className="text-edu-navy text-sm block mb-1">
                  Itemized Proposal Preparation
                </strong>
                <p className="text-edu-muted leading-relaxed">
                  We prepare a formal proposal complete with datasheets, sample
                  availability, manufacturer warranties and delivery timelines.
                </p>
              </div>

              <div className="p-5 bg-white rounded-card border border-edu-border">
                <span className="font-mono text-edu-green font-bold text-sm block mb-1">
                  STAGE 3 • ON DEMAND
                </span>
                <strong className="text-edu-navy text-sm block mb-1">
                  Committee Presentation / Demo
                </strong>
                <p className="text-edu-muted leading-relaxed">
                  Our team presents the proposal to school trustees or management
                  committees and arranges on-campus product demonstrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
