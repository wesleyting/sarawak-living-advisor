"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import gsap from "gsap";

function AccordionItem({ q, a, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white">
      <button
        type="button"
        onClick={() => setOpenIndex(isOpen ? null : index)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
      >
        <span className="text-[15px] font-semibold leading-snug text-zinc-900 md:text-base">
          {q}
        </span>

        <span
          className={[
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700 transition-transform",
            isOpen ? "rotate-45" : "rotate-0"
          ].join(" ")}
          aria-hidden="true"
        >
          <span className="text-xl leading-none">+</span>
        </span>
      </button>

      <div
        className={[
          "grid transition-[grid-template-rows] duration-300 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-[15px] leading-relaxed text-zinc-600 md:text-base">
            {a}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqTabs() {
  const t = useTranslations("faq");
  const [active, setActive] = useState("families");
  const [openIndex, setOpenIndex] = useState(null);

  const panelRef = useRef(null);

  const tabs = useMemo(
    () => [
      { id: "families", label: t("tabs.families") },
      { id: "retirees", label: t("tabs.retirees") },
      { id: "programme", label: t("tabs.programme") }
    ],
    [t]
  );

  const items = useMemo(() => {
    // Each tab is an array of objects: [{q, a}, ...]
    const data = t.raw(`sections.${active}.items`);
    return Array.isArray(data) ? data : [];
  }, [t, active]);

  // Smooth panel transition when switching tabs
  useEffect(() => {
    setOpenIndex(null);

    if (!panelRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    gsap.fromTo(
      panelRef.current,
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" }
    );
  }, [active]);

  return (
    <section className="bg-[#fafafa] py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight text-zinc-900 md:text-6xl">
            {t("heading")}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl">
            {t("intro")}
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={[
                  "rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-all",
                  "ring-1 ring-inset",
                  isActive
                    ? "bg-zinc-900 text-white ring-zinc-900"
                    : "bg-white text-zinc-800 ring-zinc-200 hover:bg-zinc-50"
                ].join(" ")}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Left: a subtle context card */}
          <div className="md:col-span-4">
            <div className="rounded-3xl border border-zinc-200 bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                {t(`sections.${active}.kicker`)}
              </p>
              <h3 className="mt-3 font-serif text-2xl font-semibold text-zinc-900">
                {t(`sections.${active}.title`)}
              </h3>
              <p className="mt-4 leading-relaxed text-zinc-600">
                {t(`sections.${active}.summary`)}
              </p>

              <div className="mt-6 rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200">
                <p className="text-sm font-semibold text-zinc-900">{t("safety.title")}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {t("safety.text")}
                </p>
              </div>
            </div>
          </div>

          {/* Right: accordion list */}
          <div className="md:col-span-8">
            <div ref={panelRef} className="space-y-3">
              {items.map((it, idx) => (
                <AccordionItem
                  key={`${active}-${idx}`}
                  q={it.q}
                  a={it.a}
                  index={idx}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                />
              ))}
            </div>

            {/* Bottom note */}
            <p className="mt-8 text-sm text-zinc-500">
              {t("footer.prompt")}{" "}
              <a
                href="/contact"
                className="font-semibold text-teal-700 underline underline-offset-4 hover:text-teal-800 transition-colors"
              >
                {t("footer.cta")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
