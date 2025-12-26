"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import OverlayMenu from "@/components/OverlayMenu";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const locale = useLocale();
  const t = useTranslations("nav");

  const links = useMemo(
    () => [
      { href: "/how-we-work", label: t("howWeWork") },
      { href: "/faq", label: t("faq") },
      { href: "/fees", label: t("fees") },
      { href: "/contact", label: t("contact") }
    ],
    [t]
  );

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll background blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "bg-black/25 backdrop-blur-lg py-4" : "bg-transparent py-8"
        ].join(" ")}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-10">
          <Link
            href={`/${locale}`}
            className="flex items-center transition-opacity hover:opacity-90"
            aria-label="Home"
          >
            <Image
              src="/new-logo-1.png"
              alt="Sarawak Living Advisor"
              width={220}
              height={50}
              priority
              className="h-auto w-[160px] md:w-[220px]"
            />
          </Link>

          <div className="flex items-center gap-3 md:gap-6">
            <nav className="hidden items-center gap-10 text-[15px] font-semibold uppercase tracking-widest md:flex">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  className="group relative text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-right scale-x-0 bg-white transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
                </Link>
              ))}
            </nav>

            {/* Desktop language switcher */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-md"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={[
                    "h-0.5 w-5 bg-white transition-all",
                    open ? "translate-y-2 rotate-45" : ""
                  ].join(" ")}
                />
                <span
                  className={[
                    "h-0.5 w-5 bg-white transition-all",
                    open ? "opacity-0" : ""
                  ].join(" ")}
                />
                <span
                  className={[
                    "h-0.5 w-5 bg-white transition-all",
                    open ? "-translate-y-2 -rotate-45" : ""
                  ].join(" ")}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay menu should also use locale-prefixed links */}
      <OverlayMenu
        open={open}
        onClose={() => setOpen(false)}
        links={links.map((l) => ({
          ...l,
          href: `/${locale}${l.href}`
        }))}
      />
    </>
  );
}
