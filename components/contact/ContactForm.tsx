"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Loader2, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const projectTypes = [
  "Business Website",
  "Landing Page",
  "E-Commerce Store",
  "MERN Stack Application",
  "Full-Stack Web Application",
  "Custom Web Application",
  "Portfolio Website",
  "Other",
];

const budgetRanges = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Let's discuss",
];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const baseBorder = "rgba(26,37,53,0.8)";
const focusBorder = "rgba(0,191,255,0.6)";
const errorBorder = "rgba(239,68,68,0.5)";

const inputBase =
  "w-full px-4 py-3 rounded-xl text-white text-sm placeholder-[#6B7A99] outline-none transition-all duration-200";

const inputDefaultStyle = {
  background: "rgba(10,15,26,0.8)",
  border: `1px solid ${baseBorder}`,
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email";
    if (!form.message.trim())
      e.message = "Please tell us about your project";
    return e;
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  const [apiError, setApiError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setApiError(null);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send request.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setApiError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleReset() {
    setSubmitted(false);
    setErrors({});
    setForm({
      name: "",
      company: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      message: "",
    });
  }

  function getStyle(field: keyof FormState) {
    return {
      background: "rgba(10,15,26,0.8)",
      border: `1px solid ${errors[field] ? errorBorder : baseBorder}`,
    };
  }

  function handleFocus(
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    field: keyof FormState
  ) {
    if (!errors[field]) {
      e.currentTarget.style.borderColor = focusBorder;
    }
  }

  function handleBlur(
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    field: keyof FormState
  ) {
    e.currentTarget.style.borderColor = errors[field]
      ? errorBorder
      : baseBorder;
  }

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 pb-20 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full p-10 rounded-3xl text-center"
          style={{
            background: "rgba(10,15,26,0.9)",
            border: "1px solid rgba(0,255,136,0.3)",
            boxShadow: "0 0 40px rgba(0,255,136,0.08)",
          }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{
              background: "rgba(0,255,136,0.1)",
              border: "1px solid rgba(0,255,136,0.3)",
            }}
          >
            <CheckCircle className="w-8 h-8" style={{ color: "#00FF88" }} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Request Received!
          </h2>
          <p className="text-[#6B7A99] mb-8 leading-relaxed">
            Thank you for reaching out. We&apos;ll review your project details
            and get back to you within 24–48 hours.
          </p>
          <button
            onClick={handleReset}
            className="btn-secondary px-6 py-3 text-sm"
          >
            Send Another Request
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label mb-4"
          >
            Contact Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-heading mb-4"
          >
            <span className="text-white">Let&apos;s Build </span>
            <span className="text-gradient">Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#6B7A99] max-w-lg mx-auto"
          >
            Tell us about your project. We&apos;ll get back to you within
            24–48 hours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {[
              {
                icon: Mail,
                label: "Email Us",
                value: siteConfig.email,
                href: `mailto:${siteConfig.email}`,
              },
              {
                icon: MapPin,
                label: "Location",
                value: siteConfig.location,
                href: null,
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="p-5 rounded-2xl flex items-start gap-4"
                style={{
                  background: "rgba(10,15,26,0.8)",
                  border: "1px solid rgba(26,37,53,0.8)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,191,255,0.1), rgba(0,255,136,0.08))",
                    border: "1px solid rgba(0,191,255,0.2)",
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#00BFFF" }} />
                </div>
                <div>
                  <p className="text-[#6B7A99] text-xs mb-1">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-white text-sm hover:text-[#00BFFF] transition-colors duration-200"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-white text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div
              className="p-5 rounded-2xl"
              style={{
                background: "rgba(10,15,26,0.8)",
                border: "1px solid rgba(26,37,53,0.8)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: "#00FF88",
                    boxShadow: "0 0 8px #00FF88",
                  }}
                />
                <span className="text-white text-sm font-medium">
                  Currently Available
                </span>
              </div>
              <p className="text-[#6B7A99] text-xs leading-relaxed">
                We&apos;re accepting new projects. Typical response time is
                within 24–48 hours on business days.
              </p>
            </div>

            <div
              className="p-5 rounded-2xl"
              style={{
                background: "rgba(10,15,26,0.8)",
                border: "1px solid rgba(26,37,53,0.8)",
              }}
            >
              <h3 className="text-white font-semibold text-sm mb-3">
                What happens next?
              </h3>
              <ol className="space-y-2">
                {[
                  "We review your request",
                  "We schedule a discovery call",
                  "We send you a proposal",
                  "We start building",
                ].map((step, i) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-xs text-[#6B7A99]"
                  >
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5"
                      style={{
                        background: "rgba(0,191,255,0.1)",
                        border: "1px solid rgba(0,191,255,0.3)",
                        color: "#00BFFF",
                      }}
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-7 rounded-2xl space-y-5"
              style={{
                background: "rgba(10,15,26,0.8)",
                border: "1px solid rgba(26,37,53,0.8)",
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs text-[#6B7A99] mb-2"
                  >
                    Full Name{" "}
                    <span style={{ color: "#00BFFF" }}>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={(e) => handleFocus(e, "name")}
                    onBlur={(e) => handleBlur(e, "name")}
                    placeholder="Your full name"
                    className={inputBase}
                    style={getStyle("name")}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs text-[#6B7A99] mb-2"
                  >
                    Business / Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    onFocus={(e) => handleFocus(e, "company")}
                    onBlur={(e) => handleBlur(e, "company")}
                    placeholder="Company name (optional)"
                    className={inputBase}
                    style={inputDefaultStyle}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-[#6B7A99] mb-2"
                  >
                    Email Address{" "}
                    <span style={{ color: "#00BFFF" }}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={(e) => handleFocus(e, "email")}
                    onBlur={(e) => handleBlur(e, "email")}
                    placeholder="your@email.com"
                    className={inputBase}
                    style={getStyle("email")}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs text-[#6B7A99] mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    onFocus={(e) => handleFocus(e, "phone")}
                    onBlur={(e) => handleBlur(e, "phone")}
                    placeholder="+91 XXXXXXXXXX"
                    className={inputBase}
                    style={inputDefaultStyle}
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-xs text-[#6B7A99] mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    onFocus={(e) => handleFocus(e, "projectType")}
                    onBlur={(e) => handleBlur(e, "projectType")}
                    className={inputBase}
                    style={inputDefaultStyle}
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-xs text-[#6B7A99] mb-2"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    onFocus={(e) => handleFocus(e, "budget")}
                    onBlur={(e) => handleBlur(e, "budget")}
                    className={inputBase}
                    style={inputDefaultStyle}
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs text-[#6B7A99] mb-2"
                >
                  Project Details{" "}
                  <span style={{ color: "#00BFFF" }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onFocus={(e) => handleFocus(e, "message")}
                  onBlur={(e) => handleBlur(e, "message")}
                  placeholder="Tell us about your project idea, goals, timeline, and any specific requirements..."
                  className={`${inputBase} resize-none`}
                  style={getStyle("message")}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {apiError && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                  {apiError}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending Your Request...
                  </>
                ) : (
                  <>
                    Send Project Request
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </button>

              <p className="text-[#6B7A99] text-xs text-center">
                No spam, no pressure. We&apos;ll only contact you about your
                project.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
