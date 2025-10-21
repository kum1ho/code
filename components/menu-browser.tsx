'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { products as allProducts } from '@/data/store';
import { ProductCard } from '@/components/product-card';

const categories = ['всі', 'coffee', 'tea', 'dessert', 'gear'] as const;

export function MenuBrowser() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('всі');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesCategory = activeCategory === 'всі' || product.category === activeCategory;
      const matchesQuery = query.trim()
        ? product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase())
        : true;
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                activeCategory === category
                  ? 'bg-coffee text-white shadow-lg'
                  : 'border border-coffee/20 text-coffee hover:border-coffee/40'
              }`}
            >
              {category === 'всі' ? 'Всі' : category}
            </button>
          ))}
        </div>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Пошук: Aurora, Nitro, десерти..."
          className="w-full rounded-full border border-white/60 bg-white/80 px-5 py-3 text-sm outline-none focus:border-tea-400 focus:ring-2 focus:ring-tea-200 sm:w-64"
        />
      </div>
      <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((product) => (
          <motion.div key={product.id} layout>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
