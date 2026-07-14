import Link from 'next/link';
import { asset, exercises, getExercise, muscles } from '../../../data/content';

export function generateStaticParams(){return exercises.map(e=>({id:e.id}))}

export default async function ExerciseDetails({params}){
  const {id}=await params;
  const ex=getExercise(id)||exercises[0];
  const primary=muscles.find(m=>m.id===ex.muscle)?.name||'';
  const secondary=ex.secondary.map(id=>muscles.find(m=>m.id===id)?.name).filter(Boolean).join(' • ');
  return <main className="detail-page">
    <header className="page-head"><Link href="/exercises" className="back">‹</Link><div><h1>{ex.name}</h1><p>{primary}{secondary?` • ${secondary}`:''}</p></div></header>
    <section className="video-card"><video controls playsInline preload="metadata" poster={asset(ex.image)} src={asset(ex.video||'')} /><div><span>{ex.difficulty}</span><span>{ex.equipment}</span></div></section>
    <section className="content-card"><h2>על התרגיל</h2><p>{ex.short}</p></section>
    <section className="content-card"><h2>אופן ביצוע</h2><ol>{ex.instructions.map((i,n)=><li key={n}>{i}</li>)}</ol></section>
    <section className="content-card danger"><h2>טעויות נפוצות</h2><ul>{ex.mistakes.map((i,n)=><li key={n}>{i}</li>)}</ul></section>
    <Link href="/" className="primary-btn sticky">חזרה לבית</Link>
  </main>
}
