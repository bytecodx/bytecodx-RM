"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { technologies, techCategories } from "@/data/technologies";

export function TechSection() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const filtered = technologies.filter((t) => t.category === activeCategory);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative" id="technologies">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3"
          >
            Tech Stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-heading"
          >
            <span className="text-white">Technologies </span>
            <span className="text-gradient">We Work With</span>
          </motion.h2>
        </div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10"
        >
          {techCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "text-white"
                  : "text-[#6B7A99] hover:text-white"
              }`}
              style={
                activeCategory === cat
                  ? {
                      background:
                        "linear-gradient(135deg, rgba(0,191,255,0.2), rgba(0,255,136,0.15))",
                      border: "1px solid rgba(0,191,255,0.4)",
                      boxShadow: "0 0 16px rgba(0,191,255,0.15)",
                    }
                  : {
                      background: "rgba(10,15,26,0.6)",
                      border: "1px solid rgba(26,37,53,0.8)",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-4">
          {filtered.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="group flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl transition-all duration-300 cursor-default relative overflow-hidden"
              style={{
                background: "rgba(10, 15, 26, 0.7)",
                border: "1px solid rgba(26, 37, 53, 0.8)",
              }}
            >
              {/* Subtle hover background highlight */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(0,191,255,0.08) 0%, transparent 70%)",
                }}
              />

              {/* Real Tech Icon Image */}
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center p-2.5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(26, 37, 53, 0.9)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                  loading="lazy"
                />
              </div>

              <span className="text-xs sm:text-sm font-medium text-center text-[#6B7A99] group-hover:text-white transition-colors duration-200 leading-snug">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
