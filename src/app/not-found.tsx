'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream text-green-deep p-6 text-center">
      <h1 className="text-4xl font-serif font-bold mb-4">Halaman Tidak Ditemukan</h1>
      <p className="text-green-medium mb-8">Maaf, halaman yang Anda tuju tidak tersedia atau telah dipindahkan.</p>
      <Link
        href="/home"
        className="px-6 py-3 bg-green-deep text-cream rounded-full font-medium hover:bg-green-medium transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
