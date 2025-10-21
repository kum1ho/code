import type { Story } from '@/lib/types';

export function StoryCard({ story }: { story: Story }) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-3xl border border-white/40 bg-white/80 p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-coffee/60">{new Date(story.date).toLocaleDateString('uk-UA')}</p>
        <h3 className="text-2xl font-semibold text-coffee group-hover:text-tea-600">{story.title}</h3>
        <p className="text-sm leading-relaxed text-coffee/80">{story.excerpt}</p>
      </div>
      <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-coffee/70">Автор: {story.author}</p>
    </article>
  );
}
