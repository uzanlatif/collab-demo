"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WhyCollab() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-24 md:px-10 lg:gap-20 items-center">
        {/* LEFT: Gambar tangan & ikon */}
        <div className="relative flex justify-center md:justify-start">
          <div className="absolute -inset-10 -z-10 rounded-full bg-cyan-500/20 blur-3xl" />
          <Image
            src="/assets/about/why 1.png" // ganti sesuai path kamu
            alt="Digital hand with icons"
            width={480}
            height={480}
            priority
            className="object-contain drop-shadow-[0_0_40px_rgba(34,211,238,0.6)]"
          />
        </div>

        {/* RIGHT: Teks */}
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold sm:text-5xl">Why Collab?</h2>
          <span className="block h-1 w-16 rounded bg-cyan-400/90" />

          <p className="text-sm leading-7 text-white/80">
            At <strong>Collab Agency</strong>, we’re not just co-workers — we’re
            collaborators. Together, we build groundbreaking campaigns, connect
            brands with audiences in <strong>meaningful ways</strong>, and{" "}
            <strong>push the boundaries of creativity</strong>.
          </p>

          <p className="text-sm leading-7 text-white/80">
            Here, you’ll be part of a team that values innovation, embraces
            diversity, and celebrates achievements. We empower our team members
            to <strong>take ownership of their ideas</strong>,{" "}
            <strong>learn new skills</strong>, and{" "}
            <strong>grow their careers</strong> in a supportive and dynamic
            environment.
          </p>
        </div>
      </div>

      {/* Section bawah: Let's Make It Pop */}
      <div className="relative mx-auto max-w-5xl text-center px-6 py-24 md:px-10">
        <h2 className="text-4xl font-semibold sm:text-5xl mb-4">
          Let’s Make It Pop
        </h2>
        <span className="mx-auto mb-6 block h-1 w-16 rounded bg-cyan-400/90" />
        <p className="max-w-2xl mx-auto text-sm leading-7 text-white/80 mb-10">
          We turn your boldest ideas into something real — blending creativity,
          strategy, and a spark of digital magic to make brands shine.
        </p>

        <Link
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-medium text-black transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          Let’s Collab!
        </Link>
      </div>
    </section>
  );
}
