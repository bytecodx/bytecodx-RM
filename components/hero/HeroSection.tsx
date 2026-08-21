"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroCircle } from "./HeroCircle";
import { HeroBackground } from "./HeroBackground";
import { siteConfig } from "@/config/site";

const avatarColors = [
  "from-blue-400 to-cyan-400",
  "from-green-400 to-teal-400",
  "from-purple-400 to-pink-400",
  "from-orange-400 to-yellow-400",
];

const avatarInitials = ["A", "B", "C", "D"];

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#020407", paddingTop: "80px" }}
    >
      <HeroBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT — Text (order-2 on mobile so circle shows first on desktop, text first on mobile) */}
          <div className="flex flex-col gap-5 sm:gap-6 order-1 lg:order-1">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-white"
                style={{
                  background: "rgba(10,15,26,0.8)",
                  border: "1px solid rgba(26,37,53,0.9)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0"
                  style={{
                    background: "#00FF88",
                    boxShadow: "0 0 8px #00FF88, 0 0 16px rgba(0,255,136,0.4)",
                  }}
                />
                We build. We grow.
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="font-bold leading-[1.08] tracking-tight text-[clamp(2rem,6vw,4.5rem)]">
                <span className="text-white block">We Build Digital</span>
                <span className="text-white block">Experiences That</span>
                <span className="text-gradient block">Drive Results.</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="text-[#6B7A99] text-sm sm:text-base lg:text-lg leading-relaxed max-w-md"
            >
              ByteCodX builds modern websites, web applications and full-stack
              solutions for startups, businesses and individuals.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42 }}
              className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <Link
                href="/contact"
                className="btn-primary flex items-center justify-center gap-2 group text-sm sm:text-base px-5 py-3 sm:px-6 sm:py-3.5 w-full xs:w-auto"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/services"
                className="btn-secondary flex items-center justify-center gap-2 group text-sm sm:text-base px-5 py-3 sm:px-6 sm:py-3.5 w-full xs:w-auto"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>

            {/* Trust Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.52 }}
              className="flex items-center gap-3 sm:gap-5 pt-1 flex-wrap"
            >
              {/* Avatars */}
              <div className="flex items-center -space-x-2.5 sm:-space-x-3 flex-shrink-0">
                {avatarColors.map((color, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br ${color} border-2 flex items-center justify-center text-[10px] sm:text-xs font-bold text-white flex-shrink-0`}
                    style={{ borderColor: "#020407", zIndex: 4 - i }}
                  >
                    {avatarInitials[i]}
                  </div>
                ))}
              </div>

              <div className="text-xs sm:text-sm text-[#6B7A99] leading-snug">
                Trusted by clients<br />worldwide
              </div>

              <div
                className="w-px h-8 sm:h-10 flex-shrink-0"
                style={{ background: "rgba(26,37,53,0.8)" }}
              />

              <div>
                <span
                  className="text-2xl sm:text-3xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #00BFFF 0%, #00FF88 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {siteConfig.stats.projectsDelivered}+
                </span>
                <div className="text-[10px] sm:text-xs text-[#6B7A99] leading-snug mt-0.5">
                  Projects<br />Delivered
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Hero Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="flex justify-center items-center order-2 lg:order-2 py-6 lg:py-0"
          >
            <HeroCircle />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(2,4,7,0.95))" }}
      />
    </section>
  );
}
