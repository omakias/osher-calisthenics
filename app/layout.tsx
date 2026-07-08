import './globals.css';

export const metadata = {
  title: 'Osher Calisthenics',
  description: 'אפליקציית קליסטניקס בעברית'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
