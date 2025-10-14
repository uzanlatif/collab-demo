import Image from "next/image";
import Link from "next/link";
import React from "react";

type ItemType = "camera" | "scenic";

const baseItems: { type: ItemType; src: string; title?: string }[] = [
  { type: "camera", src: "/assets/showcase-content/finpay.png", title: "Bintang Chill Museum" },
  { type: "scenic", src: "/assets/showcase-content/camera.png" },
  { type: "camera", src: "/assets/showcase-content/tiket.png", title: "Bintang Chill Museum" },
];

const items = Array.from({ length: 24 }, (_, i) => baseItems[i % baseItems.length]);

export default function ContentSection() {
  return (
    <section className="w-full max-w-[1200px] mx-auto p-3">
      <div className="bg-black p-3 rounded-lg">
        <div className="grid grid-cols-3 gap-3">
          {items.map((it, idx) => (
            <Link key={idx} href="/showcase-detail" className="block">
              <div className="relative rounded-xl overflow-hidden aspect-square bg-slate-800 cursor-pointer transition-transform hover:scale-[1.03]">
                <Image src={it.src} alt={`image-${idx}`} fill className="object-cover" />
                {it.title && (
                  <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                    {it.title}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
