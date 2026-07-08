import Link from 'next/link';
import { asset, exercises, muscles } from '../../data/content';

export default function ExercisesPage(){
  return <main className="page-wrap">
    <header className="page-head"><Link href="/">← בית</Link><div><h1>ספריית תרגילים</h1><p>כל התרגילים בעברית, עם תמונה, רמה, שרירים והוראות.</p></div></header>
    <section className="filter-row">{muscles.filter(m=>m.side==='front').map(m=><span key={m.id}>{m.name}</span>)}</section>
    <section className="grid-cards">{exercises.map(ex => <Link href={`/exercises/${ex.id}`} key={ex.id} className="exercise-card"><img src={asset(ex.image)} alt={ex.name}/><div><h3>{ex.name}</h3><p>{ex.short}</p><span className={`pill d-${ex.difficulty}`}>{ex.difficulty}</span></div></Link>)}</section>
  </main>
}
