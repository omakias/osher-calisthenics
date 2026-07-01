import Link from 'next/link';
import { exercises } from '@/data/content';
export function generateStaticParams(){return exercises.map(e=>({id:e.id}))}
export default function ExercisePage({params}:{params:{id:string}}){
 const e=exercises.find(x=>x.id===params.id) || exercises[0];
 return <>
  <Link className="pill" href="/exercises">← חזרה</Link>
  <section className="hero section"><div className="thumb" style={{width:110,height:110,fontSize:48}}>💪</div><h1>{e.name}</h1><p className="muted ltr">{e.en}</p><p>{e.description}</p><span className="pill">{e.level}</span> <span className="pill">{e.category}</span></section>
  <section className="section card"><h2>שרירים עובדים</h2><p>{e.muscles.join(' · ')}</p><p className="muted">ציוד: {e.equipment}</p></section>
  <section className="section card"><h2>ביצוע נכון</h2>{e.steps.map((s,i)=><p key={s}><b>{i+1}.</b> {s}</p>)}</section>
  <section className="section card"><h2>טעויות נפוצות</h2>{e.mistakes.map(m=><p key={m}>⚠️ {m}</p>)}</section>
  <Link className="btn" href="/workout">הוסף לאימון</Link>
 </>
}
