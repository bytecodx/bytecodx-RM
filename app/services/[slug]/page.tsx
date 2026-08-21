import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Monitor, Network, ShoppingCart, Layers, Code2, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";

interface Props {
  params: { slug: string };
}

const iconMap: Record<string, React.ElementType> = {
  Monitor, Network, ShoppingCart, Layers, Code2,
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} — ByteCodX`,
    description: service.description,
  };
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] || Code2;

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-[#6B7A99] hover:text-white text-sm mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>

        {/* Header */}
        <div className="flex items-start gap-5 mb-8">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, rgba(0,191,255,0.1), rgba(0,255,136,0.08))",
              border: "1px solid rgba(0,191,255,0.3)",
            }}
          >
            <Icon className="w-8 h-8" style={{ color: "#00BFFF" }} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{service.title}</h1>
            <p className="text-[#6B7A99] leading-relaxed">{service.description}</p>
          </div>
        </div>

        {/* What's included */}
        <div
          className="p-7 rounded-2xl mb-6"
          style={{ background: "rgba(10,15,26,0.8)", border: "1px solid rgba(26,37,53,0.8)" }}
        >
          <h2 className="text-white font-semibold text-lg mb-4">What&apos;s Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((f) => (
              <div key={f} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#00FF88" }} />
                <span className="text-[#94A3B8] text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div
          className="p-7 rounded-2xl mb-10"
          style={{ background: "rgba(10,15,26,0.8)", border: "1px solid rgba(26,37,53,0.8)" }}
        >
          <h2 className="text-white font-semibold text-lg mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-medium font-mono"
                style={{
                  background: "rgba(0,191,255,0.08)",
                  border: "1px solid rgba(0,191,255,0.2)",
                  color: "#00BFFF",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-[#6B7A99] mb-6">Interested in {service.title}?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 group px-8 py-3.5">
              Get a Free Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
