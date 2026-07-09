import Link from 'next/link';
import { asset, exercises, getExercise, muscles } from '../../../data/content';

export function generateStaticParams(){
  return exercises.map(e => ({ id: e.id }));
}

export default async function ExerciseDetails({ params }: { params: Promise<{ id: string }> }){
  const { id } = await params;
  const exercise = getExercise(id) || exercises[0];
  const primary = muscles.find(m => m.id === exercise.muscle);
  const secondary = exercise.secondary.map(id => muscles.find(m => m.id === id)?.name).filter(Boolean).join(' • ');

  return <main className="exercise-detail-screen">
    <header className="detail-top">
      <Link href="/exercises" className="round-btn">‹</Link>
      <div><h1>{exercise.name}</h1><p>{primary?.name} {secondary ? `• ${secondary}` : ''}</p></div>
    </header>

    <section className="detail-hero-card">
      <div className="detail-video">
        <video
          controls
          playsInline
          preload="metadata"
          poster={asset(exercise.image)}
          src={asset(exercise.video || '')}
          aria-label={`סרטון הדגמה עבור ${exercise.name}`}
        />
        <span>{exercise.duration || '00:18'}</span>
      </div>
      <div className="detail-info">
        <div className="meta-line"><span>{exercise.difficulty}</span><span>{exercise.equipment}</span></div>
        <h2>{exercise.name}</h2>
        <p>{exercise.short}</p>
        <button className="primary-action">התחל תרגיל</button>
      </div>
    </section>

    <section className="detail-section">
      <h2>אופן ביצוע</h2>
      <ol>{exercise.instructions.map((item, i) => <li key={i}>{item}</li>)}</ol>
    </section>

    <section className="detail-section danger-section">
      <h2>טעויות נפוצות</h2>
      <ul>{exercise.mistakes.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </section>

    <section className="detail-section tips-section">
      <h2>טיפים</h2>
      <ul>{exercise.tips.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </section>
  </main>
}
