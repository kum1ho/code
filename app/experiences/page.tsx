import { Metadata } from 'next';
import { experiences, testimonials, events } from '@/data/store';
import { PageHero } from '@/components/page-hero';
import { ExperienceCard } from '@/components/experience-card';
import { TestimonialCarousel } from '@/components/testimonial-carousel';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Sunleaf — Досвіди'
};

export default function ExperiencesPage() {
  return (
    <div className="space-y-24">
      <PageHero
        eyebrow="Immersive"
        title="Досвіди Sunleaf, що залучають усі почуття"
        subtitle="Від AI-лабораторій до церемоній на заході сонця"
        description="Комбінуйте дегустації, музичні сеті та сенсорні інсталяції. Leafy формує персональний сценарій, а команда Sunleaf налаштовує все до найменшої деталі."
        actions={[
          { label: 'Забронювати дегустацію', href: '#book', variant: 'primary' },
          { label: 'Дивитись календар', href: '#calendar', variant: 'secondary' }
        ]}
      />

      <section className="section" id="book">
        <SectionHeading title="Кураторські програми" subtitle="Підберіть власний wow-сет" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>

      <section className="section" id="calendar">
        <SectionHeading title="Найближчі події" subtitle="Календар Sunleaf" />
        <div className="grid gap-4 md:grid-cols-2">
          {events.map((event) => (
            <div key={event.id} className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg">
              <p className="text-lg font-semibold text-coffee">{event.title}</p>
              <p className="mt-1 text-sm text-coffee/70">{event.description}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-coffee/60">
                <span className="rounded-full bg-tea-100 px-3 py-1 uppercase tracking-[0.2em] text-tea-600">{event.status}</span>
                <span className="uppercase tracking-[0.2em]">{event.date}</span>
                <span className="text-coffee/80">{event.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading title="Враження гостей" subtitle="Wow-історії" />
        <TestimonialCarousel testimonials={testimonials} />
      </section>

      <section className="section" id="faq">
        <SectionHeading title="Як це працює" subtitle="Сценарій досвіду" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-coffee/60">1 · Leafy Sync</p>
            <p className="mt-2 text-sm leading-relaxed text-coffee/80">
              Розкажіть Leafy про настрій та привід. AI підбирає напої, музику та візуальні ефекти, а також формує персональні запрошення для гостей.
            </p>
          </div>
          <div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-coffee/60">2 · Sensory Flow</p>
            <p className="mt-2 text-sm leading-relaxed text-coffee/80">
              Команда готує сценографію: проекції, арома-зони, дегустаційні станції. Кожен гість отримує AR-гайд та сувенірний сет.
            </p>
          </div>
          <div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-coffee/60">3 · Data Glow</p>
            <p className="mt-2 text-sm leading-relaxed text-coffee/80">
              Після події ви бачите аналітику: вподобання, найкращі пари, рекомендації щодо наступних запусків у CRM Sunleaf.
            </p>
          </div>
          <div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-coffee/60">4 · Sustain</p>
            <p className="mt-2 text-sm leading-relaxed text-coffee/80">
              Усі матеріали — zero-waste. Ми компостуємо гущу, пакуємо сувеніри у біорозкладні матеріали та дякуємо гостям кодами лояльності.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
