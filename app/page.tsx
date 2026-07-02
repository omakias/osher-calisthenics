'use client';

import Link from 'next/link';
import { exercisesForMuscle, muscleGroups } from '@/data/content';
import { useMemo, useState } from 'react';

const quickGoals = ['כוח', 'חיטוב', 'מוביליטי', 'Skill'];

export default function Home(){
  const [selectedMuscle, setSelectedMuscle] = useState('חזה');
  const selected = muscleGroups.find((group) => group.id === selectedMuscle) ?? muscleGroups[0];
  const visibleExercises = useMemo(() => exercisesForMuscle(selectedMuscle).slice(0, 6), [selectedMuscle]);

  return <>
    <div className="top app-header">
      <div className="brand">
        <div className="logo">OC</div>
        <div><b>Osher Calisthenics</b><div className="tag">Own Your Strength</div></div>
      </div>
      <div className="header-stats"><span>🔥 12</span><span>🏆 4</span></div>
    </div>

    <section className="muscle-hero">
      <div className="hero-copy">
        <span className="pill">חדש במסך הבית</span>
        <h1>בחר אזור<br/>וסנן תרגילים</h1>
        <p className="muted">לחץ על שריר בגוף כדי לראות מיד את התרגילים הרלוונטיים.</p>
      </div>

      <div className="body-and-results">
        <div className="anatomy-card" aria-label="מפת שרירים אינטראקטיבית">
          <div className="human-body">
            <button aria-label="כתפיים" onClick={() => setSelectedMuscle('כתפיים')} className={`muscle-dot shoulders ${selectedMuscle === 'כתפיים' ? 'active' : ''}`}>כתפיים</button>
            <button aria-label="חזה" onClick={() => setSelectedMuscle('חזה')} className={`muscle-dot chest ${selectedMuscle === 'חזה' ? 'active' : ''}`}>חזה</button>
            <button aria-label="בטן" onClick={() => setSelectedMuscle('בטן')} className={`muscle-dot abs ${selectedMuscle === 'בטן' ? 'active' : ''}`}>בטן</button>
            <button aria-label="יד קדמית" onClick={() => setSelectedMuscle('יד קדמית')} className={`muscle-dot biceps ${selectedMuscle === 'יד קדמית' ? 'active' : ''}`}>יד קדמית</button>
            <button aria-label="יד אחורית" onClick={() => setSelectedMuscle('יד אחורית')} className={`muscle-dot triceps ${selectedMuscle === 'יד אחורית' ? 'active' : ''}`}>יד אחורית</button>
            <button aria-label="רגליים" onClick={() => setSelectedMuscle('רגליים')} className={`muscle-dot legs ${selectedMuscle === 'רגליים' ? 'active' : ''}`}>רגליים</button>
            <button aria-label="ישבן" onClick={() => setSelectedMuscle('ישבן')} className={`muscle-dot glutes ${selectedMuscle === 'ישבן' ? 'active' : ''}`}>ישבן</button>

            <div className={`body-part head`}/>
            <div className={`body-part neck`}/>
            <div className={`body-part torso ${['חזה','בטן','גב'].includes(selectedMuscle) ? 'selected' : ''}`}/>
            <div className={`body-part chest-shape ${selectedMuscle === 'חזה' ? 'selected' : ''}`}/>
            <div className={`body-part abs-shape ${selectedMuscle === 'בטן' ? 'selected' : ''}`}/>
            <div className={`body-part arm left ${['יד קדמית','יד אחורית'].includes(selectedMuscle) ? 'selected' : ''}`}/>
            <div className={`body-part arm right ${['יד קדמית','יד אחורית'].includes(selectedMuscle) ? 'selected' : ''}`}/>
            <div className={`body-part shoulder left ${selectedMuscle === 'כתפיים' ? 'selected' : ''}`}/>
            <div className={`body-part shoulder right ${selectedMuscle === 'כתפיים' ? 'selected' : ''}`}/>
            <div className={`body-part hip ${selectedMuscle === 'ישבן' ? 'selected' : ''}`}/>
            <div className={`body-part leg left ${selectedMuscle === 'רגליים' ? 'selected' : ''}`}/>
            <div className={`body-part leg right ${selectedMuscle === 'רגליים' ? 'selected' : ''}`}/>
          </div>
        </div>

        <div className="selected-panel">
          <span className="pill">אזור נבחר</span>
          <h2>{selected.label}</h2>
          <p className="muted">{selected.description}</p>
          <div className="mini-tabs">
            {muscleGroups.slice(0, 5).map((group) => <button key={group.id} onClick={() => setSelectedMuscle(group.id)} className={selectedMuscle === group.id ? 'active' : ''}>{group.label}</button>)}
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="section-title"><h2>תרגילים ל{selected.label}</h2><Link className="pill" href="/exercises">כל הספרייה</Link></div>
      <div className="list compact-list">{visibleExercises.map((exercise)=><Link className="exercise rich-exercise" href={`/exercises/${exercise.id}`} key={exercise.id}>
        <div className="exercise-image"><span>{exercise.category === 'חזה' ? '↗' : exercise.category === 'גב' ? '↙' : exercise.category === 'בטן' ? '◆' : exercise.category === 'רגליים' ? '▥' : '●'}</span></div>
        <div style={{flex:1}}><b>{exercise.name}</b><p className="muted">{exercise.en} · {exercise.level}</p><div className="difficulty"><i/><i/><i className={exercise.level === 'מתחיל' ? 'off' : ''}/><i className={exercise.level !== 'מתקדם' ? 'off' : ''}/></div></div>
        <span className="arrow">›</span>
      </Link>)}</div>
    </section>

    <section className="section quick-goals">
      <h2>בחר לפי מטרה</h2>
      <div className="goal-grid">{quickGoals.map((goal) => <button key={goal} className="goal-card">{goal}</button>)}</div>
    </section>
  </>;
}
