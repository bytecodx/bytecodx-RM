"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Monitor,
  Network,
  ShoppingCart,
  Layers,
  Code2,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Network,
  ShoppingCart,
  Layers,
  Code2,
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export function ServicesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-label mb-3"
            >
              What We Do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-heading"
            >
              <span className="text-white">Services </span>
              <span className="text-gradient">We Offer</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#6B7A99] mt-3 max-w-md"
            >
              End-to-end digital solutions to help your business grow online.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/services"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 group whitespace-nowrap"
            >
              Explore All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <motion.div
                key={service.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl p-5 flex flex-col gap-4 cursor-default transition-all duration-300"
                style={{
                  background: "rgba(10, 15, 26, 0.8)",
                  border: "1px solid rgba(26, 37, 53, 0.8)",
                }}
              >
                {/* Hover border glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,191,255,0.08), rgba(0,255,136,0.05))",
                    border: "1px solid rgba(0,191,255,0.25)",
                  }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
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

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[#6B7A99] text-xs leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Arrow link */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/10 group-hover:border-[rgba(0,191,255,0.4)] group-hover:text-[#00BFFF] text-white/40 transition-all duration-300 self-start"
                  aria-label={`View ${service.title}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
