import { MapPin, Info } from "lucide-react";

export default function CinematicVideo() {
  const videoId = "SmctEhXLkVo";
  // Added start=8 and iv_load_policy=3 (hides annotations)
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&start=8`;

  return (
    <section className="bg-[#fafafa] py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Fixed Heading Spacing: Added 'mb-12' and improved flex tracking */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl font-bold tracking-tight text-zinc-900 md:text-6xl leading-[1.1]">
              Discover the <span className="text-teal-600">Heart of Borneo.</span>
            </h2>
            <p className="mt-6 text-zinc-600 text-lg md:text-xl leading-relaxed">
              Kuching offers a rare blend of modern infrastructure, heritage charm, and unparalleled natural beauty.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 pb-2">
             <MapPin className="h-4 w-4 text-teal-600" />
             Kuching, Sarawak
          </div>
        </div>

        {/* Cinematic Container */}
        <div className="relative flex flex-col md:block w-full overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-zinc-900 shadow-2xl">
          
          {/* 1. The Video Layer - Added overflow-hidden and scale to hide UI */}
          <div className="relative aspect-video w-full overflow-hidden pointer-events-none">
             <iframe
                // The scale and negative margin trick helps hide the top 'Title' bar
                className="absolute top-1/2 left-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 object-cover"
                src={embedUrl}
                title="Sarawak Drone Footage"
                allow="autoplay; encrypted-media"
              />
              {/* Overlay for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </div>

          {/* 2. Responsive Info Card */}
          {/* Mobile: Sits below video | Desktop: Overlays video */}
          <div className="relative md:absolute md:bottom-10 md:left-10 z-20 w-full md:w-96 p-6 md:p-0">
            <div className="rounded-2xl md:rounded-3xl border border-zinc-200 md:border-white/20 bg-white md:bg-black/40 p-6 md:p-8 text-zinc-900 md:text-white md:backdrop-blur-xl shadow-xl md:shadow-none">
              <div className="mb-6 flex items-center gap-2 text-teal-600 md:text-teal-400">
                <Info className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Sarawak at a glance</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between border-b border-zinc-100 md:border-white/10 pb-3">
                  <span className="text-sm text-zinc-500 md:text-white/70">Language</span>
                  <span className="text-sm font-semibold">English widely spoken</span>
                </div>
                <div className="flex justify-between border-b border-zinc-100 md:border-white/10 pb-3">
                  <span className="text-sm text-zinc-500 md:text-white/70">Healthcare</span>
                  <span className="text-sm font-semibold">World-class facilities</span>
                </div>
                <div className="flex justify-between border-b border-zinc-100 md:border-white/10 pb-3">
                  <span className="text-sm text-zinc-500 md:text-white/70">Lifestyle</span>
                  <span className="text-sm font-semibold">Low cost, high safety</span>
                </div>
              </div>

              <a 
                href="/how-we-work" 
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-teal-600 md:bg-white py-4 text-sm font-bold text-white md:text-zinc-900 transition-all hover:bg-teal-700 md:hover:bg-teal-50"
              >
                Learn more about living here
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}