'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { asset, exercises, exercisesByMuscle, muscleById, muscles } from '../data/content';

const nav = [
  {href:'/', label:'בית', icon:'⌂', active:true},
  {href:'/exercises', label:'תרגילים', icon:'◧'},
  {href:'/warmup', label:'חימום', icon:'◷'},
  {href:'#progress', label:'התקדמות', icon:'▥'},
  {href:'#profile', label:'פרופיל', icon:'○'}
];

const frontRegions = [
  { id:'chest', points:'145,285 178,246 224,243 265,269 278,323 241,356 186,352 146,326', color:'#ef4444' },
  { id:'shoulders', points:'107,245 143,217 174,246 160,294 113,302 88,272', color:'#38bdf8' },
  { id:'shoulders', points:'273,247 303,219 344,245 366,273 340,302 294,294', color:'#38bdf8' },
  { id:'biceps', points:'80,306 127,315 140,406 105,449 70,392', color:'#a855f7' },
  { id:'triceps', points:'323,307 368,317 392,392 354,449 318,406', color:'#f97316' },
  { id:'abs', points:'181,356 249,355 265,510 221,551 173,510', color:'#facc15' },
  { id:'quads', points:'137,583 209,576 211,754 167,766 130,706', color:'#22c55e' },
  { id:'quads', points:'226,576 297,583 306,706 268,766 224,754', color:'#22c55e' },
  { id:'calves', points:'143,756 203,754 196,936 146,936 124,842', color:'#14b8a6' },
  { id:'calves', points:'234,754 294,756 316,842 289,936 240,936', color:'#14b8a6' }
];

const backRegions = [
  { id:'back', points:'129,92 180,62 231,92 224,155 137,155', color:'#22c55e' },
  { id:'back', points:'111,154 246,154 262,320 220,412 181,444 142,412 99,320', color:'#22c55e' },
  { id:'lats', points:'70,185 119,158 141,340 102,395 66,347', color:'#06b6d4' },
  { id:'lats', points:'242,158 291,185 296,347 259,395 220,340', color:'#06b6d4' },
  { id:'glutes', points:'108,425 252,425 262,516 181,552 99,516', color:'#f97316' },
  { id:'hamstrings', points:'100,518 176,545 170,704 123,730 91,638', color:'#a855f7' },
  { id:'hamstrings', points:'185,545 260,518 270,638 237,730 190,704', color:'#a855f7' },
  { id:'calves', points:'106,720 170,704 162,748 137,756', color:'#14b8a6' },
  { id:'calves', points:'190,704 254,720 224,756 197,748', color:'#14b8a6' }
];

function BodyMap({ side, selected, setSelected }) {
  const regions = side === 'front' ? frontRegions : backRegions;
  const viewBox = side === 'front' ? '0 0 435 1030' : '0 0 360 755';
  const img = side === 'front' ? '/body-front.png' : '/body-back.png';
  return (
    <div className={`body-wrap ${side}`}>
      <img className="body-photo" src={asset(img)} alt="מפת שרירים" />
      <svg className="body-overlay" viewBox={viewBox} preserveAspectRatio="xMidYMid meet">
        {regions.map((r, index) => (
          <polygon
            key={`${r.id}-${index}`}
            points={r.points}
            fill={selected === r.id ? `${r.color}aa` : `${r.color}5c`}
            stroke={selected === r.id ? '#ffffff' : r.color}
            strokeWidth={selected === r.id ? 5 : 2.5}
            className="muscle-region"
            onClick={() => setSelected(r.id)}
          />
        ))}
      </svg>
    </div>
  );
}

export default function HomePage(){
  const [side, setSide] = useState('front');
  const [selected, setSelected] = useState('chest');
  const selectedMuscle = muscleById(selected) || muscles[0];
  const list = useMemo(() => exercisesByMuscle(selected).slice(0, 5), [selected]);
  const hero = list[0] || exercises[0];

  const switchSide = (value) => {
    setSide(value);
    setSelected(value === 'front' ? 'chest' : 'back');
  };

  return (
    <main className="mobile-app">
      <header className="appbar">
        <div className="brand"><span>OC</span><div><b>OSHER</b><small>CALISTHENICS</small></div></div>
        <div className="stats"><b>🔥 12</b><b>⬢ 1,250</b></div>
      </header>

      <section className="hero-card">
        <div><small>Own Your Strength</small><h1>בחר שריר<br/>והתחל אימון</h1></div>
        <Link href="/exercises">ספריית תרגילים</Link>
      </section>

      <section className="map-card">
        <div className="card-head">
          <div><h2>מפת השרירים</h2><p>לחץ על אזור צבעוני בגוף כדי לראות תרגילים.</p></div>
          <div className="seg"><button className={side==='front'?'on':''} onClick={()=>switchSide('front')}>קדמי</button><button className={side==='back'?'on':''} onClick={()=>switchSide('back')}>אחורי</button></div>
        </div>
        <BodyMap side={side} selected={selected} setSelected={setSelected} />
      </section>

      <section className="sheet-card" style={{'--accent': selectedMuscle.color}}>
        <div className="handle" />
        <div className="sheet-title"><div><small>אזור נבחר</small><h2>{selectedMuscle.name}</h2></div><span>{list.length} תרגילים</span></div>
        <p>{selectedMuscle.description}</p>
        <div className="exercise-list compact">
          {list.map(ex => <Link key={ex.id} href={`/exercises/${ex.id}`} className="exercise-row">
            <img src={asset(ex.image)} alt={ex.name}/>
            <div><b>{ex.name}</b><small>{ex.short}</small></div>
            <em>{ex.difficulty}</em>
          </Link>)}
        </div>
        <Link className="primary-btn" href="/exercises">הצג את כל התרגילים</Link>
      </section>

      <section className="featured-card">
        <img src={asset(hero.image)} alt={hero.name}/>
        <div><small>תרגיל מומלץ</small><h3>{hero.name}</h3><p>{hero.short}</p></div>
      </section>

      <nav className="bottom-nav">
        {nav.map(item => <Link key={item.label} href={item.href} className={item.active?'active':''}><span>{item.icon}</span><small>{item.label}</small></Link>)}
      </nav>
    </main>
  );
}
