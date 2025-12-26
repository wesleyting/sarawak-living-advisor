"use client";

import { Users, Palmtree, ShieldCheck } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function WhoThisIsFor() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const introRef = useRef(null);
  const cardsRef = useRef(null);

  const personas = [
    {
      icon: <Users className="h-6 w-6 text-teal-600" aria-hidden="true" />,
      title: "Families",
      description:
        "For parents who want a stable base, strong schooling options, and a safe day to day environment for children.",
      details: ["International schooling", "Safe neighbourhoods", "Family routine"]
    },
    {
      icon: <Palmtree className="h-6 w-6 text-teal-600" aria-hidden="true" />,
      title: "Retirees and semi retirees",
      description:
        "For people planning a slower pace of life with reliable healthcare access and comfortable living costs.",
      details: ["Healthcare access", "Nature and leisure", "Calmer pace"]
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-teal-600" aria-hidden="true" />,
      title: "Long term base planning",
      description:
        "For those who want a secure Plan B or a second home in Southeast Asia, with clear next steps and fewer surprises.",
      details: ["Location advantage", "Stability and safety", "Residency planning"]
    }
  ];

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll("[data-persona-card]");
      if (!headingRef.current) return;

      // SplitType for H2
      const split = new SplitType(headingRef.current, {
        types: "lines",
        lineClass: "split-line"
      });

      // Initial states
      gsap.set(split.lines, { yPercent: 110, autoAlpha: 0 });
      gsap.set(introRef.current, { y: 12, autoAlpha: 0 });
      gsap.set(cards, { y: 18, autoAlpha: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true
        }
      });

      tl.to(split.lines, {
        yPercent: 0,
        autoAlpha: 1,
        duration: 0.9,
        stagger: 0.08
      })
        .to(introRef.current, { y: 0, autoAlpha: 1, duration: 0.55 }, "-=0.45")
        .to(
          cards,
          { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.12 },
          "-=0.35"
        );

      return () => split.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#fafafa] py-24 md:py-24 relative">
      <div className="mx-auto max-w-7xl px-6 md:px-10 relative z-10">
        <div className="max-w-4xl mb-20 md:mb-20">
          <h2
            ref={headingRef}
            className="font-serif text-4xl font-bold leading-tight tracking-tight text-zinc-900 md:text-6xl"
          >
            Guidance built around your <br />
            <span className="italic text-teal-600">reason for moving.</span>
          </h2>

          <p
            ref={introRef}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl"
          >
            S-MM2H is a major life decision. We help you think through fit, costs, tradeoffs,
            and next steps with independent clarity.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {personas.map((persona, index) => (
            <div
              key={index}
              data-persona-card
              className="group flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-teal-100"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                    0{index + 1}
                  </span>

                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 group-hover:bg-teal-100 transition-colors"
                    aria-hidden="true"
                  >
                    {persona.icon}
                  </div>
                </div>

                <h3 className="mt-4 font-serif text-2xl font-semibold text-zinc-900 md:text-3xl">
                  {persona.title}
                </h3>

                <p className="mt-4 text-zinc-600 leading-relaxed">{persona.description}</p>
              </div>

              <ul className="mt-8 flex flex-wrap gap-2">
                {persona.details.map((detail, i) => (
                  <li
                    key={i}
                    className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 border border-teal-100 transition-colors group-hover:bg-teal-100/50"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-sm text-zinc-500">
            Not sure where you fit yet{" "}
            <a
              href="/contact"
              className="text-teal-700 underline underline-offset-4 hover:text-teal-800 font-medium transition-colors"
            >
              Start a conversation.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
