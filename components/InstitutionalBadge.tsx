import React from "react";

interface InstitutionalBadgeProps {
  label: string;
  variant?: "navy" | "green" | "grey" | "white";
  className?: string;
  icon?: React.ReactNode;
}

export default function InstitutionalBadge({
  label,
  variant = "grey",
  className = "",
  icon,
}: InstitutionalBadgeProps) {
  const variantStyles = {
    navy: "bg-edu-navy text-white border-edu-navy",
    green: "bg-edu-green-light text-edu-green border-edu-green/20 font-semibold",
    grey: "bg-edu-light-grey text-edu-navy border-edu-border font-medium",
    white: "bg-white text-edu-navy border-edu-border font-medium shadow-subtle",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-btn text-xs border ${variantStyles[variant]} ${className}`}
    >
      {icon}
      {label}
    </span>
  );
}
