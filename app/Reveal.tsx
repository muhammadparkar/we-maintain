"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className,
  delay = 0,
  blur = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  blur?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${blur ? "reveal-blur" : ""} ${visible ? "is-visible" : ""} ${className ?? ""}`}
      style={{ animationDelay: visible ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
