import { MonitorSmartphone, Smartphone, Cloud } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

const services = [
  { icon: MonitorSmartphone, title: 'Website Development' },
  { icon: Smartphone, title: 'App Development' },
  { icon: Cloud, title: 'Website Hosting' },
];

const stats = [
  { value: '120 +', label: 'Completed Projects' },
  { value: '95 %', label: 'Client satisfaction' },
  { value: '10 +', label: 'Years of experience' },
];

export function About() {
  return (
    <Section id="a-propos" className="py-24">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24">
        
        {/* Colonne de gauche : Services */}
        <div className="flex flex-col justify-center">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="relative flex items-center gap-6 py-8 border-l-2 border-border pl-8">
                {/* Point orange */}
                <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-primary" />
                
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-bg-secondary">
                  <s.icon size={24} className="text-fg-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Colonne de droite : Texte & Stats */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <h2 className="font-display text-4xl font-bold mb-6">About me</h2>
            <p className="text-fg-secondary leading-relaxed mb-12 text-lg">
              I started my software journey from photography. Through that, I learned to love the process of creating from scratch. Since then, this has led me to software development as it fulfills my love for learning and building things.
            </p>
          </Reveal>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.2 + i * 0.1}>
                <div className="flex flex-col">
                  <span className="font-display text-3xl font-bold text-accent-primary mb-2">
                    {stat.value}
                  </span>
                  <span className="text-xs text-fg-secondary leading-tight">
                    {stat.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}