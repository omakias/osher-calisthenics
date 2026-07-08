'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { asset, exercises, exercisesByMuscle, muscles, type MuscleId, type Side } from '../data/content';

const nav = [
  ['בית', '⌂', '/'],
  ['תרגילים', '◧', '/exercises'],
  ['אימונים', '▣', '#'],
  ['מפת דרך', '⚑', '#'],
  ['התקדמות', '▥', '#'],
  ['פרופיל', '○', '#'],
] as const;

const muscleIcon: Record<MuscleId, string> = {
  chest: '◖', shoulders: '◆', triceps: '◒', biceps: '●', abs: '▣', quads: '▰', calves: '▾',
  back: '◈', traps: '▲', lats: '◗', hamstrings: '▱', glutes: '⬢'
};

export default function HomePage() {
  const [side, setSide] = useState<Side>('front');
  const [selected, setSelected] = useState<MuscleId | null>(null);

  const visibleMuscles = useMemo(() => muscles.filter((m) => m.side === side), [side]);
  const selectedMuscle = selected ? muscles.find((m) => m.id === selected) ?? null : null;
  const selectedExercises = useMemo(() => selected ? exercisesByMuscle(selected).slice(0, 7) : [], [selected]);
  const featured = selectedExercises[0] ?? exercises[0];

  const changeSide = (next: Side) => {
    setSide(next);
    setSelected(null);
  };

  return (
    <main className="home-shell">
      <aside className="desktop-nav">
        <div className="brand-block">
          <div className="brand-logo">OC</div>
          <div>
            <strong>OSHER</strong>
            <span>CALISTHENICS</span>
          </div>
        </div>

        <nav>
          {nav.map(([label, icon, href], index) => (
            <Link key={label} href={href} className={index === 0 ? 'active' : ''}>
              <span>{icon}</span>
              {label}
            </Link>
          ))}
        </nav>

        <div className="nav-spacer" />
        <div className="metric-card"><b>🔥 12</b><span>רצף יומי</span></div>
        <div className="metric-card"><b>רמה 12</b><span>1,250 / 2,000 XP</span><div className="progress-line"><i style={{ width: '62%' }} /></div></div>
      </aside>

      <section className="home-main">
        <header className="home-topbar">
          <div className="mobile-brand"><div className="brand-logo small">OC</div><strong>Osher Calisthenics</strong></div>
          <div className="top-stats"><b>🔥 12</b><b>⬢ 1,250</b><div className="avatar-dot" /></div>
        </header>

        <section className="map-card glass-card">
          <div className="map-header">
            <div>
              <p className="eyebrow">Sprint 1 · Home</p>
              <h1>מפת השרירים</h1>
              <p>בחר צד, לחץ על נקודת שריר כחולה וקבל תרגילים מומלצים לאזור שבחרת.</p>
            </div>
            <div className="side-switch" aria-label="בחירת צד גוף">
              <button onClick={() => changeSide('front')} className={side === 'front' ? 'on' : ''}>קדמי</button>
              <button onClick={() => changeSide('back')} className={side === 'back' ? 'on' : ''}>אחורי</button>
            </div>
          </div>

          <div className="body-map-wrap">
            <div className="body-backdrop" />
            <img
              className="body-real-image"
              src={asset(side === 'front' ? '/body-real-front.png' : '/body-real-back.png')}
              alt={side === 'front' ? 'מפת גוף קדמית' : 'מפת גוף אחורית'}
            />

            {visibleMuscles.map((muscle) => (
              <button
                key={muscle.id}
                type="button"
                className={`muscle-hotspot ${selected === muscle.id ? 'selected' : ''}`}
                style={{ left: `${muscle.x}%`, top: `${muscle.y}%` }}
                onClick={() => setSelected(muscle.id)}
                aria-label={`בחר ${muscle.name}`}
                title={muscle.name}
              >
                <span className="hotspot-core" />
                <span className="hotspot-ring" />
              </button>
            ))}

            {selectedMuscle && (
              <div className={`muscle-callout ${selectedMuscle.x < 50 ? 'left' : 'right'}`} style={{ top: `${Math.max(12, Math.min(78, selectedMuscle.y - 8))}%` }}>
                <span>{muscleIcon[selectedMuscle.id]}</span>
                <div><b>{selectedMuscle.name}</b><small>{selectedMuscle.latin}</small></div>
              </div>
            )}
          </div>

          <div className="map-footer-note">💡 רק הנקודות הכחולות לחיצות. החלפה בין קדמי/אחורי מאפסת את הבחירה כדי למנוע לחיצות שגויות.</div>
        </section>

        <aside className={`muscle-panel glass-card ${selectedMuscle ? 'open' : 'empty'}`}>
          {!selectedMuscle ? (
            <div className="panel-empty-state">
              <div className="empty-icon">◎</div>
              <h2>בחר שריר</h2>
              <p>לאחר לחיצה על נקודת שריר בגוף, ייפתח כאן פאנל עם התרגילים הרלוונטיים בלבד.</p>
            </div>
          ) : (
            <>
              <div className="panel-title-row">
                <div>
                  <small>שריר נבחר</small>
                  <h2>{selectedMuscle.name} <span>{selectedMuscle.latin}</span></h2>
                  <p>{selectedMuscle.description}</p>
                </div>
                <button type="button" onClick={() => setSelected(null)} className="close-panel" aria-label="סגור פאנל">×</button>
              </div>

              <div className="exercise-count"><b>{selectedExercises.length}</b> תרגילים מומלצים</div>

              <div className="home-exercise-list">
                {selectedExercises.map((exercise) => (
                  <Link href={`/exercises/${exercise.id}`} key={exercise.id} className="home-exercise-card">
                    <img src={asset(exercise.image)} alt={exercise.name} />
                    <div>
                      <b>{exercise.name}</b>
                      <span className={`level level-${exercise.difficulty}`}>{exercise.difficulty}</span>
                      <small>{exercise.equipment}</small>
                    </div>
                    <em>‹</em>
                  </Link>
                ))}
              </div>

              <Link className="secondary-action" href="/exercises">הצג את כל התרגילים</Link>
            </>
          )}
        </aside>

        <aside className="feature-card glass-card">
          <div className="feature-image-wrap">
            <img src={asset(featured.image)} alt={featured.name} />
            <button className="heart-btn" type="button" aria-label="הוסף למועדפים">♡</button>
            <div className="video-chip">▶ וידאו</div>
          </div>
          <div className="feature-body">
            <div className="feature-title-row"><h2>{featured.name}</h2><span className={`level level-${featured.difficulty}`}>{featured.difficulty}</span></div>
            <p>{featured.short}</p>
            <div className="feature-meta"><span>ציוד: {featured.equipment}</span><span>שריר: {muscles.find((m) => m.id === featured.muscle)?.name}</span></div>
            <h3>אופן ביצוע</h3>
            <ul>{featured.instructions.slice(0, 4).map((item) => <li key={item}>✓ {item}</li>)}</ul>
            <Link href={`/exercises/${featured.id}`} className="primary-action">פתח עמוד תרגיל</Link>
          </div>
        </aside>
      </section>

      <nav className="mobile-bottom-nav">
        {nav.slice(0, 5).map(([label, icon, href], index) => (
          <Link href={href} key={label} className={index === 0 ? 'active' : ''}><span>{icon}</span>{label}</Link>
        ))}
      </nav>
    </main>
  );
}
