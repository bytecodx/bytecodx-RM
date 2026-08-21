import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Monitor, Network, ShoppingCart, Layers, Code2 } from "lucide-react";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services — Web Development, MERN Stack & More",
  description:
    "Explore all web development services offered by ByteCodX including website development, MERN stack, full-stack development, e-commerce, and custom web applications.",
};

const iconMap: Record<string, React.ElementType> = {
  Monitor, Network, ShoppingCart, Layers, Code2,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">What We Do</p>
          <h1 className="section-heading mb-4">
            <span className="text-white">Services </span>
            <span className="text-gradient">We Offer</span>
          </h1>
          <p className="text-[#6B7A99] max-w-xl mx-auto">
            End-to-end digital solutions to help your business grow online. From simple landing pages to complex web applications.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <div
                key={service.id}
                className="group p-7 rounded-2xl flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(10,15,26,0.8)",
                  border: "1px solid rgba(26,37,53,0.8)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,191,255,0.1), rgba(0,255,136,0.08))",
                    border: "1px solid rgba(0,191,255,0.2)",
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: "#00BFFF" }} />
                </div>

                <div>
                  <h2 className="text-white font-semibold text-lg mb-2">{service.title}</h2>
                  <p className="text-[#6B7A99] text-sm leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-1.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-[#6B7A99]">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#00FF88" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center gap-2 text-sm font-medium mt-auto transition-colors duration-200 group/link"
                  style={{ color: "#00BFFF" }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-[#6B7A99] mb-6">Ready to start your project?</p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2 group px-8 py-3.5">
            Get a Free Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
