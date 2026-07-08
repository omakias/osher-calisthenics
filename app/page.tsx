'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { asset, exercises, exercisesByMuscle, muscles, type MuscleId } from '../data/content';

export default function HomePage(){
  const [side,setSide]=useState<'front'|'back'>('front');
  const [selected,setSelected]=useState<MuscleId|null>(null);
  const visible=muscles.filter(m=>m.side===side);
  const selectedMuscle=selected?muscles.find(m=>m.id===selected):null;
  const list=useMemo(()=>selected?exercisesByMuscle(selected).slice(0,6):[],[selected]);
  const featured=list[0]||exercises[0];
  return <main className="mobile-app">
    <header className="appbar"><div className="brand"><b>OC</b><span>OSHER</span></div><div className="stats"><span>🔥 12</span><span>⬢ 1,250</span></div></header>
    <section className="hero-card">
      <div className="hero-head"><div><h1>מפת השרירים</h1><p>לחץ על נקודה כחולה כדי לראות תרגילים.</p></div><div className="seg"><button className={side==='front'?'on':''} onClick={()=>{setSide('front');setSelected(null)}}>קדמי</button><button className={side==='back'?'on':''} onClick={()=>{setSide('back');setSelected(null)}}>אחורי</button></div></div>
      <div className="body-wrap">
        <img src={asset(side==='front'?'/body-front.png':'/body-back.png')} className="body" alt="מפת גוף" />
        {visible.map(m=><button key={m.id} className={`hotspot ${selected===m.id?'hot-on':''}`} style={{left:`${m.x}%`,top:`${m.y}%`}} onClick={()=>setSelected(m.id)} aria-label={m.name}><i/></button>)}
      </div>
      <p className="hint">בחר אזור שריר כדי לפתוח פאנל תרגילים.</p>
    </section>
    {!selectedMuscle && <section className="empty-card"><h2>בחר שריר</h2><p>לאחר בחירה תופיע רשימת תרגילים מומלצים, תמונה והוראות.</p></section>}
    {selectedMuscle && <section className="sheet"><div className="sheet-head"><button onClick={()=>setSelected(null)}>×</button><div><small>שריר נבחר</small><h2>{selectedMuscle.name}</h2><p>{selectedMuscle.description}</p></div></div><div className="exercise-list">{list.map(ex=><Link className="exercise-row" href={`/exercises/${ex.id}`} key={ex.id}><img src={asset(ex.image)} alt={ex.name}/><div><b>{ex.name}</b><span>{ex.difficulty}</span><small>{ex.short}</small></div><em>›</em></Link>)}</div><Link href="/exercises" className="primary">הצג את כל התרגילים</Link></section>}
    <section className="featured"><img src={asset(featured.image)} alt={featured.name}/><div><small>תרגיל מומלץ</small><h3>{featured.name}</h3><p>{featured.short}</p></div></section>
    <nav className="bottom-nav"><a className="active">בית</a><Link href="/exercises">תרגילים</Link><a>אימונים</a><a>התקדמות</a><a>פרופיל</a></nav>
  </main>
}
