'use client';

import { motion } from 'framer-motion';
import type { LoyaltyTier } from '@/lib/types';

export function LoyaltyTierCard({ tier }: { tier: LoyaltyTier }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex h-full flex-col gap-6 rounded-3xl border border-white/40 bg-white/80 p-8 shadow-xl"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-tea-500/80">{tier.id}</p>
        <h3 className="mt-3 text-3xl font-semibold text-coffee">{tier.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-coffee/80">{tier.description}</p>
      </div>
      <div className="space-y-2 text-sm text-coffee/80">
        <p className="text-xs uppercase tracking-[0.2em] text-coffee/60">Мінімум балів</p>
        <p className="text-lg font-semibold text-coffee">{tier.minPoints}</p>
        <p className="text-xs uppercase tracking-[0.2em] text-coffee/60">Бонус</p>
        <p className="text-lg font-semibold text-tea-600">{tier.bonus}</p>
      </div>
      <ul className="flex flex-1 flex-col gap-2 text-sm text-coffee/80">
        {tier.perks.map((perk) => (
          <li key={perk} className="flex items-start gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm">
            <span className="mt-1 h-2 w-2 rounded-full bg-tea-500" aria-hidden />
            <span>{perk}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
