import { Metadata } from 'next';
import { orders } from '@/data/store';

export const metadata: Metadata = {
  title: 'Sunleaf Admin — Замовлення'
};

export default function AdminOrdersPage() {
  return (
    <section className="section">
      <div className="glass-card space-y-6 p-8">
        <h1 className="text-3xl font-semibold text-coffee">Замовлення Sunleaf</h1>
        <p className="text-sm leading-relaxed text-coffee/80">
          Усі канали синхронізуються в реальному часі: мобільний застосунок, фізичні точки та доставка. Таблиця показує останні
          замовлення з демо-даних.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] table-auto text-left text-sm">
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
                  <td className="py-3 text-sm text-coffee/70">
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
    </section>
  );
}
