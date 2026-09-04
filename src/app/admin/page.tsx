import type { Metadata } from 'next';
import AppClientWrapper from '@/src/components/AppClientWrapper';

export const metadata: Metadata = {
  title: 'Admin Panel - Peno Homestay',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <AppClientWrapper initialRoute="/admin" />;
}
