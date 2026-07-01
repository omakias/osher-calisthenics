import './globals.css';
import type { Metadata } from 'next';
import BottomNav from '@/components/BottomNav';

export const metadata: Metadata = {
  title: 'Osher Calisthenics',
  description: 'Own Your Strength',
  manifest: '/manifest.json',
  themeColor: '#39ff88'
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="he" dir="rtl"><body><main className="app">{children}</main><BottomNav/></body></html>;
}
