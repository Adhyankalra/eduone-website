import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = variant === "dark";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-btn text-xs font-semibold tracking-wider uppercase mb-3 ${
            isDark
              ? "bg-white/10 text-white border border-white/10"
              : "bg-edu-blue-light text-edu-navy border border-edu-border"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isDark ? "bg-edu-green" : "bg-edu-green"
            }`}
          />
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight ${
          isDark ? "text-white" : "text-edu-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-slate-300" : "text-edu-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
