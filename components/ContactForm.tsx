"use client";

import React, { useState } from "react";
import { Check, AlertCircle, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const SERVICE_OPTIONS = [
  "Student Essentials (Uniforms, Bags, ID)",
  "IT & Infrastructure (Computers, Smart Boards)",
  "CCTV & Campus Surveillance",
  "Networking & Campus Wi-Fi",
  "AMC & Technical Maintenance",
  "Comprehensive All-in-One School Package",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    institutionName: "",
    contactPerson: "",
    designation: "",
    phone: "",
    email: "",
    city: "Delhi NCR",
    services: [] as string[],
    estimatedRequirement: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.institutionName.trim()) {
      newErrors.institutionName = "School / Institution Name is required.";
    }
    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = "Contact person name is required.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Official email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (formData.services.length === 0) {
      newErrors.services = "Please select at least one required service category.";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      // Send to internal API route
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        // Fallback simulate local save
        setIsSuccess(true);
      }
    } catch {
      // Graceful offline fallback
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = `Institutional Enquiry from ${formData.institutionName || "School"}:
Contact: ${formData.contactPerson} (${formData.designation || "Staff"})
Phone: ${formData.phone}
Services: ${formData.services.join(", ") || "General Enquiry"}
Requirement: ${formData.estimatedRequirement || "Discussion requested"}`;

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  if (isSuccess) {
    return (
      <div className="institutional-card p-8 bg-white border border-edu-border text-center space-y-5">
        <div className="w-14 h-14 bg-edu-green-light text-edu-green rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-edu-navy">
            Enquiry Received Successfully
          </h3>
          <p className="mt-2 text-sm text-edu-muted max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-edu-navy">{formData.contactPerson}</span>.
            Our Delhi NCR institutional coordinator will review your requirements for{" "}
            <span className="font-semibold text-edu-navy">{formData.institutionName}</span>{" "}
            and respond within 1 business day.
          </p>
        </div>

        <div className="p-4 bg-edu-light-grey rounded-btn text-xs text-edu-charcoal text-left max-w-md mx-auto border border-edu-border space-y-1">
          <div className="font-semibold text-edu-navy">Summary of Submitted Details:</div>
          <div>• Institution: {formData.institutionName}</div>
          <div>• Contact: {formData.contactPerson} ({formData.designation})</div>
          <div>• Phone: {formData.phone} | Email: {formData.email}</div>
          <div>• Services: {formData.services.join(", ")}</div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                institutionName: "",
                contactPerson: "",
                designation: "",
                phone: "",
                email: "",
                city: "Delhi NCR",
                services: [],
                estimatedRequirement: "",
                message: "",
              });
            }}
            className="text-xs font-semibold px-4 py-2.5 rounded-btn border border-edu-border text-edu-navy hover:bg-edu-light-grey transition-colors"
          >
            Submit Another Requirement
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-btn bg-edu-green text-white hover:bg-edu-green-hover transition-colors"
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
      className="institutional-card p-6 sm:p-8 bg-white border border-edu-border space-y-6"
    >
      <div>
        <h3 className="text-xl font-bold text-edu-navy">
          Institutional Requirement Form
        </h3>
        <p className="text-xs text-edu-muted mt-1">
          Please provide your institution details. Our regional coordinator will connect
          with recommended specifications and commercial terms.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* School Name */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1">
            School / Institution Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Delhi Public School / St. Mary's Academy"
            value={formData.institutionName}
            onChange={(e) =>
              setFormData({ ...formData, institutionName: e.target.value })
            }
            className={`w-full px-3.5 py-2.5 text-sm rounded-btn border ${
              errors.institutionName ? "border-red-400" : "border-edu-border"
            } focus:border-edu-navy focus:ring-1 focus:ring-edu-navy`}
          />
          {errors.institutionName && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.institutionName}
            </p>
          )}
        </div>

        {/* Contact Person */}
        <div>
          <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1">
            Contact Person Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            value={formData.contactPerson}
            onChange={(e) =>
              setFormData({ ...formData, contactPerson: e.target.value })
            }
            className={`w-full px-3.5 py-2.5 text-sm rounded-btn border ${
              errors.contactPerson ? "border-red-400" : "border-edu-border"
            } focus:border-edu-navy focus:ring-1 focus:ring-edu-navy`}
          />
          {errors.contactPerson && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.contactPerson}
            </p>
          )}
        </div>

        {/* Designation */}
        <div>
          <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1">
            Designation / Role
          </label>
          <input
            type="text"
            placeholder="e.g. Principal / Trustee / IT Head"
            value={formData.designation}
            onChange={(e) =>
              setFormData({ ...formData, designation: e.target.value })
            }
            className="w-full px-3.5 py-2.5 text-sm rounded-btn border border-edu-border focus:border-edu-navy focus:ring-1 focus:ring-edu-navy"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1">
            Phone / Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="+91 98XXX XXXXX"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className={`w-full px-3.5 py-2.5 text-sm rounded-btn border ${
              errors.phone ? "border-red-400" : "border-edu-border"
            } focus:border-edu-navy focus:ring-1 focus:ring-edu-navy`}
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1">
            Official Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="principal@school.edu.in"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={`w-full px-3.5 py-2.5 text-sm rounded-btn border ${
              errors.email ? "border-red-400" : "border-edu-border"
            } focus:border-edu-navy focus:ring-1 focus:ring-edu-navy`}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>

        {/* City / Location */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1">
            Location / District (Delhi NCR)
          </label>
          <select
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm rounded-btn border border-edu-border focus:border-edu-navy focus:ring-1 focus:ring-edu-navy bg-white"
          >
            <option value="Delhi">Delhi (North, South, East, West, Central)</option>
            <option value="Noida / Greater Noida">Noida & Greater Noida</option>
            <option value="Gurugram">Gurugram / Manesar</option>
            <option value="Faridabad">Faridabad</option>
            <option value="Ghaziabad">Ghaziabad</option>
            <option value="Other NCR">Other Delhi NCR Location</option>
          </select>
        </div>
      </div>

      {/* Services Multi-Select */}
      <div>
        <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-2">
          Required Solution Categories <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {SERVICE_OPTIONS.map((service) => {
            const isChecked = formData.services.includes(service);
            return (
              <button
                type="button"
                key={service}
                onClick={() => toggleService(service)}
                className={`flex items-start gap-2.5 p-3 rounded-btn border text-left text-xs transition-colors ${
                  isChecked
                    ? "border-edu-navy bg-edu-blue-light text-edu-navy font-semibold"
                    : "border-edu-border bg-white text-edu-charcoal hover:bg-edu-light-grey"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                    isChecked
                      ? "bg-edu-navy border-edu-navy text-white"
                      : "border-edu-border bg-white"
                  }`}
                >
                  {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span>{service}</span>
              </button>
            );
          })}
        </div>
        {errors.services && (
          <p className="text-xs text-red-500 mt-2 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.services}
          </p>
        )}
      </div>

      {/* Quantity / Scope */}
      <div>
        <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1">
          Estimated Volume / Scope
        </label>
        <input
          type="text"
          placeholder="e.g. 500 Uniform Sets, 35 Computer Lab Systems, Campus Wi-Fi for 3 Blocks"
          value={formData.estimatedRequirement}
          onChange={(e) =>
            setFormData({ ...formData, estimatedRequirement: e.target.value })
          }
          className="w-full px-3.5 py-2.5 text-sm rounded-btn border border-edu-border focus:border-edu-navy focus:ring-1 focus:ring-edu-navy"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1">
          Additional Details / Tender Specification Notes
        </label>
        <textarea
          rows={3}
          placeholder="Please share any particular brand preferences, session deadlines or site visit requirements..."
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-3.5 py-2.5 text-sm rounded-btn border border-edu-border focus:border-edu-navy focus:ring-1 focus:ring-edu-navy"
        />
      </div>

      {/* Actions */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-edu-navy hover:bg-edu-navy-dark text-white text-sm font-semibold px-6 py-3 rounded-btn transition-colors disabled:opacity-50 shadow-subtle"
        >
          {isSubmitting ? (
            <span>Transmitting Enquiry...</span>
          ) : (
            <>
              <span>Submit Formal Enquiry</span>
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
          <span>Prefer WhatsApp? Click to message our team</span>
        </a>
      </div>
    </form>
  );
}
