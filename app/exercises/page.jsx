'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { asset, exercises, muscles } from '../../data/content';

const nav = [
  { href: '/', label: 'בית', icon: '⌂' },
  { href: '/exercises', label: 'תרגילים', icon: '◧', active: true },
  { href: '/warmup', label: 'חימום', icon: '◷' },
  { href: '#progress', label: 'התקדמות', icon: '▥' },
  { href: '#profile', label: 'פרופיל', icon: '○' }
];

const levels = ['הכל', 'מתחיל', 'בינוני', 'מתקדם'];

export default function ExercisesPage() {
  const [q, setQ] = useState('');
  const [muscle, setMuscle] = useState('all');
  const [level, setLevel] = useState('הכל');
  const [equipment, setEquipment] = useState('הכל');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const muscleFromUrl = params.get('muscle');
    if (muscleFromUrl) setMuscle(muscleFromUrl);
  }, []);

  const equipmentOptions = useMemo(() => {
    const items = Array.from(new Set(exercises.map(e => e.equipment).filter(Boolean)));
    return ['הכל', ...items];
  }, []);

  const filtered = useMemo(() => {
    const search = q.trim().toLowerCase();

    return exercises.filter(ex => {
      const text = `${ex.name} ${ex.short} ${ex.equipment} ${ex.difficulty}`.toLowerCase();
      const bySearch = !search || text.includes(search);
      const byMuscle = muscle === 'all' || ex.muscle === muscle || ex.secondary.includes(muscle);
      const byLevel = level === 'הכל' || ex.difficulty === level;
      const byEquipment = equipment === 'הכל' || ex.equipment === equipment;

      return bySearch && byMuscle && byLevel && byEquipment;
    });
  }, [q, muscle, level, equipment]);

  const selectedMuscle = muscle === 'all' ? null : muscles.find(m => m.id === muscle);

  return (
    <main className="exercise-page sprint2-page">
      <header className="page-head sprint2-head">
        <Link href="/" className="back">‹</Link>
        <div>
          <h1>ספריית תרגילים</h1>
          <p>{selectedMuscle ? `תרגילים לאזור: ${selectedMuscle.name}` : 'חפש, סנן ובחר תרגיל מתאים לרמה שלך.'}</p>
        </div>
      </header>

      <section className="library-toolbar">
        <div className="search big-search">
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="חיפוש תרגיל..." />
        </div>

        <div className="filter-block">
          <small>שריר</small>
          <div className="chips horizontal-scroll">
            <button className={muscle === 'all' ? 'on' : ''} onClick={() => setMuscle('all')}>הכל</button>
            {muscles.map(m => (
              <button key={m.id} className={muscle === m.id ? 'on' : ''} onClick={() => setMuscle(m.id)} style={{ '--chip': m.color }}>
                {m.name}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-grid">
          <div className="filter-block">
            <small>רמה</small>
            <div className="select-row">
              {levels.map(item => (
                <button key={item} className={level === item ? 'on' : ''} onClick={() => setLevel(item)}>{item}</button>
              ))}
            </div>
          </div>

          <div className="filter-block">
            <small>ציוד</small>
            <select value={equipment} onChange={e => setEquipment(e.target.value)}>
              {equipmentOptions.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
          </div>
        </div>
      </section>

      <div className="result-count">
        נמצאו <b>{filtered.length}</b> תרגילים
      </div>

      <section className="exercise-list-page sprint2-grid">
        {filtered.map(ex => {
          const primary = muscles.find(m => m.id === ex.muscle);
          return (
            <Link key={ex.id} href={`/exercises/${ex.id}`} className="exercise-compact-card sprint2-card">
              <div className="exercise-thumb-wrap">
                <img src={asset(ex.image)} alt={ex.name} />
                <span className="play-badge">▶</span>
              </div>
              <div className="exercise-copy">
                <div className="exercise-title-line">
                  <h2>{ex.name}</h2>
                  <span>{ex.difficulty}</span>
                </div>
                <p>{ex.short}</p>
                <footer>
                  <small>{primary?.name || ''}</small>
                  <small>{ex.equipment}</small>
                </footer>
              </div>
            </Link>
          );
        })}
      </section>

      <nav className="bottom-nav">
        {nav.map(item => (
          <Link key={item.label} href={item.href} className={item.active ? 'active' : ''}>
            <span>{item.icon}</span>
            <small>{item.label}</small>
          </Link>
        ))}
      </nav>
    </main>
  );
}
