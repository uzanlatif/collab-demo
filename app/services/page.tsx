import HeroSection from "@/components/services/hero"
import ContentSection from "@/components/services/content-section";
import FooterSection from "@/components/services/footer";

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <ContentSection />
      <FooterSection />
    </div>
  )
}
