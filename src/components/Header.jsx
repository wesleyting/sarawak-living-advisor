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
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header 
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/20 backdrop-blur-lg py-4" : "bg-transparent py-8"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-10">
          <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
            <Image
              src="/new-logo-1.png" // Ensure this is the white-text version
              alt="Sarawak Living Advisor"
              width={220}
              height={50}
              priority
              className="h-auto w-[160px] md:w-[220px]"
            />
          </Link>

          <nav className="hidden items-center gap-10 text-[15px] font-semibold uppercase tracking-widest md:flex">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-white/80 transition-colors hover:text-white"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-right scale-x-0 bg-white transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-md"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 bg-white transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-white transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </header>
      <OverlayMenu open={open} onClose={() => setOpen(false)} links={links} />
    </>
  );
}