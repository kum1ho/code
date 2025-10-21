import { Metadata } from 'next';
import { SectionHeading } from '@/components/section-heading';
import { MenuBrowser } from '@/components/menu-browser';

export const metadata: Metadata = {
  title: 'Sunleaf — Меню'
};

export default function MenuPage() {
  return (
    <section className="section">
      <SectionHeading title="Меню Sunleaf" subtitle="Кава, чай, десерти" />
      <p className="max-w-2xl text-sm leading-relaxed text-coffee/80">
        Ми працюємо тільки з етичними фермами та сезонними інгредієнтами. Меню оновлюється щотижня, щоб дивувати гостей
        новими поєднаннями.
      </p>
      <MenuBrowser />
    </section>
  );
}
