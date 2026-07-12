'use client';
import Link from 'next/link';
import {useEffect,useMemo,useState} from 'react';
export default function WarmupPage(){
  const [sec,setSec]=useState(45); const [run,setRun]=useState(false);
  useEffect(()=>{if(!run||sec<=0)return; const t=setTimeout(()=>setSec(v=>v-1),1000); return()=>clearTimeout(t)},[run,sec]);
  const time=useMemo(()=>`${String(Math.floor(sec/60)).padStart(2,'0')}:${String(sec%60).padStart(2,'0')}`,[sec]);
  return <main className="warm-page"><header className="page-head"><Link href="/" className="back">‹</Link><div><h1>טיימר חימום</h1><p>בהמשך נוסיף תרגילי חימום מלאים.</p></div></header><section className="timer"><b>{time}</b><small>{run?'פעיל':'מוכן'}</small></section><div className="timer-actions"><button onClick={()=>setRun(!run)}>{run?'עצור':'התחל'}</button><button onClick={()=>{setRun(false);setSec(45)}}>איפוס</button></div><div className="chips timer-chips">{[30,45,60,90].map(s=><button key={s} onClick={()=>{setRun(false);setSec(s)}}>{s} שניות</button>)}</div><nav className="bottom-nav"><Link href="/"><span>⌂</span><small>בית</small></Link><Link href="/exercises"><span>◧</span><small>תרגילים</small></Link><Link href="/warmup" className="active"><span>⏱</span><small>חימום</small></Link><a><span>▥</span><small>התקדמות</small></a><a><span>○</span><small>פרופיל</small></a></nav></main>
}
