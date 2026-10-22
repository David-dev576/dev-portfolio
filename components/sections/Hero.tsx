'use client';

import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-[90vh] flex items-center px-6 pt-32 pb-20">
      <div className="mx-auto w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center">
        
        {/* Texte de gauche */}
        <div className="flex flex-col items-start">
          <Reveal>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Your Name Here
            </h1>
          </Reveal>
          
          <Reveal delay={0.1}>
            <p className="text-base text-fg-secondary leading-relaxed mb-10 max-w-md">
              Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-8 py-4 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Let's get started <ArrowRight size={18} />
            </a>
          </Reveal>
        </div>

        {/* Photo ronde à droite */}
        <Reveal delay={0.3} className="relative aspect-square w-full max-w-sm mx-auto md:ml-auto">
          <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-bg-secondary bg-[#334155]">
            {/* 📸 Utilise la même image que dans About */}
            <img 
              src="/dev-portfolio/images/david.webp" 
              alt="David" 
              className="object-cover w-full h-full"
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
}