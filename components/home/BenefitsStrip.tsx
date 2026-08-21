"use client";

import { motion } from "framer-motion";
import { Home, Zap, Layers, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Home,
    title: "Modern Design",
    description: "Beautiful, responsive and user-friendly designs.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Fast, optimized and SEO-friendly websites.",
  },
  {
    icon: Layers,
    title: "Full-Stack Solutions",
    description: "End-to-end web solutions tailored to your needs.",
  },
  {
    icon: Headphones,
    title: "Support & Maintenance",
    description: "We are with you even after your launch.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function BenefitsStrip() {
  return (
    <section className="relative py-6 px-4 sm:px-6 lg:px-8" style={{ background: "#020407" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 rounded-2xl overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-white/5"
          style={{
            background: "rgba(10, 15, 26, 0.6)",
            border: "1px solid rgba(26, 37, 53, 0.8)",
          }}
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="relative flex items-start gap-4 p-5 sm:p-6 group hover:bg-white/[0.02] transition-colors duration-300"
              >
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,191,255,0.1), rgba(0,255,136,0.1))",
                    border: "1px solid rgba(0,191,255,0.2)",
                  }}
                >
                  <Icon
                    className="w-5 h-5 transition-colors duration-300 group-hover:text-[#00FF88]"
                    style={{ color: "#00BFFF" }}
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-[#6B7A99] text-xs leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
