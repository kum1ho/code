import { Metadata } from 'next';
import { locations, partners } from '@/data/store';
import { PageHero } from '@/components/page-hero';
import { LocationCard } from '@/components/location-card';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Sunleaf — Локації'
};

export default function LocationsPage() {
  return (
    <div className="space-y-24">
      <PageHero
        eyebrow="Географія"
        title="Sunleaf по Україні"
        subtitle="Флагмани, бутіки та партнерські простори"
        description="Від київської Bloom Station до морського Seaside Brew Loft. Кожна точка підʼєднана до єдиної системи Sunleaf і пропонує wow-досвід зі смаком."
        actions={[
          { label: 'Знайти найближчу точку', href: '#map', variant: 'primary' },
          { label: 'Стати партнером', href: '#partners', variant: 'secondary' }
        ]}
      />

      <section className="section" id="map">
        <SectionHeading title="Sunleaf на мапі" subtitle="Гео" />
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="overflow-hidden rounded-3xl border border-white/40 shadow-2xl">
            <iframe
              title="Sunleaf locations"
              src="https://www.google.com/maps/d/u/0/embed?mid=1x7bX5uLkU9MapSunleaf&ehbc=2E312F"
              className="h-[380px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="grid gap-4 text-sm text-coffee/80">
            <p className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg">
              Leafy враховує ваше місцезнаходження і пропонує найближчу точку, доступні слоти для дегустацій, а також персональний маршрут від дому до бару.
            </p>
            <p className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg">
              Кожна локація обладнана zero-waste станціями, IoT-сенсорами якості повітря та AR-гайдами для гостей.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="locations">
        <SectionHeading title="Відкрийте для себе локацію" subtitle="Портфоліо" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </section>

      <section className="section" id="partners">
        <SectionHeading title="Партнерська мережа" subtitle="Приєднуйтесь" />
        <div className="grid gap-4 md:grid-cols-3">
          {partners.map((partner) => (
            <div key={partner.id} className="rounded-3xl border border-white/40 bg-white/80 p-6 text-sm text-coffee/80 shadow-lg">
              <p className="text-lg font-semibold text-coffee">{partner.name}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-coffee/60">{partner.focus}</p>
              <p className="mt-2">{partner.tagline}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-3xl border border-white/40 bg-white/80 p-6 text-sm text-coffee/70">
          <p className="text-xs uppercase tracking-[0.2em] text-coffee/60">Партнерський пакет</p>
          <p className="mt-2">
            Отримайте дизайн-прототипи, навчальні матеріали для команди та прямий доступ до Leafy Dashboard із прогнозами попиту.
          </p>
        </div>
      </section>
    </div>
  );
}
