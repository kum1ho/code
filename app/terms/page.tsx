import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sunleaf — Умови використання'
};

export default function TermsPage() {
  return (
    <section className="section">
      <div className="glass-card space-y-6 p-8">
        <h1 className="text-3xl font-semibold text-coffee">Умови використання</h1>
        <p className="text-sm leading-relaxed text-coffee/80">
          Користуючись сервісами Sunleaf, ви погоджуєтесь із тим, що продукти призначені для осіб від 16 років. Усі платежі
          проводяться через сертифікованих провайдерів, а повернення коштів доступне протягом 14 днів після покупки.
        </p>
        <p className="text-sm leading-relaxed text-coffee/80">
          Партнери Sunleaf отримують доступ до маркетингових активів, системи лояльності та навчання персоналу. У разі
          порушення стандартів якості ми залишаємо за собою право призупинити доступ до платформи.
        </p>
      </div>
    </section>
  );
}
