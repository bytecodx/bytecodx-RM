"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4"
          style={{
            color: i < rating ? "#00FF88" : "rgba(107,122,153,0.3)",
            fill: i < rating ? "#00FF88" : "none",
          }}
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="reviews">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3"
          >
            Client Reviews
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-heading"
          >
            <span className="text-white">What Our </span>
            <span className="text-gradient">Clients Say</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl flex flex-col gap-4 transition-all duration-300"
              style={{
                background: "rgba(10, 15, 26, 0.8)",
                border: "1px solid rgba(26, 37, 53, 0.8)",
              }}
            >
              {/* Rating */}
              <StarRating rating={t.rating} />

              {/* Review */}
              <p className="text-[#94A3B8] text-sm leading-relaxed flex-1 italic">
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #00BFFF, #00FF88)",
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-[#6B7A99] text-xs">
                    {t.role}
                    {t.company && `, ${t.company}`}
                    {t.location && ` • ${t.location}`}
                  </p>
                </div>
                {t.project && (
                  <span
                    className="ml-auto text-xs px-2 py-1 rounded-full"
                    style={{
                      background: "rgba(0,191,255,0.08)",
                      border: "1px solid rgba(0,191,255,0.2)",
                      color: "#00BFFF",
                    }}
                  >
                    {t.project}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
