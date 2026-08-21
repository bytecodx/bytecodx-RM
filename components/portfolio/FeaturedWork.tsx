"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

export function FeaturedWork() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative" id="work">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mb-3"
            >
              Our Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-heading"
            >
              <span className="text-white">Projects </span>
              <span className="text-gradient">We&apos;ve Built</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#6B7A99] mt-3 max-w-md"
            >
              Explore websites and web applications we&apos;ve designed and
              developed.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/work"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 group whitespace-nowrap"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <motion.article
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: "rgba(10, 15, 26, 0.8)",
                border: "1px solid rgba(26, 37, 53, 0.8)",
              }}
            >
              {/* Project image */}
              <div
                className="relative h-52 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,191,255,0.08) 0%, rgba(0,255,136,0.05) 100%)",
                }}
              >
                {/* Placeholder gradient until real images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🖥️</div>
                    <span className="text-xs text-[#6B7A99] px-3 py-1 rounded-full border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020407] via-transparent to-transparent opacity-60" />

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(0,191,255,0.15)",
                      border: "1px solid rgba(0,191,255,0.3)",
                      color: "#00BFFF",
                    }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white font-semibold text-base mb-2">
                  {project.title}
                </h3>
                <p className="text-[#6B7A99] text-sm mb-4 leading-relaxed line-clamp-2">
                  {project.shortDescription}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md font-mono"
                      style={{
                        background: "rgba(26,37,53,0.8)",
                        color: "#94A3B8",
                        border: "1px solid rgba(26,37,53,1)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <Link
                    href={`/work/${project.slug}`}
                    className="flex items-center gap-1.5 text-sm font-medium text-[#00BFFF] hover:text-[#00FF88] transition-colors duration-200 group/link"
                  >
                    View Case Study
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-[#6B7A99] hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Site
                    </a>
                  )}
                </div>
              </div>

              {/* Hover border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  border: "1px solid rgba(0,191,255,0.2)",
                  boxShadow: "0 0 30px rgba(0,191,255,0.05)",
                }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
