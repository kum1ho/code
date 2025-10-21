'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Location } from '@/lib/types';

export function LocationCard({ location }: { location: Location }) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/40 bg-white/75 shadow-xl"
    >
      <div className="relative aspect-[5/3]">
        <Image src={location.image} alt={location.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span className="absolute left-6 top-6 rounded-full bg-white/95 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-coffee">
          {location.type}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-tea-500/80">{location.city}</p>
          <h3 className="mt-2 text-2xl font-semibold text-coffee">{location.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-coffee/80">{location.address}</p>
          <p className="text-sm text-coffee/80">{location.schedule}</p>
        </div>
        <div className="space-y-1 text-xs text-coffee/70">
          <p className="uppercase tracking-[0.2em]">Особливості</p>
          <ul className="list-inside list-disc space-y-1 text-sm text-coffee/80">
            {location.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <a
          href={`tel:${location.phone.replace(/\s+/g, '')}`}
          className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-coffee/20 px-4 py-2 text-sm font-semibold text-coffee transition hover:border-coffee/40"
        >
          Зателефонувати · {location.phone}
        </a>
      </div>
    </motion.article>
  );
}
