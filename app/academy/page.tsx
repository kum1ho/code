import { Metadata } from 'next';
import { workshops, stories } from '@/data/store';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { StoryCard } from '@/components/story-card';

export const metadata: Metadata = {
  title: 'Sunleaf — Academy'
};

const roadmap = [
  'Level 1 · Основи обсмажування, сенсорика та етичні закупівлі',
  'Level 2 · Immersive experience design з AR та аудіокодами',
  'Level 3 · AI-інструменти: Leafy, генерація меню, CRM-автоматизація'
];

export default function AcademyPage() {
  return (
    <div className="space-y-24">
      <PageHero
        eyebrow="Навчання"
        title="Sunleaf Academy"
        subtitle="Готуємо бариста майбутнього"
        description="Програми для команд, які прагнуть wow-ефекту: від латте-арту до AI-аналітики. Лекції, воркшопи, онлайн-студія і доступ до Leafy Lab."
        actions={[
          { label: 'Записатися', href: '#apply', variant: 'primary' },
          { label: 'Програма', href: '#workshops', variant: 'secondary' }
        ]}
      />

      <section className="section" id="workshops">
        <SectionHeading title="Актуальні воркшопи" subtitle="Навчання" />
        <div className="grid gap-6 md:grid-cols-2">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg">
              <p className="text-lg font-semibold text-coffee">{workshop.title}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-coffee/60">{workshop.level}</p>
              <p className="mt-2 text-sm text-coffee/80">Ментор: {workshop.mentor}</p>
              <p className="text-sm text-coffee/80">{workshop.description}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-coffee/60">{workshop.nextDate}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="roadmap">
        <SectionHeading title="Роадмап навчання" subtitle="Структура" />
        <div className="grid gap-4 text-sm text-coffee/80">
          {roadmap.map((step) => (
            <p key={step} className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg">
              {step}
            </p>
          ))}
        </div>
      </section>

      <section className="section" id="stories">
        <SectionHeading title="Журнал Academy" subtitle="Інсайти" />
        <div className="grid gap-6 md:grid-cols-2">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </section>

      <section className="section" id="apply">
        <div className="glass-card grid gap-6 p-10">
          <h2 className="text-3xl font-semibold text-coffee">Приєднайтесь до спільноти Sunleaf Academy</h2>
          <p className="text-sm leading-relaxed text-coffee/80">
            Ми формуємо групи щомісяця та пропонуємо як офлайн, так і онлайн-формати. Заповніть заявку — Leafy підкаже оптимальну програму.
          </p>
          <a
            href="mailto:academy@sunleaf.ua"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-coffee px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
          >
            academy@sunleaf.ua
          </a>
        </div>
      </section>
    </div>
  );
}
