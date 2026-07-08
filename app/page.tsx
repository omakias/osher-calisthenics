'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { asset, exercises, exercisesByMuscle, muscles, type MuscleId } from '../data/content';

type Tab = 'front' | 'back';

export default function HomePage() {
  const [side, setSide] = useState<Tab>('front');
  const [selected, setSelected] = useState<MuscleId | null>(null);

  const visibleMuscles = muscles.filter((muscle) => muscle.side === side);
  const selectedMuscle = selected ? muscles.find((muscle) => muscle.id === selected) ?? null : null;
  const selectedExercises = useMemo(() => (selected ? exercisesByMuscle(selected).slice(0, 6) : []), [selected]);
  const featured = selectedExercises[0] ?? exercises[0];

  function switchSide(nextSide: Tab) {
    setSide(nextSide);
    setSelected(null);
  }

  return (
    <main className="app" dir="rtl">
      <header className="top-appbar">
        <div className="brand-block">
          <div className="brand-mark">OC</div>
          <div>
            <strong>OSHER</strong>
            <span>CALISTHENICS</span>
          </div>
        </div>
        <div className="top-stats" aria-label="נתוני משתמש">
          <span>🔥 12</span>
          <span>XP 1,250</span>
          <span className="user-dot" />
        </div>
      </header>

      <section className="home-card muscle-card" aria-label="מפת שרירים">
        <div className="home-title-row">
          <div>
            <p className="eyebrow">מפת השרירים</p>
            <h1>בחר אזור אימון</h1>
            <p className="subtitle">לחץ על נקודה כחולה בגוף כדי לפתוח תרגילים מומלצים.</p>
          </div>
          <div className="side-toggle" role="tablist" aria-label="בחירת צד גוף">
            <button type="button" className={side === 'front' ? 'active' : ''} onClick={() => switchSide('front')}>קדמי</button>
            <button type="button" className={side === 'back' ? 'active' : ''} onClick={() => switchSide('back')}>אחורי</button>
          </div>
        </div>

        <div className="body-map-shell">
          <div className="body-map-frame">
            <img
              src={asset(side === 'front' ? '/body-front.png' : '/body-back.png')}
              className="body-map-image"
              alt={side === 'front' ? 'מפת גוף קדמית' : 'מפת גוף אחורית'}
            />
            {visibleMuscles.map((muscle) => (
              <button
                key={muscle.id}
                type="button"
                className={`muscle-point ${selected === muscle.id ? 'selected' : ''}`}
                style={{ left: `${muscle.x}%`, top: `${muscle.y}%` }}
                onClick={() => setSelected(muscle.id)}
                aria-label={`בחר ${muscle.name}`}
              >
                <span />
              </button>
            ))}
          </div>
        </div>

        <div className="hint-row">
          <span>💡</span>
          <p>הנקודות בלבד לחיצות. בחירה תפתח פאנל תרגילים בתחתית המסך.</p>
        </div>
      </section>

      <section className="quick-card">
        <div>
          <small>תרגיל מומלץ</small>
          <h2>{featured.name}</h2>
          <p>{featured.short}</p>
        </div>
        <img src={asset(featured.image)} alt={featured.name} />
      </section>

      {selectedMuscle && (
        <section className="exercise-sheet" aria-label={`תרגילים עבור ${selectedMuscle.name}`}>
          <div className="sheet-handle" />
          <div className="sheet-header">
            <button type="button" className="close-sheet" onClick={() => setSelected(null)} aria-label="סגור">×</button>
            <div>
              <small>שריר נבחר</small>
              <h2>{selectedMuscle.name}</h2>
              <p>{selectedMuscle.description}</p>
            </div>
          </div>

          <div className="sheet-list">
            {selectedExercises.map((exercise) => (
              <Link key={exercise.id} className="sheet-exercise" href={`/exercises/${exercise.id}`}>
                <img src={asset(exercise.image)} alt={exercise.name} />
                <div>
                  <b>{exercise.name}</b>
                  <span>{exercise.difficulty}</span>
                  <small>{exercise.equipment}</small>
                </div>
                <em>‹</em>
              </Link>
            ))}
          </div>

          <Link className="main-action" href="/exercises">הצג את כל התרגילים</Link>
        </section>
      )}

      <nav className="mobile-nav" aria-label="ניווט ראשי">
        <a className="active">בית</a>
        <Link href="/exercises">תרגילים</Link>
        <a>אימונים</a>
        <a>התקדמות</a>
        <a>פרופיל</a>
      </nav>
    </main>
  );
}
