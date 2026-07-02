'use client';

import { useMemo, useState } from 'react';
import { achievements, exercises, muscles, programs, roadmaps, type MuscleId } from '@/data/content';

type Tab = 'home' | 'exercises' | 'programs' | 'roadmap' | 'progress';

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: 'home', label: 'בית', icon: '⌂' },
  { id: 'exercises', label: 'תרגילים', icon: '◉' },
  { id: 'programs', label: 'תוכניות', icon: '▦' },
  { id: 'roadmap', label: 'Roadmap', icon: '↟' },
  { id: 'progress', label: 'התקדמות', icon: '✓' }
];

export default function HomePage() {
  const [tab, setTab] = useState<Tab>('home');
  const [selectedMuscle, setSelectedMuscle] = useState<MuscleId>('chest');
  const [activeExercise, setActiveExercise] = useState(exercises[0]);
  const filtered = useMemo(() => exercises.filter((e) => e.muscle === selectedMuscle), [selectedMuscle]);

  const chooseMuscle = (id: MuscleId) => {
    setSelectedMuscle(id);
    const first = exercises.find((e) => e.muscle === id);
    if (first) setActiveExercise(first);
  };

  return (
    <main className="phone-shell">
      <section className="app-card">
        <Header />
        <div className="screen-area">
          {tab === 'home' && <HomeScreen selectedMuscle={selectedMuscle} chooseMuscle={chooseMuscle} filtered={filtered} setTab={setTab} />}
          {tab === 'exercises' && <ExercisesScreen selectedMuscle={selectedMuscle} chooseMuscle={chooseMuscle} activeExercise={activeExercise} setActiveExercise={setActiveExercise} />}
          {tab === 'programs' && <ProgramsScreen />}
          {tab === 'roadmap' && <RoadmapScreen />}
          {tab === 'progress' && <ProgressScreen />}
        </div>
        <nav className="bottom-nav">
          {tabs.map((item) => (
            <button key={item.id} onClick={() => setTab(item.id)} className={tab === item.id ? 'active' : ''}>
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </section>
    </main>
  );
}

function Header() {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">Own Your Strength</p>
        <h1>Osher Calisthenics</h1>
      </div>
      <div className="avatar">OC</div>
    </header>
  );
}

function HomeScreen({ selectedMuscle, chooseMuscle, filtered, setTab }: { selectedMuscle: MuscleId; chooseMuscle: (id: MuscleId) => void; filtered: typeof exercises[number][]; setTab: (tab: Tab) => void }) {
  return (
    <div className="stack">
      <section className="hero">
        <div>
          <p className="eyebrow green">היום</p>
          <h2>בחר שריר ולחץ על הגוף</h2>
          <p>לחיצה על אזור בגוף תפתח תרגילים מתאימים לאותו שריר.</p>
        </div>
        <button onClick={() => setTab('roadmap')}>Skill Roadmap</button>
      </section>

      <section className="muscle-layout">
        <MuscleMap selected={selectedMuscle} onSelect={chooseMuscle} />
        <div className="muscle-panel">
          <span className="badge">נבחר: {muscles[selectedMuscle].name}</span>
          <h3>תרגילים מומלצים</h3>
          {filtered.slice(0, 4).map((exercise) => (
            <article className="mini-card" key={exercise.id}>
              <div>
                <strong>{exercise.name}</strong>
                <p>{exercise.desc}</p>
              </div>
              <small>{exercise.level}</small>
            </article>
          ))}
          <button className="wide" onClick={() => setTab('exercises')}>פתח את כל התרגילים</button>
        </div>
      </section>

      <section className="stats-grid">
        <div><b>1,240</b><span>XP</span></div>
        <div><b>7</b><span>רצף ימים</span></div>
        <div><b>63%</b><span>Muscle Up</span></div>
      </section>
    </div>
  );
}

function ExercisesScreen({ selectedMuscle, chooseMuscle, activeExercise, setActiveExercise }: { selectedMuscle: MuscleId; chooseMuscle: (id: MuscleId) => void; activeExercise: typeof exercises[number]; setActiveExercise: (e: typeof exercises[number]) => void }) {
  const list = exercises.filter((e) => e.muscle === selectedMuscle);
  return (
    <div className="stack">
      <h2>ספריית תרגילים</h2>
      <div className="chips">
        {(Object.keys(muscles) as MuscleId[]).map((id) => (
          <button key={id} onClick={() => chooseMuscle(id)} className={selectedMuscle === id ? 'selected' : ''}>{muscles[id].name}</button>
        ))}
      </div>
      <section className="detail-card">
        <span className="badge">{muscles[activeExercise.muscle as MuscleId].name}</span>
        <h3>{activeExercise.name}</h3>
        <p>{activeExercise.desc}</p>
        <div className="exercise-meta">
          <span>{activeExercise.level}</span>
          <span>{activeExercise.reps}</span>
        </div>
        <ol>
          <li>בצע חימום קצר לפני התרגיל.</li>
          <li>שמור על גוף יציב וטווח תנועה מלא.</li>
          <li>עצור אם יש כאב חד או חוסר שליטה.</li>
        </ol>
      </section>
      <div className="cards-list">
        {list.map((exercise) => (
          <button className="exercise-row" key={exercise.id} onClick={() => setActiveExercise(exercise)}>
            <span>{exercise.name}</span>
            <small>{exercise.level}</small>
          </button>
        ))}
      </div>
    </div>
  );
}

function ProgramsScreen() {
  return (
    <div className="stack">
      <h2>תוכניות אימון</h2>
      {programs.map((program) => (
        <article className="program-card" key={program.name}>
          <span className="badge">{program.level}</span>
          <h3>{program.name}</h3>
          <p>{program.focus}</p>
          <div className="progress"><span style={{ width: program.name.includes('Muscle') ? '63%' : '28%' }} /></div>
          <small>{program.time}</small>
        </article>
      ))}
    </div>
  );
}

function RoadmapScreen() {
  return (
    <div className="stack">
      <h2>Skill Roadmap</h2>
      <Roadmap title="Muscle Up" items={roadmaps.muscleUp} active={4} />
      <Roadmap title="Planche" items={roadmaps.planche} active={2} />
    </div>
  );
}

function Roadmap({ title, items, active }: { title: string; items: string[]; active: number }) {
  return (
    <section className="roadmap-card">
      <h3>{title}</h3>
      {items.map((item, index) => (
        <div className={`road-step ${index <= active ? 'done' : ''}`} key={item}>
          <span>{index <= active ? '✓' : '🔒'}</span>
          <p>{item}</p>
        </div>
      ))}
    </section>
  );
}

function ProgressScreen() {
  return (
    <div className="stack">
      <h2>התקדמות והישגים</h2>
      <section className="level-card">
        <p>רמה 12</p>
        <h3>Athlete</h3>
        <div className="progress"><span style={{ width: '72%' }} /></div>
        <small>1,240 / 1,700 XP לרמה הבאה</small>
      </section>
      {achievements.map((a) => (
        <article className="achievement" key={a.title}>
          <div className="medal">🏆</div>
          <div>
            <strong>{a.title}</strong>
            <p>{a.text}</p>
          </div>
          <span>+{a.xp} XP</span>
        </article>
      ))}
    </div>
  );
}

function MuscleMap({ selected, onSelect }: { selected: MuscleId; onSelect: (id: MuscleId) => void }) {
  const part = (id: MuscleId, cls: string, label: string) => (
    <button aria-label={label} className={`muscle-hotspot ${cls} ${selected === id ? 'active' : ''}`} onClick={() => onSelect(id)}>{label}</button>
  );

  return (
    <div className="body-card">
      <div className="body-title">מפת שרירים</div>
      <div className="body-wrap">
        <div className="human-body">
          <div className="head" />
          <div className="neck" />
          <div className="torso" />
          <div className="waist" />
          <div className="arm left" />
          <div className="arm right" />
          <div className="forearm left" />
          <div className="forearm right" />
          <div className="leg left" />
          <div className="leg right" />
          <div className="shin left" />
          <div className="shin right" />
          {part('chest', 'chest', 'חזה')}
          {part('core', 'core', 'בטן')}
          {part('shoulders', 'shoulders', 'כתפיים')}
          {part('biceps', 'biceps', 'יד קדמית')}
          {part('triceps', 'triceps', 'יד אחורית')}
          {part('back', 'back', 'גב')}
          {part('quads', 'quads', 'ירך קדמית')}
          {part('hamstrings', 'hamstrings', 'ירך אחורית')}
          {part('glutes', 'glutes', 'ישבן')}
          {part('calves', 'calves', 'תאומים')}
        </div>
      </div>
      <p className="hint">לחץ על אזור בגוף</p>
    </div>
  );
}
