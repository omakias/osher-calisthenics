import Link from 'next/link';
import { asset, exercises, getExercise, muscles } from '../../../data/content';

export function generateStaticParams() {
  return exercises.map(e => ({ id: e.id }));
}

export default async function ExerciseDetails({ params }) {
  const { id } = await params;
  const ex = getExercise(id) || exercises[0];
  const primary = muscles.find(m => m.id === ex.muscle);
  const secondary = ex.secondary.map(id => muscles.find(m => m.id === id)?.name).filter(Boolean).join(' • ');

  return (
    <main className="detail-page sprint2-detail">
      <header className="page-head detail-head">
        <Link href={`/exercises?muscle=${ex.muscle}`} className="back">‹</Link>
        <div>
          <h1>{ex.name}</h1>
          <p>{primary?.name || ''}{secondary ? ` • ${secondary}` : ''}</p>
        </div>
      </header>

      <section className="detail-media-card">
        <img src={asset(ex.image)} alt={ex.name} />
        <div className="media-overlay">
          <span>{ex.difficulty}</span>
          <span>{ex.equipment}</span>
        </div>
        <button className="video-placeholder" type="button">▶ וידאו יתווסף בהמשך</button>
      </section>

      <section className="content-card intro-card">
        <h2>על התרגיל</h2>
        <p>{ex.short}</p>
      </section>

      <section className="content-card muscle-card">
        <h2>שרירים עובדים</h2>
        <div className="muscle-tags">
          {primary && <span style={{ '--tag': primary.color }}>{primary.name}</span>}
          {ex.secondary.map(id => {
            const m = muscles.find(item => item.id === id);
            return m ? <span key={id} style={{ '--tag': m.color }}>{m.name}</span> : null;
          })}
        </div>
      </section>

      <section className="content-card steps-card">
        <h2>אופן ביצוע</h2>
        <ol>
          {ex.instructions.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
      </section>

      <section className="content-card danger mistakes-card">
        <h2>טעויות נפוצות</h2>
        <ul>
          {ex.mistakes.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </section>

      <Link href="/exercises" className="primary-btn sticky">חזרה לספריית התרגילים</Link>
    </main>
  );
}
