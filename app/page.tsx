import HeroSection from "@/components/home/hero-section"
import ShowcaseSection from "@/components/home/showcase-section"
import ClientsSection from "@/components/home/clients-section"
import ServicesSection from "@/components/home/services-section"
import NewsSection from "@/components/home/news-section"
import AboutSection from "@/components/home/about-section"
import FooterSection from "@/components/home/footer-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <ShowcaseSection />
      <ClientsSection />
      <ServicesSection />
      <NewsSection />
      <AboutSection />
      <FooterSection />
    </div>
  )
}
