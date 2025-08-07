// "use client";

import React from "react";
import { Linkedin, Instagram } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20 font-poppins">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-10 items-start">
        {/* 🔵 Left: Logo, Tagline, Icons */}
        <div className="flex flex-col items-start">
          <img
            src="/images/hero-component/text-collab.png"
            alt="Collab"
            className="h-5 object-contain mb-4"
          />
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-400">
              Full Service Integrated Marketing Solutions
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black rounded-full p-2 hover:scale-105 transition"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black rounded-full p-2 hover:scale-105 transition"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* 🔴 Right: Link Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm text-gray-300">
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white">Culture</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Showcase</a></li>
              <li><a href="#" className="hover:text-white">Career</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Services</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white">Collab Digital</a></li>
              <li><a href="#" className="hover:text-white">Collab Community</a></li>
              <li><a href="#" className="hover:text-white">Collab Production</a></li>
              <li><a href="#" className="hover:text-white">Collab Media</a></li>
              <li><a href="#" className="hover:text-white">Collab Event</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Other Link</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white">Collab Connect</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
