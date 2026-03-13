"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = ["The Pen", "Science", "Peptides", "For Clinics"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F5F4EF]/90 backdrop-blur-md border-b-hairline"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className="font-serif text-xl lg:text-2xl font-light tracking-[0.2em] text-[#0A0A08] uppercase"
          >
            NanoBana
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-[13px] font-light tracking-wide text-[#5A5A52] hover:text-[#0A0A08] transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#product" className="btn-pill btn-primary text-[13px]">
            Reserve yours — £249
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-[#0A0A08] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#0A0A08] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#0A0A08] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 bg-[#F5F4EF]/95 backdrop-blur-md ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5 border-t-hairline">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-[15px] font-light text-[#5A5A52]"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="#product" className="btn-pill btn-primary text-[13px] self-start mt-2">
            Reserve yours — £249
          </a>
        </div>
      </div>
    </header>
  );
}
