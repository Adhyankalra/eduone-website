"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  Send,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const SERVICE_OPTIONS = [
  "School Uniforms & Student Essentials",
  "IT Infrastructure",
  "CCTV & Security Solutions",
  "Networking Solutions",
  "Smart Classrooms",
  "AMC & Technical Support",
  "Complete School Solutions",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    schoolName: "",
    workEmail: "",
    contactNumber: "",
    serviceRequired: "Complete School Solutions",
    message: "",
    agreeToPolicy: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string>("");

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.schoolName.trim()) {
      newErrors.schoolName = "School / Organisation name is required.";
    }

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Work email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail.trim())) {
      newErrors.workEmail = "Please enter a valid official email address.";
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required.";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.contactNumber.trim())) {
      newErrors.contactNumber = "Please enter a valid 10-digit phone number.";
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = "Please select a service category.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe your project or procurement requirements.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide a few more details (minimum 10 characters).";
    }

    if (!formData.agreeToPolicy) {
      newErrors.agreeToPolicy = "Please review and acknowledge the Privacy Policy to proceed.";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          contactPerson: formData.fullName.trim(),
          schoolName: formData.schoolName.trim(),
          institutionName: formData.schoolName.trim(),
          workEmail: formData.workEmail.trim(),
          email: formData.workEmail.trim(),
          contactNumber: formData.contactNumber.trim(),
          phone: formData.contactNumber.trim(),
          serviceRequired: formData.serviceRequired,
          services: [formData.serviceRequired],
          message: formData.message.trim(),
          source: "Contact Us Page Form",
        }),
      });

      if (response.ok) {
        const result = await response.json().catch(() => ({}));
        setReferenceId(result.enquiryId || `EDU-${Date.now().toString(36).toUpperCase()}`);
        setIsSuccess(true);
      } else {
        const errorData = await response.json().catch(() => ({}));
        setServerError(
          errorData.error ||
            "Unable to submit your enquiry at this moment. Please reach our coordinator directly at cyber.itsolutions@gmail.com or +91 98110 99529."
        );
      }
    } catch {
      setServerError(
        "A network connection error occurred while sending your enquiry. Please check your internet connection or reach us directly via WhatsApp / phone."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = `Hello EDUONE,
I am reaching out from ${formData.schoolName || "my school/institution"}.
Name: ${formData.fullName || "Representative"}
Phone: ${formData.contactNumber || "N/A"}
Service: ${formData.serviceRequired}
Requirement: ${formData.message || "I would like to discuss our requirements."}`;

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  if (isSuccess) {
    return (
      <div className="institutional-card p-8 sm:p-10 bg-white border border-edu-border text-center space-y-6">
        <div className="w-16 h-16 bg-edu-green-light text-edu-green rounded-full flex items-center justify-center mx-auto border border-edu-green/20">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <span className="text-[11px] font-bold text-edu-green uppercase tracking-wider font-mono">
            Reference ID: {referenceId}
          </span>
          <h3 className="text-2xl font-bold text-edu-navy font-heading">
            Enquiry Received Successfully
          </h3>
          <p className="text-sm text-edu-muted max-w-lg mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-edu-navy">{formData.fullName}</span>.
            Your requirement for{" "}
            <span className="font-semibold text-edu-navy">{formData.schoolName}</span> has been
            logged on our institutional coordination desk.
          </p>
        </div>

        <div className="p-5 bg-edu-light-grey rounded-btn text-xs text-edu-charcoal text-left max-w-md mx-auto border border-edu-border space-y-2">
          <div className="font-bold text-edu-navy border-b border-edu-border pb-1.5 flex items-center justify-between">
            <span>Submitted Specification Summary</span>
            <span className="text-edu-green font-semibold">Active</span>
          </div>
          <div>• <strong>Institution:</strong> {formData.schoolName}</div>
          <div>• <strong>Contact:</strong> {formData.fullName} ({formData.contactNumber})</div>
          <div>• <strong>Official Email:</strong> {formData.workEmail}</div>
          <div>• <strong>Service Required:</strong> {formData.serviceRequired}</div>
          <div className="text-edu-muted pt-1 text-[11px]">
            Our Delhi NCR representative will review your scope and respond within 1 business day.
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                fullName: "",
                schoolName: "",
                workEmail: "",
                contactNumber: "",
                serviceRequired: "Complete School Solutions",
                message: "",
                agreeToPolicy: true,
              });
            }}
            className="text-xs font-semibold px-5 py-2.5 rounded-btn border border-edu-border text-edu-navy hover:bg-edu-light-grey transition-colors"
          >
            Submit Another Requirement
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-5 py-2.5 rounded-btn bg-edu-green text-white hover:bg-edu-green-hover transition-colors shadow-subtle"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Fast-track via WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="institutional-card p-6 sm:p-8 lg:p-10 bg-white border border-edu-border space-y-6"
      noValidate
    >
      <div className="border-b border-edu-border pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-edu-blue-light text-edu-navy text-[11px] font-semibold uppercase tracking-wider mb-2 border border-edu-border">
          <ShieldCheck className="w-3.5 h-3.5 text-edu-green" />
          Institutional Inquiry Desk
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-edu-navy font-heading">
          Institutional Requirement Form
        </h3>
        <p className="text-xs sm:text-sm text-edu-muted mt-1 leading-relaxed">
          Please fill in your institution and project specifications below. Our Delhi NCR
          procurement coordinator will review and respond with commercial and technical details.
        </p>
      </div>

      {serverError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-btn text-xs text-red-700 flex items-start gap-2.5 animate-in fade-in">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <strong className="block font-semibold">Submission Error</strong>
            <span>{serverError}</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Dr. Rajesh Sharma / Anita Mehra"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-sm rounded-btn border ${
              errors.fullName ? "border-red-400 bg-red-50/20" : "border-edu-border bg-white"
            } focus:border-edu-navy focus:ring-1 focus:ring-edu-navy`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName}
            </p>
          )}
        </div>

        {/* School / Organisation Name */}
        <div>
          <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1.5">
            School / Organisation Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Modern Public School / St. Xavier's"
            value={formData.schoolName}
            onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-sm rounded-btn border ${
              errors.schoolName ? "border-red-400 bg-red-50/20" : "border-edu-border bg-white"
            } focus:border-edu-navy focus:ring-1 focus:ring-edu-navy`}
          />
          {errors.schoolName && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.schoolName}
            </p>
          )}
        </div>

        {/* Work Email */}
        <div>
          <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1.5">
            Work Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="principal@school.edu.in"
            value={formData.workEmail}
            onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-sm rounded-btn border ${
              errors.workEmail ? "border-red-400 bg-red-50/20" : "border-edu-border bg-white"
            } focus:border-edu-navy focus:ring-1 focus:ring-edu-navy`}
          />
          {errors.workEmail && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.workEmail}
            </p>
          )}
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1.5">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="+91 98XXX XXXXX"
            value={formData.contactNumber}
            onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-sm rounded-btn border ${
              errors.contactNumber ? "border-red-400 bg-red-50/20" : "border-edu-border bg-white"
            } focus:border-edu-navy focus:ring-1 focus:ring-edu-navy`}
          />
          {errors.contactNumber && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.contactNumber}
            </p>
          )}
        </div>

        {/* Service Required (Exact 8 Options) */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1.5">
            Service Required <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.serviceRequired}
              onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
              className={`w-full px-3.5 py-2.5 text-sm rounded-btn border appearance-none pr-10 ${
                errors.serviceRequired ? "border-red-400" : "border-edu-border"
              } bg-white text-edu-charcoal focus:border-edu-navy focus:ring-1 focus:ring-edu-navy`}
            >
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-edu-muted absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          {errors.serviceRequired && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.serviceRequired}
            </p>
          )}
        </div>

        {/* Message / Project Requirements */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1.5">
            Message / Project Requirements <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={4}
            placeholder="Please share details such as student strength, required quantities, campus locations, preferred brands or upcoming academic session deadlines..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-sm rounded-btn border ${
              errors.message ? "border-red-400 bg-red-50/20" : "border-edu-border bg-white"
            } focus:border-edu-navy focus:ring-1 focus:ring-edu-navy`}
          />
          {errors.message && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.message}
            </p>
          )}
        </div>

        {/* Privacy Policy Agreement */}
        <div className="sm:col-span-2 pt-1">
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.agreeToPolicy}
              onChange={(e) => setFormData({ ...formData, agreeToPolicy: e.target.checked })}
              className="mt-0.5 rounded text-edu-green focus:ring-edu-green border-edu-border"
            />
            <span className="text-xs text-edu-muted leading-relaxed">
              I acknowledge that the information submitted will be processed in accordance with the{" "}
              <Link href="/privacy-policy" className="text-edu-navy underline font-medium hover:text-edu-navy-dark">
                EDUONE Privacy Policy
              </Link>
              . We do not sell or share your school details with marketing brokers.
            </span>
          </label>
          {errors.agreeToPolicy && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.agreeToPolicy}
            </p>
          )}
        </div>
      </div>

      {/* Form Submission Action */}
      <div className="pt-3 border-t border-edu-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-edu-navy hover:bg-edu-navy-dark text-white text-sm font-semibold px-7 py-3.5 rounded-btn transition-colors disabled:opacity-50 shadow-subtle"
        >
          {isSubmitting ? (
            <span>Sending Inquiry...</span>
          ) : (
            <>
              <span>Submit Formal Inquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-edu-green hover:underline flex items-center gap-1.5"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Prefer WhatsApp? Message +91 98110 99529</span>
        </a>
      </div>
    </form>
  );
}
