"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Tell Us Your Idea",
    description:
      "Share your project idea, goals, and requirements with us through our contact form or a quick call.",
  },
  {
    number: "02",
    title: "Plan & Discuss",
    description:
      "We analyze your needs and create a clear project plan with timelines, deliverables, and pricing.",
  },
  {
    number: "03",
    title: "Design & Develop",
    description:
      "Our team designs and builds your project using modern technologies and best practices.",
  },
  {
    number: "04",
    title: "Review & Improve",
    description:
      "You review the work, provide feedback, and we refine it until you're completely satisfied.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We deploy your project, ensure everything works perfectly, and hand it over ready to go live.",
  },
];

export function HowWeWork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="process" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3"
          >
            Our Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-heading"
          >
            <span className="text-white">How </span>
            <span className="text-gradient">We Work</span>
          </motion.h2>
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:flex items-start gap-0 relative">
          {/* Progress line */}
          <div
            className="absolute top-8 left-8 right-8 h-px"
            style={{ background: "rgba(26,37,53,0.8)" }}
          >
            <motion.div
              className="h-full origin-left"
              style={{
                background:
                  "linear-gradient(90deg, #00BFFF, #00E5FF, #00FF88)",
              }}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="flex-1 flex flex-col items-center text-center px-4"
            >
              {/* Circle number */}
              <div
                className="relative w-16 h-16 rounded-full flex items-center justify-center mb-6 flex-shrink-0 z-10"
                style={{
                  background: "rgba(10,15,26,1)",
                  border: "1px solid rgba(0,191,255,0.4)",
                  boxShadow: "0 0 20px rgba(0,191,255,0.15)",
                }}
              >
                <span className="text-gradient font-bold font-mono text-sm">
                  {step.number}
                </span>
              </div>

              <h3 className="text-white font-semibold text-sm mb-2">
                {step.title}
              </h3>
              <p className="text-[#6B7A99] text-xs leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden flex flex-col gap-0 relative">
          <div
            className="absolute left-6 top-6 bottom-6 w-px"
            style={{ background: "rgba(26,37,53,0.8)" }}
          >
            <motion.div
              className="w-full origin-top"
              style={{
                background:
                  "linear-gradient(180deg, #00BFFF, #00E5FF, #00FF88)",
              }}
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="flex items-start gap-4 pb-8"
            >
              <div
                className="relative w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                style={{
                  background: "rgba(10,15,26,1)",
                  border: "1px solid rgba(0,191,255,0.4)",
                  boxShadow: "0 0 20px rgba(0,191,255,0.15)",
                }}
              >
                <span className="text-gradient font-bold font-mono text-xs">
                  {step.number}
                </span>
              </div>
              <div className="pt-2">
                <h3 className="text-white font-semibold text-sm mb-1">
                  {step.title}
                </h3>
                <p className="text-[#6B7A99] text-xs leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
