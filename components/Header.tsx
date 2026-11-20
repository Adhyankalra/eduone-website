"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  Shirt,
  Monitor,
  ShieldCheck,
  Network,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, SOLUTIONS } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Shirt,
  Monitor,
  ShieldCheck,
  Network,
  Wrench,
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSolutionsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  }, [pathname]);

  const isCurrent = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top institutional utility bar */}
      <div className="bg-edu-navy-dark text-white border-b border-white/10 text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6 text-slate-300">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-edu-green inline-block"></span>
              {SITE_CONFIG.positioning}
            </span>
            <span className="text-slate-400">|</span>
            <span>Serving Schools across Delhi NCR</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-edu-green" />
              <span>{SITE_CONFIG.email}</span>
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-edu-green" />
              <span>{SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-edu-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Official Brand Logo */}
            <Logo variant="primary" size="md" asLink href="/" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                if (link.children) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      ref={dropdownRef}
                      onMouseEnter={() => setSolutionsDropdownOpen(true)}
                      onMouseLeave={() => setSolutionsDropdownOpen(false)}
                    >
                      <button
                        onClick={() =>
                          setSolutionsDropdownOpen(!solutionsDropdownOpen)
                        }
                        className={`flex items-center gap-1 py-2 text-sm font-medium transition-colors ${
                          pathname.startsWith("/solutions")
                            ? "text-edu-navy font-semibold"
                            : "text-edu-charcoal hover:text-edu-navy"
                        }`}
                        aria-expanded={solutionsDropdownOpen}
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-150 ${
                            solutionsDropdownOpen ? "rotate-180 text-edu-green" : "text-edu-muted"
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {solutionsDropdownOpen && (
                        <div className="absolute top-full left-0 w-[420px] bg-white border border-edu-border rounded-card shadow-card-hover p-3 mt-1 grid gap-1 animate-in fade-in slide-in-from-top-1 duration-150">
                          <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-edu-muted border-b border-edu-border mb-1">
                            Integrated Solutions
                          </div>
                          {link.children.map((child) => {
                            const solution = SOLUTIONS.find(
                              (s) => s.href === child.href
                            );
                            const IconComponent = solution
                              ? ICON_MAP[solution.iconName] || Monitor
                              : Monitor;
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`flex items-start gap-3 p-2.5 rounded-btn transition-colors ${
                                  pathname === child.href
                                    ? "bg-edu-light-grey text-edu-navy font-medium"
                                    : "hover:bg-edu-light-grey text-edu-charcoal"
                                }`}
                                onClick={() => setSolutionsDropdownOpen(false)}
                              >
                                <div className="w-8 h-8 rounded-btn bg-edu-blue-light text-edu-navy flex items-center justify-center shrink-0 mt-0.5 border border-edu-border">
                                  <IconComponent className="w-4 h-4 text-edu-navy" />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-edu-navy flex items-center gap-2">
                                    {child.label}
                                  </div>
                                  <div className="text-xs text-edu-muted mt-0.5 line-clamp-1 leading-relaxed">
                                    {child.description}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                          <div className="mt-2 pt-2 border-t border-edu-border px-3 py-1.5 bg-edu-light-grey rounded-btn flex items-center justify-between text-xs text-edu-navy">
                            <span className="font-medium">
                              Need an all-inclusive proposal?
                            </span>
                            <Link
                              href="/quote"
                              className="text-edu-green font-semibold flex items-center gap-1 hover:underline"
                            >
                              Request Quote <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors py-2 relative ${
                      isCurrent(link.href)
                        ? "text-edu-navy font-semibold"
                        : "text-edu-charcoal hover:text-edu-navy"
                    }`}
                  >
                    {link.label}
                    {isCurrent(link.href) && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-edu-navy" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="text-sm font-medium text-edu-navy px-3.5 py-2 rounded-btn border border-edu-border hover:bg-edu-light-grey transition-colors"
              >
                Direct Enquiry
              </Link>
              <Link
                href="/quote"
                className="text-sm font-medium bg-edu-navy hover:bg-edu-navy-dark text-white px-4 py-2.5 rounded-btn transition-colors shadow-subtle flex items-center gap-1.5"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/quote"
                className="text-xs font-semibold bg-edu-navy text-white px-3 py-2 rounded-btn"
              >
                Quote
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-btn text-edu-navy hover:bg-edu-light-grey border border-edu-border focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-edu-border px-4 pt-3 pb-6 space-y-3">
            <div className="space-y-1">
              <Link
                href="/"
                className={`block px-3 py-2 rounded-btn text-sm font-medium ${
                  pathname === "/"
                    ? "bg-edu-light-grey text-edu-navy font-semibold"
                    : "text-edu-charcoal hover:bg-edu-light-grey"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 rounded-btn text-sm font-medium ${
                  pathname === "/about"
                    ? "bg-edu-light-grey text-edu-navy font-semibold"
                    : "text-edu-charcoal hover:bg-edu-light-grey"
                }`}
              >
                About EDUONE
              </Link>

              <div className="pt-2 pb-1">
                <div className="px-3 text-xs font-semibold uppercase tracking-wider text-edu-muted mb-1.5">
                  Solutions & Infrastructure
                </div>
                <div className="space-y-1 pl-2">
                  {SOLUTIONS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-3 py-2 rounded-btn text-sm ${
                        pathname === item.href
                          ? "bg-edu-light-grey text-edu-navy font-semibold"
                          : "text-edu-charcoal hover:bg-edu-light-grey"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/process"
                className={`block px-3 py-2 rounded-btn text-sm font-medium ${
                  pathname === "/process"
                    ? "bg-edu-light-grey text-edu-navy font-semibold"
                    : "text-edu-charcoal hover:bg-edu-light-grey"
                }`}
              >
                Our Process
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 rounded-btn text-sm font-medium ${
                  pathname === "/contact"
                    ? "bg-edu-light-grey text-edu-navy font-semibold"
                    : "text-edu-charcoal hover:bg-edu-light-grey"
                }`}
              >
                Contact Us
              </Link>
            </div>

            <div className="pt-4 border-t border-edu-border space-y-2">
              <Link
                href="/quote"
                className="w-full text-center block text-sm font-semibold bg-edu-navy text-white py-2.5 rounded-btn"
              >
                Request an Institutional Quote
              </Link>
              <div className="text-center text-xs text-edu-muted pt-2 flex flex-col gap-1">
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`} className="hover:text-edu-navy font-semibold text-edu-charcoal">
                  {SITE_CONFIG.phone}
                </a>
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-edu-navy">
                  {SITE_CONFIG.email}
                </a>
                <span>{SITE_CONFIG.coverage}</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
