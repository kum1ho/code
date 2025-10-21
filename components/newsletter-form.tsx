'use client';

import { FormEvent, useState } from 'react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setPending(true);
    setStatus(null);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      setStatus(data.message ?? 'Дякуємо!');
      if (response.ok) {
        setEmail('');
      }
    } catch (error) {
      setStatus('Не вдалося надіслати. Спробуйте пізніше.');
      if (process.env.NODE_ENV !== 'production') {
        console.error(error);
      }
    } finally {
      setPending(false);
    }
  };

  return (
    <form onSubmit={submit} className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <input
        type="email"
        name="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="hello@sunleaf.ua"
        className="flex-1 rounded-full border border-white/50 bg-white/80 px-5 py-3 text-sm outline-none focus:border-tea-400 focus:ring-2 focus:ring-tea-200"
      />
      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-coffee px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl disabled:cursor-not-allowed disabled:bg-coffee/60"
      >
        {pending ? 'Надсилаємо…' : 'Надіслати'}
      </button>
      {status && <p className="text-xs text-coffee/60 sm:col-span-2">{status}</p>}
    </form>
  );
}
