import HeroSection from "@/components/showcase-detail/hero";
import FooterSection from "@/components/showcase-detail/footer";
import RelatedProjects from "@/components/showcase-detail/related-projects";

export const dynamic = "force-static"; // optional, membantu build static

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <RelatedProjects />
      <FooterSection />
    </div>
  );
}
