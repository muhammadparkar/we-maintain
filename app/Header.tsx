"use client";

import { useEffect, useState } from "react";
import { IconPhone } from "./icons";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "AMC", href: "#amc" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      id="home"
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        solid ? "bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-5 md:px-10 py-5">
        <a href="#home" className="flex items-center gap-2.5">
          <svg viewBox="0 0 48 40" className={`w-8 h-7 shrink-0 ${solid ? "text-ink" : "text-white"}`}>
            <path
              d="M4 34 16 6l8 18 8-18 12 28"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M16 6 24 24" stroke="var(--brand)" strokeWidth="3.4" strokeLinecap="round" />
          </svg>
          <span className={`font-heading text-base font-semibold tracking-wide ${solid ? "text-ink" : "text-white"}`}>
            WE <span className="text-brand">MAINTAIN</span>
          </span>
        </a>

        <nav
          className={`hidden lg:flex items-center gap-8 font-medium text-sm ${
            solid ? "text-ink-soft" : "text-white/85"
          }`}
        >
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-brand transition-colors duration-300">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a
            href="tel:+971581020077"
            className={`flex items-center gap-2 text-sm font-medium transition-colors duration-500 ${
              solid ? "text-ink-soft" : "text-white/85"
            }`}
          >
            <IconPhone className="w-4 h-4 text-brand" />
            +971 581020077
          </a>
          <a
            href="#contact"
            className={`group inline-flex items-center gap-2.5 font-semibold text-sm rounded-full pl-5 pr-1.5 py-1.5 transition-colors duration-500 ${
              solid ? "bg-ink text-white" : "bg-white text-ink"
            }`}
          >
            Enquire Now
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-[1px] ${
                solid ? "bg-white/15" : "bg-ink/10"
              }`}
            >
              →
            </span>
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex items-center justify-center w-10 h-10 relative"
        >
          <span
            className={`absolute h-[2px] w-6 transition-all duration-500 ${solid ? "bg-ink" : "bg-white"} ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 transition-all duration-500 ${solid ? "bg-ink" : "bg-white"} ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 transition-all duration-500 ${solid ? "bg-ink" : "bg-white"} ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-x-0 top-[68px] bottom-0 bg-white/98 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-y-auto ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-6 gap-1">
          {NAV.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              className={`py-3.5 border-b border-black/5 font-heading text-lg text-ink transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 bg-brand text-white text-center font-semibold py-3.5 rounded-full"
          >
            Enquire Now — +971 581020077
          </a>
        </nav>
      </div>
    </header>
  );
}
