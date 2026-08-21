"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-heading"
          >
            <span className="text-white">Frequently Asked </span>
            <span className="text-gradient">Questions</span>
          </motion.h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(10, 15, 26, 0.8)",
                  border: isOpen
                    ? "1px solid rgba(0,191,255,0.3)"
                    : "1px solid rgba(26, 37, 53, 0.8)",
                  boxShadow: isOpen
                    ? "0 0 20px rgba(0,191,255,0.06)"
                    : "none",
                }}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-white font-medium text-sm group-hover:text-[#00BFFF] transition-colors duration-200">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className="w-5 h-5"
                      style={{ color: isOpen ? "#00BFFF" : "#6B7A99" }}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[#6B7A99] text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
