import Link from 'next/link';
export default function WarmupPage(){
  return <main className="page-shell warmup-page">
    <header className="page-header"><Link href="/">‹</Link><div><h1>חימום</h1><p>טיימר בסיסי. בהמשך נוסיף תרגילי חימום מלאים.</p></div></header>
    <section className="timer-card"><span>⏱</span><h2>05:00</h2><p>חימום כללי לפני אימון</p><button>התחל</button></section>
    <section className="quick-timers"><button>30 שניות</button><button>45 שניות</button><button>60 שניות</button><button>Tabata</button></section>
  </main>
}
