import Header from "@/components/Header";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden overflow-x-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/sarawak-hero.png)" }}
      />

      {/* Overlay for readability: strong left, light right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/18 to-black/0" />

      {/* Slight top shading so nav stays readable */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/35 to-transparent" />

      {/* Header sits on top of hero */}
      <Header />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[88vh] w-full max-w-7xl items-start px-6 pt-40 md:px-10 md:pt-48">
        <div className="w-full max-w-4xl text-white">
          {/* Small label for clarity + SEO */}
          <div className="inline-flex max-w-full items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium tracking-wide text-white/85 ring-1 ring-white/15 backdrop-blur">
            Sarawak My Second Home (S-MM2H)
          </div>

          {/* Headline: clamp keeps it huge on desktop but safe on mobile */}
          <h1 className="mt-6 font-serif font-bold leading-[0.95] tracking-[-0.01em] text-[clamp(44px,9vw,96px)] break-words hyphens-auto">
            Clarity before commitment.
          </h1>

          {/* Supporting line */}
          <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            Independent guidance for families and retirees planning life in Sarawak.
          </p>

          {/* CTA: full-width on mobile, inline on larger screens */}
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-zinc-900 shadow-sm hover:bg-zinc-100"
            >
              Start a conversation
            </a>

            <a
              href="/how-we-work"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white/90 hover:bg-white/10"
            >
              How we work
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="h-20 w-full md:h-28"
        >
          <path
            d="M0,64 C240,96 480,96 720,64 960,32 1200,32 1440,64 L1440,120 L0,120 Z"
            fill="#fafafa"
          />
        </svg>
      </div>
    </section>
  );
}
