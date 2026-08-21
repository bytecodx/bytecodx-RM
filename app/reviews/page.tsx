import type { Metadata } from "next";
import { Star } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Client Reviews — What Our Clients Say",
  description:
    "Read what clients say about working with ByteCodX. Real reviews from real projects.",
};

export default function ReviewsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Testimonials</p>
          <h1 className="section-heading mb-4">
            <span className="text-white">What Our </span>
            <span className="text-gradient">Clients Say</span>
          </h1>
          <p className="text-[#6B7A99] max-w-lg mx-auto">
            Genuine feedback from clients we&apos;ve worked with on real projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl flex flex-col gap-4"
              style={{ background: "rgba(10,15,26,0.8)", border: "1px solid rgba(26,37,53,0.8)" }}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4" style={{ color: i < t.rating ? "#00FF88" : "rgba(107,122,153,0.3)", fill: i < t.rating ? "#00FF88" : "none" }} />
                ))}
              </div>
              <p className="text-[#94A3B8] text-sm italic leading-relaxed flex-1">&ldquo;{t.review}&rdquo;</p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0" style={{ background: "linear-gradient(135deg, #00BFFF, #00FF88)" }}>
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
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-[#6B7A99] mb-6">Ready to join our happy clients?</p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2 group px-8 py-3.5">
            Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
