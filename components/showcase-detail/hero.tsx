"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../navbar";

const slides = [
  { src: "/assets/showcase-detail/naruto.png", title: "ChatGPT Showcase" },
  { src: "/assets/showcase-detail/nobita.png", title: "Anime Characters" },
  { src: "/assets/showcase-detail/onepiece.png", title: "Creative Team" },
  { src: "/assets/showcase-detail/prompts.png", title: "Design Concepts" },
  { src: "/assets/showcase-detail/nobita.png", title: "User Experience" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const ParamBadge = ({ label }: { label: string }) => (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
      <span className="relative inline-flex h-4 w-4 items-center justify-center">
        <span className="absolute inset-0 rounded-full border border-cyan-400/60" />
        <span className="h-2 w-2 rounded-full bg-cyan-400" />
      </span>
      <span className="text-xs text-slate-200">{label}</span>
    </span>
  );

  return (
    <div className="relative w-full bg-black text-white min-h-screen">
      <Navbar />

      {/* padding-top untuk clear tinggi navbar (sesuaikan jika navbar-mu lebih tinggi/rendah) */}
      <section className="pt-20 pb-16 flex flex-col items-center">
        {/* Title Section */}
        <div className="text-center mb-8">
          <div className="text-sm text-slate-400 uppercase tracking-widest">
            Our Showcase
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mt-1">
            Lorem Ipsum Dolor <br />
            <span className="text-sky-400">(Project Name)</span>
          </h1>
          <div className="mt-2 w-12 h-[2px] bg-sky-500 mx-auto rounded" />
        </div>

        {/* Carousel */}
        <div className="relative w-full max-w-3xl flex items-center justify-center">
          {/* Left Button */}
          <button
            onClick={prev}
            className="absolute left-0 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Images */}
          <div className="relative w-full flex justify-center items-center h-[280px]">
            {slides.map((slide, index) => {
              const offset = index - current;
              const abs = Math.abs(offset);
              const scale = 1 - abs * 0.1;
              const opacity = 1 - abs * 0.25;
              const translateX = offset * 180;

              return (
                <div
                  key={index}
                  className="absolute transition-all duration-500 ease-in-out"
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    opacity,
                    zIndex: slides.length - abs,
                  }}
                >
                  <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                    <Image
                      src={slide.src}
                      alt={slide.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Button */}
          <button
            onClick={next}
            className="absolute right-0 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Description */}
        <p className="max-w-2xl text-center text-slate-400 text-sm mt-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          efficitur interdum magna, id ultricies ligula placerat non. Duis
          euismod elit id neque consequat, in vulputate velit sodales. Aliquam
          erat volutpat.
        </p>

        {/* Parameters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-center">
          <div>
            <div className="mb-2 flex justify-center">
              <ParamBadge label="Parameter 1" />
            </div>
            <div className="text-3xl font-bold">337</div>
            <div className="text-slate-400 text-sm">Proposal Submission</div>
          </div>

          <div>
            <div className="mb-2 flex justify-center">
              <ParamBadge label="Parameter 2" />
            </div>
            <div className="text-3xl font-bold">8.4m</div>
            <div className="text-slate-400 text-sm">Impression</div>
          </div>

          <div>
            <div className="mb-2 flex justify-center">
              <ParamBadge label="Parameter 3" />
            </div>
            <div className="text-3xl font-bold">101k</div>
            <div className="text-slate-400 text-sm">Likes</div>
          </div>
        </div>
      </section>
    </div>
  );
}
