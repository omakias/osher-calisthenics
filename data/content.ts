export type Side = 'front' | 'back';
export type MuscleId = 'chest' | 'shoulders' | 'triceps' | 'biceps' | 'abs' | 'quads' | 'calves' | 'back' | 'lats' | 'hamstrings' | 'glutes';
export type Difficulty = 'מתחיל' | 'בינוני' | 'מתקדם';
export type Equipment = 'ללא ציוד' | 'מוט מתח' | 'מקבילים' | 'טבעות' | 'קיר' | 'ספסל / מדרגה' | 'גומייה';

export type Muscle = {
  id: MuscleId;
  name: string;
  latin: string;
  side: Side;
  x: number;
  y: number;
  count: number;
  icon: string;
  description: string;
};

export type Exercise = {
  id: string;
  name: string;
  muscle: MuscleId;
  secondary: MuscleId[];
  difficulty: Difficulty;
  equipment: Equipment;
  image: string;
  video?: string;
  duration?: string;
  short: string;
  instructions: string[];
  mistakes: string[];
  tips: string[];
};

export const asset = (path: string) => path;

export const muscles: Muscle[] = [
  { id: 'chest', name: 'חזה', latin: 'Pectorals', side: 'front', x: 48, y: 35, count: 12, icon: '▰', description: 'תרגילי דחיפה לחזה, יד אחורית וכתפיים.' },
  { id: 'shoulders', name: 'כתפיים', latin: 'Deltoids', side: 'front', x: 39, y: 29, count: 10, icon: '◒', description: 'חיזוק כתפיים, יציבות ודחיפה מעל הראש.' },
  { id: 'triceps', name: 'יד אחורית', latin: 'Triceps', side: 'front', x: 66, y: 42, count: 8, icon: '◔', description: 'תרגילים לנעילת מרפקים ודחיפה חזקה.' },
  { id: 'biceps', name: 'יד קדמית', latin: 'Biceps', side: 'front', x: 31, y: 42, count: 8, icon: '◕', description: 'תרגילי משיכה וכוח ביד קדמית.' },
  { id: 'abs', name: 'בטן', latin: 'Abdominals', side: 'front', x: 48, y: 49, count: 10, icon: '▦', description: 'ליבה, יציבות ושליטה בגוף.' },
  { id: 'quads', name: 'ירך קדמית', latin: 'Quadriceps', side: 'front', x: 43, y: 72, count: 8, icon: '▥', description: 'כוח רגליים, יציבות וניתור.' },
  { id: 'calves', name: 'תאומים', latin: 'Calves', side: 'front', x: 59, y: 88, count: 6, icon: '▯', description: 'חיזוק שוקיים וקרסוליים.' },
  { id: 'back', name: 'גב', latin: 'Back', side: 'back', x: 50, y: 36, count: 12, icon: '▱', description: 'תרגילי משיכה לגב רחב וחזק.' },
  { id: 'lats', name: 'רחב גבי', latin: 'Lats', side: 'back', x: 39, y: 43, count: 8, icon: '◇', description: 'הרחבת הגב ושיפור כוח משיכה.' },
  { id: 'hamstrings', name: 'ירך אחורית', latin: 'Hamstrings', side: 'back', x: 43, y: 72, count: 6, icon: '▽', description: 'שרשרת אחורית, יציבות ומניעת פציעות.' },
  { id: 'glutes', name: 'ישבן', latin: 'Glutes', side: 'back', x: 50, y: 58, count: 6, icon: '◡', description: 'כוח אגן, ישבן ורגליים.' }
];

const img = (id: string) => `/exercises/${id}.jpg`;
const vid = (id: string) => `/videos/${id}.mp4`;

export const exercises: Exercise[] = [
  { id:'push-up', name:'שכיבות סמיכה', muscle:'chest', secondary:['triceps','shoulders'], difficulty:'מתחיל', equipment:'ללא ציוד', image:img('push-up'), video:vid('push-up'), duration:'00:18', short:'תרגיל בסיסי לחיזוק החזה, היד האחורית והכתפיים.', instructions:['מקם ידיים מעט רחב מרוחב הכתפיים.','שמור על גוף ישר מהראש עד העקבים.','רד בשליטה עד שהחזה קרוב לרצפה.','דחוף חזרה למעלה בלי לשקוע באגן.'], mistakes:['אגן נמוך מדי','מרפקים פתוחים מדי','טווח תנועה חלקי'], tips:['כווץ בטן וישבן לאורך כל התנועה.','שמור כתפיים רחוקות מהאוזניים.'] },
  { id:'incline-push-up', name:'שכיבות סמיכה בשיפוע', muscle:'chest', secondary:['triceps','shoulders'], difficulty:'מתחיל', equipment:'ספסל / מדרגה', image:img('incline-push-up'), video:vid('incline-push-up'), duration:'00:16', short:'גרסה קלה יותר לשכיבות סמיכה, מושלמת למתחילים.', instructions:['הנח ידיים על משטח מוגבה.','שמור על קו גוף ישר.','רד בשליטה עד שהחזה קרוב למשטח.','דחוף חזרה למעלה.'], mistakes:['כיפוף גב','חוסר שליטה בירידה','ידיים רחוקות מדי'], tips:['ככל שהמשטח גבוה יותר התרגיל קל יותר.'] },
  { id:'decline-push-up', name:'שכיבות סמיכה בירידה', muscle:'chest', secondary:['shoulders','triceps'], difficulty:'בינוני', equipment:'ספסל / מדרגה', image:img('decline-push-up'), video:vid('decline-push-up'), duration:'00:18', short:'וריאציה שמעמיסה יותר על החזה העליון והכתפיים.', instructions:['הנח רגליים על משטח מוגבה.','מקם ידיים מעט רחב מהכתפיים.','רד בשליטה.','דחוף חזרה בקו ישר.'], mistakes:['שקיעת אגן','נעילת מרפקים חזקה מדי'], tips:['שמור מבט מעט קדימה ולא בין הידיים.'] },
  { id:'diamond-push-up', name:'שכיבות סמיכה יהלום', muscle:'triceps', secondary:['chest','shoulders'], difficulty:'בינוני', equipment:'ללא ציוד', image:img('diamond-push-up'), video:vid('diamond-push-up'), duration:'00:15', short:'דגש חזק על היד האחורית ונעילת מרפקים.', instructions:['קרב כפות ידיים לצורת יהלום.','שמור מרפקים קרובים לגוף.','רד בשליטה.','דחוף חזק דרך כפות הידיים.'], mistakes:['עומס על מפרקי הידיים','פתיחת מרפקים','טווח קצר'], tips:['אם יש כאב במפרק, הרחב מעט את הידיים.'] },
  { id:'wide-push-up', name:'שכיבות סמיכה רחבות', muscle:'chest', secondary:['shoulders'], difficulty:'בינוני', equipment:'ללא ציוד', image:img('wide-push-up'), video:vid('wide-push-up'), duration:'00:15', short:'וריאציה שמדגישה יותר את החזה.', instructions:['מקם ידיים רחב מהכתפיים.','שמור גוף ישר.','רד בשליטה.','דחוף דרך החזה.'], mistakes:['ידיים רחבות מדי','כתפיים מתוחות מדי'], tips:['מצא רוחב שמאפשר שליטה מלאה.'] },
  { id:'dips', name:'מקבילים', muscle:'triceps', secondary:['chest','shoulders'], difficulty:'בינוני', equipment:'מקבילים', image:img('dips'), video:vid('dips'), duration:'00:18', short:'תרגיל חזק לחזה, כתפיים ויד אחורית.', instructions:['אחוז במקבילים ויישר ידיים.','רד עד כיפוף נוח במרפקים.','שמור חזה פתוח.','דחוף חזרה למעלה.'], mistakes:['ירידה עמוקה מדי','כתפיים קורסות','תנופה'], tips:['נטייה קלה קדימה תדגיש יותר חזה.'] },
  { id:'pike-push-up', name:'פייק פוש אפ', muscle:'shoulders', secondary:['triceps'], difficulty:'בינוני', equipment:'ללא ציוד', image:img('pike-push-up'), video:vid('pike-push-up'), duration:'00:16', short:'תרגיל כתפיים כהכנה לעמידת ידיים.', instructions:['הרם אגן למעלה.','העבר משקל לכתפיים.','רד עם הראש לכיוון הרצפה.','דחוף חזרה למעלה.'], mistakes:['גב עגול','מרפקים פתוחים','טווח קצר'], tips:['שמור עקבים גבוהים אם הגמישות מוגבלת.'] },
  { id:'pseudo-planche', name:'פסאודו פלאנץ׳', muscle:'chest', secondary:['shoulders','triceps','abs'], difficulty:'מתקדם', equipment:'ללא ציוד', image:img('pseudo-planche'), video:vid('pseudo-planche'), duration:'00:18', short:'דחיפה מתקדמת להכנה לפלאנץ׳.', instructions:['סובב מעט את כפות הידיים החוצה.','העבר כתפיים קדימה מעל הידיים.','שמור גוף ישר.','בצע ירידה קצרה ומבוקרת.'], mistakes:['העברת משקל לא מספיקה','שקיעת אגן'], tips:['התקדם לאט כדי לשמור על מפרקי כף היד.'] },
  { id:'archer-push-up', name:'שכיבות סמיכה קשת', muscle:'chest', secondary:['triceps','shoulders'], difficulty:'מתקדם', equipment:'ללא ציוד', image:img('archer-push-up'), video:vid('archer-push-up'), duration:'00:18', short:'שלב מתקדם בדרך לשכיבה ביד אחת.', instructions:['פתח ידיים רחב.','העבר משקל לצד אחד.','שמור יד שנייה כמעט ישרה.','חזור למרכז והחלף צד.'], mistakes:['תנועה מהירה מדי','קריסת כתף','אגן מסתובב'], tips:['התחל בטווח קטן והגדל בהדרגה.'] },
  { id:'pull-up', name:'מתח', muscle:'back', secondary:['biceps','lats'], difficulty:'בינוני', equipment:'מוט מתח', image:img('pull-up'), video:vid('pull-up'), duration:'00:18', short:'תרגיל בסיסי לגב וליד קדמית.', instructions:['אחוז במוט מעט רחב מהכתפיים.','התחל מתלייה מלאה.','משוך חזה לכיוון המוט.','רד בשליטה לתלייה מלאה.'], mistakes:['שימוש בתנופה','חצי טווח תנועה','כתפיים מכווצות'], tips:['התחל את התנועה מהשכמות ולא מהידיים בלבד.'] },
  { id:'australian-pull-up', name:'חתירה אוסטרלית', muscle:'back', secondary:['biceps','lats'], difficulty:'מתחיל', equipment:'מוט מתח', image:img('australian-pull-up'), video:vid('australian-pull-up'), duration:'00:16', short:'תרגיל משיכה מצוין למתחילים.', instructions:['שכב מתחת למוט נמוך.','שמור גוף ישר.','משוך חזה למוט.','רד בשליטה.'], mistakes:['אגן נמוך','משיכה קצרה','צוואר מתוח'], tips:['ככל שהגוף אופקי יותר התרגיל קשה יותר.'] },
  { id:'chin-up', name:'מתח בסופינציה', muscle:'biceps', secondary:['back','lats'], difficulty:'בינוני', equipment:'מוט מתח', image:img('chin-up'), video:vid('chin-up'), duration:'00:18', short:'מתח עם דגש חזק יותר על יד קדמית.', instructions:['אחוז כשהכפות פונות אליך.','משוך את הגוף למעלה.','קרב חזה למוט.','רד בשליטה.'], mistakes:['תנופה','כתפיים מכווצות'], tips:['שמור מרפקים בכיוון הגוף.'] },
  { id:'negative-pull-up', name:'מתח שלילי', muscle:'back', secondary:['biceps','lats'], difficulty:'מתחיל', equipment:'מוט מתח', image:img('negative-pull-up'), video:vid('negative-pull-up'), duration:'00:16', short:'דרך יעילה לבנות כוח למתח ראשון.', instructions:['עלה למצב עליון בעזרת קפיצה או שרפרף.','החזק רגע למעלה.','רד לאט במשך 3–5 שניות.','חזור שוב.'], mistakes:['ירידה מהירה מדי','חוסר שליטה'], tips:['איכות הירידה חשובה יותר מכמות החזרות.'] },
  { id:'dead-hang', name:'תלייה פסיבית', muscle:'back', secondary:['lats'], difficulty:'מתחיל', equipment:'מוט מתח', image:img('dead-hang'), video:vid('dead-hang'), duration:'00:14', short:'שיפור אחיזה, כתפיים והכנה למתח.', instructions:['אחוז במוט.','תלה את הגוף בצורה רגועה.','שמור בטן אסופה קלות.','נשום בצורה רגועה.'], mistakes:['כאב כתפיים','אחיזה חלשה מדי'], tips:['התחל בסטים קצרים של 10–20 שניות.'] },
  { id:'plank', name:'פלאנק', muscle:'abs', secondary:['shoulders'], difficulty:'מתחיל', equipment:'ללא ציוד', image:img('plank'), video:vid('plank'), duration:'00:20', short:'תרגיל בסיסי לליבה ויציבות.', instructions:['מרפקים מתחת לכתפיים.','כווץ בטן וישבן.','שמור גוף ישר.','נשום רגוע.'], mistakes:['אגן גבוה מדי','אגן נמוך מדי','עצירת נשימה'], tips:['החזק פחות זמן אבל עם טכניקה טובה.'] },
  { id:'hollow-hold', name:'הולו הולד', muscle:'abs', secondary:[], difficulty:'בינוני', equipment:'ללא ציוד', image:img('hollow-hold'), video:vid('hollow-hold'), duration:'00:18', short:'תרגיל שליטה לגוף חלול.', instructions:['שכב על הגב.','הרם שכמות ורגליים.','הצמד גב תחתון לרצפה.','החזק בשליטה.'], mistakes:['גב תחתון מתנתק','עצירת נשימה'], tips:['כופף ברכיים אם קשה לשמור גב צמוד.'] },
  { id:'leg-raises', name:'הרמות רגליים', muscle:'abs', secondary:[], difficulty:'בינוני', equipment:'ללא ציוד', image:img('leg-raises'), video:vid('leg-raises'), duration:'00:18', short:'חיזוק בטן תחתונה ושליטה באגן.', instructions:['שכב על הגב.','הרם רגליים בשליטה.','הורד בלי להקשית גב.','חזור בקצב איטי.'], mistakes:['תנופה','כאב גב תחתון'], tips:['התחל בכיפוף ברכיים אם קשה.'] },
  { id:'squat', name:'סקוואט', muscle:'quads', secondary:['glutes','hamstrings'], difficulty:'מתחיל', equipment:'ללא ציוד', image:img('squat'), video:vid('squat'), duration:'00:16', short:'תרגיל בסיסי לרגליים.', instructions:['עמוד ברוחב כתפיים.','שלח אגן לאחור.','רד ושמור ברכיים בכיוון האצבעות.','עלה דרך דחיפה מהרצפה.'], mistakes:['ברכיים קורסות פנימה','עקבים מתרוממים'], tips:['שמור חזה פתוח ומבט קדימה.'] },
  { id:'lunge', name:'לאנג׳', muscle:'quads', secondary:['glutes','hamstrings'], difficulty:'מתחיל', equipment:'ללא ציוד', image:img('lunge'), video:vid('lunge'), duration:'00:18', short:'תרגיל חד־צדדי לרגליים.', instructions:['צעד קדימה.','רד עד כיפוף נוח.','שמור ברך קדמית יציבה.','חזור דרך הרגל הקדמית.'], mistakes:['צעד קצר מדי','ברך קורסת פנימה'], tips:['התחל ליד קיר לאיזון.'] },
  { id:'bulgarian-squat', name:'סקוואט בולגרי', muscle:'quads', secondary:['glutes','hamstrings'], difficulty:'בינוני', equipment:'ספסל / מדרגה', image:img('bulgarian-squat'), video:vid('bulgarian-squat'), duration:'00:20', short:'תרגיל חד־צדדי חזק לרגליים וישבן.', instructions:['הנח רגל אחורית על ספסל.','רד בשליטה.','שמור משקל על הרגל הקדמית.','עלה חזרה.'], mistakes:['ברך קורסת פנימה','צעד קצר מדי'], tips:['שמור פלג גוף עליון יציב.'] },
  { id:'calf-raise', name:'עליות תאומים', muscle:'calves', secondary:[], difficulty:'מתחיל', equipment:'ללא ציוד', image:img('calf-raise'), video:vid('calf-raise'), duration:'00:15', short:'חיזוק תאומים וקרסול.', instructions:['עמוד ישר.','עלה לקצות האצבעות.','החזק רגע למעלה.','רד בשליטה.'], mistakes:['תנועה מהירה','טווח קצר'], tips:['בצע על מדרגה כדי להגדיל טווח.'] },
  { id:'glute-bridge', name:'גשר ישבן', muscle:'glutes', secondary:['hamstrings'], difficulty:'מתחיל', equipment:'ללא ציוד', image:img('glute-bridge'), video:vid('glute-bridge'), duration:'00:16', short:'הפעלת ישבן ושרשרת אחורית.', instructions:['שכב על הגב.','כופף ברכיים.','הרם אגן וכווץ ישבן.','רד לאט חזרה.'], mistakes:['הקשת גב','דחיפה מהגב במקום מהישבן'], tips:['החזק שנייה למעלה בכל חזרה.'] },
  { id:'superman', name:'סופרמן', muscle:'back', secondary:['glutes'], difficulty:'מתחיל', equipment:'ללא ציוד', image:img('superman'), video:vid('superman'), duration:'00:15', short:'חיזוק גב תחתון ושרירי יציבה.', instructions:['שכב על הבטן.','הרם ידיים ורגליים.','החזק קצר.','חזור בשליטה.'], mistakes:['הרמה גבוהה מדי','לחץ בצוואר'], tips:['שמור מבט לרצפה.'] },
  { id:'face-pull', name:'משיכת פנים', muscle:'back', secondary:['shoulders'], difficulty:'בינוני', equipment:'גומייה', image:img('face-pull'), video:vid('face-pull'), duration:'00:18', short:'חיזוק שכמות וכתף אחורית.', instructions:['אחוז בגומייה בגובה פנים.','משוך לכיוון הפנים.','כווץ שכמות.','חזור לאט.'], mistakes:['מרפקים נמוכים מדי','משיכה עם גב תחתון'], tips:['שמור מרפקים גבוהים לאורך התנועה.'] },
  { id:'handstand-hold', name:'החזקת עמידת ידיים', muscle:'shoulders', secondary:['abs','triceps'], difficulty:'מתקדם', equipment:'קיר', image:img('handstand-hold'), video:vid('handstand-hold'), duration:'00:20', short:'תרגיל שליטה וכתפיים.', instructions:['היכנס לעמידת ידיים מול קיר.','דחוף את הרצפה.','שמור גוף ארוך ומתוח.','נשום רגוע.'], mistakes:['גב מקושת','כתפיים רפויות'], tips:['התחל עם החזקות קצרות ובטוחות.'] }
];

export const exercisesByMuscle = (muscle: MuscleId) =>
  exercises.filter(e => e.muscle === muscle || e.secondary.includes(muscle));

export const getExercise = (id: string) => exercises.find(e => e.id === id);

export const muscleById = (id: MuscleId) => muscles.find(m => m.id === id);
