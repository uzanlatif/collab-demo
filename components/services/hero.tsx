// "use client";

import React from "react";
import Navbar from "../navbar";

export default function HeroSection() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 mt-20">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          The Whole Marketing Services <br />
          that <span className="text-cyan-400">We Can Do</span>
        </h1>
        <p className="mt-6 text-white/70 max-w-xl">
          We offer a full spectrum of marketing services — from strategic planning,
          branding, and content creation to campaign execution — all tailored to help
          your business grow and stand out.
        </p>

        <div className="mt-8 flex space-x-4">
          <button className="bg-cyan-400 text-black px-6 py-2 rounded-full font-medium hover:bg-cyan-500">
            Get Started
          </button>
          <button className="bg-white/10 text-white px-6 py-2 rounded-full font-medium border border-white/20 hover:bg-white/20">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
