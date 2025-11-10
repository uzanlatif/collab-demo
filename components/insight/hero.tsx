"use client";

import React from "react";
import Navbar from "../navbar";

export default function HeroSection() {
  return (
    <div className="bg-black text-white flex flex-col">
      <Navbar />

      <section className="flex flex-col items-center justify-start text-center px-6 py-16 md:py-24">
        <h1 className="font-bold tracking-tight leading-tight">
          <span className="block text-4xl md:text-6xl">Where Strategy</span>
          <span className="block text-4xl md:text-6xl text-[#00A093]">
            Meets Creativity<span className="text-[#00A093]">.</span>
          </span>
        </h1>

        {/* accent line */}
        <span
          aria-hidden
          role="presentation"
          className="mt-4 h-[3px] w-16 rounded-full bg-[#00A093]"
        />

        <p className="mt-6 max-w-2xl text-white/70 text-sm md:text-base">
          Ideas that start conversations, shape perspectives, and move brands
          forward with purpose.
        </p>
      </section>
    </div>
  );
}
