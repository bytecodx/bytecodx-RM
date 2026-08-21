import { HeroSection } from "@/components/hero/HeroSection";
import { BenefitsStrip } from "@/components/home/BenefitsStrip";
import { ServicesSection } from "@/components/services/ServicesSection";
import { TechSection } from "@/components/technologies/TechSection";
import { WhyChoose } from "@/components/home/WhyChoose";
import { HowWeWork } from "@/components/home/HowWeWork";
import { ReviewsSection } from "@/components/testimonials/ReviewsSection";
import { FAQSection } from "@/components/faq/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

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
