import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Providers } from '@/components/providers';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const font = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });

export const metadata: Metadata = {
  title: 'Sunleaf — Екосистема смаку',
  description:
    'Sunleaf — цифрова екосистема кави, чаю та десертів із wow-дизайном, живою аналітикою та AI-асистентом.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={font.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-br from-tea-50 via-white to-tea-100 text-coffee">
        <Providers>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
