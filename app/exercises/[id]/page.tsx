import Link from 'next/link';
import { asset, exercises, getExercise, muscles } from '../../../data/content';

export function generateStaticParams(){ return exercises.map(e => ({ id: e.id })); }

export default function ExerciseDetails({ params }: { params: { id: string } }){
  const ex = getExercise(params.id) || exercises[0];
  const primary = muscles.find(m => m.id === ex.muscle)?.name;
  const secondary = ex.secondary.map(id => muscles.find(m => m.id===id)?.name).filter(Boolean).join(' • ');
  return <main className="exercise-details">
    <Link className="back-link" href="/exercises">← חזרה לספריית התרגילים</Link>
    <section className="hero-exercise panel"><img src={asset(ex.image)} alt={ex.name}/><div><h1>{ex.name}</h1><span className={`pill d-${ex.difficulty}`}>{ex.difficulty}</span><p>{ex.short}</p><p className="muted">שרירים: {primary}{secondary ? ` • ${secondary}` : ''}</p><p className="muted">ציוד: {ex.equipment}</p><button className="primary-btn">▶ התחל תרגיל</button></div></section>
    <section className="two-cols"><div className="panel"><h2>אופן ביצוע</h2><ol>{ex.instructions.map(i => <li key={i}>{i}</li>)}</ol></div><div className="panel"><h2>טעויות נפוצות</h2><ul>{ex.mistakes.map(m => <li className="bad" key={m}>✕ {m}</li>)}</ul></div></section>
    <section className="panel video-box"><h2>סרטון הדגמה</h2><div className="video-placeholder">▶ כאן ישולב סרטון AI / וידאו מקורי לתרגיל</div></section>
  </main>
}
