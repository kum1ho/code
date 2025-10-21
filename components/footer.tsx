import Link from 'next/link';

const quickLinks = [
  { href: '/experiences', label: 'Досвіди' },
  { href: '/catering', label: 'Корпоративні рішення' },
  { href: '/academy', label: 'Sunleaf Academy' },
  { href: '/loyalty', label: 'Програма лояльності' }
];

const legalLinks = [
  { href: '/privacy', label: 'Політика конфіденційності' },
  { href: '/terms', label: 'Умови використання' }
];

export function Footer() {
  return (
    <footer className="border-t border-white/40 bg-white/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 text-sm md:grid md:grid-cols-[1.2fr,1fr,1fr] md:px-10">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-coffee">Sunleaf</p>
          <p className="max-w-sm text-sm leading-relaxed text-coffee/70">
            Створюємо wow-досвід через каву, чай та технології. Прискорюємо гастрономічні бренди по всій Україні.
          </p>
          <div className="flex flex-wrap gap-3 text-coffee/70">
            <a href="mailto:hello@sunleaf.ua" className="hover:text-tea-600">
              hello@sunleaf.ua
            </a>
            <span className="text-coffee/30">•</span>
            <a href="https://www.instagram.com" className="hover:text-tea-600" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.linkedin.com" className="hover:text-tea-600" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-coffee/60">Навігація</p>
          <ul className="mt-3 space-y-2 text-coffee/80">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-tea-600">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-coffee/60">Правова інформація</p>
          <ul className="mt-3 space-y-2 text-coffee/80">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-tea-600">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-coffee/60">© {new Date().getFullYear()} Sunleaf. Усі права захищено.</p>
        </div>
      </div>
    </footer>
  );
}
