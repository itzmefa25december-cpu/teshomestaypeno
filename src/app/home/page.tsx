import type { Metadata } from 'next';
import AppClientWrapper from '@/src/components/AppClientWrapper';

export const metadata: Metadata = {
  title: 'Peno Homestay Banyuwangi - Penginapan Asri Kebun Kopi Kawah Ijen',
  description: 'Rehat asri di kebun kopi lereng Kawah Ijen, Gombengsari Banyuwangi. Nikmati udara sejuk, kopi petik sendiri, dan keramahan keluarga Pak Peno.',
  openGraph: {
    title: 'Peno Homestay Banyuwangi - Penginapan Asri Kebun Kopi Kawah Ijen',
    description: 'Rehat asri di kebun kopi lereng Kawah Ijen, Gombengsari Banyuwangi. Nikmati udara sejuk, kopi petik sendiri, dan keramahan keluarga Pak Peno.',
    url: 'https://penohomestay.com/home',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&h=900&q=80',
        width: 1600,
        height: 900,
        alt: 'Peno Homestay Banyuwangi',
      },
    ],
  },
};

export default function HomePage() {
  return (
    <main>
      <AppClientWrapper initialRoute="/home" />
    </main>
  );
}
