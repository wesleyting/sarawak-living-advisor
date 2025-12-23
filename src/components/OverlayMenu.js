"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function OverlayMenu({ open, onClose, links }) {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    if (!overlayRef.current) return;

    const overlay = overlayRef.current;
    const panel = panelRef.current;
    const items = overlay.querySelectorAll("[data-menu-item]");

    gsap.set(overlay, { autoAlpha: 0, pointerEvents: "none" });
    gsap.set(panel, { y: 18, autoAlpha: 0 });
    gsap.set(items, { y: 14, autoAlpha: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(overlay, { autoAlpha: 1, duration: 0.18, ease: "power2.out" }, 0)
      .set(overlay, { pointerEvents: "auto" }, 0)
      .to(panel, { y: 0, autoAlpha: 1, duration: 0.28, ease: "power2.out" }, 0.05)
      .to(
        items,
        { y: 0, autoAlpha: 1, duration: 0.28, ease: "power2.out", stagger: 0.06 },
        0.1
      );

    tlRef.current = tl;

    return () => tl.kill();
  }, []);

  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;
    if (open) tl.play();
    else tl.reverse();
  }, [open]);

  useEffect(() => {
    function onKeyDown(e) {
      if (!open) return;
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm"
      aria-hidden={!open}
      onMouseDown={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className="flex h-full w-full items-center justify-center px-6">
        <div
          ref={panelRef}
          className="w-full max-w-xl rounded-3xl bg-white/10 p-10 ring-1 ring-white/15"
        >
          <nav className="flex flex-col items-center gap-7 text-white">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-menu-item
                onClick={onClose}
                className="text-3xl font-semibold tracking-tight text-white/90 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-12 text-center text-sm text-white/70">
            <p>Independent advisory service.</p>
            <p className="mt-1">
              Formal S MM2H applications are handled by government recognised licensed partners.
            </p>

            <div className="mt-6">
              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-base font-semibold text-zinc-900 hover:bg-zinc-100"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
