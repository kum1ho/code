'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const links = [
  { href: '/', label: 'Головна' },
  { href: '/experiences', label: 'Досвіди' },
  { href: '/menu', label: 'Меню' },
  { href: '/locations', label: 'Локації' },
  { href: '/loyalty', label: 'Лояльність' },
  { href: '/catering', label: 'Корпоративні' },
  { href: '/academy', label: 'Academy' },
  { href: '/stories', label: 'Історії' },
  { href: '/admin', label: 'Адмін' }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/40 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="font-semibold text-lg text-gradient">
          Sunleaf
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx('transition-colors hover:text-tea-600', {
                'text-tea-600': pathname === link.href
              })}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#assistant"
            className="rounded-full bg-coffee px-4 py-2 text-white shadow-lg transition hover:shadow-xl"
          >
            Запитати Leafy
          </a>
        </nav>
        <button
          className="rounded-full border border-coffee/20 p-2 text-coffee transition md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Перемкнути меню"
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/40 bg-white/90 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx('transition-colors hover:text-tea-600', {
                  'text-tea-600': pathname === link.href
                })}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#assistant"
              className="rounded-full bg-coffee px-4 py-2 text-center text-white shadow-lg transition hover:shadow-xl"
              onClick={() => setOpen(false)}
            >
              Запитати Leafy
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
