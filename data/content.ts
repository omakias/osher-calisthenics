export type Side = 'front' | 'back';
export type MuscleId = 'chest' | 'shoulders' | 'triceps' | 'biceps' | 'abs' | 'quads' | 'calves' | 'back' | 'lats' | 'hamstrings' | 'glutes';
export type Difficulty = 'מתחיל' | 'בינוני' | 'מתקדם';

export type Muscle = { id: MuscleId; name: string; side: Side; x: number; y: number; description: string; };
export type Exercise = { id:string; name:string; muscle:MuscleId; secondary:MuscleId[]; difficulty:Difficulty; image:string; equipment:string; short:string; instructions:string[]; mistakes:string[]; video?:string };

export const asset = (path: string) => path;

export const muscles: Muscle[] = [
 { id:'chest', name:'חזה', side:'front', x:48, y:35, description:'תרגילי דחיפה לחזה, יד אחורית וכתפיים.' },
 { id:'shoulders', name:'כתפיים', side:'front', x:39, y:29, description:'חיזוק כתפיים, יציבות ודחיפה מעל הראש.' },
 { id:'triceps', name:'יד אחורית', side:'front', x:66, y:42, description:'תרגילים לנעילת מרפקים ודחיפה חזקה.' },
 { id:'biceps', name:'יד קדמית', side:'front', x:31, y:42, description:'תרגילי משיכה וכוח ביד קדמית.' },
 { id:'abs', name:'בטן', side:'front', x:48, y:49, description:'ליבה, יציבות ושליטה בגוף.' },
 { id:'quads', name:'ירך קדמית', side:'front', x:43, y:72, description:'כוח רגליים, יציבות וניתור.' },
 { id:'calves', name:'תאומים', side:'front', x:59, y:88, description:'חיזוק שוקיים וקרסוליים.' },
 { id:'back', name:'גב', side:'back', x:50, y:36, description:'תרגילי משיכה לגב רחב וחזק.' },
 { id:'lats', name:'רחב גבי', side:'back', x:39, y:43, description:'הרחבת הגב ושיפור כוח משיכה.' },
 { id:'hamstrings', name:'ירך אחורית', side:'back', x:43, y:72, description:'שרשרת אחורית, יציבות ומניעת פציעות.' },
 { id:'glutes', name:'ישבן', side:'back', x:50, y:58, description:'כוח אגן, ישבן ורגליים.' }
];
const img=(id:string)=>`/exercises/${id}.jpg`;
export const exercises: Exercise[] = [
 { id:'push-up', name:'שכיבות סמיכה', muscle:'chest', secondary:['triceps','shoulders'], difficulty:'מתחיל', image:img('push-up'), equipment:'ללא ציוד', short:'תרגיל בסיסי לחיזוק החזה והיד האחורית.', instructions:['מקם ידיים מעט רחב מרוחב הכתפיים.','שמור גוף ישר מהראש עד העקבים.','רד בשליטה עד שהחזה קרוב לרצפה.','דחוף חזרה למעלה בלי לשקוע באגן.'], mistakes:['אגן נמוך מדי','מרפקים פתוחים מדי','טווח תנועה חלקי'] },
 { id:'incline-push-up', name:'שכיבות סמיכה בשיפוע', muscle:'chest', secondary:['triceps','shoulders'], difficulty:'מתחיל', image:img('incline-push-up'), equipment:'ספסל / מדרגה', short:'גרסה קלה יותר לשכיבות סמיכה.', instructions:['הנח ידיים על משטח מוגבה.','שמור על קו גוף ישר.','רד בשליטה ודחוף חזרה.'], mistakes:['כיפוף גב','חוסר שליטה בירידה'] },
 { id:'diamond-push-up', name:'שכיבות סמיכה יהלום', muscle:'triceps', secondary:['chest','shoulders'], difficulty:'בינוני', image:img('diamond-push-up'), equipment:'ללא ציוד', short:'דגש חזק על היד האחורית.', instructions:['קרב כפות ידיים לצורת יהלום.','שמור מרפקים קרובים לגוף.','בצע ירידה מבוקרת.'], mistakes:['עומס על מפרקי הידיים','פתיחת מרפקים'] },
 { id:'dips', name:'מקבילים', muscle:'triceps', secondary:['chest','shoulders'], difficulty:'בינוני', image:img('dips'), equipment:'מקבילים', short:'תרגיל חזק לחזה וליד אחורית.', instructions:['אחוז במקבילים.','רד עד כיפוף נוח במרפקים.','דחוף חזרה למעלה.'], mistakes:['ירידה עמוקה מדי','כתפיים קורסות'] },
 { id:'pull-up', name:'מתח', muscle:'back', secondary:['biceps','lats'], difficulty:'בינוני', image:img('pull-up'), equipment:'מוט מתח', short:'תרגיל בסיסי לגב וליד קדמית.', instructions:['אחוז במוט מעט רחב מהכתפיים.','משוך חזה לכיוון המוט.','רד בשליטה לתלייה מלאה.'], mistakes:['שימוש בתנופה','חצי טווח תנועה'] },
 { id:'australian-pull-up', name:'חתירה אוסטרלית', muscle:'back', secondary:['biceps','lats'], difficulty:'מתחיל', image:img('australian-pull-up'), equipment:'מוט נמוך', short:'תרגיל משיכה מצוין למתחילים.', instructions:['שכב מתחת למוט נמוך.','משוך חזה למוט.','שמור גוף ישר.'], mistakes:['אגן נמוך','משיכה קצרה'] },
 { id:'plank', name:'פלאנק', muscle:'abs', secondary:['shoulders'], difficulty:'מתחיל', image:img('plank'), equipment:'ללא ציוד', short:'תרגיל בסיסי לליבה.', instructions:['מרפקים מתחת לכתפיים.','כווץ בטן וישבן.','שמור גוף ישר.'], mistakes:['אגן גבוה מדי','אגן נמוך מדי'] },
 { id:'squat', name:'סקוואט', muscle:'quads', secondary:['glutes','hamstrings'], difficulty:'מתחיל', image:img('squat'), equipment:'ללא ציוד', short:'תרגיל בסיסי לרגליים.', instructions:['עמוד ברוחב כתפיים.','שלח אגן לאחור.','רד ושמור ברכיים בכיוון האצבעות.'], mistakes:['ברכיים קורסות פנימה','עקבים מתרוממים'] },
 { id:'lunge', name:'לאנג׳', muscle:'quads', secondary:['glutes','hamstrings'], difficulty:'מתחיל', image:img('lunge'), equipment:'ללא ציוד', short:'תרגיל חד־צדדי לרגליים.', instructions:['צעד קדימה.','רד עד כיפוף נוח.','חזור דרך הרגל הקדמית.'], mistakes:['צעד קצר מדי','ברך קורסת פנימה'] },
 { id:'calf-raise', name:'עליות תאומים', muscle:'calves', secondary:[], difficulty:'מתחיל', image:img('calf-raise'), equipment:'ללא ציוד', short:'חיזוק תאומים וקרסול.', instructions:['עמוד ישר.','עלה לקצות האצבעות.','רד בשליטה.'], mistakes:['תנועה מהירה','טווח קצר'] },
 { id:'glute-bridge', name:'גשר ישבן', muscle:'glutes', secondary:['hamstrings'], difficulty:'מתחיל', image:img('glute-bridge'), equipment:'ללא ציוד', short:'הפעלת ישבן ושרשרת אחורית.', instructions:['שכב על הגב.','כופף ברכיים.','הרם אגן וכווץ ישבן.'], mistakes:['הקשת גב','דחיפה מהגב במקום מהישבן'] },
 { id:'handstand-hold', name:'עמידת ידיים', muscle:'shoulders', secondary:['abs','triceps'], difficulty:'מתקדם', image:img('handstand-hold'), equipment:'קיר', short:'תרגיל שליטה וכתפיים.', instructions:['היכנס לעמידת ידיים מול קיר.','דחוף את הרצפה.','שמור גוף ארוך ומתוח.'], mistakes:['גב מקושת','כתפיים רפויות'] }
];
export const exercisesByMuscle=(muscle:MuscleId)=>exercises.filter(e=>e.muscle===muscle||e.secondary.includes(muscle));
export const getExercise=(id:string)=>exercises.find(e=>e.id===id);
