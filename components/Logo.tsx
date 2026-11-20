import React from "react";
import Link from "next/link";

export type LogoVariant =
  | "primary"
  | "dark"
  | "white"
  | "stacked"
  | "icon"
  | "icon-squircle"
  | "monochrome";

export type LogoSize = "sm" | "md" | "lg" | "xl";

export interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  showTagline?: boolean;
  className?: string;
  asLink?: boolean;
  href?: string;
}

/**
 * Pure SVG Emblem: Graduation Cap + Isometric "E" Book Base
 * Recreated pixel-perfect from the official EDUONE Brand Board.
 */
export function EmblemIcon({
  navyFill = "#102D4D",
  greenFill = "#16A36A",
  className = "w-full h-full",
}: {
  navyFill?: string;
  greenFill?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Isometric "E" Book Base */}
      <polygon
        points="113,54 112,67 66,89 38,79 37,94 70,111 113,90 113,106 68,129 20,107 20,57 66,73"
        fill={navyFill}
      />
      {/* Floating Middle Book Page Bar */}
      <polygon
        points="106,79 112,81 74,99 75,94"
        fill={navyFill}
      />
      {/* Graduation Mortarboard Diamond Cap */}
      <polygon
        points="68,10 128,35 68,62 8,39"
        fill={greenFill}
      />
      {/* Graduation Cap Tassel Cord & Brush */}
      <line
        x1="128"
        y1="35"
        x2="128"
        y2="57"
        stroke={greenFill}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <rect
        x="124"
        y="57"
        width="8"
        height="18"
        rx="3.5"
        fill={greenFill}
      />
    </svg>
  );
}

/**
 * Reusable EDUONE Logo Component
 * Supports Primary (light bg), Dark (navy bg), White, Stacked, and Icon variants.
 */
export default function Logo({
  variant = "primary",
  size = "md",
  showTagline = true,
  className = "",
  asLink = false,
  href = "/",
}: LogoProps) {
  // Color configuration by variant
  const isDark = variant === "dark";
  const isWhite = variant === "white";
  const isMono = variant === "monochrome";
  const isStacked = variant === "stacked";
  const isIconOnly = variant === "icon" || variant === "icon-squircle";

  // Emblem fills
  let emblemNavy = "#102D4D";
  let emblemGreen = "#16A36A";

  if (isDark) {
    emblemNavy = "#FFFFFF";
    emblemGreen = "#16A36A";
  } else if (isWhite) {
    emblemNavy = "#FFFFFF";
    emblemGreen = "#FFFFFF";
  } else if (isMono) {
    emblemNavy = "#1F2937";
    emblemGreen = "#1F2937";
  }

  // Size styling tokens
  const sizeStyles = {
    sm: {
      emblem: "w-8 h-8",
      divider: "h-6 mx-2.5",
      eduText: "text-xl",
      taglineText: "text-[8px] tracking-[0.16em] mt-0.5",
      stackedEmblem: "w-12 h-12",
      squircle: "w-8 h-8 rounded-lg p-1",
    },
    md: {
      emblem: "w-10 h-10",
      divider: "h-8 mx-3.5",
      eduText: "text-2xl",
      taglineText: "text-[9.5px] tracking-[0.2em] mt-0.5",
      stackedEmblem: "w-16 h-16",
      squircle: "w-10 h-10 rounded-xl p-1.5",
    },
    lg: {
      emblem: "w-12 h-12",
      divider: "h-10 mx-4",
      eduText: "text-3xl",
      taglineText: "text-[11px] tracking-[0.22em] mt-1",
      stackedEmblem: "w-20 h-20",
      squircle: "w-12 h-12 rounded-2xl p-2",
    },
    xl: {
      emblem: "w-16 h-16",
      divider: "h-12 mx-5",
      eduText: "text-4xl",
      taglineText: "text-xs tracking-[0.24em] mt-1.5",
      stackedEmblem: "w-24 h-24",
      squircle: "w-16 h-16 rounded-2xl p-2.5",
    },
  }[size];

  // Wordmark colors
  let eduColor = "text-edu-navy";
  let oneColor = "text-edu-green";
  let taglineColor = "text-edu-muted";
  let dividerColor = "bg-edu-navy/40";

  if (isDark) {
    eduColor = "text-white";
    oneColor = "text-edu-green";
    taglineColor = "text-slate-300";
    dividerColor = "bg-white/30";
  } else if (isWhite) {
    eduColor = "text-white";
    oneColor = "text-white";
    taglineColor = "text-white/80";
    dividerColor = "bg-white/40";
  } else if (isMono) {
    eduColor = "text-slate-800";
    oneColor = "text-slate-800";
    taglineColor = "text-slate-600";
    dividerColor = "bg-slate-400";
  }

  // 1. Icon Only: Squircle Variant
  if (variant === "icon-squircle") {
    const squircleNode = (
      <div
        className={`inline-flex items-center justify-center bg-edu-navy shadow-subtle shrink-0 ${sizeStyles.squircle} ${className}`}
        role="img"
        aria-label="EDUONE Icon"
      >
        <EmblemIcon navyFill="#FFFFFF" greenFill="#16A36A" />
      </div>
    );
    if (asLink) {
      return (
        <Link href={href} aria-label="EDUONE Home">
          {squircleNode}
        </Link>
      );
    }
    return squircleNode;
  }

  // 2. Icon Only: Transparent Emblem
  if (variant === "icon") {
    const iconNode = (
      <div
        className={`inline-flex items-center justify-center shrink-0 ${sizeStyles.emblem} ${className}`}
        role="img"
        aria-label="EDUONE Emblem"
      >
        <EmblemIcon navyFill={emblemNavy} greenFill={emblemGreen} />
      </div>
    );
    if (asLink) {
      return (
        <Link href={href} aria-label="EDUONE Home">
          {iconNode}
        </Link>
      );
    }
    return iconNode;
  }

  // 3. Stacked Variant (Centered)
  if (isStacked) {
    const stackedContent = (
      <div
        className={`inline-flex flex-col items-center text-center group ${className}`}
        role="img"
        aria-label="EDUONE – Complete School Solutions"
      >
        <div className={`mb-3 shrink-0 ${sizeStyles.stackedEmblem}`}>
          <EmblemIcon navyFill={emblemNavy} greenFill={emblemGreen} />
        </div>
        <div className="flex flex-col items-center">
          <span
            className={`font-black tracking-tight leading-none font-heading ${sizeStyles.eduText} ${eduColor}`}
          >
            EDU<span className={oneColor}>ONE</span>
          </span>
          {showTagline && (
            <span
              className={`font-semibold uppercase ${sizeStyles.taglineText} ${taglineColor}`}
            >
              Complete School Solutions
            </span>
          )}
        </div>
      </div>
    );

    if (asLink) {
      return (
        <Link href={href} className="focus:outline-none" aria-label="EDUONE Home">
          {stackedContent}
        </Link>
      );
    }
    return stackedContent;
  }

  // 4. Default: Horizontal Lockup (Emblem + Divider + Wordmark + Tagline)
  const horizontalContent = (
    <div
      className={`inline-flex items-center group select-none ${className}`}
      role="img"
      aria-label="EDUONE – Complete School Solutions"
    >
      {/* Official Graduation Cap & Book Emblem */}
      <div className={`shrink-0 ${sizeStyles.emblem}`}>
        <EmblemIcon navyFill={emblemNavy} greenFill={emblemGreen} />
      </div>

      {/* Thin Vertical Brand Divider */}
      <div className={`w-[1px] shrink-0 ${sizeStyles.divider} ${dividerColor}`} />

      {/* Wordmark & Tagline Lockup */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-black tracking-tight leading-none font-heading ${sizeStyles.eduText} ${eduColor}`}
        >
          EDU<span className={oneColor}>ONE</span>
        </span>
        {showTagline && (
          <span
            className={`font-semibold uppercase leading-tight ${sizeStyles.taglineText} ${taglineColor}`}
          >
            Complete School Solutions
          </span>
        )}
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Link
        href={href}
        className="focus:outline-none inline-flex items-center"
        aria-label="EDUONE – Complete School Solutions"
      >
        {horizontalContent}
      </Link>
    );
  }

  return horizontalContent;
}
