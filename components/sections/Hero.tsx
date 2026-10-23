'use client';

import { Reveal } from '@/components/ui/Reveal';

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
      
      {/* Faux code en arrière-plan (Optionnel, pour l'ambiance) */}
      <div className="absolute top-20 left-6 font-mono text-xs text-border/40 pointer-events-none hidden lg:block">
        &lt;/html&gt;<br />
        &lt;body&gt;
      </div>

      <div className="mx-auto w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Texte de gauche */}
        <div className="flex flex-col items-start pt-10 md:pt-0">
          <Reveal>
            <p className="font-mono text-xs text-border/60 mb-4">&lt;h1&gt;</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-2 leading-[1.1]">
              Hello<br />
              Im <span className="text-accent-primary">David,</span><br />
              Web developer
            </h1>
            <p className="font-mono text-xs text-border/60 mt-4 mb-8">&lt;/h1&gt;</p>
          </Reveal>
          
          <Reveal delay={0.1}>
            <p className="font-mono text-xs text-border/60 mb-2">&lt;p&gt;</p>
            <p className="font-mono text-sm text-fg-primary mb-4">
              full stack developer
            </p>
            <p className="font-mono text-xs text-border/60 mb-8">&lt;/p&gt;</p>
          </Reveal>

          <Reveal delay={0.2} className="flex items-center gap-6">
            <a 
              href="/dev-portfolio/cv.pdf"
              className="inline-flex items-center justify-center border border-accent-primary bg-accent-primary/10 px-6 py-3 font-mono text-sm text-accent-primary transition-colors hover:bg-accent-primary hover:text-bg-primary"
            >
              View my CV
            </a>
            <a 
              href="#contact"
              className="font-mono text-sm text-accent-primary hover:underline underline-offset-4"
            >
              Booking
            </a>
          </Reveal>
        </div>

        {/* Image de droite */}
        <Reveal delay={0.3} className="relative h-[500px] md:h-[600px] w-full flex items-end justify-center">
          {/* Cercle de fond */}
          <div className="absolute bottom-0 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-border/20 blur-3xl" />
          
          <img 
            src="./images/david.webp" 
            alt="David" 
            className="relative z-10 object-contain w-full h-full max-h-[550px] grayscale hover:grayscale-0 transition-all duration-700"
          />
        </Reveal>

      </div>
    </section>
  );
}