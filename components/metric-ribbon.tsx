'use client';

import { motion } from 'framer-motion';
import type { MetricHighlight } from '@/lib/types';

type Props = {
  metrics: MetricHighlight[];
};

export function MetricRibbon({ metrics }: Props) {
  return (
    <div className="relative overflow-hidden border-y border-white/40 bg-white/60 py-6 backdrop-blur-xl">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-50%' }}
        transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
        className="flex min-w-[200%] gap-12"
      >
        {[...metrics, ...metrics].map((metric, index) => (
          <div key={`${metric.label}-${index}`} className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-coffee/60">{metric.label}</span>
            <span className="text-lg font-semibold text-coffee">{metric.value}</span>
            <span className={`text-sm ${metric.positive ? 'text-tea-600' : 'text-coffee/60'}`}>{metric.change}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
