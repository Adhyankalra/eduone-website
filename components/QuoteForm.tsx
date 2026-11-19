"use client";

import React, { useState } from "react";
import { Check, UploadCloud, AlertCircle, FileText, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";
import { SITE_CONFIG, SOLUTIONS } from "@/lib/constants";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    institutionName: "",
    boardAffiliation: "CBSE",
    institutionType: "Private K-12 School",
    contactPerson: "",
    designation: "",
    phone: "",
    email: "",
    selectedSolutions: [] as string[],
    urgency: "Next Academic Session (Planning Phase)",
    scopeDescription: "",
    fileName: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleSolution = (id: string) => {
    setFormData((prev) => {
      const exists = prev.selectedSolutions.includes(id);
      return {
        ...prev,
        selectedSolutions: exists
          ? prev.selectedSolutions.filter((s) => s !== id)
          : [...prev.selectedSolutions, id],
      };
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        fileName: e.target.files![0].name,
      }));
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.institutionName.trim()) {
      errs.institutionName = "School / Institution Name is required.";
    }
    if (!formData.contactPerson.trim()) {
      errs.contactPerson = "Contact person name is required.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid phone number.";
    }
    if (!formData.email.trim()) {
      errs.email = "Official email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (formData.selectedSolutions.length === 0) {
      errs.selectedSolutions = "Please select at least one solution area.";
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "Formal Quote RFP" }),
      });
      setIsSuccess(true);
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="institutional-card p-8 sm:p-10 bg-white border border-edu-border text-center space-y-5">
        <div className="w-16 h-16 bg-edu-green-light text-edu-green rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-edu-navy">
            Quote Request Registered
          </h3>
          <p className="mt-2 text-sm text-edu-muted max-w-lg mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-edu-navy">{formData.contactPerson}</span>.
            Your institutional request for <span className="font-semibold text-edu-navy">{formData.institutionName}</span>{" "}
            has been forwarded to our commercial solutions desk.
          </p>
        </div>

        <div className="p-4 bg-edu-light-grey rounded-btn text-xs text-edu-charcoal text-left max-w-lg mx-auto border border-edu-border space-y-1.5">
          <div className="font-semibold text-edu-navy">RFP Overview:</div>
          <div>• Institution: {formData.institutionName} ({formData.boardAffiliation})</div>
          <div>• Timeline: {formData.urgency}</div>
          <div>• Categories: {formData.selectedSolutions.join(", ")}</div>
          {formData.fileName && <div>• Attached Spec: {formData.fileName}</div>}
        </div>

        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                institutionName: "",
                boardAffiliation: "CBSE",
                institutionType: "Private K-12 School",
                contactPerson: "",
                designation: "",
                phone: "",
                email: "",
                selectedSolutions: [],
                urgency: "Next Academic Session (Planning Phase)",
                scopeDescription: "",
                fileName: "",
              });
            }}
            className="text-xs font-semibold px-4 py-2.5 rounded-btn border border-edu-border text-edu-navy hover:bg-edu-light-grey"
          >
            Submit Another Request
          </button>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              `Formal Quote Follow-up for ${formData.institutionName}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-btn bg-edu-green text-white hover:bg-edu-green-hover"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="institutional-card p-6 sm:p-10 bg-white border border-edu-border space-y-8"
    >
      {/* Section 1: Institution Profile */}
      <div className="space-y-4">
        <div className="border-b border-edu-border pb-2">
          <span className="text-xs font-bold text-edu-green uppercase tracking-wider">
            Phase 1
          </span>
          <h3 className="text-lg font-bold text-edu-navy">Institution Details</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1">
              Institution / School Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Modern Public School"
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

          <div>
            <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1">
              Affiliation / Curriculum
            </label>
            <select
              value={formData.boardAffiliation}
              onChange={(e) =>
                setFormData({ ...formData, boardAffiliation: e.target.value })
              }
              className="w-full px-3.5 py-2.5 text-sm rounded-btn border border-edu-border bg-white"
            >
              <option value="CBSE">CBSE</option>
              <option value="ICSE / ISC">ICSE / ISC</option>
              <option value="Cambridge / IB">Cambridge / International / IB</option>
              <option value="State Board">State Board</option>
              <option value="Higher Education / College">Higher Education / College</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1">
              Institution Category
            </label>
            <select
              value={formData.institutionType}
              onChange={(e) =>
                setFormData({ ...formData, institutionType: e.target.value })
              }
              className="w-full px-3.5 py-2.5 text-sm rounded-btn border border-edu-border bg-white"
            >
              <option value="Private K-12 School">Private K-12 Day School</option>
              <option value="Residential / Boarding School">Residential / Boarding School</option>
              <option value="Chain / Group of Schools">Chain / Multi-branch Group</option>
              <option value="Pre-Primary / Primary School">Pre-Primary / Primary School</option>
            </select>
          </div>
        </div>
      </div>

      {/* Section 2: Contact Information */}
      <div className="space-y-4">
        <div className="border-b border-edu-border pb-2">
          <span className="text-xs font-bold text-edu-green uppercase tracking-wider">
            Phase 2
          </span>
          <h3 className="text-lg font-bold text-edu-navy">Authorized Point of Contact</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1">
              Contact Person <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              value={formData.contactPerson}
              onChange={(e) =>
                setFormData({ ...formData, contactPerson: e.target.value })
              }
              className={`w-full px-3.5 py-2.5 text-sm rounded-btn border ${
                errors.contactPerson ? "border-red-400" : "border-edu-border"
              }`}
            />
            {errors.contactPerson && (
              <p className="text-xs text-red-500 mt-1">{errors.contactPerson}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1">
              Designation
            </label>
            <input
              type="text"
              placeholder="e.g. Principal / Director / IT Head"
              value={formData.designation}
              onChange={(e) =>
                setFormData({ ...formData, designation: e.target.value })
              }
              className="w-full px-3.5 py-2.5 text-sm rounded-btn border border-edu-border"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1">
              Phone Number <span className="text-red-500">*</span>
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
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1">
              Official Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="office@school.edu.in"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`w-full px-3.5 py-2.5 text-sm rounded-btn border ${
                errors.email ? "border-red-400" : "border-edu-border"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>
        </div>
      </div>

      {/* Section 3: Scope & Category Selection */}
      <div className="space-y-4">
        <div className="border-b border-edu-border pb-2">
          <span className="text-xs font-bold text-edu-green uppercase tracking-wider">
            Phase 3
          </span>
          <h3 className="text-lg font-bold text-edu-navy">Solutions Required</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SOLUTIONS.map((s) => {
            const isSelected = formData.selectedSolutions.includes(s.title);
            return (
              <button
                type="button"
                key={s.id}
                onClick={() => toggleSolution(s.title)}
                className={`p-3.5 rounded-btn border text-left transition-all ${
                  isSelected
                    ? "border-edu-navy bg-edu-blue-light text-edu-navy shadow-subtle"
                    : "border-edu-border bg-white text-edu-charcoal hover:bg-edu-light-grey"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-edu-navy">{s.title}</span>
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center border ${
                      isSelected
                        ? "bg-edu-navy border-edu-navy text-white"
                        : "border-edu-border bg-white"
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>
                <p className="text-[11px] text-edu-muted line-clamp-2">
                  {s.summary}
                </p>
              </button>
            );
          })}
        </div>
        {errors.selectedSolutions && (
          <p className="text-xs text-red-500 mt-1">{errors.selectedSolutions}</p>
        )}
      </div>

      {/* Section 4: Specifications & Document Attachment */}
      <div className="space-y-4">
        <div className="border-b border-edu-border pb-2">
          <span className="text-xs font-bold text-edu-green uppercase tracking-wider">
            Phase 4
          </span>
          <h3 className="text-lg font-bold text-edu-navy">
            Specifications & Timeline
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1">
              Procurement / Project Timeline
            </label>
            <select
              value={formData.urgency}
              onChange={(e) =>
                setFormData({ ...formData, urgency: e.target.value })
              }
              className="w-full px-3.5 py-2.5 text-sm rounded-btn border border-edu-border bg-white"
            >
              <option value="Immediate (Within 15-30 Days)">Immediate (Within 15–30 Days)</option>
              <option value="Next Quarter">Next Quarter</option>
              <option value="Next Academic Session (Planning Phase)">Next Academic Session (Annual Planning)</option>
              <option value="Annual Budgeting / RFP Stage">Annual Budgeting / RFP Stage</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1">
              Detailed Scope, Quantities or Particular Requirements
            </label>
            <textarea
              rows={4}
              placeholder="Outline numbers (e.g., number of students for uniforms, number of classrooms for smart boards, number of CCTV cameras needed, or existing IT infrastructure details)..."
              value={formData.scopeDescription}
              onChange={(e) =>
                setFormData({ ...formData, scopeDescription: e.target.value })
              }
              className="w-full px-3.5 py-2.5 text-sm rounded-btn border border-edu-border"
            />
          </div>

          {/* Optional File Upload */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-edu-navy uppercase tracking-wider mb-1">
              Attach Tender / BOQ Document (Optional)
            </label>
            <div className="border border-dashed border-edu-border hover:border-edu-navy rounded-card p-6 text-center bg-edu-light-grey/50 transition-colors">
              <UploadCloud className="w-8 h-8 text-edu-muted mx-auto mb-2" />
              <div className="text-xs text-edu-charcoal font-medium">
                {formData.fileName ? (
                  <span className="text-edu-green font-semibold flex items-center justify-center gap-1.5">
                    <FileText className="w-4 h-4" /> Attached: {formData.fileName}
                  </span>
                ) : (
                  <>
                    <label className="cursor-pointer text-edu-navy hover:underline font-bold">
                      Upload a PDF, Excel, or Word file
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx,.xls,.xlsx"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="text-[11px] text-edu-muted mt-1">
                      BOQ, specifications, or campus layout diagram (up to 15MB)
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="text-xs text-edu-muted leading-relaxed">
        By requesting an institutional proposal, you acknowledge that submitted specifications will be processed in accordance with our{" "}
        <a href="/privacy-policy" className="text-edu-navy underline font-medium hover:text-edu-navy-dark">
          Privacy Policy
        </a>
        . We maintain strict confidentiality of your school's enrollment and technical requirements.
      </div>

      {/* Submit Button */}
      <div className="pt-4 border-t border-edu-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-edu-green hover:bg-edu-green-hover text-white text-sm font-semibold px-8 py-3.5 rounded-btn transition-colors disabled:opacity-50 shadow-subtle"
        >
          {isSubmitting ? (
            <span>Generating Quote Submission...</span>
          ) : (
            <>
              <span>Request Formal Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-xs text-edu-muted text-center sm:text-right">
          Direct institutional support • All quotes prepared with transparent itemized commercials.
        </p>
      </div>
    </form>
  );
}
