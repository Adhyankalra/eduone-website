import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { SolutionItem } from "@/lib/constants";

interface ServiceCardProps {
  solution: SolutionItem;
  featured?: boolean;
}

export default function ServiceCard({ solution, featured = false }: ServiceCardProps) {
  return (
    <div
      className={`group institutional-card flex flex-col justify-between overflow-hidden bg-white ${
        featured ? "border-edu-navy/30 ring-1 ring-edu-navy/10" : ""
      }`}
    >
      <div>
        {/* Card Header Image */}
        <div className="relative h-48 w-full overflow-hidden bg-edu-light-grey">
          <Image
            src={solution.heroImage}
            alt={solution.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-edu-navy/10 group-hover:bg-transparent transition-colors" />
          <div className="absolute top-3 left-3">
            <span className="bg-white/95 text-edu-navy font-semibold text-xs px-2.5 py-1 rounded-btn shadow-subtle border border-edu-border">
              {solution.badge}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-edu-navy group-hover:text-edu-navy-dark transition-colors">
            {solution.title}
          </h3>
          <p className="mt-2.5 text-sm text-edu-muted leading-relaxed min-h-[40px]">
            {solution.summary}
          </p>

          {/* Quick bullet points */}
          <div className="mt-5 pt-4 border-t border-edu-border">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-edu-muted mb-2.5">
              Included Solutions:
            </div>
            <ul className="space-y-2 text-xs text-edu-charcoal">
              {solution.items.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-edu-green-light text-edu-green flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span className="line-clamp-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Card Footer / Action */}
      <div className="px-6 pb-6 pt-2">
        <Link
          href={solution.href}
          className="w-full inline-flex items-center justify-between text-sm font-semibold text-edu-navy py-2.5 px-3 rounded-btn border border-edu-border bg-edu-light-grey hover:bg-edu-navy hover:text-white transition-all group-hover:border-edu-navy"
        >
          <span>Explore Solutions</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
