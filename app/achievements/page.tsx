import { achievements } from '@/data/content';
export default function Achievements(){return <>
 <div className="top"><div><h1 className="phone-title">הישגים</h1><p className="muted">XP, רמות ומטרות</p></div><div className="logo">OC</div></div>
 <section className="grid section"><div className="stat"><b>Level 8</b><span className="muted">Athlete</span></div><div className="stat"><b>1,240</b><span className="muted">XP כולל</span></div></section>
 <section className="section list">{achievements.map(a=><div className={`card ${a.unlocked?'':'lock'}`} key={a.title}><h2>{a.unlocked?'🏆':'🔒'} {a.title}</h2><p className="muted">{a.text}</p><span className="pill">+{a.xp} XP</span></div>)}</section>
</>}
