import React from "react";
import { CheckCircle2 } from "lucide-react";

interface Step {
  step: string;
  name: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps?: Step[];
  showNumbers?: boolean;
}

const DEFAULT_STEPS: Step[] = [
  {
    step: "01",
    name: "Understand",
    title: "Requirement Assessment",
    description: "We understand your school's exact needs, academic timelines, student volumes and technical specifications.",
  },
  {
    step: "02",
    name: "Recommend",
    title: "Solution & Proposal",
    description: "We identify suitable products, specifications and transparent quotations tailored to your institution.",
  },
  {
    step: "03",
    name: "Supply",
    title: "Coordinated Procurement",
    description: "We coordinate with vetted manufacturers and authorized distributors for verified quality and timely dispatch.",
  },
  {
    step: "04",
    name: "Install",
    title: "On-Site Implementation",
    description: "Our technical team oversees scheduled delivery, installation, configuration and campus commissioning.",
  },
  {
    step: "05",
    name: "Support",
    title: "Ongoing Maintenance",
    description: "We provide warranty support, preventive maintenance, scheduled checks and dependable AMC coverage.",
  },
];

export default function ProcessTimeline({ steps = DEFAULT_STEPS }: ProcessTimelineProps) {
  return (
    <div className="w-full">
      {/* Desktop Horizontal Process Flow */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-4 relative">
        {steps.map((item, index) => (
          <div
            key={item.step}
            className="group institutional-card p-5 bg-white flex flex-col justify-between relative hover:border-edu-navy transition-all"
          >
            <div>
              {/* Step number badge */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-edu-border">
                <span className="text-2xl font-black text-edu-navy font-mono">
                  {item.step}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-edu-light-grey text-edu-navy uppercase tracking-wider border border-edu-border">
                  {item.name}
                </span>
              </div>

              <h4 className="text-base font-bold text-edu-navy mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-edu-muted leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-edu-border/50 flex items-center gap-1.5 text-[11px] font-semibold text-edu-green">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Milestone Verified</span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile / Tablet Vertical Flow */}
      <div className="lg:hidden space-y-4">
        {steps.map((item, idx) => (
          <div
            key={item.step}
            className="institutional-card p-5 bg-white relative flex gap-4 items-start"
          >
            <div className="w-12 h-12 rounded-btn bg-edu-navy text-white flex flex-col items-center justify-center shrink-0">
              <span className="text-xs text-edu-green font-semibold">STEP</span>
              <span className="text-sm font-bold font-mono leading-none">
                {item.step}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-edu-green">
                  {item.name}
                </span>
              </div>
              <h4 className="text-base font-bold text-edu-navy">{item.title}</h4>
              <p className="mt-1 text-xs text-edu-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
