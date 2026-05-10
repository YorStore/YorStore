"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = ["/images/Crate1.png", "/images/Crate2.png", "/images/Crate3.png"];

const AUTO_MS = 3500;
const SWIPE_MIN_PX = 48;

export default function CrateStorageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, AUTO_MS);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="absolute inset-0 touch-pan-y"
      onTouchStart={(e) => {
        touchStartX.current = e.targetTouches[0].clientX;
      }}
      onTouchEnd={(e) => {
        const start = touchStartX.current;
        touchStartX.current = null;
        if (start == null) return;
        const endX = e.changedTouches[0].clientX;
        const dx = endX - start;
        if (Math.abs(dx) < SWIPE_MIN_PX) return;
        if (dx > 0) {
          setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
        } else {
          setActiveIndex((prev) => (prev + 1) % images.length);
        }
      }}
    >
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="Secure storage crates in facility"
          fill
          draggable={false}
          className={`object-cover transition-opacity duration-[600ms] ease-in-out ${
            index === activeIndex
              ? "z-[1] opacity-100"
              : "pointer-events-none z-0 opacity-0"
          }`}
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      ))}

      <div
        className="pointer-events-none absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2"
        aria-hidden
      >
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-1.5 w-1.5 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-white/45"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
