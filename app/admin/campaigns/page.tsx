import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sunleaf Admin — Кампанії'
};

const channels = [
  { name: 'Мобільний застосунок', reach: '24 500 користувачів', schedule: 'Щодня о 9:00', conversion: '12.4%' },
  { name: 'Email-розсилка', reach: '18 200 контактів', schedule: 'Щочетверга о 10:00', conversion: '8.1%' },
  { name: 'Instagram Stories', reach: '45 000 підписників', schedule: 'Пн/Ср/Пт о 12:00', conversion: '5.6%' }
];

const automation = [
  'Segment · Leafy обирає гостей з високою ймовірністю повторного замовлення',
  'Storytelling · Wow-анімації та персональні пропозиції для кожного сегменту',
  'Measure · Вимірюємо вплив на чек, повторні візити та відтік'
];

export default function AdminCampaignsPage() {
  return (
    <section className="section">
      <div className="glass-card space-y-6 p-8">
        <h1 className="text-3xl font-semibold text-coffee">Керування комунікаціями</h1>
        <p className="text-sm leading-relaxed text-coffee/80">
          Плануйте релізи, запускайте автоворонки та налаштовуйте wow-анімації для push-сповіщень. У демо можна переглянути
          активні канали.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {channels.map((channel) => (
            <div key={channel.name} className="rounded-2xl border border-white/50 bg-white/70 p-5 shadow-sm">
              <p className="text-lg font-semibold text-coffee">{channel.name}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-coffee/60">Охоплення</p>
              <p className="text-sm text-coffee/80">{channel.reach}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-coffee/60">Розклад</p>
              <p className="text-sm text-coffee/80">{channel.schedule}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-coffee/60">Конверсія</p>
              <p className="text-sm font-semibold text-tea-600">{channel.conversion}</p>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-inner">
          <p className="text-xs uppercase tracking-[0.3em] text-coffee/60">Автоматизація Leafy</p>
          <ul className="mt-3 space-y-2 text-sm text-coffee/80">
            {automation.map((step) => (
              <li key={step} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-tea-500" aria-hidden />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
