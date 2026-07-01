import Link from 'next/link';
import { exercises, programs } from '@/data/content';

export default function Home(){
  return <>
    <div className="top"><div className="brand"><div className="logo">OC</div><div><b>Osher Calisthenics</b><div className="tag">Own Your Strength</div></div></div><span className="pill">Beta</span></div>
    <section className="hero">
      <h1>האימון שלך להיום</h1>
      <p className="muted">Upper Body Foundation · 32 דקות · מתאים להתחלה נקייה</p>
      <Link className="btn" href="/workout">התחל אימון</Link>
    </section>
    <section className="section grid">
      <div className="stat"><b>1,240</b><span className="muted">XP</span></div>
      <div className="stat"><b>7</b><span className="muted">רצף ימים</span></div>
      <div className="stat"><b>42%</b><span className="muted">Muscle Up</span></div>
      <div className="stat"><b>12</b><span className="muted">אימונים</span></div>
    </section>
    <section className="section">
      <div className="section-title"><h2>המשך מסלול</h2><Link className="pill" href="/roadmap">פתח</Link></div>
      <div className="card"><h3>Muscle Up Roadmap</h3><p className="muted">השלב הבא: Pull Up נקי</p><div className="bar"><div className="fill" style={{width:'42%'}}/></div></div>
    </section>
    <section className="section">
      <div className="section-title"><h2>תרגילים מומלצים</h2><Link className="pill" href="/exercises">הכל</Link></div>
      <div className="list">{exercises.slice(0,3).map(e=><Link className="exercise" href={`/exercises/${e.id}`} key={e.id}><div className="thumb">💪</div><div><b>{e.name}</b><p className="muted">{e.level} · {e.category}</p></div></Link>)}</div>
    </section>
    <section className="section">
      <div className="section-title"><h2>תוכניות</h2><Link className="pill" href="/programs">פתח</Link></div>
      <div className="grid">{programs.slice(0,2).map(p=><div className="program" key={p.id}><b>{p.title}</b><p className="muted">{p.duration} · {p.focus}</p></div>)}</div>
    </section>
  </>
}
