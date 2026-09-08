"use client";

import { useEffect, useRef } from "react";

export type RevealDirection =
  | "up"
  | "down"
  | "left"
  | "right"
  | "scale"
  | "fade";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: RevealDirection;
  className?: string;
  threshold?: number;
  blur?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  duration,
  direction = "up",
  className = "",
  threshold = 0.08,
  blur = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If intersection observer is not supported, reveal immediately
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("revealed");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const dirClass =
    direction === "left"
      ? "reveal-left"
      : direction === "right"
        ? "reveal-right"
        : direction === "down"
          ? "reveal-down"
          : direction === "scale"
            ? "reveal-scale"
            : direction === "fade"
              ? "reveal-fade"
              : "reveal-up";

  const blurClass = blur ? "reveal-blur" : "";

  const customStyle: React.CSSProperties = {};
  if (delay) customStyle.transitionDelay = `${delay}ms`;
  if (duration) customStyle.transitionDuration = `${duration}ms`;

  return (
    <div
      ref={ref}
      className={`reveal ${dirClass} ${blurClass} ${className}`}
      style={Object.keys(customStyle).length > 0 ? customStyle : undefined}
    >
      {children}
    </div>
  );
}
