import type { Metadata } from 'next';
import AppClientWrapper from '@/src/components/AppClientWrapper';

export const metadata: Metadata = {
  title: 'Supabase Tester - Peno Homestay',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SupabasePage() {
  return <AppClientWrapper initialRoute="/supabase" />;
}
