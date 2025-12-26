"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const t = useTranslations("hero");

  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const ctasRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Split into lines (SplitType creates wrappers we can animate)
      const split = new SplitType(titleRef.current, {
        types: "lines",
        lineClass: "split-line"
      });

      // Important: hide overflow so lines can slide up cleanly
      split.lines.forEach((line) => {
        line.style.overflow = "hidden";
        line.style.display = "block";
      });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true
        }
      });

      tl.from(badgeRef.current, { autoAlpha: 0, y: 10, duration: 0.5 })
        .from(
          split.lines,
          {
            yPercent: 110,
            autoAlpha: 0,
            duration: 0.9,
            stagger: 0.08
          },
          "-=0.15"
        )
        .from(subRef.current, { autoAlpha: 0, y: 12, duration: 0.55 }, "-=0.45")
        .from(ctasRef.current, { autoAlpha: 0, y: 10, duration: 0.5 }, "-=0.35");

      return () => {
        split.revert();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[88svh] w-full overflow-hidden overflow-x-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/sarawak-hero.png)" }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/18 to-black/0" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/35 to-transparent" />

      <Header />

      <div className="relative z-10 mx-auto flex min-h-[88svh] w-full max-w-7xl items-start px-6 pt-32 pb-28 md:px-10 md:pt-44 md:pb-36">
        <div className="w-full max-w-4xl text-white">
          <div
            ref={badgeRef}
            className="inline-flex max-w-full items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium tracking-wide text-white/85 ring-1 ring-white/15 backdrop-blur"
          >
            {t("badge")}
          </div>

          <h1
            ref={titleRef}
            className="mt-6 font-serif font-bold leading-[0.95] tracking-[-0.01em] text-[clamp(44px,9vw,96px)] break-words hyphens-auto"
          >
            {t("title")}
          </h1>

          <p ref={subRef} className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            {t("subtitle")}
          </p>

          <div ref={ctasRef} className="mt-10 flex flex-wrap items-center gap-4 md:mt-12">
            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-zinc-900 shadow-sm hover:bg-zinc-100"
            >
              {t("ctaPrimary")}
            </a>

            <a
              href="/how-we-work"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white/90 hover:bg-white/10"
            >
              {t("ctaSecondary")}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-20 w-full md:h-28">
          <path
            d="M0,64 C240,96 480,96 720,64 960,32 1200,32 1440,64 L1440,120 L0,120 Z"
            fill="#fafafa"
          />
        </svg>
      </div>
    </section>
  );
}
