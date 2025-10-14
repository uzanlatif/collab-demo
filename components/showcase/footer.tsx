// "use client";

import React from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Desc */}
        <div>
          <div className="relative w-32 h-6 mb-4">
            <Image
              src="/images/hero-component/text-collab.png"
              alt="Collab Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-white/60 text-sm mb-4">
            Full Service Integrated Marketing Solutions
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-1 text-white/70 text-sm">
            <li><a href="#">Culture</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Showcase</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-1 text-white/70 text-sm">
            <li><a href="#">Collab Digital</a></li>
            <li><a href="#">Collab Community</a></li>
            <li><a href="#">Collab Production</a></li>
            <li><a href="#">Collab Media</a></li>
            <li><a href="#">Collab Event</a></li>
          </ul>
        </div>

        {/* Other Link */}
        <div>
          <h3 className="text-white font-semibold mb-3">Other Link</h3>
          <ul className="space-y-1 text-white/70 text-sm">
            <li><a href="#">Collab Connect</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
