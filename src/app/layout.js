'use client';

import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const linkClass = (path) =>
    pathname === path
      ? 'text-blue-600 font-bold'
      : 'text-gray-700 hover:text-blue-500';

  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-900">
        <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
          <h1 className="text-xl font-bold text-blue-600">MyPortfolio</h1>
          <div className="flex gap-6">
            <Link href="/" className={linkClass('/')}>Home</Link>
            <Link href="/about" className={linkClass('/about')}>About</Link>
            <Link href="/project" className={linkClass('/project')}>Projects</Link>
            <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
          </div>
        </nav>

        <main className="container mx-auto p-8">
          {children}
        </main>

        <footer className="text-center py-6 text-gray-500">
          © 2025 • Portfolio Next.js
        </footer>
      </body>
    </html>
  );
}

