import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/validations';

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !to) {
    return NextResponse.json(
      {
        error:
          "Le formulaire n'est pas encore configuré. Ajoute RESEND_API_KEY et CONTACT_EMAIL_TO dans .env.local.",
      },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Données invalides.', details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = parsed.data;

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Nom: ${name}\nEmail: ${email}\n\n${message}`,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "L'envoi a échoué. Réessaie plus tard." },
      { status: 500 }
    );
  }
}