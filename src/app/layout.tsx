import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Peno Homestay Banyuwangi - Penginapan Asri Kebun Kopi Kawah Ijen',
  description: 'Rehat asri di kebun kopi lereng Kawah Ijen, Gombengsari Banyuwangi. Nikmati udara sejuk, kopi petik sendiri, dan keramahan keluarga Pak Peno.',
  metadataBase: new URL('https://penohomestay.com'),
  icons: {
    icon: 'https://njgsafkwldootsupwjsb.supabase.co/storage/v1/object/public/avatars/421966157_3180688145419564_5828608585761882436_n.jpg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-cream text-green-deep font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
