'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { contactSchema, type ContactInput } from '@/lib/validations';
import { socials } from '@/data/socials';
import { site } from '@/data/site';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

  const onSubmit = async (data: ContactInput) => {
    setStatus('sending');
    setMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Erreur inconnue');
      setStatus('success');
      setMessage('Merci ! Ton message a bien été envoyé.');
      reset();
    } catch (err) {
      setStatus('error');
      setMessage(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue. Tu peux m'écrire directement par email."
      );
    }
  };

  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Discutons de ton projet."
        description="Une idée, une collaboration ou simplement envie d'échanger ? Écris-moi."
      />

      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-fg-secondary">
            Je suis ouvert aux opportunités, collaborations et projets
            intéressants. N'hésite pas à me contacter directement.
          </p>
          <ul className="mt-6 space-y-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-fg-secondary transition-colors hover:text-fg-primary"
                >
                  <s.icon size={16} />
                  {s.label}
                </a>
              </li>
            ))}
            <li className="pt-2 font-mono text-xs text-fg-secondary">
              {site.email}
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 md:col-span-7"
          noValidate
        >
          <Field label="Nom" error={errors.name?.message}>
            <input
              {...register('name')}
              type="text"
              autoComplete="name"
              className="w-full rounded-xl border border-border bg-bg-card px-4 py-3 text-sm text-fg-primary outline-none transition-colors focus:border-accent-primary"
            />
          </Field>

          <Field label="Email" error={errors.email?.message}>
            <input
              {...register('email')}
              type="email"
              autoComplete="email"
              className="w-full rounded-xl border border-border bg-bg-card px-4 py-3 text-sm text-fg-primary outline-none transition-colors focus:border-accent-primary"
            />
          </Field>

          <Field label="Sujet" error={errors.subject?.message}>
            <input
              {...register('subject')}
              type="text"
              className="w-full rounded-xl border border-border bg-bg-card px-4 py-3 text-sm text-fg-primary outline-none transition-colors focus:border-accent-primary"
            />
          </Field>

          <Field label="Message" error={errors.message?.message}>
            <textarea
              {...register('message')}
              rows={5}
              className="w-full resize-y rounded-xl border border-border bg-bg-card px-4 py-3 text-sm text-fg-primary outline-none transition-colors focus:border-accent-primary"
            />
          </Field>

          <div className="flex items-center gap-4">
            <Button type="submit" disabled={isSubmitting || status === 'sending'}>
              <Send size={16} />
              {status === 'sending' ? 'Envoi...' : 'Envoyer'}
            </Button>
            {message && (
              <p
                role="status"
                className={`text-sm ${
                  status === 'success' ? 'text-accent-primary' : 'text-red-400'
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </form>
      </div>
    </Section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-fg-secondary">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}