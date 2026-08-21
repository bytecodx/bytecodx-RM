import type { Metadata } from "next";
import { HeroSection } from "@/components/hero/HeroSection";
import { BenefitsStrip } from "@/components/home/BenefitsStrip";
import { ServicesSection } from "@/components/services/ServicesSection";
import { TechSection } from "@/components/technologies/TechSection";
import { WhyChoose } from "@/components/home/WhyChoose";
import { HowWeWork } from "@/components/home/HowWeWork";
import { ReviewsSection } from "@/components/testimonials/ReviewsSection";
import { FAQSection } from "@/components/faq/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "ByteCodX — Modern Web Development & Full-Stack Solutions",
  description:
    "ByteCodX is a professional web development studio specializing in custom websites, MERN stack web applications, e-commerce stores, and high-performance digital solutions.",
  alternates: {
    canonical: "https://bytecodx.ai",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsStrip />
      <ServicesSection />
      <TechSection />
      <WhyChoose />
      <HowWeWork />
      <ReviewsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
