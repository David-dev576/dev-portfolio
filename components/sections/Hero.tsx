'use client';

import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-12">
      <div className="mx-auto w-full max-w-5xl">
        
        {/* Contenu principal */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Colonne de gauche */}
          <div className="flex flex-col items-start pt-10 md:pt-0">
            <Reveal>
              <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6 text-fg-primary">
                Your Name Here
              </h1>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="text-base text-fg-secondary leading-relaxed mb-8 max-w-md">
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

          {/* Colonne de droite (Photo ronde) */}
          <Reveal delay={0.3} className="relative aspect-square w-full max-w-[400px] mx-auto md:ml-auto">
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-bg-secondary bg-bg-card">
              {/* 📸 Photo de David */}
              <img 
                src="/dev-portfolio/images/david.webp" 
                alt="David" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </Reveal>

        </div>

        {/* Section "Worked with" (Logos) */}
        <Reveal delay={0.4} className="mt-24 md:mt-32">
          <p className="text-xs font-medium text-fg-secondary mb-6">Worked with</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {/* Remplace les noms par tes vraies entreprises/clients si besoin */}
            {['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5'].map((client, i) => (
              <div 
                key={i} 
                className="flex items-center justify-center rounded border border-border bg-bg-secondary/50 py-4 px-2"
              >
                <span className="font-display text-sm font-semibold tracking-wider text-fg-secondary uppercase opacity-70">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}