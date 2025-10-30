// "use client";

import React from "react";
import Navbar from "../navbar";

export default function HeroSection() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />

      <section className="flex flex-col items-center justify-center text-center px-4 md:px-6 min-h-[70vh]">
        <h1 className="font-bold leading-tight tracking-tight text-4xl md:text-6xl">
          {/* Big ideas → teks gradasi */}
          <span className="bg-gradient-to-r from-[#00A093] to-[#00756B] bg-clip-text text-transparent">
            Big ideas
          </span>{" "}
          <span className="text-white">start with</span>
          <br />
          {/* "a" putih */}
          <span className="text-white">a </span>
          {/* "simple hello." → teks gradasi + underline gradasi sedikit geser kanan */}
          <span className="relative inline-block bg-gradient-to-r from-[#00A093] to-[#00756B] bg-clip-text text-transparent">
            simple hello.
            <span
              className="
                absolute -bottom-2 left-0 right-0 h-1 rounded-full w-full
                translate-x-1 md:translate-x-1.5
              "
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #00A093 0%, #00756B 100%)",
              }}
            />
          </span>
        </h1>

        <p className="mt-6 text-white/70 text-sm md:text-base">
          Drop us a line — we’re listening.
        </p>
      </section>
    </div>
  );
}
