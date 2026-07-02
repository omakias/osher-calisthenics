export type MuscleId = 'chest' | 'back' | 'shoulders' | 'biceps' | 'triceps' | 'core' | 'quads' | 'hamstrings' | 'glutes' | 'calves';

export const muscles: Record<MuscleId, { name: string; short: string; color: string }> = {
  chest: { name: 'חזה', short: 'Chest', color: '#39ff88' },
  back: { name: 'גב', short: 'Back', color: '#39ff88' },
  shoulders: { name: 'כתפיים', short: 'Shoulders', color: '#39ff88' },
  biceps: { name: 'יד קדמית', short: 'Biceps', color: '#39ff88' },
  triceps: { name: 'יד אחורית', short: 'Triceps', color: '#39ff88' },
  core: { name: 'בטן וליבה', short: 'Core', color: '#39ff88' },
  quads: { name: 'ירך קדמית', short: 'Quads', color: '#39ff88' },
  hamstrings: { name: 'ירך אחורית', short: 'Hamstrings', color: '#39ff88' },
  glutes: { name: 'ישבן', short: 'Glutes', color: '#39ff88' },
  calves: { name: 'תאומים', short: 'Calves', color: '#39ff88' }
};

export const exercises = [
  { id: 'push-up', name: 'שכיבות סמיכה', muscle: 'chest', level: 'מתחיל', reps: '3×8–15', desc: 'בסיס לחיזוק חזה, כתפיים ויד אחורית.' },
  { id: 'diamond-push-up', name: 'שכיבות סמיכה יהלום', muscle: 'triceps', level: 'בינוני', reps: '3×6–12', desc: 'דגש חזק על יד אחורית וחזה פנימי.' },
  { id: 'dips', name: 'מקבילים', muscle: 'chest', level: 'בינוני', reps: '4×5–10', desc: 'תרגיל עוצמתי לחזה ויד אחורית.' },
  { id: 'pull-up', name: 'מתח', muscle: 'back', level: 'בינוני', reps: '4×3–8', desc: 'תרגיל בסיס לפיתוח גב וכוח משיכה.' },
  { id: 'australian-pull-up', name: 'חתירה אוסטרלית', muscle: 'back', level: 'מתחיל', reps: '3×8–12', desc: 'הכנה מצוינת למתח מלא.' },
  { id: 'pike-push-up', name: 'Pike Push Up', muscle: 'shoulders', level: 'בינוני', reps: '3×6–10', desc: 'חיזוק כתפיים בדרך לעמידת ידיים.' },
  { id: 'chin-up', name: 'Chin Up', muscle: 'biceps', level: 'בינוני', reps: '3×4–8', desc: 'מתח באחיזה הפוכה עם דגש על יד קדמית.' },
  { id: 'plank', name: 'פלאנק', muscle: 'core', level: 'מתחיל', reps: '3×30–60 שניות', desc: 'בסיס לליבה חזקה ויציבה.' },
  { id: 'hollow-hold', name: 'Hollow Hold', muscle: 'core', level: 'בינוני', reps: '4×20–40 שניות', desc: 'שליטה גופנית חשובה ל־Planche ו־Lever.' },
  { id: 'squat', name: 'סקוואט', muscle: 'quads', level: 'מתחיל', reps: '4×12–20', desc: 'בסיס לחיזוק הרגליים.' },
  { id: 'bulgarian-squat', name: 'סקוואט בולגרי', muscle: 'glutes', level: 'בינוני', reps: '3×8 לכל רגל', desc: 'עבודה חד־צדדית לרגליים וישבן.' },
  { id: 'nordic-curl', name: 'Nordic Curl', muscle: 'hamstrings', level: 'מתקדם', reps: '3×3–6', desc: 'תרגיל חזק לירך אחורית.' },
  { id: 'calf-raise', name: 'הרמות תאומים', muscle: 'calves', level: 'מתחיל', reps: '4×15–25', desc: 'חיזוק תאומים ושיפור יציבות קרסול.' },
  { id: 'muscle-up', name: 'Muscle Up', muscle: 'back', level: 'מתקדם', reps: 'Skill', desc: 'יעד מרכזי המשלב משיכה, מעבר ודחיפה.' },
  { id: 'planche-lean', name: 'Planche Lean', muscle: 'shoulders', level: 'בינוני', reps: '4×15–30 שניות', desc: 'שלב ראשון בדרך ל־Planche.' }
] as const;

export const roadmaps = {
  muscleUp: ['Dead Hang', 'Scapula Pull Up', 'Negative Pull Up', 'Pull Up', 'Chest To Bar', 'Explosive Pull Up', 'Muscle Up'],
  planche: ['Plank', 'Pseudo Planche Lean', 'Tuck Planche', 'Advanced Tuck', 'Straddle Planche', 'Full Planche']
};

export const programs = [
  { name: 'התחלה מאפס', time: '30 יום', level: 'מתחיל', focus: 'יסודות, טכניקה והרגל אימון' },
  { name: 'מסלול Muscle Up', time: '8 שבועות', level: 'בינוני', focus: 'גב, משיכה מתפרצת ומעבר מעל המוט' },
  { name: 'מסלול Planche', time: '12 שבועות', level: 'מתקדם', focus: 'כתפיים, ליבה ו־Straight Arm Strength' }
];

export const achievements = [
  { title: 'אימון ראשון', xp: 50, text: 'סיימת אימון ראשון באפליקציה' },
  { title: '10 מתח', xp: 150, text: 'הגעת ל־10 חזרות מתח נקיות' },
  { title: 'Muscle Up ראשון', xp: 500, text: 'פתחת את אחד הסקילים החשובים בקליסטניקס' },
  { title: '7 ימים רצוף', xp: 200, text: 'שמירה על רצף אימונים שבועי' }
];
