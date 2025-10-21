import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { Product } from '@/lib/types';

export function ProductCard({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={clsx(
        'group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/40 bg-white/80 shadow-lg transition',
        product.featured && 'ring-2 ring-tea-400'
      )}
    >
      {product.image && (
        <div className="relative aspect-[5/4] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          {product.badge && (
            <span className="absolute right-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-coffee">
              {product.badge}
            </span>
          )}
        </div>
      )}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-coffee/60">{product.category}</p>
          <h3 className="text-xl font-semibold text-coffee">{product.name}</h3>
          <p className="text-sm leading-relaxed text-coffee/80">{product.description}</p>
          {product.tastingNotes && (
            <div className="flex flex-wrap gap-2 text-xs text-coffee/70">
              {product.tastingNotes.map((note) => (
                <span key={note} className="rounded-full bg-tea-100 px-3 py-1 uppercase tracking-[0.2em]">
                  {note}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="mt-auto flex items-center justify-between">
          <p className="text-lg font-semibold text-coffee">₴{product.price}</p>
          <button
            className="rounded-full border border-coffee/20 px-4 py-2 text-sm font-semibold text-coffee transition hover:border-coffee/40"
            onClick={() => setAdded(true)}
            disabled={added}
          >
            {added ? 'У кошику' : 'Додати в кошик'}
          </button>
        </div>
      </div>
    </motion.article>
  );
}
