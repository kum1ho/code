import { Metadata } from 'next';
import { loyaltyTiers, metricHighlights } from '@/data/store';
import { PageHero } from '@/components/page-hero';
import { LoyaltyTierCard } from '@/components/loyalty-tier';
import { SectionHeading } from '@/components/section-heading';
import { MetricRibbon } from '@/components/metric-ribbon';
import { NewsletterForm } from '@/components/newsletter-form';

export const metadata: Metadata = {
  title: 'Sunleaf — Лояльність'
};

export default function LoyaltyPage() {
  return (
    <div className="space-y-24">
      <PageHero
        eyebrow="Loyalty"
        title="Програма Sunleaf Solstice"
        subtitle="AI-консьєрж для постійних гостей"
        description="Збирайте Leafy-поінти, відкривайте нові дегустації та отримуйте доступ до приватних подій. Кожна взаємодія з Sunleaf підвищує ваш рівень."
        actions={[
          { label: 'Приєднатися зараз', href: '#tiers', variant: 'primary' },
          { label: 'Дізнатися деталі', href: '#how', variant: 'secondary' }
        ]}
      />

      <MetricRibbon metrics={metricHighlights} />

      <section className="section" id="tiers">
        <SectionHeading title="Рівні програми" subtitle="Лояльність" />
        <div className="grid gap-6 md:grid-cols-3">
          {loyaltyTiers.map((tier) => (
            <LoyaltyTierCard key={tier.id} tier={tier} />
          ))}
        </div>
      </section>

      <section className="section" id="how">
        <SectionHeading title="Як працює Solstice" subtitle="Сценарій" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-coffee/60">Leafy Profiles</p>
            <p className="mt-2 text-sm leading-relaxed text-coffee/80">
              AI збирає дані про ваші вподобання у закладах, доставці та онлайн-магазині, щоб пропонувати точні комбінації напоїв і десертів.
            </p>
          </div>
          <div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-coffee/60">Rewards Sync</p>
            <p className="mt-2 text-sm leading-relaxed text-coffee/80">
              Всі бонуси синхронізуються між мобільним додатком, POS і Leafy Assistant. Ви отримуєте wow-подарунки до важливих дат.
            </p>
          </div>
          <div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-coffee/60">Corporate Mode</p>
            <p className="mt-2 text-sm leading-relaxed text-coffee/80">
              Команди отримують спільні баланси, приватні дегустації та доступ до Sunleaf Academy з персональним куратором.
            </p>
          </div>
          <div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-coffee/60">Sustain Impact</p>
            <p className="mt-2 text-sm leading-relaxed text-coffee/80">
              Частина балів автоматично перетворюється на підтримку zero-waste партнерів та соціальних ініціатив.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="cta">
        <div className="glass-card grid gap-6 p-10 text-center">
          <h2 className="text-3xl font-semibold text-coffee">Завантажуйте застосунок Sunleaf</h2>
          <p className="text-sm leading-relaxed text-coffee/80">
            Leafy супроводжує вас на всіх платформах. Відскануйте QR-код у закладі або введіть email, щоб отримати посилання на застосунок і стартовий бонус.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
