import Link from 'next/link';
import { asset, exercises, muscles } from '../../data/content';

export default function ExercisesPage(){
  return <main className="page-shell">
    <header className="page-header"><Link href="/">‹</Link><div><h1>תרגילים</h1><p>חיפוש וסינון יתווספו בשלב הבא. כרגע מוצגים כל התרגילים.</p></div></header>
    <div className="category-strip">{muscles.map(m => <span key={m.id} style={{'--c':m.color}}>{m.name}</span>)}</div>
    <section className="exercise-grid">
      {exercises.map(ex => <Link href={`/exercises/${ex.id}`} key={ex.id} className="exercise-card">
        <img src={asset(ex.image)} alt={ex.name}/>
        <div><h2>{ex.name}</h2><p>{ex.short}</p><footer><span>{ex.difficulty}</span><small>{ex.equipment}</small></footer></div>
      </Link>)}
    </section>
    <BottomNav />
  </main>
}

function BottomNav(){return <nav className="bottom-nav"><Link href="/">⌂<small>בית</small></Link><Link className="active" href="/exercises">◧<small>תרגילים</small></Link><Link href="/warmup">◷<small>חימום</small></Link><a href="#">▥<small>התקדמות</small></a><a href="#">○<small>פרופיל</small></a></nav>}
