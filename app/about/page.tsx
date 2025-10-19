import HeroSection from "@/components/about/hero";
import OurValues from "@/components/about/our-values";
import WhyCollab from "@/components/about/why-collab";
import FooterSection from "@/components/about/footer";
import { Pirata_One } from "next/font/google";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <OurValues />
      <WhyCollab />
      <FooterSection />
    </div>
  );
}
