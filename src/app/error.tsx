'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream text-green-deep p-6 text-center">
      <h2 className="text-3xl font-serif font-bold mb-4">Terjadi Kendala</h2>
      <p className="text-green-medium mb-8">Halaman sedang memuat ulang. Silakan coba kembali.</p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-green-deep text-cream rounded-full font-medium hover:bg-green-medium transition-colors"
      >
        Muat Ulang
      </button>
    </div>
  );
}
