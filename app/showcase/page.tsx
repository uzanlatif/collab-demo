import HeroSection from "@/components/showcase/hero";

export const dynamic = "force-static"; // optional, membantu build static

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
    </div>
  );
}
