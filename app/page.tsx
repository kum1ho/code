'use client';

import Link from 'next/link';
import { SparklesIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import {
  products,
  stories,
  experiences,
  metricHighlights,
  loyaltyTiers,
  locations
} from '@/data/store';
import { ProductCard } from '@/components/product-card';
import { SectionHeading } from '@/components/section-heading';
import { StoryCard } from '@/components/story-card';
import { LeafyAssistant } from '@/components/ai-assistant';
import { ExperienceCard } from '@/components/experience-card';
import { MetricRibbon } from '@/components/metric-ribbon';
import { LoyaltyTierCard } from '@/components/loyalty-tier';
import { LocationCard } from '@/components/location-card';
import { NewsletterForm } from '@/components/newsletter-form';

const heroHighlights = [
  { title: 'AI-персоналізація', description: 'Leafy адаптує меню під ваш ритм життя.' },
  { title: 'Синхронізація каналів', description: 'Доставка, кафе та ритейл в єдиній CRM.' },
  { title: 'Дизайн зі смаком', description: 'Wow-анімації, які розкривають аромат кожного сету.' }
];

export default function HomePage() {
  return (
    <div className="space-y-32">
      <section className="section grid-overlay">
        <div className="grid gap-14 lg:grid-cols-[1.3fr,1fr]">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-tea-300/60 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-tea-600 shadow-sm">
                <SparklesIcon className="h-4 w-4" />
                Sunleaf Experience
              </span>
              <h1 className="text-balance text-4xl font-semibold text-coffee md:text-6xl">
                Цифрова екосистема кави, чаю та десертів зі смаком майбутнього
              </h1>
              <p className="text-sm leading-relaxed text-coffee/80 md:text-base">
                Від першого ковтка до останньої аналітичної метрики — Sunleaf створює мультисенсорний досвід для команд та гостей.
                Wow-дизайн, жива телеметрія продажів та AI-асистент Leafy, що знає ваші вподобання.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/menu"
                  className="rounded-full bg-coffee px-6 py-3 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  Переглянути меню
                </Link>
                <Link
                  href="/experiences"
                  className="rounded-full border border-coffee/20 px-6 py-3 text-sm font-semibold text-coffee transition hover:border-coffee/40 hover:-translate-y-1"
                >
                  Бронювати досвід
                </Link>
              </div>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-3">
              {heroHighlights.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="glass-card space-y-2 p-6"
                >
                  <h3 className="text-lg font-semibold text-coffee">{item.title}</h3>
                  <p className="text-sm text-coffee/80">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="glass-card relative aspect-[3/4] overflow-hidden"
          >
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
            >
              <source src="https://cdn.coverr.co/videos/coverr-coffee-with-foam-9221/1080p.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 space-y-2 text-white">
              <p className="text-xs uppercase tracking-[0.3em]">signature bar</p>
              <p className="text-lg font-semibold">Sunleaf Bloom Station</p>
            </div>
          </motion.div>
        </div>
      </section>

      <MetricRibbon metrics={metricHighlights} />

      <section className="section">
        <SectionHeading title="Смакуйте, що далі" subtitle="Меню" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading title="Immersive Sunleaf" subtitle="Досвіди" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
        <Link
          href="/experiences"
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-coffee/20 px-6 py-3 text-sm font-semibold text-coffee transition hover:border-coffee/40"
        >
          Дивитись всі програми
        </Link>
      </section>

      <LeafyAssistant />

      <section className="section">
        <SectionHeading title="Історії, що надихають" subtitle="Журнал Sunleaf" />
        <div className="grid gap-6 md:grid-cols-2">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
        <Link
          href="/stories"
          className="w-fit rounded-full border border-coffee/20 px-6 py-3 text-sm font-semibold text-coffee transition hover:border-coffee/40"
        >
          Читати всі історії
        </Link>
      </section>

      <section className="section">
        <SectionHeading title="Solstice Loyalty" subtitle="Програма" />
        <div className="grid gap-6 md:grid-cols-3">
          {loyaltyTiers.map((tier) => (
            <LoyaltyTierCard key={tier.id} tier={tier} />
          ))}
        </div>
        <Link
          href="/loyalty"
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-coffee/20 px-6 py-3 text-sm font-semibold text-coffee transition hover:border-coffee/40"
        >
          Дізнатись більше
        </Link>
      </section>

      <section className="section">
        <SectionHeading title="Sunleaf у вашому місті" subtitle="Локації" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
        <Link
          href="/locations"
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-coffee/20 px-6 py-3 text-sm font-semibold text-coffee transition hover:border-coffee/40"
        >
          Переглянути всі локації
        </Link>
      </section>

      <section className="section">
        <div className="glass-card grid gap-6 p-10 text-center">
          <h2 className="text-3xl font-semibold text-coffee md:text-4xl">Приєднуйтесь до партнерської мережі Sunleaf</h2>
          <p className="text-sm leading-relaxed text-coffee/80">
            Відкривайте кав'ярні під брендом Sunleaf або інтегруйте наші купажі у власний бізнес. Ми надаємо повну підтримку: від навчання бариста до маркетингових активацій.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
