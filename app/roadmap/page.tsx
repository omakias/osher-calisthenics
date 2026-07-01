import { roadmap } from '@/data/content';
export default function Roadmap(){return <>
 <div className="top"><div><h1 className="phone-title">Skill Roadmap</h1><p className="muted">מסלול Muscle Up</p></div><div className="logo">OC</div></div>
 <section className="hero"><h2>Muscle Up Journey</h2><p className="muted">סמן שלבים, עקוב אחרי התקדמות ופתח את הסקיל הבא.</p><div className="bar"><div className="fill" style={{width:'42%'}}/></div></section>
 <section className="section road">{roadmap.map((r,i)=><div className={`node ${r.done?'done':''}`} key={r.title}><b>{r.done?'✅':'🔒'} {r.title}</b><p className="muted">שלב {i+1} מתוך {roadmap.length}</p></div>)}</section>
</>}
