'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import type { Testimonial } from '@/lib/types';

type Props = {
  testimonials: Testimonial[];
};

export function TestimonialCarousel({ testimonials }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const current = testimonials[index];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/80 p-10 shadow-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <Image src={current.avatar} alt={current.name} fill className="object-cover" />
            </div>
            <div>
              <p className="text-lg font-semibold text-coffee">{current.name}</p>
              <p className="text-sm text-coffee/70">{current.role}</p>
            </div>
          </div>
          <p className="text-lg leading-relaxed text-coffee/80">“{current.quote}”</p>
        </motion.div>
      </AnimatePresence>
      <div className="mt-6 flex items-center justify-center gap-2">
        {testimonials.map((testimonial, testimonialIndex) => (
          <button
            key={testimonial.id}
            type="button"
            onClick={() => setIndex(testimonialIndex)}
            className={`h-2 w-8 rounded-full transition ${index === testimonialIndex ? 'bg-tea-500' : 'bg-coffee/20'}`}
            aria-label={`Показати відгук ${testimonial.name}`}
          />
        ))}
      </div>
    </div>
  );
}
