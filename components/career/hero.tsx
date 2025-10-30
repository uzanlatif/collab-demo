// "use client";

import React from "react";
import Navbar from "../navbar";

export default function HeroSection() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />

      <section className="flex flex-col items-center justify-center text-center px-4 md:px-6 min-h-[60vh]">
        <h1 className="font-bold leading-tight tracking-tight text-4xl md:text-6xl">
          <span className="text-white">Your next big move</span>
          <br />
          <span className="bg-gradient-to-r from-[#00A093] to-[#00756B] bg-clip-text text-transparent">
            starts here.
          </span>
        </h1>

        <p className="mt-6 text-white/70 text-sm md:text-base">
          Explore roles that push limits and make real impact.
        </p>

        {/* accent line under tagline */}
        <span
          aria-hidden
          className="mt-3 h-1 w-24 rounded-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #00A093 0%, #00756B 100%)",
          }}
        />
      </section>
    </div>
  );
}
