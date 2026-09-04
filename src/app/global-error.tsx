'use client';

import React from 'react';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="id">
      <body className="bg-cream text-green-deep font-sans antialiased min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">Terjadi Kendala Sistem</h2>
        <p className="text-green-medium mb-8">Maaf, terjadi kesalahan saat memuat halaman.</p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-green-deep text-cream rounded-full font-medium hover:bg-green-medium transition-colors"
        >
          Muat Ulang
        </button>
      </body>
    </html>
  );
}
