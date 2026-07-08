export type Side = 'front' | 'back';
export type MuscleId = 'chest' | 'shoulders' | 'triceps' | 'biceps' | 'abs' | 'quads' | 'calves' | 'back' | 'traps' | 'lats' | 'hamstrings' | 'glutes';
export type Difficulty = 'מתחיל' | 'בינוני' | 'מתקדם';

export type Muscle = {
  id: MuscleId;
  name: string;
  latin: string;
  side: Side;
  x: number;
  y: number;
  count: number;
  description: string;
};

export type Exercise = {
  id: string;
  name: string;
  muscle: MuscleId;
  secondary: MuscleId[];
  difficulty: Difficulty;
  image: string;
  video?: string;
  equipment: string;
  short: string;
  instructions: string[];
  mistakes: string[];
};

export const asset = (path: string) => path;

export const muscles: Muscle[] = [
  { id: 'chest', name: 'חזה', latin: 'Pectorals', side: 'front', x: 44, y: 34, count: 10, description: 'תרגילים לחיזוק החזה ודחיפה.' },
  { id: 'shoulders', name: 'כתפיים', latin: 'Deltoids', side: 'front', x: 39, y: 27, count: 8, description: 'תרגילים לכתפיים, יציבות ודחיפה מעל הראש.' },
  { id: 'triceps', name: 'יד אחורית', latin: 'Triceps', side: 'front', x: 65, y: 39, count: 8, description: 'תרגילים ליד אחורית ונעילת מרפקים.' },
  { id: 'biceps', name: 'יד קדמית', latin: 'Biceps', side: 'front', x: 31, y: 39, count: 7, description: 'תרגילים ליד קדמית ומשיכה.' },
  { id: 'abs', name: 'בטן', latin: 'Abdominals', side: 'front', x: 47, y: 47, count: 8, description: 'תרגילי ליבה, יציבות ושליטה בגוף.' },
  { id: 'quads', name: 'ירך קדמית', latin: 'Quadriceps', side: 'front', x: 42, y: 68, count: 8, description: 'תרגילים לרגליים, כוח ויציבות.' },
  { id: 'calves', name: 'תאומים', latin: 'Calves', side: 'front', x: 58, y: 86, count: 5, description: 'תרגילים לשוקיים, ניתור ויציבות קרסול.' },
  { id: 'back', name: 'גב', latin: 'Back', side: 'back', x: 50, y: 34, count: 12, description: 'תרגילי משיכה לגב רחב וחזק.' },
  { id: 'traps', name: 'טרפזים', latin: 'Trapezius', side: 'back', x: 50, y: 25, count: 6, description: 'חיזוק שכמות וצוואר.' },
  { id: 'lats', name: 'רחב גבי', latin: 'Lats', side: 'back', x: 40, y: 40, count: 8, description: 'תרגילים להרחבת הגב ושיפור כוח משיכה.' },
  { id: 'hamstrings', name: 'ירך אחורית', latin: 'Hamstrings', side: 'back', x: 42, y: 70, count: 6, description: 'שרירי ירך אחורית, יציבות ומניעת פציעות.' },
  { id: 'glutes', name: 'ישבן', latin: 'Glutes', side: 'back', x: 50, y: 57, count: 6, description: 'תרגילים לישבן, אגן וכוח תחתון.' }
];

const img = (id: string) => `/exercises/${id}.jpg`;

export const exercises: Exercise[] = [
  { id: 'push-up', name: 'שכיבות סמיכה', muscle: 'chest', secondary: ['triceps','shoulders'], difficulty: 'מתחיל', image: img('push-up'), equipment: 'ללא ציוד', short: 'תרגיל בסיסי לחיזוק החזה, היד האחורית והכתפיים.', instructions: ['מקם ידיים מעט רחב מרוחב הכתפיים.', 'שמור על גוף ישר מהראש עד העקבים.', 'רד בשליטה עד שהחזה קרוב לרצפה.', 'דחוף חזרה למעלה בלי לשקוע באגן.'], mistakes: ['אגן נמוך מדי', 'מרפקים פתוחים מדי', 'טווח תנועה חלקי'] },
  { id: 'incline-push-up', name: 'שכיבות סמיכה בשיפוע', muscle: 'chest', secondary: ['triceps','shoulders'], difficulty: 'מתחיל', image: img('incline-push-up'), equipment: 'ספסל / מדרגה', short: 'גרסה קלה יותר לשכיבות סמיכה.', instructions: ['הנח ידיים על משטח מוגבה.', 'שמור על קו גוף ישר.', 'רד בשליטה ודחוף חזרה.'], mistakes: ['כיפוף גב', 'חוסר שליטה בירידה'] },
  { id: 'diamond-push-up', name: 'שכיבות סמיכה יהלום', muscle: 'triceps', secondary: ['chest','shoulders'], difficulty: 'בינוני', image: img('diamond-push-up'), equipment: 'ללא ציוד', short: 'דגש חזק על היד האחורית.', instructions: ['קרב את כפות הידיים לצורת יהלום.', 'שמור מרפקים קרובים לגוף.', 'בצע ירידה מבוקרת.'], mistakes: ['עומס יתר על מפרקי הידיים', 'פתיחת מרפקים'] },
  { id: 'wide-push-up', name: 'שכיבות סמיכה רחבות', muscle: 'chest', secondary: ['shoulders'], difficulty: 'בינוני', image: img('wide-push-up'), equipment: 'ללא ציוד', short: 'וריאציה שמדגישה יותר את החזה.', instructions: ['מקם ידיים רחב מהכתפיים.', 'רד בשליטה.', 'דחוף דרך החזה.'], mistakes: ['טווח קצר', 'כתפיים מתוחות מדי'] },
  { id: 'dips', name: 'מקבילים', muscle: 'triceps', secondary: ['chest','shoulders'], difficulty: 'בינוני', image: img('dips'), equipment: 'מקבילים', short: 'תרגיל חזק לחזה וליד אחורית.', instructions: ['אחוז במקבילים.', 'רד עד כיפוף נוח במרפקים.', 'דחוף חזרה למעלה.'], mistakes: ['ירידה עמוקה מדי', 'כתפיים קורסות'] },
  { id: 'pike-push-up', name: 'פייק פוש אפ', muscle: 'shoulders', secondary: ['triceps'], difficulty: 'בינוני', image: img('pike-push-up'), equipment: 'ללא ציוד', short: 'תרגיל כתפיים כהכנה לעמידת ידיים.', instructions: ['הרם אגן למעלה.', 'העבר משקל לכתפיים.', 'רד עם הראש לכיוון הרצפה.'], mistakes: ['גב עגול', 'מרפקים פתוחים'] },
  { id: 'pseudo-planche', name: 'פסאודו פלאנץ׳', muscle: 'chest', secondary: ['shoulders','triceps','abs'], difficulty: 'מתקדם', image: img('pseudo-planche'), equipment: 'ללא ציוד', short: 'תרגיל דחיפה מתקדם להכנה לפלאנץ׳.', instructions: ['העבר כתפיים קדימה מעל הידיים.', 'שמור גוף ישר.', 'בצע ירידה קצרה ומבוקרת.'], mistakes: ['העברת משקל לא מספיקה', 'שקיעת אגן'] },
  { id: 'archer-push-up', name: 'שכיבות סמיכה קשת', muscle: 'chest', secondary: ['triceps','shoulders'], difficulty: 'מתקדם', image: img('archer-push-up'), equipment: 'ללא ציוד', short: 'שלב מתקדם בדרך לשכיבת סמיכה ביד אחת.', instructions: ['פתח ידיים רחב.', 'העבר משקל לצד אחד.', 'שמור יד שנייה כמעט ישרה.'], mistakes: ['תנועה מהירה מדי', 'קריסת כתף'] },
  { id: 'pull-up', name: 'מתח', muscle: 'back', secondary: ['biceps','lats'], difficulty: 'בינוני', image: img('pull-up'), equipment: 'מוט מתח', short: 'תרגיל בסיסי לגב וליד קדמית.', instructions: ['אחוז במוט מעט רחב מהכתפיים.', 'משוך חזה לכיוון המוט.', 'רד בשליטה לתלייה מלאה.'], mistakes: ['שימוש בתנופה', 'חצי טווח תנועה'] },
  { id: 'australian-pull-up', name: 'חתירה אוסטרלית', muscle: 'back', secondary: ['biceps','lats'], difficulty: 'מתחיל', image: img('australian-pull-up'), equipment: 'מוט נמוך', short: 'תרגיל משיכה מצוין למתחילים.', instructions: ['שכב מתחת למוט נמוך.', 'משוך חזה למוט.', 'שמור גוף ישר.'], mistakes: ['אגן נמוך', 'משיכה קצרה'] },
  { id: 'chin-up', name: 'מתח בסופינציה', muscle: 'biceps', secondary: ['back','lats'], difficulty: 'בינוני', image: img('chin-up'), equipment: 'מוט מתח', short: 'מתח עם דגש על יד קדמית.', instructions: ['אחוז כשהכפות פונות אליך.', 'משוך את הגוף למעלה.', 'רד בשליטה.'], mistakes: ['תנופה', 'כתפיים מכווצות'] },
  { id: 'bodyweight-row', name: 'חתירה במשקל גוף', muscle: 'back', secondary: ['biceps'], difficulty: 'מתחיל', image: img('bodyweight-row'), equipment: 'מוט נמוך / טבעות', short: 'חיזוק גב ושכמות.', instructions: ['החזק גוף ישר.', 'משוך חזה לידיים.', 'כווץ שכמות בסוף התנועה.'], mistakes: ['משיכה עם צוואר', 'אגן צונח'] },
  { id: 'negative-pull-up', name: 'מתח שלילי', muscle: 'back', secondary: ['biceps','lats'], difficulty: 'מתחיל', image: img('negative-pull-up'), equipment: 'מוט מתח', short: 'דרך יעילה לבנות כוח למתח ראשון.', instructions: ['קפוץ או עלה למצב עליון.', 'רד לאט במשך 3–5 שניות.', 'חזור למעלה בעזרת קפיצה.'], mistakes: ['ירידה מהירה מדי', 'חוסר שליטה'] },
  { id: 'dead-hang', name: 'תלייה פסיבית', muscle: 'back', secondary: ['traps'], difficulty: 'מתחיל', image: img('dead-hang'), equipment: 'מוט מתח', short: 'שיפור אחיזה, כתפיים והכנה למתח.', instructions: ['אחוז במוט.', 'תלה את הגוף בצורה רגועה.', 'שמור כתפיים פעילות קלות.'], mistakes: ['כאב כתפיים', 'אחיזה חלשה מדי'] },
  { id: 'plank', name: 'פלאנק', muscle: 'abs', secondary: ['shoulders'], difficulty: 'מתחיל', image: img('plank'), equipment: 'ללא ציוד', short: 'תרגיל בסיסי לליבה.', instructions: ['מרפקים מתחת לכתפיים.', 'כווץ בטן וישבן.', 'שמור גוף ישר.'], mistakes: ['אגן גבוה מדי', 'אגן נמוך מדי'] },
  { id: 'hollow-hold', name: 'הולו הולד', muscle: 'abs', secondary: [], difficulty: 'בינוני', image: img('hollow-hold'), equipment: 'ללא ציוד', short: 'תרגיל שליטה לגוף חלול.', instructions: ['שכב על הגב.', 'הרם שכמות ורגליים.', 'הצמד גב תחתון לרצפה.'], mistakes: ['גב תחתון מתנתק', 'עצירת נשימה'] },
  { id: 'leg-raises', name: 'הרמות רגליים', muscle: 'abs', secondary: [], difficulty: 'בינוני', image: img('leg-raises'), equipment: 'ללא ציוד', short: 'חיזוק בטן תחתונה ושליטה באגן.', instructions: ['שכב על הגב.', 'הרם רגליים בשליטה.', 'הורד בלי להקשית גב.'], mistakes: ['תנופה', 'כאב גב תחתון'] },
  { id: 'squat', name: 'סקוואט', muscle: 'quads', secondary: ['glutes','hamstrings'], difficulty: 'מתחיל', image: img('squat'), equipment: 'ללא ציוד', short: 'תרגיל בסיסי לרגליים.', instructions: ['עמוד ברוחב כתפיים.', 'שלח אגן לאחור.', 'רד ושמור ברכיים בכיוון האצבעות.'], mistakes: ['ברכיים קורסות פנימה', 'עקבים מתרוממים'] },
  { id: 'lunge', name: 'לאנג׳', muscle: 'quads', secondary: ['glutes','hamstrings'], difficulty: 'מתחיל', image: img('lunge'), equipment: 'ללא ציוד', short: 'תרגיל חד־צדדי לרגליים.', instructions: ['צעד קדימה.', 'רד עד כיפוף נוח.', 'חזור דרך הרגל הקדמית.'], mistakes: ['צעד קצר מדי', 'ברך קורסת פנימה'] },
  { id: 'calf-raise', name: 'עליות תאומים', muscle: 'calves', secondary: [], difficulty: 'מתחיל', image: img('calf-raise'), equipment: 'ללא ציוד', short: 'חיזוק תאומים וקרסול.', instructions: ['עמוד ישר.', 'עלה לקצות האצבעות.', 'רד בשליטה.'], mistakes: ['תנועה מהירה', 'טווח קצר'] },
  { id: 'glute-bridge', name: 'גשר ישבן', muscle: 'glutes', secondary: ['hamstrings'], difficulty: 'מתחיל', image: img('glute-bridge'), equipment: 'ללא ציוד', short: 'הפעלת ישבן ושרשרת אחורית.', instructions: ['שכב על הגב.', 'כופף ברכיים.', 'הרם אגן וכווץ ישבן.'], mistakes: ['הקשת גב', 'דחיפה מהגב במקום מהישבן'] },
  { id: 'superman', name: 'סופרמן', muscle: 'back', secondary: ['glutes'], difficulty: 'מתחיל', image: img('superman'), equipment: 'ללא ציוד', short: 'חיזוק גב תחתון ושרירי יציבה.', instructions: ['שכב על הבטן.', 'הרם ידיים ורגליים.', 'החזק קצר וחזור.'], mistakes: ['הרמה גבוהה מדי', 'לחץ בצוואר'] },
  { id: 'face-pull', name: 'משיכת פנים', muscle: 'traps', secondary: ['back','shoulders'], difficulty: 'בינוני', image: img('face-pull'), equipment: 'גומייה / טבעות', short: 'חיזוק שכמות וכתף אחורית.', instructions: ['אחוז בגומייה.', 'משוך לכיוון הפנים.', 'כווץ שכמות.'], mistakes: ['מרפקים נמוכים מדי', 'משיכה עם גב תחתון'] },
  { id: 'handstand-hold', name: 'החזקת עמידת ידיים', muscle: 'shoulders', secondary: ['abs','triceps'], difficulty: 'מתקדם', image: img('handstand-hold'), equipment: 'קיר', short: 'תרגיל שליטה וכתפיים.', instructions: ['היכנס לעמידת ידיים מול קיר.', 'דחוף את הרצפה.', 'שמור גוף ארוך ומתוח.'], mistakes: ['גב מקושת', 'כתפיים רפויות'] }
];

export const exercisesByMuscle = (muscle: MuscleId) =>
  exercises.filter(e => e.muscle === muscle || e.secondary.includes(muscle));

export const getExercise = (id: string) => exercises.find(e => e.id === id);
