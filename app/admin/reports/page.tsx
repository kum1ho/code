import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sunleaf Admin — Звіти'
};

const reports = [
  {
    title: 'MRR & LTV',
    description: 'Аналіз підписок, середнього чеку та повернень гостей.',
    period: 'Останні 30 днів',
    trend: [80, 86, 90, 95, 103, 112]
  },
  {
    title: 'Операційна ефективність',
    description: 'Час приготування, NPS, завантаженість бариста.',
    period: 'Останні 14 днів',
    trend: [62, 60, 58, 55, 54, 50]
  },
  {
    title: 'Маркетингові активності',
    description: 'ROI кампаній, CPA, конверсія з пушів.',
    period: 'Останні 7 днів',
    trend: [30, 45, 52, 60, 64, 70]
  }
];

export default function AdminReportsPage() {
  return (
    <section className="section">
      <div className="glass-card space-y-6 p-8">
        <h1 className="text-3xl font-semibold text-coffee">Звіти та аналітика</h1>
        <p className="text-sm leading-relaxed text-coffee/80">
          Візуалізуйте метрики, порівнюйте тренди та експортуйте дані для керівництва. Демо-версія показує доступні секції.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {reports.map((report) => (
            <div key={report.title} className="rounded-2xl border border-white/50 bg-white/70 p-5 shadow-sm">
              <p className="text-lg font-semibold text-coffee">{report.title}</p>
              <p className="text-sm text-coffee/80">{report.description}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-coffee/60">Період</p>
              <p className="text-sm text-coffee/80">{report.period}</p>
              <div className="mt-4 h-24 w-full rounded-2xl bg-white/80 p-3">
                <div className="flex h-full items-end gap-2">
                  {report.trend.map((point, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-full bg-gradient-to-t from-tea-300 to-tea-500"
                      style={{ height: `${point}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
