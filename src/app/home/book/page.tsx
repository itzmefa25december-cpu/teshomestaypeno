import type { Metadata } from 'next';
import AppClientWrapper from '@/src/components/AppClientWrapper';

export const metadata: Metadata = {
  title: 'Pesan Kamar - Peno Homestay Banyuwangi',
  description: 'Cek ketersediaan kamar dan reservasi online kamar di Peno Homestay Banyuwangi dengan mudah.',
};

export default function BookPage() {
  return <AppClientWrapper initialRoute="/home/book" />;
}
