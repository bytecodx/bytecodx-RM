"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Cpu,
  Gauge,
  MessageCircle,
  DollarSign,
  LifeBuoy,
} from "lucide-react";

const reasons = [
  {
    icon: Wrench,
    title: "Custom-Built Solutions",
    description:
      "Every project is built around your actual requirements. No copy-paste templates.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    description:
      "We use technologies best suited to your project's specific needs.",
  },
  {
    icon: Gauge,
    title: "Performance Focused",
    description:
      "Fast, responsive and optimized experiences that keep users engaged.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description:
      "Work directly with the people building your project — no middlemen.",
  },
  {
    icon: DollarSign,
    title: "Affordable Solutions",
    description:
      "Professional development without unnecessary complexity or inflated costs.",
  },
  {
    icon: LifeBuoy,
    title: "Long-Term Support",
    description:
      "We can continue supporting your website and adding features after launch.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="why-bytecodx">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3"
          >
            Why Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-heading"
          >
            <span className="text-white">Why </span>
            <span className="text-gradient">ByteCodX?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group p-6 rounded-2xl transition-all duration-300"
                style={{
                  background: "rgba(10, 15, 26, 0.7)",
                  border: "1px solid rgba(26, 37, 53, 0.8)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,191,255,0.1), rgba(0,255,136,0.08))",
                    border: "1px solid rgba(0,191,255,0.2)",
                  }}
                >
                  <Icon
                    className="w-6 h-6 group-hover:text-[#00FF88] transition-colors duration-300"
                    style={{ color: "#00BFFF" }}
                  />
                </div>
                <h3 className="text-white font-semibold mb-2">
                  {reason.title}
                </h3>
                <p className="text-[#6B7A99] text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
