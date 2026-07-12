'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { exercises, exercisesByMuscle, muscles, asset } from '../data/content';

const frontGroups = ['chest','shoulders','biceps','triceps','abs','quads','calves'];
const backGroups = ['back','lats','glutes','hamstrings','calves'];
const nav = [
  {href:'/',label:'בית',icon:'⌂',active:true},
  {href:'/exercises',label:'תרגילים',icon:'◧'},
  {href:'/warmup',label:'חימום',icon:'◷'},
  {href:'#progress',label:'התקדמות',icon:'▥'},
  {href:'#profile',label:'פרופיל',icon:'○'}
];

const frontRegions = [
  { id:'chest', label:'חזה', color:'#ef4444', points:'165,270 220,250 276,268 290,326 245,352 191,348 148,326' },
  { id:'shoulders', label:'כתפיים', color:'#22c55e', points:'120,245 155,220 179,253 162,290 121,297 98,270' },
  { id:'shoulders', label:'כתפיים', color:'#22c55e', points:'276,253 305,221 340,245 359,271 333,297 292,288' },
  { id:'biceps', label:'יד קדמית', color:'#a855f7', points:'93,300 132,310 141,405 105,440 74,394' },
  { id:'triceps', label:'יד אחורית', color:'#f97316', points:'328,304 365,311 386,394 354,439 319,403' },
  { id:'abs', label:'בטן', color:'#facc15', points:'187,354 246,354 264,512 218,548 174,512' },
  { id:'quads', label:'ירך קדמית', color:'#3b82f6', points:'142,585 207,579 210,748 169,760 134,706' },
  { id:'quads', label:'ירך קדמית', color:'#3b82f6', points:'229,579 295,585 303,706 267,760 226,748' },
  { id:'calves', label:'תאומים', color:'#14b8a6', points:'146,760 202,758 197,930 147,932 125,842' },
  { id:'calves', label:'תאומים', color:'#14b8a6', points:'237,758 292,760 315,842 290,932 241,930' }
];

const backRegions = [
  { id:'back', label:'גב עליון', color:'#84cc16', points:'132,112 178,82 224,112 213,166 144,166' },
  { id:'back', label:'גב', color:'#22c55e', points:'123,166 236,166 253,333 210,428 176,452 145,428 106,333' },
  { id:'lats', label:'רחב גבי', color:'#06b6d4', points:'76,184 126,165 141,344 102,392 69,345' },
  { id:'lats', label:'רחב גבי', color:'#06b6d4', points:'235,165 284,184 292,345 258,392 219,344' },
  { id:'glutes', label:'ישבן', color:'#f97316', points:'112,429 248,429 260,510 181,548 102,510' },
  { id:'hamstrings', label:'ירך אחורית', color:'#a855f7', points:'104,518 176,545 170,704 123,726 92,638' },
  { id:'hamstrings', label:'ירך אחורית', color:'#a855f7', points:'185,545 256,518 270,638 237,726 190,704' },
  { id:'calves', label:'תאומים', color:'#14b8a6', points:'108,724 170,704 164,748 139,755' },
  { id:'calves', label:'תאומים', color:'#14b8a6', points:'190,704 252,724 223,755 196,748' }
];

function BodyMap({side, selected, setSelected}){
  const regions = side === 'front' ? frontRegions : backRegions;
  const img = side === 'front' ? '/body-front.png' : '/body-back.png';
  const viewBox = side === 'front' ? '0 0 435 1030' : '0 0 360 755';
  const activeColor = muscles.find(m => m.id === selected)?.color || '#2aff66';

  return <div className={`photo-map ${side}`} style={{'--active-color':activeColor}}>
    <img className="photo-body" src={asset(img)} alt={side === 'front' ? 'גוף קדמי' : 'גוף אחורי'} />
    <svg className="muscle-svg" viewBox={viewBox} preserveAspectRatio="xMidYMid meet" aria-label="מפת שרירים לחיצה">
      {regions.map((r, index) => {
        const isActive = selected === r.id;
        return <polygon
          key={`${r.id}-${index}`}
          points={r.points}
          fill={isActive ? r.color : `${r.color}55`}
          stroke={isActive ? '#ffffff' : r.color}
          strokeWidth={isActive ? 6 : 3}
          className={`muscle-zone ${isActive ? 'active' : ''}`}
          onClick={() => setSelected(r.id)}
        />;
      })}
    </svg>
  </div>;
}

export default function HomePage(){
  const [side, setSide] = useState('front');
  const [selected, setSelected] = useState('chest');
  const selectedMuscle = muscles.find(m => m.id === selected) || muscles[0];
  const list = useMemo(() => exercisesByMuscle(selected).slice(0, 4), [selected]);
  const current = list[0] || exercises[0];

  function changeSide(next){
    setSide(next);
    setSelected(next === 'front' ? 'chest' : 'back');
  }

  const groups = side === 'front' ? frontGroups : backGroups;

  return <main className="mobile-app">
    <header className="appbar">
      <div className="brand"><span>OC</span><div><b>OSHER</b><small>CALISTHENICS</small></div></div>
      <div className="stats"><b>🔥 12</b><b>⬢ 1,250</b><i /></div>
    </header>

    <section className="hero-card">
      <div className="hero-text">
        <p>Own Your Strength</p>
        <h1>בחר שריר<br/>והתחל אימון</h1>
      </div>
      <Link href="/exercises" className="hero-action">ספריית תרגילים</Link>
    </section>

    <section className="home-panel map-panel">
      <div className="headline">
        <div><h2>מפת השרירים</h2><p>לחץ ישירות על השריר הצבוע. כל אזור לחיץ ומותאם לתמונה.</p></div>
        <div className="seg"><button className={side==='front'?'on':''} onClick={()=>changeSide('front')}>קדמי</button><button className={side==='back'?'on':''} onClick={()=>changeSide('back')}>אחורי</button></div>
      </div>
      <BodyMap side={side} selected={selected} setSelected={setSelected} />
      <div className="muscle-pills">
        {groups.map(id => {
          const m = muscles.find(x => x.id === id);
          return <button key={id} className={selected===id?'on':''} onClick={()=>setSelected(id)} style={{'--region':m?.color}}>{m?.name}</button>
        })}
      </div>
    </section>

    <section className="bottom-sheet-static">
      <div className="sheet-handle" />
      <div className="sheet-title">
        <div><small>אזור נבחר</small><h2>{selectedMuscle.name}</h2></div>
        <span>{list.length || 0} תרגילים</span>
      </div>
      <p>{selectedMuscle.description}</p>
      <div className="mini-list compact">
        {list.map(ex => <Link key={ex.id} href={`/exercises/${ex.id}`} className="mini-row">
          <img src={asset(ex.image)} alt={ex.name}/>
          <div><b>{ex.name}</b><small>{ex.short}</small></div>
          <em>{ex.difficulty}</em>
        </Link>)}
      </div>
      <Link href="/exercises" className="primary-btn">הצג את כל התרגילים</Link>
    </section>

    <section className="featured-card">
      <img src={asset(current.image)} alt={current.name}/>
      <div><small>תרגיל מומלץ</small><h3>{current.name}</h3><p>{current.short}</p></div>
    </section>

    <nav className="bottom-nav">
      {nav.map(item => <Link key={item.label} href={item.href} className={item.active?'active':''}><span>{item.icon}</span><small>{item.label}</small></Link>)}
    </nav>
  </main>
}
