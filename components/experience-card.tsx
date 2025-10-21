'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Experience } from '@/lib/types';

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/40 bg-white/75 shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={experience.image}
          alt={experience.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <span className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-coffee">
          {experience.duration}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-tea-500/80">{experience.highlight}</p>
          <h3 className="mt-2 text-2xl font-semibold text-coffee">{experience.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-coffee/80">{experience.description}</p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-tea-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-tea-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
