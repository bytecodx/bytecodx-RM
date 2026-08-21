import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const footerServices = [
  { label: "Website Development", href: "/services/web-development" },
  { label: "MERN Stack Development", href: "/services/mern-stack-development" },
  { label: "Full-Stack Development", href: "/services/full-stack-development" },
  { label: "E-Commerce Solutions", href: "/services/ecommerce-development" },
  { label: "Custom Web Applications", href: "/services/custom-web-applications" },
];

const footerCompany = [
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative border-t mt-0 overflow-hidden"
      style={{ borderColor: "rgba(26,37,53,0.6)", background: "#020407" }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,191,255,0.4), rgba(0,255,136,0.4), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <Image
                src="/logo/bytecodx-logo.svg"
                alt="ByteCodX Logo"
                width={240}
                height={60}
                className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-200 hover:scale-105"
              />
            </Link>
            <p className="text-[#6B7A99] text-xs sm:text-sm leading-relaxed max-w-sm">
              ByteCodX builds modern websites, web applications and
              full-stack solutions for startups, businesses and individuals.
              Premium development, delivered.
            </p>
            <div className="mt-4 sm:mt-6 flex items-center gap-1 text-xs sm:text-sm text-[#6B7A99]">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: "#00FF88", boxShadow: "0 0 8px #00FF88" }}
              />
              <span className="ml-2">Available for new projects</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-xs sm:text-sm mb-3 sm:mb-4 tracking-wide uppercase">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerServices.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[#6B7A99] text-xs sm:text-sm hover:text-white transition-colors duration-200"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-xs sm:text-sm mb-3 sm:mb-4 tracking-wide uppercase">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerCompany.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-[#6B7A99] text-xs sm:text-sm hover:text-white transition-colors duration-200"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact */}
            <div className="mt-6 sm:mt-8">
              <h3 className="text-white font-semibold text-xs sm:text-sm mb-2 sm:mb-3 tracking-wide uppercase">
                Contact
              </h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#6B7A99] text-xs sm:text-sm hover:text-[#00BFFF] transition-colors duration-200"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[#6B7A99] text-xs sm:text-sm">
            © {currentYear} ByteCodX. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs sm:text-sm text-[#6B7A99]">
            <Link href="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
