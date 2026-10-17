'use client';

import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { site } from '@/data/site';

export function Hero() {
  const shouldReduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: shouldReduce ? 0 : 0.08 },
    },
  };

  const item = {
  hidden: { opacity: 0, y: shouldReduce ? 0 : 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const, // ← chaîne au lieu de tableau
    },
  },
};

  return (
        <section
      id="accueil"
      className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-28 md:pt-40"
    >
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-[420px] w-[420px] rounded-full bg-accent-primary/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="md:col-span-7"
        >
          <motion.p
            variants={item}
            className="mb-6 font-mono text-xs uppercase tracking-widest text-accent-primary"
          >
            Développeur Web · Construction de produits numériques
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
          >
            Je transforme des idées en{' '}
            <span className="gradient-text">expériences web</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg text-fg-secondary"
          >
            {site.description}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href="/projets">
              Découvrir mes projets <ArrowRight size={16} />
            </Button>
            <Button href="/#contact" variant="outline">
              Me contacter
            </Button>
            {site.cvAvailable ? (
              <Button href={site.cvPath} variant="ghost">
                <Download size={16} /> Télécharger mon CV
              </Button>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-border px-5 py-2.5 text-sm text-fg-secondary">
                <Download size={16} /> CV bientôt disponible
              </span>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: shouldReduce ? 1 : 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-5"
        >
          <CodeWindow />
        </motion.div>
      </div>
    </section>
  );
}

function CodeWindow() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 blur-2xl"
        aria-hidden
      />
      <div className="relative rounded-2xl border border-border bg-bg-card/80 backdrop-blur-sm">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-green-400/70" />
          <span className="ml-3 font-mono text-xs text-fg-secondary">
            david.ts
          </span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-fg-secondary">
          <code>
{`const david = {
  role: "Développeur Web",
  location: "Burundi",
  origin: "Congo",
  focus: ["Frontend", "Backend"],
  stack: ["React", "Next.js", "Laravel"],
  mindset: "curieux & créatif",
};

export default david;`}
          </code>
        </pre>
      </div>
    </div>
  );
}