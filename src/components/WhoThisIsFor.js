import { Users, Palmtree, ShieldCheck } from 'lucide-react';

export default function WhoThisIsFor() {
  const personas = [
    {
      // Icon representing families/community
      icon: <Users className="h-6 w-6 text-teal-600" />,
      title: "Expat Families",
      description: "Looking for a safe, high-quality environment for your children's education and growth in a culturally rich setting.",
      details: ["International Schools", "Safe Neighborhoods", "Family Lifestyle"]
    },
    {
      // Icon representing leisure/retirement
      icon: <Palmtree className="h-6 w-6 text-teal-600" />,
      title: "Active Retirees",
      description: "Seeking a peaceful, affordable, and high-standard retirement destination with world-class healthcare and a warm climate.",
      details: ["Medical Facilities", "Leisure & Nature", "Social Communities"]
    },
    {
      // Icon representing security/long-term planning
      icon: <ShieldCheck className="h-6 w-6 text-teal-600" />,
      title: "Long-term Planners",
      description: "For those wanting a secure 'Plan B' or a permanent base in Southeast Asia to support a borderless lifestyle.",
      details: ["Strategic Location", "Stable Environment", "S-MM2H Security"]
    }
  ];

  return (
    <section className="bg-[#fafafa] py-24 md:py-24 relative">
      {/*
         IMAGE SUGGESTION:
         To make this section less "boring" without losing the clean feel, add a subtle,
         light pattern background here. A faint, traditional Sarawak motif (like a weaving pattern)
         would add cultural context and depth.

         <div className="absolute inset-0 bg-[url('/path/to/your/subtle-pattern.png')] bg-repeat opacity-[0.03] pointer-events-none"></div>
      */}

      <div className="mx-auto max-w-7xl px-6 md:px-10 relative z-10">

        {/* Section Header - Improved Spacing & Color */}
        <div className="max-w-4xl mb-20 md:mb-20">
          <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight text-zinc-900 md:text-6xl">
            Tailored guidance for your <br />
            <span className="italic text-teal-600">Sarawak journey.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl">
            The S-MM2H programme is a significant life decision. We provide the independent clarity needed by those looking to call Sarawak home.
          </p>
        </div>

        {/* Persona Grid - Added Icons & Colored Pills */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {personas.map((persona, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-teal-100"
            >
              <div>
                {/* Header with Number and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">0{index + 1}</span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 group-hover:bg-teal-100 transition-colors">
                    {persona.icon}
                  </div>
                </div>

                <h3 className="mt-4 font-serif text-2xl font-semibold text-zinc-900 md:text-3xl">
                  {persona.title}
                </h3>
                <p className="mt-4 text-zinc-600 leading-relaxed">
                  {persona.description}
                </p>
              </div>

              {/* Colored Pills */}
              <ul className="mt-8 flex flex-wrap gap-2">
                {persona.details.map((detail, i) => (
                  <li
                    key={i}
                    // New style: subtle teal background with darker teal text and border
                    className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 border border-teal-100 transition-colors group-hover:bg-teal-100/50"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Context Line - Improved Spacing & Link Color */}
        <div className="mt-20 text-center">
          <p className="text-sm text-zinc-500">
            Unsure if you qualify? <a href="/contact" className="text-teal-700 underline underline-offset-4 hover:text-teal-800 font-medium transition-colors">Start with a conversation.</a>
          </p>
        </div>

      </div>
    </section>
  );
}