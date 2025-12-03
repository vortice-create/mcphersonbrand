import React from 'react';

export const Manifesto = () => {
  return (
    <section id="manifesto" className="min-h-screen flex flex-col md:flex-row border-b border-neutral-800">
      {/* Left: Visual */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative overflow-hidden group">
        <div className="absolute inset-0 bg-neutral-900 z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
        <img 
          src="https://picsum.photos/800/1200?grayscale" 
          alt="McPherson Portrait" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Decorative Lines */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-black to-transparent z-20 md:hidden"></div>
      </div>

      {/* Right: Copy */}
      <div className="w-full md:w-1/2 bg-brand-black p-8 md:p-20 flex flex-col justify-center">
        <div className="mb-12">
          <span className="inline-block px-3 py-1 border border-white/20 text-xs font-mono mb-6 uppercase tracking-widest text-white/60">
            The Manifesto
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase leading-none mb-8">
            Unfiltered.<br />Uncompromised.
          </h2>
          <div className="prose prose-invert prose-lg">
            <p className="font-sans text-neutral-400 leading-relaxed text-lg md:text-xl">
              <span className="text-6xl md:text-7xl float-left mr-3 mt-[-6px] font-display font-bold text-white">I</span>
              t’s not just about the score. It’s about the story. From the sideline to the design studio, McPherson Brand represents the intersection of athletic performance and street culture. We don't just cover the game; we live within its pulse.
            </p>
            <p className="font-sans text-neutral-400 leading-relaxed text-lg md:text-xl mt-6">
              This isn't for the casual fan. This is for the obsessed. The ones who see the art in the aggression.
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-6 pt-12 border-t border-neutral-800">
          {[
            { label: "Total Views", value: "10M+" },
            { label: "Broadcasts", value: "500+" },
            { label: "Since", value: "2024" }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-display text-3xl md:text-4xl font-bold text-white">{stat.value}</span>
              <span className="font-sans text-xs uppercase tracking-widest text-neutral-500 mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};