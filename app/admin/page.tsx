import Link from 'next/link';
import { ArrowTrendingUpIcon, PlusIcon } from '@heroicons/react/24/outline';
import { KPICard } from '@/components/kpi-card';
import { kpis, metricHighlights, orders, events, workshops } from '@/data/store';

export const metadata = {
  title: 'Sunleaf Admin — Панель керування'
};

const actions = [
  { title: 'Новий реліз меню', description: 'Запустити сезонну дегустацію з wow-ефектом.', href: '/admin/menu' },
  { title: 'Комунікація', description: 'Налаштувати пуші, email та соцмережі.', href: '/admin/campaigns' },
  { title: 'Команда', description: 'Додати бариста чи маркетолога до системи.', href: '/admin/team' }
];

export default function AdminPage() {
  return (
    <div className="section">
      <div className="glass-card grid gap-10 p-10">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-tea-500/80">Адмін-панель</p>
            <h1 className="text-3xl font-semibold text-coffee md:text-4xl">Повний контроль над Sunleaf</h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-coffee/80">
              Відстежуйте ключові показники, керуйте меню та запускайте кампанії у єдиній панелі. Усі дані оновлюються в
              режимі реального часу.
            </p>
          </div>
          <Link
            href="/admin/reports"
            className="flex items-center gap-2 rounded-full bg-coffee px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <ArrowTrendingUpIcon className="h-5 w-5" />
            Аналітика за місяць
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {kpis.map((kpi) => (
            <KPICard key={kpi.title} kpi={kpi} />
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr,0.8fr]">
          <div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-coffee">Замовлення</h2>
              <Link href="/admin/orders" className="text-sm font-medium text-tea-600 hover:text-tea-500">
                Всі замовлення
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="mt-4 w-full min-w-[720px] table-auto text-left text-sm">
                <thead>
                  <tr className="text-xs uppercase tracking-[0.2em] text-coffee/60">
                    <th className="pb-3 font-medium">ID</th>
                    <th className="pb-3 font-medium">Клієнт</th>
                    <th className="pb-3 font-medium">Сума</th>
                    <th className="pb-3 font-medium">Статус</th>
                    <th className="pb-3 font-medium">Канал</th>
                    <th className="pb-3 font-medium">ETA</th>
                    <th className="pb-3 font-medium">Позиції</th>
                    <th className="pb-3 font-medium">Час</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-t border-white/40 text-coffee/80">
                      <td className="py-3 font-semibold text-coffee">{order.id}</td>
                      <td className="py-3">{order.customer}</td>
                      <td className="py-3">₴{order.total}</td>
                      <td className="py-3">
                        <span className="rounded-full bg-tea-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-tea-600">
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 uppercase text-xs tracking-[0.2em] text-coffee/70">{order.channel}</td>
                      <td className="py-3 text-sm text-coffee/70">{order.etaMinutes} хв</td>
                      <td className="py-3 text-xs text-coffee/70">
                        <ul className="space-y-1">
                          {order.items.map((item) => (
                            <li key={`${order.id}-${item.name}`}>{item.quantity} × {item.name}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="py-3">{new Date(order.createdAt).toLocaleString('uk-UA')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-coffee">Швидкі дії</h2>
            <div className="mt-4 grid gap-4">
              {actions.map((action) => (
                <Link
                  key={action.title}
                  href={action.href}
                  className="flex items-center justify-between rounded-2xl border border-white/50 bg-white/70 px-5 py-4 text-sm font-medium text-coffee shadow-sm transition hover:border-tea-200 hover:shadow-xl"
                >
                  <div>
                    <p className="text-base font-semibold">{action.title}</p>
                    <p className="text-xs text-coffee/70">{action.description}</p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-tea-100 text-tea-600">
                    <PlusIcon className="h-5 w-5" />
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-white/50 bg-white/70 p-4 text-xs text-coffee/70">
              <p className="uppercase tracking-[0.2em] text-coffee/60">Останні метрики</p>
              <ul className="mt-2 space-y-1">
                {metricHighlights.map((metric) => (
                  <li key={metric.label} className="flex items-center justify-between">
                    <span>{metric.label}</span>
                    <span className={`font-semibold ${metric.positive ? 'text-tea-600' : 'text-coffee/60'}`}>
                      {metric.value} ({metric.change})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-coffee">Події Sunleaf</h2>
              <Link href="/experiences" className="text-sm font-medium text-tea-600 hover:text-tea-500">
                Розклад
              </Link>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-coffee/80">
              {events.map((event) => (
                <li key={event.id} className="rounded-2xl border border-white/50 bg-white/70 px-4 py-3 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold text-coffee">{event.title}</p>
                    <span className="text-xs uppercase tracking-[0.2em] text-coffee/60">{event.status}</span>
                  </div>
                  <p className="mt-1 text-xs text-coffee/70">{event.description}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-coffee/60">{event.date}</p>
                  <p className="text-xs text-coffee/70">{event.location}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-coffee">Навчальні програми</h2>
            <ul className="mt-4 space-y-3 text-sm text-coffee/80">
              {workshops.map((workshop) => (
                <li key={workshop.id} className="rounded-2xl border border-white/50 bg-white/70 px-4 py-3 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold text-coffee">{workshop.title}</p>
                    <span className="text-xs uppercase tracking-[0.2em] text-coffee/60">{workshop.level}</span>
                  </div>
                  <p className="text-xs text-coffee/70">Ментор: {workshop.mentor}</p>
                  <p className="text-xs text-coffee/70">{workshop.description}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-coffee/60">{workshop.nextDate}</p>
                </li>
              ))}
            </ul>
            <Link
              href="/academy"
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-coffee/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-coffee transition hover:border-tea-200"
            >
              До Sunleaf Academy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
