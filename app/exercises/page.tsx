import Link from 'next/link';
import { asset, exercises, muscles } from '../../data/content';

export default function ExercisesPage(){
 return <main className="library"><header className="simple-head"><Link href="/">‹</Link><div><h1>תרגילים</h1><p>בחר תרגיל לצפייה בהוראות מלאות.</p></div></header><div className="chips">{muscles.map(m=><span key={m.id}>{m.name}</span>)}</div><section className="cards">{exercises.map(ex=><Link href={`/exercises/${ex.id}`} key={ex.id} className="card"><img src={asset(ex.image)} alt={ex.name}/><div><h2>{ex.name}</h2><b>{ex.difficulty}</b><p>{ex.short}</p></div></Link>)}</section></main>
}
