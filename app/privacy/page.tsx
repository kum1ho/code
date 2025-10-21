import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sunleaf — Політика конфіденційності'
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="glass-card space-y-6 p-8">
        <h1 className="text-3xl font-semibold text-coffee">Політика конфіденційності</h1>
        <p className="text-sm leading-relaxed text-coffee/80">
          Ми цінуємо вашу довіру. Sunleaf обробляє персональні дані відповідно до Закону України «Про захист персональних
          даних» та використовує їх виключно для обслуговування замовлень, аналітики й персоналізації пропозицій.
        </p>
        <p className="text-sm leading-relaxed text-coffee/80">
          Ви можете запросити видалення або зміну інформації, написавши на privacy@sunleaf.ua. Детальний документ доступний у
          партнерській адмін-панелі.
        </p>
      </div>
    </section>
  );
}
