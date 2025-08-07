"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Showcase", path: "/showcase" },
    { label: "Services", path: "/services" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-8 py-6">
      <Link href="/" className="relative w-28 h-6">
        <Image
          src="/images/hero-component/text-collab.png"
          alt="Collab Logo"
          fill
          className="object-contain"
          priority
        />
      </Link>

      <ul className="flex space-x-6 text-sm font-medium text-white/80">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <li key={item.label}>
              <Link
                href={item.path}
                className={`hover:text-white transition-all ${
                  isActive
                    ? "text-white border-b-2 border-cyan-400 pb-1"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
