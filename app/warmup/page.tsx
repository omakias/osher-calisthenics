'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

const presets = [30, 45, 60, 90];

export default function WarmupPage() {
  const [seconds, setSeconds] = useState(45);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running || seconds <= 0) return;
    const timer = window.setTimeout(() => setSeconds((value) => value - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [running, seconds]);

  const time = useMemo(() => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }, [seconds]);

  return (
    <main className="warmup-page" dir="rtl">
      <header className="warmup-header">
        <Link href="/" className="back-btn">‹</Link>
        <div>
          <small>כלים לאימון</small>
          <h1>טיימר חימום</h1>
          <p>בחר זמן קצר לחימום לפני האימון. בהמשך נוסיף כאן תרגילי חימום מלאים.</p>
        </div>
      </header>

      <section className="timer-card">
        <div className="timer-ring">
          <span>{time}</span>
          <small>{running ? 'פעיל' : 'מוכן להתחלה'}</small>
        </div>
        <div className="timer-actions">
          <button onClick={() => setRunning((value) => !value)}>{running ? 'עצור' : 'התחל'}</button>
          <button onClick={() => { setRunning(false); setSeconds(45); }}>איפוס</button>
        </div>
      </section>

      <section className="warmup-presets">
        <h2>זמנים מהירים</h2>
        <div>
          {presets.map((preset) => <button key={preset} onClick={() => { setSeconds(preset); setRunning(false); }}>{preset} שניות</button>)}
        </div>
      </section>

      <nav className="bottom-nav-green" aria-label="ניווט ראשי">
        <Link href="/"><span>⌂</span><small>בית</small></Link>
        <Link href="/exercises"><span>◧</span><small>תרגילים</small></Link>
        <Link href="/warmup" className="active"><span>⏱</span><small>חימום</small></Link>
        <a href="#progress"><span>▥</span><small>התקדמות</small></a>
        <a href="#profile"><span>○</span><small>פרופיל</small></a>
      </nav>
    </main>
  );
}
