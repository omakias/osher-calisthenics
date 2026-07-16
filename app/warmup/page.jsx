'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';

const nav = [
  { href: '/', label: 'בית', icon: '⌂' },
  { href: '/exercises', label: 'תרגילים', icon: '◧' },
  { href: '/warmup', label: 'חימום', icon: '◷', active: true },
  { href: '#progress', label: 'התקדמות', icon: '▥' },
  { href: '#profile', label: 'פרופיל', icon: '○' }
];

const presets = [
  { id: 'quick', title: 'חימום מהיר', seconds: 180, subtitle: '3 דקות לפתיחת מפרקים והעלאת דופק', tag: '3 דק׳' },
  { id: 'standard', title: 'חימום רגיל', seconds: 300, subtitle: '5 דקות לפני אימון כוח', tag: '5 דק׳' },
  { id: 'mobility', title: 'מוביליטי', seconds: 420, subtitle: '7 דקות כתפיים, ירכיים וגב', tag: '7 דק׳' },
  { id: 'full', title: 'חימום מלא', seconds: 600, subtitle: '10 דקות לפני אימון מלא', tag: '10 דק׳' }
];

const warmupSteps = [
  'סיבובי כתפיים קדימה ואחורה',
  'פתיחת חזה ושכמות',
  'סיבובי אגן וברכיים',
  'סקוואטים קלים בשליטה',
  'תלייה קלה או תנועת שכמות'
];

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const seconds = Math.max(0, totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function playFinishSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.55);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.6);
  } catch (error) {
    // Sound is optional. Some browsers block audio until user interaction.
  }
}

export default function WarmupPage() {
  const [selectedPreset, setSelectedPreset] = useState(presets[1]);
  const [secondsLeft, setSecondsLeft] = useState(presets[1].seconds);
  const [isRunning, setIsRunning] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const timerRef = useRef(null);

  const progress = useMemo(() => {
    return Math.max(0, Math.min(100, ((selectedPreset.seconds - secondsLeft) / selectedPreset.seconds) * 100));
  }, [secondsLeft, selectedPreset.seconds]);

  useEffect(() => {
    if (!isRunning) return;

    timerRef.current = window.setInterval(() => {
      setSecondsLeft((current) => {
        if (current <= 1) {
          window.clearInterval(timerRef.current);
          timerRef.current = null;
          setIsRunning(false);
          if (soundEnabled) playFinishSound();
          return 0;
        }
        return current - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [isRunning, soundEnabled]);

  function choosePreset(preset) {
    setSelectedPreset(preset);
    setSecondsLeft(preset.seconds);
    setIsRunning(false);
  }

  function resetTimer() {
    setIsRunning(false);
    setSecondsLeft(selectedPreset.seconds);
  }

  return (
    <main className="warmup-page">
      <header className="warmup-topbar">
        <Link href="/" className="back">‹</Link>
        <div>
          <h1>חימום</h1>
          <p>טיימר חימום לפני אימון. בהמשך נוסיף תרגילי חימום לפי אזור.</p>
        </div>
      </header>

      <section className="warmup-hero">
        <div className="timer-ring" style={{ '--progress': `${progress}%` }}>
          <div>
            <small>{selectedPreset.title}</small>
            <strong>{formatTime(secondsLeft)}</strong>
            <span>{isRunning ? 'פועל עכשיו' : secondsLeft === 0 ? 'הסתיים' : 'מוכן להתחלה'}</span>
          </div>
        </div>

        <div className="timer-actions">
          <button className="main-timer-btn" onClick={() => setIsRunning((value) => !value)}>
            {isRunning ? 'השהה' : secondsLeft === 0 ? 'התחל מחדש' : 'התחל'}
          </button>
          <button className="ghost-timer-btn" onClick={resetTimer}>איפוס</button>
        </div>

        <label className="sound-toggle">
          <input type="checkbox" checked={soundEnabled} onChange={(event) => setSoundEnabled(event.target.checked)} />
          <span>סאונד בסיום</span>
        </label>
      </section>

      <section className="warmup-section">
        <div className="section-title-row">
          <h2>בחר זמן חימום</h2>
          <small>מומלץ להתחיל ב־5 דקות</small>
        </div>
        <div className="preset-grid">
          {presets.map((preset) => (
            <button key={preset.id} className={selectedPreset.id === preset.id ? 'preset-card active' : 'preset-card'} onClick={() => choosePreset(preset)}>
              <b>{preset.title}</b>
              <span>{preset.subtitle}</span>
              <em>{preset.tag}</em>
            </button>
          ))}
        </div>
      </section>

      <section className="warmup-section">
        <div className="section-title-row">
          <h2>רצף חימום מומלץ</h2>
          <small>תוכן ראשוני</small>
        </div>
        <ol className="warmup-steps">
          {warmupSteps.map((step, index) => (
            <li key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <nav className="bottom-nav">
        {nav.map((item) => (
          <Link key={item.label} href={item.href} className={item.active ? 'active' : ''}>
            <span>{item.icon}</span>
            <small>{item.label}</small>
          </Link>
        ))}
      </nav>
    </main>
  );
}
