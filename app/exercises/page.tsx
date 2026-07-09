'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { asset, exercises, muscles, type Difficulty, type MuscleId } from '../../data/content';

const difficultyOptions: Array<'הכל' | Difficulty> = ['הכל','מתחיל','בינוני','מתקדם'];
const equipmentOptions = ['הכל','ללא ציוד','מוט מתח','מקבילים','ספסל / מדרגה','קיר','גומייה'];

export default function ExercisesPage(){
  const [query, setQuery] = useState('');
  const [muscle, setMuscle] = useState<'all' | MuscleId>('all');
  const [difficulty, setDifficulty] = useState<'הכל' | Difficulty>('הכל');
  const [equipment, setEquipment] = useState('הכל');

  const filtered = useMemo(() => exercises.filter(ex => {
    const q = query.trim();
    const matchesSearch = !q || `${ex.name} ${ex.short} ${ex.equipment}`.includes(q);
    const matchesMuscle = muscle === 'all' || ex.muscle === muscle || ex.secondary.includes(muscle);
    const matchesDifficulty = difficulty === 'הכל' || ex.difficulty === difficulty;
    const matchesEquipment = equipment === 'הכל' || ex.equipment === equipment;
    return matchesSearch && matchesMuscle && matchesDifficulty && matchesEquipment;
  }), [query, muscle, difficulty, equipment]);

  const featured = filtered[0] || exercises[0];

  return <main className="exercise-screen">
    <header className="exercise-top">
      <Link href="/" className="round-btn" aria-label="חזרה">‹</Link>
      <div>
        <h1>ספריית תרגילים</h1>
        <p>חפש, סנן ובחר תרגיל לצפייה בהדגמה והוראות.</p>
      </div>
    </header>

    <section className="library-panel hero-exercise">
      <div className="media-preview">
        <img src={asset(featured.image)} alt={featured.name}/>
        <Link href={`/exercises/${featured.id}`} className="play-float">▶</Link>
      </div>
      <div className="hero-copy">
        <small>תרגיל נבחר</small>
        <h2>{featured.name}</h2>
        <div className="meta-line"><span>{featured.difficulty}</span><span>{featured.equipment}</span></div>
        <p>{featured.short}</p>
        <Link className="primary-action" href={`/exercises/${featured.id}`}>פתח עמוד תרגיל</Link>
      </div>
    </section>

    <section className="library-panel filters-panel">
      <label className="search-box"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="חיפוש תרגיל..." /></label>
      <div className="filter-row">
        {difficultyOptions.map(opt => <button key={opt} onClick={()=>setDifficulty(opt)} className={difficulty===opt?'active':''}>{opt}</button>)}
      </div>
      <div className="filter-row scroll-row">
        {equipmentOptions.map(opt => <button key={opt} onClick={()=>setEquipment(opt)} className={equipment===opt?'active':''}>{opt}</button>)}
      </div>
      <div className="muscle-strip" aria-label="בחירת שריר">
        <button onClick={()=>setMuscle('all')} className={muscle==='all'?'active':''}><b className="icon-circle">⌘</b><span>הכל</span></button>
        {muscles.map(m => <button key={m.id} onClick={()=>setMuscle(m.id)} className={muscle===m.id?'active':''}><b className="icon-circle">{m.icon}</b><span>{m.name}</span></button>)}
      </div>
    </section>

    <section className="results-head"><b>{filtered.length} תרגילים</b><span>תוצאות לפי הסינון הנוכחי</span></section>

    <section className="exercise-grid">
      {filtered.map(ex => <Link href={`/exercises/${ex.id}`} key={ex.id} className="exercise-tile">
        <div className="tile-img"><img src={asset(ex.image)} alt={ex.name}/><span className="video-badge">▶ סרטון</span></div>
        <div className="tile-body">
          <div className="tile-title"><h3>{ex.name}</h3><span className={`level ${ex.difficulty}`}>{ex.difficulty}</span></div>
          <p>{ex.short}</p>
          <div className="tile-tags"><span>{ex.equipment}</span><span>{muscles.find(m=>m.id===ex.muscle)?.name}</span></div>
        </div>
      </Link>)}
    </section>
  </main>
}
