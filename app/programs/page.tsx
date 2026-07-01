import { programs } from '@/data/content';
export default function Programs(){return <>
 <div className="top"><div><h1 className="phone-title">תוכניות אימון</h1><p className="muted">בחר מסלול והתקדם שלב אחרי שלב</p></div><div className="logo">OC</div></div>
 <div className="list section">{programs.map(p=><div className="program" key={p.id}><span className="pill">{p.level}</span><h2>{p.title}</h2><p className="muted">{p.duration} · {p.workouts} אימונים בשבוע</p><p>{p.focus}</p><button className="btn">התחל תוכנית</button></div>)}</div>
</>}
