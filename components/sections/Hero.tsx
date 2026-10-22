'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center px-6 pt-20">
      <div className="mx-auto w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        
        {/* Texte de gauche */}
        <div className="flex flex-col items-start">
          <Reveal>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-accent-primary">
              Available for freelance
            </p>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h1 className="font-display text-[3.5rem] leading-[1.1] md:text-[5rem] lg:text-[6rem] font-medium tracking-tight text-balance">
              I craft clean,<br />
              fast and<br />
              purposeful<br />
              digital<br />
              experiences.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-base text-fg-secondary">
              Je suis David, développeur web congolais basé au Burundi. Je conçois des interfaces modernes et performantes.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <a 
              href="/dev-portfolio/projets"
              className="mt-10 inline-flex items-center gap-2 border-b border-fg-primary pb-1 text-sm font-medium hover:text-accent-primary hover:border-accent-primary transition-colors"
            >
              Voir mes projets <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>

        {/* Image de droite (remplace l'image par la tienne) */}
        <Reveal delay={0.2} className="relative aspect-[4/5] w-full max-w-md mx-auto md:ml-auto">
          <div className="absolute inset-0 bg-bg-secondary border border-border rounded-sm overflow-hidden">
             {/* 📸 METS TON IMAGE ICI : public/images/david-hero.webp */}
            <img 
              src="/dev-portfolio/images/david-hero.webp" 
              alt="David"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
}