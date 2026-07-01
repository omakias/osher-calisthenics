import Link from 'next/link';
import { exercises } from '@/data/content';
export default function Exercises(){return <>
  <div className="top"><div><h1 className="phone-title">ספריית תרגילים</h1><p className="muted">חיפוש לפי רמה, שריר או Skill</p></div><div className="logo">OC</div></div>
  <input className="search" placeholder="חפש תרגיל..." />
  <div className="section grid"><span className="pill">חזה</span><span className="pill">גב</span><span className="pill">בטן</span><span className="pill">Skills</span></div>
  <section className="section list">{exercises.map(e=><Link className="exercise" href={`/exercises/${e.id}`} key={e.id}><div className="thumb">🏋️</div><div style={{flex:1}}><b>{e.name}</b><p className="muted">{e.en} · {e.level}</p><span className="pill">+{e.xp} XP</span></div></Link>)}</section>
</>}
