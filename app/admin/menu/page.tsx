import { Metadata } from 'next';
import { products } from '@/data/store';

export const metadata: Metadata = {
  title: 'Sunleaf Admin — Меню'
};

export default function AdminMenuPage() {
  const grouped = products.reduce<Record<string, typeof products>>((acc, product) => {
    acc[product.category] = acc[product.category] ? [...acc[product.category], product] : [product];
    return acc;
  }, {});

  return (
    <section className="section">
      <div className="glass-card space-y-6 p-8">
        <h1 className="text-3xl font-semibold text-coffee">Керування меню</h1>
        <p className="text-sm leading-relaxed text-coffee/80">
          Тут ви можете оновити ціни, додати сезонні позиції та позначити новинки. Демо-версія відображає поточний перелік
          продуктів.
        </p>
        <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-inner">
          <p className="text-xs uppercase tracking-[0.3em] text-coffee/60">Live-синхронізація</p>
          <p className="mt-2 text-sm text-coffee/70">
            Зміни синхронізуються з мобільним застосунком, табло бариста та Leafy Assistant у реальному часі.
          </p>
        </div>
        <div className="grid gap-6">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.3em] text-coffee/60">{category}</p>
                <button className="rounded-full border border-coffee/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-coffee transition hover:border-tea-200">
                  Додати позицію
                </button>
              </div>
              <ul className="grid gap-3 text-sm text-coffee/80 md:grid-cols-2 xl:grid-cols-3">
                {items.map((product) => (
                  <li key={product.id} className="rounded-2xl border border-white/50 bg-white/80 px-5 py-4 shadow-sm">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-coffee">{product.name}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.3em] text-coffee/60">₴{product.price}</p>
                      </div>
                      {product.badge && (
                        <span className="rounded-full bg-tea-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-tea-600">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-xs text-coffee/70">{product.description}</p>
                    {product.tastingNotes && (
                      <div className="mt-3 flex flex-wrap gap-2 text-xs text-coffee/70">
                        {product.tastingNotes.map((note) => (
                          <span key={note} className="rounded-full bg-white/90 px-3 py-1 uppercase tracking-[0.2em]">
                            {note}
                          </span>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
