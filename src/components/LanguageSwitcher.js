"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const LOCALES = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" }
];

function replaceLocale(pathname, nextLocale) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${nextLocale}`;
  parts[0] = nextLocale; // first segment is locale
  return `/${parts.join("/")}`;
}

export default function LanguageSwitcher({ className = "" }) {
  const pathname = usePathname();
  const currentLocale = useLocale();

  return (
    <div
      className={[
        "inline-flex items-center rounded-full bg-white/10 ring-1 ring-white/15 p-1 backdrop-blur",
        className
      ].join(" ")}
      aria-label="Language switcher"
    >
      {LOCALES.map((l) => {
        const active = l.code === currentLocale;
        return (
          <Link
            key={l.code}
            href={replaceLocale(pathname, l.code)}
            className={[
              "rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors",
              active ? "bg-white text-zinc-900" : "text-white/80 hover:text-white"
            ].join(" ")}
          >
            {l.label}
          </Link>
        );
      })}
    </div>
  );
}
