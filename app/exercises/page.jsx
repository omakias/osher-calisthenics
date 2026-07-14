'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { asset, exercises, muscles } from '../../data/content';

const nav = [
  {href:'/',label:'בית',icon:'🏠'},
  {href:'/exercises',label:'תרגילים',icon:'💪',active:true},
  {href:'/warmup',label:'חימום',icon:'⏱️'},
  {href:'#progress',label:'התקדמות',icon:'📈'},
  {href:'#profile',label:'פרופיל',icon:'👤'}
];

export default function ExercisesPage(){
  const [q, setQ] = useState('');
  const [muscle, setMuscle] = useState('all');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setMuscle(params.get('muscle') || 'all');
  }, []);

  const selectedMuscle = muscles.find(m => m.id === muscle);

  const filtered = useMemo(() => exercises.filter(e => {
    const s = q.trim();
    return (!s || `${e.name} ${e.short} ${e.equipment}`.includes(s)) &&
      (muscle === 'all' || e.muscle === muscle || e.secondary.includes(muscle));
  }), [q, muscle]);

  return (
    <main className="exercise-page">
      <header className="page-head">
        <Link href="/" className="back">‹</Link>
        <div>
          <h1>{selectedMuscle ? selectedMuscle.name : 'תרגילים'}</h1>
          <p>{selectedMuscle ? `תרגילים מומלצים לאזור ${selectedMuscle.name}` : 'בחר תרגיל, קרא הסבר קצר ופתח עמוד פירוט.'}</p>
        </div>
      </header>

      <div className="search">
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="חיפוש תרגיל..." />
      </div>

      <div className="chips">
        <button className={muscle === 'all' ? 'on' : ''} onClick={() => setMuscle('all')}>הכל</button>
        {muscles.map(m => (
          <button key={m.id} className={muscle === m.id ? 'on' : ''} onClick={() => setMuscle(m.id)}>{m.name}</button>
        ))}
      </div>

      <section className="exercise-list-page">
        {filtered.map(ex => (
          <Link key={ex.id} href={`/exercises/${ex.id}`} className="exercise-compact-card">
            <img src={asset(ex.image)} alt={ex.name}/>
            <div className="exercise-copy">
              <div className="exercise-title-line"><h2>{ex.name}</h2><span>{ex.difficulty}</span></div>
              <p>{ex.short}</p>
              <small>{ex.equipment}</small>
            </div>
          </Link>
        ))}
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
