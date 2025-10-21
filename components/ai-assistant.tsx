'use client';

import { useMemo, useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

type AssistantResponse = {
  reply?: string;
};

const fetcher = (url: string, payload: unknown): Promise<AssistantResponse> => {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).then((res) => res.json());
};

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export function LeafyAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: 'Привіт! Я Leafy. Порадити сет, розповісти про ферми чи допомогти з доставкою?'
    }
  ]);
  const [input, setInput] = useState('');
  const [pending, setPending] = useState(false);

  const suggestions = useMemo(
    () => [
      'Який сет порадите до вечірки?',
      'Покажіть zero-waste ініціативи',
      'Як приєднатись до Solstice?',
      'Де найближча Sunleaf точка?'
    ],
    []
  );

  const sendMessage = async () => {
    if (!input.trim()) return;
    const next: Message = { id: Date.now().toString(), role: 'user', content: input.trim() };
    const optimistic = [...messages, next];
    setMessages(optimistic);
    setInput('');
    setPending(true);
    try {
      const response = await fetcher('/api/assistant', {
        messages: optimistic.map(({ role, content }) => ({ role, content }))
      });
      const reply: Message = {
        id: `${Date.now()}-assistant`,
        role: 'assistant',
        content: response.reply ?? 'Я завжди поряд, щоб допомогти!'
      };
      setMessages((prev) => [...prev, reply]);
    } catch (error) {
      const fallback: Message = {
        id: `${Date.now()}-assistant-error`,
        role: 'assistant',
        content:
          'Вибачте, зараз я недоступний. Напишіть нам на hello@sunleaf.ua — команда вже на шляху!'
      };
      setMessages((prev) => [...prev, fallback]);
      if (process.env.NODE_ENV !== 'production') {
        console.error(error);
      }
    } finally {
      setPending(false);
    }
  };

  return (
    <section id="assistant" className="section">
      <div className="grid-overlay absolute inset-0" aria-hidden />
      <div className="glass-card relative grid gap-10 p-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-tea-500/80">AI-асистент</p>
          <h2 className="text-3xl font-semibold text-coffee md:text-4xl">Leafy, що пам'ятає кожен смак</h2>
          <p className="text-sm leading-relaxed text-coffee/80">
            Leafy аналізує ваші вподобання та замовлення, щоб пропонувати ідеальні поєднання кави, чаю та десертів у режимі
            реального часу.
          </p>
        </div>
        <div className="glass-card grid gap-4 rounded-2xl bg-white/60 p-6">
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                className="rounded-full border border-coffee/10 bg-white/80 px-4 py-2 text-xs font-semibold text-coffee transition hover:border-tea-300"
                onClick={() => setInput(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-4 text-sm text-coffee/80">
            {messages.map((message) => {
              const isAssistant = message.role === 'assistant';
              const bubbleClass = isAssistant
                ? 'self-start rounded-2xl bg-tea-100 px-4 py-3 shadow-sm'
                : 'self-end rounded-2xl bg-coffee px-4 py-3 text-white shadow-lg';
              return (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={bubbleClass}
                >
                  {message.content}
                </motion.div>
              );
            })}
            {pending && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
                className="flex items-center gap-2 self-start rounded-2xl bg-tea-50 px-4 py-3 text-xs font-medium text-tea-600"
              >
                Leafy друкує
                <span className="flex gap-1">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-tea-500" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-tea-500 [animation-delay:0.1s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-tea-500 [animation-delay:0.2s]" />
                </span>
              </motion.div>
            )}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              className="flex-1 rounded-full border border-white/60 bg-white/80 px-5 py-3 text-sm outline-none focus:border-tea-400 focus:ring-2 focus:ring-tea-200"
              placeholder="Запитайте про дегустаційні сети або доставку..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  sendMessage();
                }
              }}
            />
            <button
              onClick={sendMessage}
              disabled={pending}
              className="rounded-full bg-coffee p-3 text-white shadow-lg transition hover:shadow-xl disabled:cursor-not-allowed disabled:bg-coffee/60"
            >
              <PaperAirplaneIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
