import './globals.css';

export const metadata = {
  title: 'Osher Calisthenics',
  description: 'אפליקציית קליסטניקס בעברית'
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#050b14'
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
