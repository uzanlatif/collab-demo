"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import React from "react";
import Navbar from "../navbar";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      {/* Tombol kembali */}
      <div className="absolute left-6 top-6 z-20 mt-20">
        <Link
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
        >
          <ChevronLeft className="h-4 w-4" />
          Kembali
        </Link>
      </div>

      {/* Konten utama */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2 md:gap-14 md:px-10 lg:gap-20">
        {/* Kiri: 1 gambar utama */}
        <div className="relative order-2 md:order-1 flex justify-center">
          <Image
            src="/assets/about/who-we-are-3.png"
            alt="Digital team collaboration"
            width={600}
            height={450}
            priority
           />
        </div>

        {/* Kanan: teks */}
        <div className="order-1 space-y-6 md:order-2">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Who We Are
          </h1>
          <span className="block h-1 w-16 rounded bg-cyan-400/80" />

          <p className="max-w-xl text-sm leading-7 text-white/80">
            In a crowded digital landscape, standing out is essential. At
            <span className="font-semibold text-white"> COLLAB</span>, we fuse
            creativity with data-driven strategies to deliver exceptional
            results.{" "}
            <strong className="text-white">
              We don’t just run campaigns; we craft digital experiences that
              resonate with your audience and drive growth.
            </strong>
          </p>

          <p className="max-w-xl text-sm leading-7 text-white/80">
            <strong className="text-white">Our mission is simple:</strong> to
            empower brands with bold, effective digital marketing that drives
            performance and sparks creativity.{" "}
            <strong className="text-white">
              We’re not just another agency; we’re your partners in success.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
