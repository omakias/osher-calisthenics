import Link from 'next/link';
import { asset, exercises, getExercise, muscleById } from '../../../data/content';

export function generateStaticParams(){ return exercises.map(ex => ({ id: ex.id })); }

export default function ExercisePage({ params }){
  const ex = getExercise(params.id) || exercises[0];
  const mainMuscle = muscleById(ex.muscle);
  return <main className="page-shell detail-page">
    <header className="page-header"><Link href="/exercises">‹</Link><div><h1>{ex.name}</h1><p>{ex.short}</p></div></header>
    <section className="detail-hero"><img src={asset(ex.image)} alt={ex.name}/><div><span>{ex.difficulty}</span><b>{mainMuscle?.name}</b><small>{ex.equipment}</small></div></section>
    <section className="info-card"><h2>אופן ביצוע</h2><ol>{ex.instructions.map(x => <li key={x}>{x}</li>)}</ol></section>
    <section className="info-card"><h2>טעויות נפוצות</h2><ul>{ex.mistakes.map(x => <li key={x}>{x}</li>)}</ul></section>
    <Link className="primary-btn sticky" href="/warmup">התחל חימום</Link>
  </main>
}
