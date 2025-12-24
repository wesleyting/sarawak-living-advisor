import Hero from "@/components/Hero";
import Container from "@/components/Container";
import GlobalReach from "@/components/GlobalReach";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import CinematicVideo from "@/components/CinematicVideo";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      {/* Hero section with overlay navigation */}
      <Hero />
      <GlobalReach />
      <WhoThisIsFor />
      <CinematicVideo />

      {/* Who this is for */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
              Who this is for
            </h2>

            <p className="mt-4 text-lg text-zinc-700">
              Families and retirees who are exploring a stable long-term life in Sarawak —
              and want clarity before engaging with licensed agents or submitting an
              application.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "Families planning long-term living in Malaysia",
              "Retirees seeking a calm, predictable lifestyle",
              "Individuals who want one clear point of contact",
            ].map((text) => (
              <div
                key={text}
                className="rounded-xl border border-zinc-200 p-6"
              >
                <p className="text-base text-zinc-800">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How we work */}
      <section className="border-t border-zinc-200 py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
              How we work
            </h2>

            <p className="mt-4 text-lg text-zinc-700">
              We act as your primary point of contact throughout the decision and
              preparation process. Once you are ready to proceed, we coordinate closely
              with government-recognised licensed agents who handle the official
              submission and regulatory requirements.
            </p>
          </div>
        </Container>
      </section>

      {/* Call to action */}
      <section className="bg-zinc-50 py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
              Start with a conversation
            </h2>

            <p className="mt-4 text-lg text-zinc-700">
              The first step is not an application. It is a conversation to understand
              whether Sarawak — and the SMM2H programme — fits your long-term plans.
            </p>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center rounded-full bg-zinc-900 px-8 py-4 text-base font-semibold text-white hover:bg-zinc-800"
              >
                Contact us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
