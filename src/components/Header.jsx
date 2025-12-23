"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import OverlayMenu from "@/components/OverlayMenu";

const nav = [
  { href: "/how-we-work", label: "How We Work" },
  { href: "/faq", label: "FAQ" },
  { href: "/fees", label: "Fees" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const links = useMemo(() => nav, []);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8 md:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/new-logo-1.png"
              alt="Sarawak Living Advisor"
              width={200}
              height={52}
              priority
              className="h-auto w-[180px] md:w-[280px]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-14 text-[17px] font-medium tracking-wide text-white/85 md:flex">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-1 text-white/85 hover:text-white transition-colors duration-200"
              >
                {item.label}
                {/* underline grows left to right */}
                <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-white/90 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Mobile: hamburger (replaces the old Contact button) */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur hover:bg-white/15"
          >
            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 top-[2px] h-[2px] w-full bg-white transition-transform duration-200 ${
                  open ? "translate-y-[8px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[9px] h-[2px] w-full bg-white transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[16px] h-[2px] w-full bg-white transition-transform duration-200 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <OverlayMenu open={open} onClose={() => setOpen(false)} links={links} />
    </>
  );
}
