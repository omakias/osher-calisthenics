'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { asset, exercisesByMuscle, muscles, type MuscleId, exercises } from '../data/content';

const nav = [['בית','⌂'], ['תרגילים','◧'], ['אימונים','▣'], ['מפת דרך','⚑'], ['התקדמות','▥'], ['פרופיל','○']];

export default function HomePage() {
  const [side, setSide] = useState<'front' | 'back'>('front');
  const visibleMuscles = muscles.filter(m => m.side === side);
  const [selected, setSelected] = useState<MuscleId | null>(null);
  const selectedMuscle = selected ? muscles.find(m => m.id === selected) : null;
  const list = useMemo(() => selected ? exercisesByMuscle(selected).slice(0, 8) : [], [selected]);
  const current = list[0] || exercises[0];

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand"><div className="brand-mark">OC</div><div><strong>OSHER</strong><span>CALISTHENICS</span></div></div>
        <nav>{nav.map(([label, icon], i) => <Link key={label} href={i===1?'/exercises':'#'} className={i===0?'active':''}><span>{icon}</span>{label}</Link>)}</nav>
        <div className="side-card"><b>🔥 12</b><span>רצף יומי</span></div>
        <div className="side-card"><b>רמה 12</b><span>1,250 / 2,000 XP</span><div className="bar"><i style={{width:'62%'}} /></div></div>
      </aside>

      <section className="dashboard">
        <header className="topbar"><div><b>🔥 12</b><b>⬢ 1,250</b></div><div className="avatar" /></header>
        <section className="muscle-map panel">
          <div className="section-title"><div><h1>מפת השרירים</h1><p>לחץ על נקודת שריר כדי לראות תרגילים מומלצים.</p></div><div className="seg"><button onClick={()=>{setSide('front'); setSelected(null)}} className={side==='front'?'on':''}>קדמי</button><button onClick={()=>{setSide('back'); setSelected(null)}} className={side==='back'?'on':''}>אחורי</button></div></div>
          <div className="body-stage">
            <img className="body-img" src={asset(side === 'front' ? '/body-real-front.png' : '/body-real-back.png')} alt="מפת גוף" />
            {visibleMuscles.map(m => (
              <button key={m.id} aria-label={m.name} title={m.name} className={`hotspot ${selected===m.id?'selected':''}`} style={{ left: `${m.x}%`, top: `${m.y}%` }} onClick={() => setSelected(m.id)}>
                <span />
              </button>
            ))}
            {selectedMuscle && <div className="floating-label" style={{left: selectedMuscle.x < 50 ? '8%' : '63%', top: `${Math.max(12, Math.min(82, selectedMuscle.y - 8))}%`}}><b>{selectedMuscle.name}</b><small>{selectedMuscle.latin}</small></div>}
          </div>
          <div className="tip">💡 רק הנקודות הכחולות לחיצות. בחר שריר כדי לפתוח פאנל תרגילים.</div>
        </section>

        <section className="selected-panel panel">
          {!selectedMuscle ? <div className="empty-state"><h2>בחר שריר</h2><p>לאחר לחיצה על נקודה בגוף יופיעו כאן התרגילים המתאימים.</p></div> : <>
          <small>שריר נבחר</small>
          <h2>{selectedMuscle.name} <span>({selectedMuscle.latin})</span></h2>
          <p>{selectedMuscle.description}</p>
          <div className="exercise-list">
            {list.map(ex => (
              <Link key={ex.id} href={`/exercises/${ex.id}`} className="exercise-row">
                <img src={asset(ex.image)} alt={ex.name}/>
                <div><b>{ex.name}</b><small className={`diff d-${ex.difficulty}`}>{ex.difficulty}</small></div>
                <span>‹</span>
              </Link>
            ))}
          </div>
          <Link className="outline-btn" href={`/exercises`}>הצג את כל התרגילים</Link>
          </>}
        </section>

        <section className="detail-card panel">
          <img src={asset(current.image)} alt={current.name} />
          <div className="detail-body"><h2>{current.name}</h2><span className={`pill d-${current.difficulty}`}>{current.difficulty}</span><p>{current.short}</p>
          <h3>אופן ביצוע</h3><ul>{current.instructions.map(x => <li key={x}>✓ {x}</li>)}</ul>
          <h3>טעויות נפוצות</h3><ul>{current.mistakes.map(x => <li className="bad" key={x}>✕ {x}</li>)}</ul>
          <Link href={`/exercises/${current.id}`} className="primary-btn">פתח עמוד תרגיל</Link></div>
        </section>
      </section>
    </main>
  );
}
