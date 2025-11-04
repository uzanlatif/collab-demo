// "use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "/services" },
    { name: "Showcase", href: "/showcase" },
    { name: "Career", href: "/career" },
    { name: "Culture", href: "/culture" },
    { name: "Insight", href: "/insight" },
  ];

  return (
    <nav className="relative z-50">
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-end gap-8 py-6 pr-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={`relative text-sm transition-all duration-300 hover:scale-105 ${
              item.name === "Home"
                ? "font-bold text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-5 after:bg-cyan-400"
                : "text-white/80 hover:text-cyan-400"
            }`}
          >
            {item.name}
          </Link>
        ))}

        {/* CTA */}
        <Link
          href="/get-started"
          className="ml-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:shadow transition"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile hamburger */}
      <div className="absolute top-6 right-6 md:hidden">
        <button
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((s) => !s)}
          className="text-white p-2"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm md:hidden">
          <div className="flex h-full flex-col items-center justify-center gap-6 text-white">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`relative text-lg transition-transform duration-300 hover:scale-105 ${
                  item.name === "Home"
                    ? "font-bold text-white after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-6 after:bg-cyan-400"
                    : "text-white/80 hover:text-cyan-400"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* CTA on mobile */}
            <Link
              href="/get-started"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-full bg-white px-5 py-2 text-base font-semibold text-slate-900 shadow-sm hover:shadow"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
