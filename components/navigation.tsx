// "use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "/about" },
    { name: "Showcase", href: "showcase" },
    { name: "Services", href: "services" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="relative z-50">
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-col items-end space-y-2 p-6 pr-8 text-right">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={`relative text-sm transition-all duration-300 transform hover:scale-105 ${
              item.name === "Home"
                ? "font-bold text-white after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-4 after:h-0.5 after:bg-cyan-400"
                : "text-white/80 hover:text-cyan-400"
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <div className="absolute top-6 right-6 md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex flex-col justify-center items-center space-y-6 text-white text-lg md:hidden transition-all">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`relative transition-all duration-300 transform hover:scale-105 ${
                item.name === "Home"
                  ? "font-bold text-white after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-4 after:0.5 after:bg-cyan-400"
                  : "text-white/80 hover:text-cyan-400"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
