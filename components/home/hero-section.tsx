"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "../navigation";

const heroImages = [
  "/images/hero/1.png",
  "/images/hero/2.png",
  "/images/hero/3.png",
  "/images/hero/4.png",
  "/images/hero/5.png",
  "/images/hero/6.png",
];

const topImages = [
  "/images/hero/top-images/1-main.png",
  "/images/hero/top-images/2-digital.png",
  "/images/hero/top-images/3-community.png",
  "/images/hero/top-images/4-production.png",
  "/images/hero/top-images/5-media.png",
  "/images/hero/top-images/6-event.png",
];

const heroTexts = [
  { tagline: "We are", title: ["Full Service", "Integrated Marketing", "Solutions"] },
  { tagline: "Collab Digital", title: ["Helps your business", "optimize paid media", "across platforms."] },
  { tagline: "Community Digital", title: ["Crafting Connections", "Between Brands", "and Voices."] },
  { tagline: "Collab Media", title: ["Strategic outlets", "to elevate your", "brand presence."] },
  { tagline: "Collab Production", title: ["Creative visuals", "tailored to your", "brand needs."] },
  { tagline: "Collab Event", title: ["Memorable events", "for stronger", "brand connection."] },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, clientX: 0, clientY: 0 });
  const [hover, setHover] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    heroImages.forEach((src) => (new Image().src = src));
    topImages.forEach((src) => (new Image().src = src));
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - left - width / 2) / width,
        y: (e.clientY - top - height / 2) / height,
        clientX: e.clientX,
        clientY: e.clientY,
      });
    };
    const onEnter = () => setHover(true);
    const onLeave = () => {
      setHover(false);
      setMousePos({ x: 0, y: 0, clientX: 0, clientY: 0 });
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const frameStyle = {
    transform: hover
      ? `translate(${mousePos.x * -300}px, ${mousePos.y * -300}px) scale(1.02)`
      : "translate(0,0) scale(1)",
    transition: hover ? "transform 0.1s ease-out" : "transform 0.3s ease-out",
  };

  const slantStyle = {
    transform: hover
      ? `translate(${mousePos.x * -60}px, ${mousePos.y * -60}px) scale(1.1) translate(-50%, -50%)`
      : "translate(-50%, -50%) scale(1.1)",
    transition: hover ? "transform 0.1s ease-out" : "transform 0.3s ease-out",
  };

  const { tagline, title } = heroTexts[current];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col bg-black overflow-hidden"
    >
      {/* Background slide */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroImages[current]})` }}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Pattern overlay */}
      <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27...%3E")] bg-repeat opacity-30 pointer-events-none z-10' />

      {/* Logo & Navigation */}
      <div className="absolute top-4 left-4 md:top-6 md:left-8 z-20">
        <img src="/images/hero-component/text-collab.png" alt="Collab Logo" className="h-6 md:h-8" />
      </div>
      <div className="absolute top-4 right-4 md:top-6 md:right-8 z-20">
        <Navigation />
      </div>

      {/* Center Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative w-full max-w-[420px] px-4 text-center">

          {/* 1. Base frame (neon) */}
          <img
            src="/images/hero-component/frame-miring.png"
            alt="Slanted Frame"
            className="absolute top-1/2 left-1/2 z-10 pointer-events-none"
            style={slantStyle}
          />

          {/* 2. Top image */}
          <img
            src={topImages[current]}
            alt="Top Image"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[15%] w-260 md:w-300 z-20 pointer-events-none"
          />

          {/* 3. Top frame (putih) */}
          <img
            src="/images/hero-component/frame-tegak.png"
            alt="Main Frame"
            className="w-full h-auto object-contain relative z-30"
            style={frameStyle}
          />

          {/* 4. Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="absolute top-[5%] left-[18%] z-40 pointer-events-none flex flex-col items-center gap-2 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-white text-sm md:text-base font-light mb-1">
                {tagline}
              </p>
              <h1 className="text-white text-xl md:text-3xl font-bold leading-snug drop-shadow-lg">
                {title.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </h1>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* Button */}
      <div className="relative z-10 flex flex-col items-center pb-8 mt-auto">
        <button
          onClick={() => document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-gradient-to-r from-[#00e0d6] to-[#00c0a3] text-white font-semibold text-sm px-8 py-1.5 rounded-full shadow-[0_0_20px_4px_rgba(0,224,214,0.6)] transition duration-300 hover:scale-105"
        >
          See More!
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 right-8 flex gap-2 z-20">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => i !== current && setCurrent(i)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              i === current ? "w-6 h-2.5 bg-white" : "w-2.5 h-2.5 border border-white hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
