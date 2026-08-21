"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,191,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl relative overflow-hidden"
          style={{
            background: "rgba(10,15,26,0.85)",
            border: "1px solid rgba(0,191,255,0.2)",
            boxShadow: "0 0 60px rgba(0,191,255,0.08)",
          }}
        >
          {/* Inner glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,191,255,0.08), transparent)",
            }}
          />

          {/* Top gradient line */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-36 sm:w-48 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(0,191,255,0.8), rgba(0,255,136,0.8), transparent)",
            }}
          />

          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-label mb-3 sm:mb-4"
            >
              Let&apos;s Build Together
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight"
            >
              <span className="text-white block sm:inline">Have a Project </span>
              <span className="text-gradient block sm:inline">in Mind?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[#6B7A99] text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-lg mx-auto leading-relaxed"
            >
              Let&apos;s turn your idea into a modern digital experience.
              We&apos;re ready to build something great together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md mx-auto"
            >
              <Link
                href="/contact"
                className="btn-primary flex items-center justify-center gap-2 group px-6 py-3.5 text-sm sm:text-base w-full sm:w-auto"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="btn-secondary flex items-center justify-center gap-2 group px-6 py-3.5 text-sm sm:text-base w-full sm:w-auto"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
