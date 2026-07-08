import Link from 'next/link';
import { asset, exercises, getExercise } from '../../../data/content';

export function generateStaticParams(){ return exercises.map(e=>({id:e.id})); }
export default async function ExerciseDetails({params}:{params: Promise<{id:string}>}){
 const { id } = await params;
 const ex=getExercise(id) || exercises[0];
 return <main className="details"><header className="simple-head"><Link href="/exercises">‹</Link><div><h1>{ex.name}</h1><p>{ex.difficulty} • {ex.equipment}</p></div></header><img className="detail-img" src={asset(ex.image)} alt={ex.name}/><section className="panel"><h2>אופן ביצוע</h2><ol>{ex.instructions.map((i,idx)=><li key={idx}>{i}</li>)}</ol></section><section className="panel"><h2>טעויות נפוצות</h2><ul>{ex.mistakes.map((m,idx)=><li key={idx}>{m}</li>)}</ul></section><button className="primary">התחל תרגיל</button></main>
}
