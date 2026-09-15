"use client";

import { useEffect, useState } from "react";
import { IconPhone, IconWhatsapp } from "./icons";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "AMC", href: "#amc" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* =================================================================== */}
      {/* 1. DESKTOP NAVBAR (lg+): Tailored Notch & Perfectly Balanced Nav    */}
      {/* =================================================================== */}
      <div className="hidden lg:block fixed inset-x-0 top-0 z-50 pointer-events-none">
        {/* Outer Dock Anchor: Centered at 50vw with sleek 48px height */}
        <div
          className="relative mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            width: "760px",
            height: "48px",
            marginTop: scrolled ? "16px" : "0px",
          }}
        >
          {/* A. FLUID ARCHITECTURAL NOTCH SVG (640px × 48px): Matched to reference curvature */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none transition-opacity duration-500 ease-out z-10 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
            style={{
              width: "640px",
              height: "48px",
              filter: "drop-shadow(0 10px 28px rgba(0,0,0,0.18))",
            }}
          >
            <svg
              width="640"
              height="48"
              viewBox="0 0 640 48"
              fill="none"
              className="absolute top-0 left-0 text-white"
              aria-hidden="true"
            >
              <path
                d="M 0 0 C 31 0, 32 48, 86 48 H 554 C 608 48, 609 0, 640 0 H 0 Z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* B. PILL CAPSULE BACKGROUND (Scrolled State) */}
          <div
            className={`absolute inset-0 rounded-full bg-white/95 backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-black/[0.08] transition-all duration-500 ease-out pointer-events-none z-10 ${
              scrolled ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          />

          {/* C. NAVIGATION: Exact 50/50 vertical centering & uniform 28px spacing */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full flex items-center justify-center pointer-events-auto z-30">
            <nav className="flex items-center justify-center gap-7 font-medium text-[13.5px] leading-none">
              {NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-stone-800 hover:text-brand transition-colors duration-200 tracking-normal whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* D. LOGO: Vertically centered in 48px dock, glides smoothly from far left edge into dock slot */}
          <div
            className="absolute left-4 top-0 h-full flex items-center pointer-events-auto z-30"
            style={{
              transform: scrolled
                ? "translate(0px, 0px)"
                : "translate(calc(-50vw + 380px + clamp(20px, 4vw, 56px) - 16px), 6px)",
              transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <a href="#home" className="flex items-center gap-2.5 group">
              <svg
                viewBox="0 0 48 40"
                className={`w-7 h-6 shrink-0 transition-colors duration-500 ${
                  scrolled ? "text-ink" : "text-white"
                }`}
              >
                <path
                  d="M4 34 16 6l8 18 8-18 12 28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 6 24 24"
                  stroke="var(--brand)"
                  strokeWidth="3.4"
                  strokeLinecap="round"
                />
              </svg>
              <span
                className={`font-heading text-base font-semibold tracking-wide transition-colors duration-500 ${
                  scrolled ? "text-ink" : "text-white"
                }`}
              >
                WE <span className="text-brand">MAINTAIN</span>
              </span>
            </a>
          </div>

          {/* E. CTA & PHONE: Vertically centered in 48px dock, glides smoothly from far right edge into dock slot */}
          <div
            className="absolute right-2.5 top-0 h-full flex items-center gap-3.5 pointer-events-auto z-30"
            style={{
              transform: scrolled
                ? "translate(0px, 0px)"
                : "translate(calc(50vw - 380px - clamp(20px, 4vw, 56px) + 10px), 6px)",
              transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Phone Number: Hidden on scroll */}
            <a
              href="tel:+971581020077"
              className={`hidden xl:flex items-center gap-1.5 text-xs font-medium transition-opacity duration-300 ${
                scrolled
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100 text-white/80 hover:text-white"
              }`}
            >
              <IconPhone className="w-3.5 h-3.5 text-brand" />
              +971 581020077
            </a>

            {/* Pill CTA Button */}
            <a
              href="#contact"
              className={`group inline-flex items-center gap-2 font-semibold text-xs rounded-full pl-3.5 pr-1 py-1 transition-all duration-500 ${
                scrolled
                  ? "bg-ink hover:bg-ink/90 text-white shadow-sm"
                  : "bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md text-white"
              }`}
            >
              <span>Enquire Now</span>
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold transition-transform duration-300 group-hover:translate-x-0.5 ${
                  scrolled ? "bg-white/20 text-white" : "bg-white text-ink shadow-sm"
                }`}
              >
                ›
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 2. MOBILE NAVBAR (< lg): Responsive, visible and high contrast     */}
      {/* =================================================================== */}
      <div className="lg:hidden fixed inset-x-0 top-0 z-50 pointer-events-none p-3 sm:p-4">
        <div
          className={`pointer-events-auto mx-auto flex items-center justify-between px-4 py-2.5 rounded-full transition-all duration-500 ${
            open || scrolled
              ? "bg-white/95 backdrop-blur-xl shadow-lg border border-black/8"
              : "bg-black/35 backdrop-blur-md border border-white/20"
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <svg
              viewBox="0 0 48 40"
              className={`w-6 h-5 shrink-0 ${open || scrolled ? "text-ink" : "text-white"}`}
            >
              <path
                d="M4 34 16 6l8 18 8-18 12 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 6 24 24"
                stroke="var(--brand)"
                strokeWidth="3.4"
                strokeLinecap="round"
              />
            </svg>
            <span
              className={`font-heading text-sm font-semibold tracking-wide ${
                open || scrolled ? "text-ink" : "text-white"
              }`}
            >
              WE <span className="text-brand">MAINTAIN</span>
            </span>
          </a>

          {/* Right Mobile Actions */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand text-white shadow-sm"
            >
              Enquire
            </a>

            {/* Three-Line Hamburger Button: Always visible & high contrast */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${
                open || scrolled
                  ? "bg-stone-100 text-ink hover:bg-stone-200"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <div className="w-4 h-3.5 flex flex-col justify-between items-center relative">
                <span
                  className={`h-[2px] w-4 rounded-full transition-all duration-300 ${
                    open
                      ? "rotate-45 translate-y-[5.5px] bg-ink"
                      : open || scrolled
                      ? "bg-ink"
                      : "bg-white"
                  }`}
                />
                <span
                  className={`h-[2px] w-4 rounded-full transition-all duration-300 ${
                    open
                      ? "opacity-0 scale-x-0"
                      : open || scrolled
                      ? "bg-ink opacity-100"
                      : "bg-white opacity-100"
                  }`}
                />
                <span
                  className={`h-[2px] w-4 rounded-full transition-all duration-300 ${
                    open
                      ? "-rotate-45 -translate-y-[5.5px] bg-ink"
                      : open || scrolled
                      ? "bg-ink"
                      : "bg-white"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 3. MOBILE MENU DRAWER OVERLAY: Smooth slide, all 6 links + contacts */}
      {/* =================================================================== */}
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer Container */}
      <div
        className={`lg:hidden fixed inset-x-0 top-0 pt-20 pb-8 px-6 bg-white/98 backdrop-blur-2xl shadow-2xl border-b border-black/10 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] max-h-[92vh] overflow-y-auto ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-1.5 pt-2">
          {NAV.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 35}ms` : "0ms" }}
              className={`flex items-center justify-between py-3.5 px-4 rounded-2xl font-heading text-lg font-semibold text-ink hover:bg-stone-100 hover:text-brand active:scale-[0.98] transition-all duration-300 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <span>{item.label}</span>
              <span className="text-stone-400 text-sm font-bold">›</span>
            </a>
          ))}

          {/* Quick Contacts inside Drawer */}
          <div className="pt-5 mt-3 border-t border-black/8 flex flex-col gap-3">
            <a
              href="tel:+971581020077"
              className="flex items-center justify-center gap-2.5 py-3.5 rounded-2xl bg-stone-100 text-ink font-semibold text-sm hover:bg-stone-200 transition-colors"
            >
              <IconPhone className="w-4 h-4 text-brand" />
              Call: +971 581020077
            </a>
            <a
              href="https://wa.me/971581020077"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#25D366]/10 text-[#128C7E] font-semibold text-sm hover:bg-[#25D366]/20 transition-colors"
            >
              <IconWhatsapp className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-brand hover:bg-brand-dark text-white text-center font-semibold py-3.5 rounded-2xl transition-colors shadow-md text-sm mt-1"
            >
              Request Free Quote
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
