"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg group ${
                      isActive
                        ? "text-white"
                        : "text-[#6B7A99] hover:text-white"
                    }`}
                  >
                    {link.label}
                    {/* Active underline */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, #00BFFF, #00FF88)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    {/* Hover bg */}
                    <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/5 transition-colors duration-200" />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 border border-[rgba(0,191,255,0.4)] hover:border-[rgba(0,191,255,0.8)] hover:shadow-[0_0_20px_rgba(0,191,255,0.2)] hover:bg-[rgba(0,191,255,0.05)] group"
              >
                {siteConfig.cta.navbar}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 flex flex-col overflow-y-auto"
            style={{ background: "rgba(2, 4, 7, 0.98)" }}
          >
            {/* Top row */}
            <div className="flex items-center justify-end h-16 px-4 sm:px-6 border-b border-white/5 flex-shrink-0">
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col flex-1 justify-center px-6 sm:px-8 py-8 gap-2 max-w-md mx-auto w-full">
              {navLinks.map((link, i) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between py-3.5 text-xl font-semibold border-b border-white/5 transition-colors duration-200 ${
                        isActive ? "text-gradient" : "text-white/70 hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className={`w-4 h-4 ${isActive ? "text-[#00FF88]" : "text-white/30"}`} />
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1 }}
                className="mt-6 pt-2"
              >
                <Link
                  href="/contact"
                  className="btn-primary flex items-center justify-center gap-2 w-full py-3.5 text-base font-semibold"
                >
                  {siteConfig.cta.navbar}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
