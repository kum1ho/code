import { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { experiences, loyaltyTiers } from '@/data/store';

export const metadata: Metadata = {
  title: 'Sunleaf — Корпоративні рішення'
};

const packages = [
  {
    name: 'Discovery Sprint',
    price: 'від ₴12 000',
    features: ['Дегустація 3 сетів', 'Leafy AI рекомендації', 'Подарункові набори для команди']
  },
  {
    name: 'Hybrid Offsite',
    price: 'від ₴28 000',
    features: ['Live-стрім із локації Sunleaf', 'AR-активності', 'Zero-waste кейтеринг']
  },
  {
    name: 'Signature Summit',
    price: 'індивідуально',
    features: ['Персональний куратор', 'Імерсивний сценарій', 'Преміум Solstice статус']
  }
];

export default function CateringPage() {
  return (
    <div className="space-y-24">
      <PageHero
        eyebrow="B2B"
        title="Корпоративні події Sunleaf"
        subtitle="Кейтеринг, офіси, події зі смаком технологій"
        description="Leafy допомагає налаштувати wow-подію для команди, клієнтів або партнерів. Ми поєднуємо гастрономію, аналітику та zero-waste підхід."
        actions={[
          { label: 'Запросити пропозицію', href: '#form', variant: 'primary' },
          { label: 'Дивитись програми', href: '#packages', variant: 'secondary' }
        ]}
      />

      <section className="section" id="packages">
        <SectionHeading title="Пакети для бізнесу" subtitle="Sunleaf for Teams" />
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div key={pkg.name} className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg">
              <p className="text-lg font-semibold text-coffee">{pkg.name}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-coffee/60">{pkg.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-coffee/80">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-tea-500" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="modules">
        <SectionHeading title="Що входить" subtitle="Модулі" />
        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((experience) => (
            <div key={experience.id} className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg">
              <p className="text-lg font-semibold text-coffee">{experience.title}</p>
              <p className="text-sm text-coffee/80">{experience.description}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-coffee/60">Тривалість {experience.duration}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="perks">
        <SectionHeading title="Переваги для команди" subtitle="Solstice для бізнесу" />
        <div className="grid gap-6 md:grid-cols-3">
          {loyaltyTiers.map((tier) => (
            <div key={tier.id} className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg">
              <p className="text-lg font-semibold text-coffee">{tier.name}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-coffee/60">Бонус {tier.bonus}</p>
              <ul className="mt-3 space-y-1 text-sm text-coffee/70">
                {tier.perks.slice(0, 2).map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="form">
        <div className="glass-card grid gap-6 p-10">
          <h2 className="text-3xl font-semibold text-coffee">Запланувати корпоративний проєкт</h2>
          <p className="text-sm leading-relaxed text-coffee/80">
            Напишіть кількість гостей, формат та бажані дати. Ми надішлемо концепцію, кошторис та візуальні референси протягом 24 годин.
          </p>
          <a
            href="mailto:partners@sunleaf.ua"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-coffee px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
          >
            partners@sunleaf.ua
          </a>
        </div>
      </section>
    </div>
  );
}
