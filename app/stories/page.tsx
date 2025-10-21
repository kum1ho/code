import { Metadata } from 'next';
import Image from 'next/image';
import { stories } from '@/data/store';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Sunleaf — Журнал'
};

export default function StoriesPage() {
  return (
    <section className="section">
      <SectionHeading title="Журнал Sunleaf" subtitle="Історії та новини" />
      <div className="space-y-12">
        {stories.map((story) => (
          <article key={story.id} className="grid gap-6 rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg md:grid-cols-[1.1fr,1.2fr]">
            {story.coverImage && (
              <div className="relative h-56 overflow-hidden rounded-2xl md:h-full">
                <Image src={story.coverImage} alt={story.title} fill className="object-cover" />
              </div>
            )}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-coffee/60">
                {new Date(story.date).toLocaleDateString('uk-UA')}
              </p>
              <h2 className="text-3xl font-semibold text-coffee">{story.title}</h2>
              <p className="text-sm font-medium text-coffee/70">Автор: {story.author}</p>
              <p className="text-sm leading-relaxed text-coffee/80 whitespace-pre-line">{story.content}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
