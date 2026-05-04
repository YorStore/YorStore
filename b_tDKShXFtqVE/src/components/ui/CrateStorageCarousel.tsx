"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/images/Crate1.png", "/images/Crate2.png", "/images/Crate3.png"];

export default function CrateStorageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="Secure storage crates in facility"
          fill
          className={`object-cover transition-opacity duration-[600ms] ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      ))}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-1.5 w-1.5 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-white/45"
            }`}
            aria-hidden
          />
        ))}
      </div>
    </>
  );
}
