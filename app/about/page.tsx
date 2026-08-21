import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About ByteCodX — Our Story",
  description:
    "Learn about ByteCodX — a technology studio building modern websites, web applications and full-stack solutions.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">About Us</p>
          <h1 className="section-heading mb-6">
            <span className="text-white">About </span>
            <span className="text-gradient">ByteCodX</span>
          </h1>
          <p className="text-[#6B7A99] text-lg leading-relaxed max-w-2xl mx-auto">
            We are a web development studio focused on building modern, high-performance digital
            experiences for businesses, startups and individuals.
          </p>
        </div>

        {/* Story */}
        <div
          className="p-8 rounded-2xl mb-8"
          style={{ background: "rgba(10,15,26,0.8)", border: "1px solid rgba(26,37,53,0.8)" }}
        >
          <h2 className="text-white font-semibold text-xl mb-4">Who We Are</h2>
          <p className="text-[#6B7A99] leading-relaxed mb-4">
            ByteCodX is a web development studio that builds custom websites and web applications
            with a focus on quality, performance, and modern design. We work with clients to create
            digital experiences that look great and deliver real results.
          </p>
          <p className="text-[#6B7A99] leading-relaxed">
            Based in Tamil Nadu, India, we work with clients locally and internationally. Every project
            is built from scratch, tailored to your specific needs — no templates, no shortcuts.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {[
            { value: `${siteConfig.stats.projectsDelivered}+`, label: "Projects Delivered" },
            { value: `${siteConfig.stats.clientsServed}+`, label: "Happy Clients" },
            { value: `${siteConfig.stats.yearsExperience}+`, label: "Years Experience" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl text-center"
              style={{ background: "rgba(10,15,26,0.8)", border: "1px solid rgba(26,37,53,0.8)" }}
            >
              <p
                className="text-4xl font-bold mb-1"
                style={{
                  background: "linear-gradient(135deg, #00BFFF, #00FF88)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </p>
              <p className="text-[#6B7A99] text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div
          className="p-8 rounded-2xl mb-10"
          style={{ background: "rgba(10,15,26,0.8)", border: "1px solid rgba(26,37,53,0.8)" }}
        >
          <h2 className="text-white font-semibold text-xl mb-4">Our Mission</h2>
          <p className="text-[#6B7A99] leading-relaxed">
            To help businesses grow online by delivering professional, high-quality web development
            services. We believe every business deserves a great digital presence, built with care and
            expertise.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-[#6B7A99] mb-6">Want to work with us?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 group px-8 py-3.5">
              Get in Touch <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="btn-secondary inline-flex items-center gap-2 group px-8 py-3.5">
              Explore Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
