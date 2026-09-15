"use client";

import { useState } from "react";
import { IconClock, IconMail, IconPhone, IconPin } from "./icons";

const NAV = [
  { label: "Home", href: "#home" },
  {
    label: "About Us",
    href: "#about",
    children: ["Our Story", "Why Choose Us", "Our Team"],
  },
  {
    label: "Our Services",
    href: "#services",
    children: [
      "AC Maintenance & Services",
      "Electrical Maintenance",
      "Plumbing Maintenance",
      "Painting Services",
      "Deep Cleaning Services",
    ],
  },
  { label: "Team", href: "#team" },
  { label: "AMC", href: "#amc" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header id="home" className="sticky top-0 z-50">
      <div className="hidden md:flex items-center justify-between bg-[#f4f4f4] text-[12px] text-ink-soft">
        <div className="bg-brand text-white px-5 py-2 font-medium flex items-center gap-2 rounded-br-xl">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-white" />
          No additional fees, guaranteed!
        </div>
        <div className="flex items-center gap-6 pr-6">
          <span className="flex items-center gap-1.5">
            <IconClock className="w-3.5 h-3.5" /> Monday to Saturday
          </span>
          <span className="flex items-center gap-1.5">
            <IconPin className="w-3.5 h-3.5" /> Dubai&nbsp;-&nbsp;UAE
          </span>
          <span className="flex items-center gap-1.5">
            <IconMail className="w-3.5 h-3.5" /> admin@wemaintain.ae
          </span>
        </div>
      </div>

      <div className="relative bg-white border-b border-black/5">
        <div className="mx-auto max-w-7xl flex items-stretch justify-between">
          <div className="flex items-center gap-3 pl-5 md:pl-8 py-3">
            <svg viewBox="0 0 48 40" className="w-9 h-8 text-ink">
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
            <div className="leading-tight">
              <p className="font-heading text-lg font-semibold tracking-wide text-ink">
                WE <span className="text-brand">MAINTAIN</span>
              </p>
              <p className="text-[9px] tracking-[0.25em] text-ink-soft uppercase -mt-1">
                Keep Assets Alive
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-7 font-medium text-[13px] text-ink pr-4">
            {NAV.map((item) => (
              <div key={item.label} className="group relative py-6">
                <a href={item.href} className="flex items-center gap-1 hover:text-brand transition-colors">
                  {item.label}
                  {item.children && <span className="text-[10px] mt-0.5">▾</span>}
                </a>
                {item.children && (
                  <div className="absolute left-0 top-full hidden group-hover:block min-w-56 bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] rounded-xl border border-black/5 p-2 z-50">
                    {item.children.map((c) => (
                      <a
                        key={c}
                        href={item.href}
                        className="block px-4 py-2.5 text-[13px] text-ink-soft hover:bg-brand/10 hover:text-brand rounded-lg transition-colors"
                      >
                        {c}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-stretch">
            <div className="bg-brand text-white flex items-center gap-4 pl-6 pr-7 relative overflow-hidden">
              <div className="blob-orange absolute inset-0" />
              <div className="relative w-11 h-11 rounded-full border-2 border-white/70 flex items-center justify-center shrink-0">
                <IconPhone className="w-4.5 h-4.5" />
              </div>
              <div className="relative leading-tight">
                <p className="text-[10px] uppercase tracking-wide text-white/80">Call anytime</p>
                <p className="font-heading font-semibold text-base">+971 581020077</p>
              </div>
            </div>
            <a
              href="#contact"
              className="group flex items-center gap-2 bg-navy text-white px-6 font-semibold text-[13px] hover:bg-ink transition-colors duration-500"
            >
              Enquire Now
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                →
              </span>
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center w-11 h-11 mr-3 my-auto relative"
          >
            <span
              className={`absolute h-[2px] w-6 bg-ink transition-all duration-500 ${
                open ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-ink transition-all duration-500 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-ink transition-all duration-500 ${
                open ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-x-0 top-[64px] bottom-0 bg-white/98 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-y-auto ${
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
