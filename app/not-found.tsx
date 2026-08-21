import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        {/* 404 number */}
        <p
          className="text-[120px] font-bold leading-none mb-4"
          style={{
            background: "linear-gradient(135deg, #00BFFF 0%, #00E5FF 50%, #00FF88 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </p>

        <h1 className="text-2xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-[#6B7A99] mb-8 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
