"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Expanded list for better looping aesthetics
const FLAGS = [
  "au", "us", "ca", "gb", "fr", "de", "se", "nl", "jp", "sg",
  "cn", "hk", "kr", "nz", "ch", "no", "tw", "it", "be", "dk",
  "ie", "es", "pt", "my"
];

export default function GlobalFlags() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // --- Scrolling Animation Setup ---
    // Ensure the element is wide enough to scroll by doubling the list in the JSX below.
    // We calculate the width of *half* the track (one full set of flags).
    const widthToScroll = track.scrollWidth / 2;

    // Reset position in case of re-renders
    gsap.set(track, { x: 0 });

    // Animate from 0 to negative half-width continuously
    const tl = gsap.to(track, {
      x: -widthToScroll,
      duration: 60, // Slowed down slightly for a more "calm" feel
      ease: "none", // Linear ease for constant speed
      repeat: -1,   // Infinite loop
    });

    return () => tl.kill();
  }, []);

  return (
    <section className="bg-[#fafafa] py-2 pb-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 mb-10">
        {/* Tagline above */}
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
          Supporting a global community of families and retirees
        </p>
      </div>

      {/* Marquee Container with fade edges */}
      {/* Added 'mask-image' so flags fade out at the screen edges instead of cutting off hard */}
      <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div
          ref={trackRef}
          // Ensure the container is wide enough for all items in a single row
          className="flex w-max items-center gap-16 md:gap-24 px-4"
        >
          {/* We map the FLAGS array TWICE ([...FLAGS, ...FLAGS]) to create the seamless loop illusion */}
          {[...FLAGS, ...FLAGS].map((code, index) => (
            <img
              key={index + code} // unique key combination
              src={`https://flagcdn.com/w160/${code}.png`}
              alt={code}
              // The Magic Fix:
              // 1. Default state: opacity-30 and grayscale (black & white)
              // 2. Hover state: hover:opacity-100 and hover:grayscale-0 (full color)
              // 3. Transition: Smooths the change over 300ms
              className="h-7 w-auto object-contain opacity-30 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-8 cursor-pointer"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}