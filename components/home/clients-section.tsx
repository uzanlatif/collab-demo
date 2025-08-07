// "use client";

import Image from "next/image";

const row1 = [
  "/images/client/row1/kemenkeu.png",
  "/images/client/row1/maxxis.png",
  "/images/client/row1/tiket.png",
  "/images/client/row1/bri.png",
  "/images/client/row1/Finnet.png",
];

const row2 = [
  "/images/client/row2/bintang.png",
  "/images/client/row2/citibank.png",
  "/images/client/row2/djp.png",
  "/images/client/row2/Finnet.png",
  "/images/client/row2/g20.png",
  "/images/client/row2/kominfo.png",
];

const row3 = [
  "/images/client/row3/kemenkeu.png",
  "/images/client/row3/maxxis.png",
  "/images/client/row3/tiket.png",
  "/images/client/row3/Finnet.png",
  "/images/client/row3/kemenkeu.png",
  "/images/client/row3/tiket.png",
];
const row4 = [
  "/images/client/row3/kemenkeu.png",
  "/images/client/row3/maxxis.png",
  "/images/client/row3/tiket.png",
  "/images/client/row3/Finnet.png",
  "/images/client/row3/kemenkeu.png",
  "/images/client/row3/Finnet.png",
];

export default function ClientsSection() {
  return (
    <section className="bg-[#1B1B1B] py-8">
      <div className="w-full">
        <h2 className="text-sm md:text-base font-bold tracking-[0.3em] text-white uppercase text-center mb-8">
          Our Happy Clients
        </h2>

        {/* Row 1 - right fast */}
        <MarqueeRow logos={row1} direction="right" speed="normal" />

        {/* Row 2 - left slow */}
        <MarqueeRow logos={row2} direction="left" speed="normal" />

        {/* Row 3 - right normal */}
        <MarqueeRow logos={row3} direction="right" speed="normal" />

        {/* Row 4 - left normal */}
        <MarqueeRow logos={row4} direction="left" speed="normal" />
      </div>
    </section>
  );
}

function ClientCard({ logo }: { logo: string }) {
  return (
    <div className="relative bg-[#2A2A2A] rounded-xl h-16 w-44 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] mx-1 shrink-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-white/10 to-transparent z-10 pointer-events-none" />
      <div className="relative w-[100px] h-[40px] z-20">
        <Image src={logo} alt="client" fill style={{ objectFit: "contain" }} />
      </div>
    </div>
  );
}

function MarqueeRow({
  logos,
  direction,
  speed,
}: {
  logos: string[];
  direction: "left" | "right";
  speed: "slow" | "normal" | "fast";
}) {
  const animationName = direction === "left" ? "marquee-left" : "marquee-right";
  const speedMap = {
    slow: "60s",
    normal: "30s",
    fast: "15s",
  };

  return (
    <div className="overflow-hidden whitespace-nowrap mb-4 w-full">
      <div
        className={`flex items-center gap-3 ${`animate-${animationName}`}`}
        style={{ animationDuration: speedMap[speed] }}
      >
        {Array(3)
          .fill(logos)
          .flat()
          .map((logo, index) => (
            <ClientCard key={`${direction}-${speed}-${index}`} logo={logo} />
          ))}
      </div>
    </div>
  );
}
