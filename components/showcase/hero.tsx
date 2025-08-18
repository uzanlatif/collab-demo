import Image from "next/image";
import Navbar from "../navbar";

export default function HeroSection() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="px-6 md:px-20 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-white/60 mb-3">Showcase</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            From insights to <br /> execution, where <br />
            <span className="text-cyan-400">ideas turn into impact</span>
          </h1>
        </div>
        <div className="relative w-full h-80 md:h-[500px]">
          <Image
            src="/page/showcase/showcase-hero.png"
            alt="Showcase Hero"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
