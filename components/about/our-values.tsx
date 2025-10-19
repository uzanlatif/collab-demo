"use client";

import Image from "next/image";
import React from "react";

type ValueItem = {
  title: string;
  icon: string;
  body: React.ReactNode;
};

const VALUES: ValueItem[] = [
  {
    title: "Happier",
    icon: "/assets/about/smile 1.png",
    body: (
      <>
        Creating a positive work environment where everyone feels safe, valued,
        and <strong>supported to grow</strong>. Through <strong>integrity</strong>,{" "}
        <strong>respect</strong>, and <strong>caring</strong>, COLLAB builds a
        culture of trust, empathy, and mutual appreciation that empowers both
        individuals and teams.
      </>
    ),
  },
  {
    title: "Healthier",
    icon: "/assets/about/flex arm 1.png",
    body: (
      <>
        Encouraging <strong>self-awareness</strong> so every individual can
        recognize their strengths and weaknesses, understand their emotions, and
        maintain personal balance. This mindset helps the COLLAB team become
        healthier — mentally, emotionally, and professionally.
      </>
    ),
  },
  {
    title: "Higher Performance",
    icon: "/assets/about/graph 1.png",
    body: (
      <>
        Driving excellence through <strong>responsibility</strong>,{" "}
        <strong>speed</strong>, and a{" "}
        <strong>continuous commitment to growth</strong>. COLLAB strives to
        deliver the best results in every collaboration, combining quality,
        innovation, and impact to achieve sustainable success.
      </>
    ),
  },
];

export default function OurValues() {
  return (
    <section className="relative w-full bg-black text-white">
      {/* aura halus */}
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Our Values
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded bg-cyan-400/90" />
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => (
            <article
              key={v.title}
              className="group relative rounded-[28px] bg-white/5 pt-24 pb-8 px-8 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/[0.07]"
            >
              {/* ICON: naik lebih tinggi dari kartu */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2">
                {/* glow belakang icon */}
                <Image
                  src={v.icon}
                  alt={`${v.title} icon`}
                  width={180}
                  height={180}
                  priority
                />
              </div>

              <h3 className="mb-3 text-2xl font-semibold">{v.title}</h3>
              <p className="text-sm leading-6 text-white/80">{v.body}</p>

              {/* soft shadow bawah kartu */}
              {/* <div className="pointer-events-none absolute inset-x-6 -bottom-6 h-12 rounded-full bg-black/40 blur-2xl" /> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
