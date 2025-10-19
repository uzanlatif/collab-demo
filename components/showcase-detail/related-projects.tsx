"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectItem {
  src: string;
  title: string;
  description: string;
  href: string;
}

const relatedProjects: ProjectItem[] = [
  {
    src: "/assets/showcase-content/finpay.png",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    href: "/showcase-detail",
  },
  {
    src: "/assets/showcase-content/camera.png",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    href: "/showcase-detail",
  },
  {
    src: "/assets/showcase-content/tiket.png",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    href: "/showcase-detail",
  },
];

export default function RelatedProjects() {
  return (
    <section className="w-full bg-black py-16 flex flex-col items-center text-center">
      {/* === Title === */}
      <h2 className="text-white text-2xl font-semibold mb-2">
        Other Related Projects
      </h2>
      <div className="w-12 h-[2px] bg-cyan-500 mb-10" />

      {/* === Outer rounded gray container === */}
      <div className="w-full max-w-[850px] bg-[#1a1a1a] rounded-[2rem] p-10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedProjects.map((project, idx) => (
            <Link
              key={idx}
              href={project.href}
              className="group relative rounded-3xl overflow-hidden bg-[#111] shadow-md transition-transform hover:scale-[1.03]"
            >
              {/* === Square image === */}
              <div className="relative w-full aspect-square">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:opacity-95 transition duration-300"
                />
              </div>

              {/* === Overlay === */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* === Text === */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <h3 className="text-white font-semibold text-base">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-xs mt-1 leading-snug">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
