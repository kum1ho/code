export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-sm uppercase tracking-[0.3em] text-tea-500/80">{subtitle}</p>
      <h2 className="text-3xl font-semibold text-coffee md:text-4xl">{title}</h2>
    </div>
  );
}
