'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type HeroAction = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  subtitle?: string;
  actions?: HeroAction[];
  alignment?: 'left' | 'center';
};

export function PageHero({ eyebrow, title, description, subtitle, actions = [], alignment = 'center' }: PageHeroProps) {
  return (
    <section className="section relative overflow-hidden">
      <div className="grid-overlay absolute inset-0 opacity-60" aria-hidden />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={clsx('relative mx-auto max-w-4xl text-balance space-y-6 text-coffee', {
          'text-center': alignment === 'center'
        })}
      >
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.3em] text-tea-500/80">{eyebrow}</p>
        )}
        <h1 className="text-4xl font-semibold md:text-6xl">{title}</h1>
        {subtitle && <p className="text-lg font-semibold text-tea-600">{subtitle}</p>}
        <p className="text-sm leading-relaxed text-coffee/80 md:text-base">{description}</p>
        {actions.length > 0 && (
          <div
            className={clsx('flex flex-wrap gap-3', {
              'justify-center': alignment === 'center'
            })}
          >
            {actions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className={clsx(
                  'rounded-full px-6 py-3 text-sm font-semibold transition',
                  action.variant === 'secondary'
                    ? 'border border-coffee/20 text-coffee hover:border-coffee/40'
                    : 'bg-coffee text-white shadow-xl hover:-translate-y-1 hover:shadow-2xl'
                )}
              >
                {action.label}
              </Link>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
