import type { KPI } from '@/lib/types';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export function KPICard({ kpi }: { kpi: KPI }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg"
    >
      <p className="text-xs uppercase tracking-[0.3em] text-coffee/60">{kpi.title}</p>
      <p className="mt-4 text-3xl font-semibold text-coffee">{kpi.value}</p>
      <p
        className={clsx('mt-2 text-sm font-medium', {
          'text-tea-600': kpi.positive,
          'text-coffee/70': !kpi.positive
        })}
      >
        {kpi.change}
      </p>
      {kpi.secondary && <p className="mt-3 text-xs text-coffee/70">{kpi.secondary}</p>}
    </motion.article>
  );
}
