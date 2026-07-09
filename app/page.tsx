'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { asset, exercises, exercisesByMuscle, muscles, type MuscleId, type Side } from '../data/content';

type Region = {
  id: MuscleId;
  side: Side;
  color: string;
  path: string;
};

const frontRegions: Region[] = [
  { id: 'chest', side: 'front', color: '#ef4444', path: 'M118 272 C142 238 188 241 208 273 C205 316 177 349 128 338 C102 322 95 294 118 272 Z M222 270 C247 239 300 239 322 274 C329 308 309 334 272 341 C236 337 218 312 222 270 Z' },
  { id: 'shoulders', side: 'front', color: '#3b82f6', path: 'M68 246 C82 222 111 213 132 227 C125 263 104 288 70 287 C56 274 55 259 68 246 Z M304 224 C329 212 360 224 371 249 C374 274 358 291 330 291 C310 283 299 261 304 224 Z' },
  { id: 'biceps', side: 'front', color: '#a855f7', path: 'M45 315 C75 302 101 320 103 360 C102 414 83 468 51 459 C28 426 28 346 45 315 Z M334 309 C363 301 386 322 388 363 C388 415 370 469 340 461 C318 423 317 340 334 309 Z' },
  { id: 'triceps', side: 'front', color: '#f97316', path: 'M88 301 C113 310 121 351 108 405 C100 444 84 475 60 463 C78 407 82 350 88 301 Z M326 302 C307 318 303 357 318 408 C328 444 346 473 369 462 C351 407 344 350 326 302 Z' },
  { id: 'abs', side: 'front', color: '#facc15', path: 'M164 344 C186 333 231 332 257 344 C268 397 262 472 236 520 C213 536 181 532 160 514 C139 465 142 392 164 344 Z' },
  { id: 'quads', side: 'front', color: '#22c55e', path: 'M122 590 C155 572 192 586 199 641 C203 706 185 775 156 815 C124 789 112 681 122 590 Z M239 594 C276 573 315 592 324 642 C327 713 304 787 274 817 C244 781 232 671 239 594 Z' },
  { id: 'calves', side: 'front', color: '#14b8a6', path: 'M129 755 C170 752 190 819 180 925 C163 960 133 956 119 918 C113 850 113 799 129 755 Z M257 756 C295 751 316 817 310 922 C293 959 264 956 249 918 C243 849 243 801 257 756 Z' },
];

const backRegions: Region[] = [
  { id: 'traps', side: 'back', color: '#3b82f6', path: 'M128 108 C151 92 211 92 234 111 C224 156 205 179 181 181 C153 179 135 153 128 108 Z' },
  { id: 'back', side: 'back', color: '#22c55e', path: 'M111 150 C144 128 214 127 249 151 C266 215 250 306 213 353 C190 372 166 371 144 352 C108 304 94 214 111 150 Z' },
  { id: 'lats', side: 'back', color: '#06b6d4', path: 'M71 185 C101 167 136 177 151 217 C151 281 124 341 86 365 C60 324 50 236 71 185 Z M250 177 C286 166 316 184 326 230 C324 307 300 352 268 366 C230 336 215 261 250 177 Z' },
  { id: 'glutes', side: 'back', color: '#f97316', path: 'M116 392 C143 375 177 387 181 431 C178 478 150 510 116 500 C95 466 94 421 116 392 Z M184 431 C190 389 225 375 250 393 C273 420 265 467 244 501 C210 511 186 478 184 431 Z' },
  { id: 'hamstrings', side: 'back', color: '#a855f7', path: 'M101 488 C142 477 171 505 166 575 C161 630 142 684 117 698 C94 656 82 550 101 488 Z M199 491 C236 477 266 505 270 574 C268 632 247 686 222 700 C199 658 185 548 199 491 Z' },
  { id: 'calves', side: 'back', color: '#84cc16', path: 'M99 620 C133 611 153 652 149 725 C137 751 111 749 99 722 C93 681 90 644 99 620 Z M210 621 C244 610 264 653 259 724 C247 751 222 748 210 722 C204 681 202 644 210 621 Z' },
];

const regions: Region[] = [...frontRegions, ...backRegions];

const viewBoxes: Record<Side, string> = { front: '0 0 435 1030', back: '0 0 360 755' };

const nav = [
  { href: '/', label: 'בית', icon: '⌂', active: true },
  { href: '/exercises', label: 'תרגילים', icon: '◧' },
  { href: '/warmup', label: 'חימום', icon: '⏱' },
  { href: '#progress', label: 'התקדמות', icon: '▥' },
  { href: '#profile', label: 'פרופיל', icon: '○' },
];

export default function HomePage() {
  const [side, setSide] = useState<Side>('front');
  const [selected, setSelected] = useState<MuscleId | null>(null);

  const visibleRegions = regions.filter((region) => region.side === side);
  const selectedMuscle = selected ? muscles.find((muscle) => muscle.id === selected) ?? null : null;
  const selectedExercises = useMemo(() => (selected ? exercisesByMuscle(selected).slice(0, 5) : []), [selected]);
  const featured = selectedExercises[0] ?? exercises[0];

  const chooseMuscle = (id: MuscleId) => setSelected(id);
  const switchSide = (next: Side) => {
    setSide(next);
    setSelected(null);
  };

  return (
    <main className="mobile-app" dir="rtl">
      <header className="mobile-header">
        <div className="header-brand">
          <div className="brand-logo">OC</div>
          <div>
            <strong>OSHER</strong>
            <small>CALISTHENICS</small>
          </div>
        </div>
        <div className="header-stats">
          <span>🔥 12</span>
          <span>XP 1,250</span>
        </div>
      </header>

      <section className="map-card">
        <div className="map-title">
          <div>
            <span className="mini-label">מפת השרירים</span>
            <h1>בחר אזור אימון</h1>
            <p>לחץ על השריר עצמו כדי לפתוח תרגילים מומלצים.</p>
          </div>
          <div className="toggle-pill">
            <button type="button" onClick={() => switchSide('front')} className={side === 'front' ? 'active' : ''}>קדמי</button>
            <button type="button" onClick={() => switchSide('back')} className={side === 'back' ? 'active' : ''}>אחורי</button>
          </div>
        </div>

        <div className="body-stage-color">
          <div className="figure-wrap">
            <img
              src={asset(side === 'front' ? '/body-front.png' : '/body-back.png')}
              alt={side === 'front' ? 'גוף קדמי' : 'גוף אחורי'}
              className="body-real"
            />
            <svg className="muscle-overlay" viewBox={viewBoxes[side]} preserveAspectRatio="xMidYMid meet" aria-label="אזורי שרירים לחיצים">
              {visibleRegions.map((region) => {
                const muscle = muscles.find((item) => item.id === region.id);
                const isActive = selected === region.id;
                return (
                  <path
                    key={`${region.side}-${region.id}`}
                    d={region.path}
                    fill={region.color}
                    style={{ color: region.color }}
                    className={isActive ? 'region active' : 'region'}
                    onClick={() => chooseMuscle(region.id)}
                    role="button"
                    tabIndex={0}
                    aria-label={`בחר ${muscle?.name ?? region.id}`}
                  />
                );
              })}
            </svg>
          </div>
        </div>

        <div className="legend-grid">
          {visibleRegions.map((region) => {
            const muscle = muscles.find((item) => item.id === region.id);
            return (
              <button key={`${region.side}-legend-${region.id}`} type="button" onClick={() => chooseMuscle(region.id)} className={selected === region.id ? 'active' : ''}>
                <i style={{ background: region.color }} />
                <span>{muscle?.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="quick-start-card">
        <div>
          <small>תרגיל מומלץ</small>
          <h2>{featured.name}</h2>
          <p>{featured.short}</p>
        </div>
        <img src={asset(featured.image)} alt={featured.name} />
      </section>

      {selectedMuscle && (
        <section className="bottom-sheet-card" aria-label={`תרגילים עבור ${selectedMuscle.name}`}>
          <div className="sheet-handle" />
          <div className="sheet-headline">
            <button type="button" onClick={() => setSelected(null)} aria-label="סגור">×</button>
            <div>
              <small>אזור אימון</small>
              <h2>{selectedMuscle.name}</h2>
              <p>{selectedMuscle.description}</p>
            </div>
          </div>

          <div className="sheet-summary">
            <span>{selectedExercises.length} תרגילים</span>
            <span>רמה מומלצת: מתחיל–בינוני</span>
          </div>

          <div className="sheet-exercises-list">
            {selectedExercises.map((exercise) => (
              <Link href={`/exercises/${exercise.id}`} key={exercise.id} className="exercise-line-card">
                <img src={asset(exercise.image)} alt={exercise.name} />
                <div>
                  <b>{exercise.name}</b>
                  <small>{exercise.difficulty} · {exercise.equipment}</small>
                </div>
                <span>‹</span>
              </Link>
            ))}
          </div>

          <Link className="sheet-cta" href="/exercises">הצג את כל התרגילים</Link>
        </section>
      )}

      <nav className="bottom-nav-green" aria-label="ניווט ראשי">
        {nav.map((item) => item.href.startsWith('#') ? (
          <a key={item.label} href={item.href} className={item.active ? 'active' : ''}>
            <span>{item.icon}</span>
            <small>{item.label}</small>
          </a>
        ) : (
          <Link key={item.label} href={item.href} className={item.active ? 'active' : ''}>
            <span>{item.icon}</span>
            <small>{item.label}</small>
          </Link>
        ))}
      </nav>
    </main>
  );
}
