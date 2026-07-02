export type Exercise = {
  id: string;
  name: string;
  en: string;
  category: string;
  level: string;
  muscles: string[];
  equipment: string;
  description: string;
  steps: string[];
  mistakes: string[];
  xp: number;
};

export type MuscleGroup = {
  id: string;
  label: string;
  icon: string;
  color: string;
  description: string;
};

export const muscleGroups: MuscleGroup[] = [
  { id: 'חזה', label: 'חזה', icon: '▰', color: '#39ff88', description: 'דחיפות, שכיבות סמיכה, דיפס וכוח פלג גוף עליון' },
  { id: 'גב', label: 'גב', icon: '▱', color: '#39ff88', description: 'מתח, חתירות, שכמות וכוח משיכה' },
  { id: 'כתפיים', label: 'כתפיים', icon: '◖', color: '#39ff88', description: 'שליטה, עמידות ידיים ופלאנץ׳' },
  { id: 'יד קדמית', label: 'יד קדמית', icon: '⌁', color: '#39ff88', description: 'כוח משיכה, מתח וחתירות' },
  { id: 'יד אחורית', label: 'יד אחורית', icon: '⌁', color: '#39ff88', description: 'דיפס, דחיפות ונעילות מרפק' },
  { id: 'בטן', label: 'בטן', icon: '▦', color: '#39ff88', description: 'ליבה, יציבות, L-Sit ופלאנק' },
  { id: 'רגליים', label: 'רגליים', icon: '▥', color: '#39ff88', description: 'סקוואטים, לאנג׳ים וקפיצות' },
  { id: 'ישבן', label: 'ישבן', icon: '◒', color: '#39ff88', description: 'כוח ירך, יציבות ואגן' }
];

export const exercises: Exercise[] = [
  {id:'push-up',name:'שכיבות סמיכה',en:'Push Up',category:'חזה',level:'מתחיל',muscles:['חזה','יד אחורית','כתפיים','ליבה'],equipment:'ללא',description:'תרגיל בסיסי לפיתוח כוח בפלג גוף עליון ושליטה בגוף.',steps:['מקם ידיים מעט רחב מרוחב הכתפיים','שמור גוף ישר מהראש עד העקבים','רד בשליטה עד שהחזה קרוב לרצפה','דחוף חזרה למעלה בלי לשבור קו גוף'],mistakes:['אגן נופל','מרפקים פתוחים מדי','חצי טווח תנועה'],xp:20},
  {id:'incline-push-up',name:'שכיבות סמיכה בשיפוע',en:'Incline Push Up',category:'חזה',level:'מתחיל',muscles:['חזה','יד אחורית','כתפיים'],equipment:'ספסל / קיר',description:'וריאציה קלה יותר לשכיבות סמיכה שמאפשרת ללמוד טכניקה נקייה.',steps:['הנח ידיים על משטח מוגבה','שמור גוף ישר','רד בשליטה','דחוף חזרה למעלה'],mistakes:['אגן שוקע','ידיים רחבות מדי','תנועה מהירה מדי'],xp:15},
  {id:'diamond-push-up',name:'שכיבות סמיכה יהלום',en:'Diamond Push Up',category:'יד אחורית',level:'בינוני',muscles:['יד אחורית','חזה','כתפיים'],equipment:'ללא',description:'וריאציה שמעמיסה יותר על היד האחורית ועל מרכז החזה.',steps:['מקם ידיים קרובות בצורת יהלום','שמור מרפקים קרובים לגוף','רד בשליטה','דחוף חזרה לנעילה'],mistakes:['מרפקים נפתחים החוצה','כתפיים קורסות','טווח חלקי'],xp:35},
  {id:'dips',name:'דיפס במקבילים',en:'Parallel Bar Dips',category:'חזה',level:'בינוני',muscles:['חזה','יד אחורית','כתפיים'],equipment:'מקבילים',description:'תרגיל חזק לדחיפה, חזה ויד אחורית.',steps:['עלה לתמיכת ידיים ישרות','רד עד זווית נוחה במרפק','שמור כתפיים יציבות','דחוף חזרה למעלה'],mistakes:['ירידה עמוקה מדי מוקדם מדי','כתפיים עולות לאוזניים','תנופה'],xp:45},
  {id:'archer-push-up',name:'שכיבות סמיכה ארצ׳ר',en:'Archer Push Up',category:'חזה',level:'מתקדם',muscles:['חזה','כתפיים','יד אחורית','ליבה'],equipment:'ללא',description:'שלב מתקדם בדרך לשכיבת סמיכה ביד אחת.',steps:['פתח ידיים רחב','רד לצד אחד','שמור את היד השנייה כמעט ישרה','חזור למרכז והחלף צד'],mistakes:['סיבוב אגן','חוסר שליטה בירידה','טווח קצר'],xp:55},
  {id:'pull-up',name:'מתח',en:'Pull Up',category:'גב',level:'בינוני',muscles:['גב','יד קדמית','שכמות','ליבה'],equipment:'מוט מתח',description:'תרגיל מרכזי לפיתוח גב, כוח משיכה ושליטה.',steps:['אחוז במוט מעט רחב מהכתפיים','התחל מתלייה מלאה','משוך חזה לכיוון המוט','רד בשליטה עד יישור ידיים'],mistakes:['תנופה מוגזמת','לא יורדים עד הסוף','כתפיים מכווצות'],xp:35},
  {id:'australian-pull-up',name:'חתירה אוסטרלית',en:'Australian Pull Up',category:'גב',level:'מתחיל',muscles:['גב','יד קדמית','שכמות'],equipment:'מוט נמוך',description:'תרגיל משיכה מצוין לפני מתח מלא.',steps:['שכב מתחת למוט נמוך','שמור גוף ישר','משוך חזה למוט','רד בשליטה'],mistakes:['אגן נופל','משיכה עם צוואר','טווח חלקי'],xp:20},
  {id:'chin-up',name:'מתח בסופינציה',en:'Chin Up',category:'יד קדמית',level:'בינוני',muscles:['יד קדמית','גב','שכמות'],equipment:'מוט מתח',description:'וריאציית מתח שמדגישה יותר יד קדמית.',steps:['אחוז במוט כפות ידיים אליך','משוך את החזה למוט','כווץ שכמות','רד לשליטה מלאה'],mistakes:['תנופה','חצי ירידה','כיווץ צוואר'],xp:35},
  {id:'scapula-pull-up',name:'משיכת שכמות',en:'Scapula Pull Up',category:'גב',level:'מתחיל',muscles:['גב','שכמות','כתפיים'],equipment:'מוט מתח',description:'תרגיל יסוד לשליטה בשכמות לפני מתח ומאסל אפ.',steps:['היתלה על המוט','השאר ידיים ישרות','משוך שכמות למטה ואחורה','שחרר בשליטה'],mistakes:['כיפוף מרפקים','תנועה מהירה','חוסר שליטה'],xp:20},
  {id:'pike-push-up',name:'פייק פוש אפ',en:'Pike Push Up',category:'כתפיים',level:'בינוני',muscles:['כתפיים','יד אחורית','חזה עליון'],equipment:'ללא',description:'תרגיל הכנה לעמידת ידיים ולכוח כתפיים.',steps:['צור צורת V הפוכה','הורד את הראש בין הידיים','דחוף חזרה למעלה','שמור אגן גבוה'],mistakes:['גוף שטוח מדי','טווח קצר','מרפקים נפתחים'],xp:35},
  {id:'wall-handstand',name:'עמידת ידיים מול קיר',en:'Wall Handstand',category:'כתפיים',level:'בינוני',muscles:['כתפיים','ליבה','אמות'],equipment:'קיר',description:'בסיס לעמידת ידיים ושליטה בקו גוף.',steps:['עלה בזהירות אל הקיר','דחוף את הרצפה','כווץ בטן וישבן','החזק ונשום'],mistakes:['גב מקושת מדי','כתפיים לא דוחפות','ראש בולט'],xp:45},
  {id:'plank',name:'פלאנק',en:'Plank',category:'בטן',level:'מתחיל',muscles:['בטן','גב תחתון','כתפיים'],equipment:'ללא',description:'תרגיל סטטי לליבה חזקה ויציבות.',steps:['מרפקים מתחת לכתפיים','כווץ בטן וישבן','שמור קו גוף ישר','נשום רגוע'],mistakes:['אגן גבוה מדי','אגן נמוך מדי','עצירת נשימה'],xp:15},
  {id:'hollow-hold',name:'הולו הולד',en:'Hollow Hold',category:'בטן',level:'מתחיל',muscles:['בטן','ליבה','כופפי ירך'],equipment:'ללא',description:'תרגיל בסיסי לשליטה בגוף ולסקילים מתקדמים.',steps:['שכב על הגב','הצמד גב תחתון לרצפה','הרם ידיים ורגליים','החזק בלי לשבור קו'],mistakes:['גב תחתון מתנתק','רגליים גבוהות מדי','עצירת נשימה'],xp:25},
  {id:'l-sit',name:'אל סיט',en:'L-Sit',category:'בטן',level:'בינוני',muscles:['בטן','כופפי ירך','כתפיים','יד אחורית'],equipment:'מקבילים / רצפה',description:'החזקה סטטית חזקה לליבה וכופפי ירך.',steps:['הנח ידיים לצידי הגוף','דחוף כתפיים מטה','יישר רגליים קדימה','החזק עם גב גבוה'],mistakes:['כתפיים עולות לאוזניים','ברכיים כפופות מדי','קריסה בגב'],xp:45},
  {id:'squat',name:'סקוואט',en:'Squat',category:'רגליים',level:'מתחיל',muscles:['רגליים','ישבן','ירך קדמית','ירך אחורית','ליבה'],equipment:'ללא',description:'בסיס חזק לרגליים, יציבה ותנועה נכונה.',steps:['עמוד ברוחב כתפיים','שלח אגן לאחור','רד עם גב ניטרלי','עלה דרך דחיפה מהרגליים'],mistakes:['ברכיים קורסות פנימה','עקבים עולים','גב מתעגל'],xp:20},
  {id:'lunge',name:'לאנג׳ים',en:'Lunges',category:'רגליים',level:'מתחיל',muscles:['רגליים','ישבן','ירך קדמית'],equipment:'ללא',description:'תרגיל חד צדדי לשיווי משקל וכוח ברגליים.',steps:['צעד קדימה','רד עם שליטה','שמור ברך קדמית יציבה','דחוף חזרה לעמידה'],mistakes:['ברך קורסת פנימה','צעד קצר מדי','גוף נוטה קדימה'],xp:20},
  {id:'bulgarian-squat',name:'סקוואט בולגרי',en:'Bulgarian Split Squat',category:'רגליים',level:'בינוני',muscles:['רגליים','ישבן','ירך קדמית'],equipment:'ספסל',description:'תרגיל חזק לרגליים וליציבות חד צדדית.',steps:['הנח רגל אחורית על ספסל','רד בשליטה','שמור חזה פתוח','דחוף דרך העקב הקדמי'],mistakes:['עמידה צרה מדי','ברך קדמית קורסת','ירידה לא מבוקרת'],xp:35},
  {id:'glute-bridge',name:'גשר ישבן',en:'Glute Bridge',category:'ישבן',level:'מתחיל',muscles:['ישבן','ירך אחורית','ליבה'],equipment:'ללא',description:'תרגיל בסיסי לחיזוק ישבן ואגן.',steps:['שכב על הגב עם ברכיים כפופות','דחוף עקבים לרצפה','הרם אגן עד קו ישר','כווץ ישבן למעלה'],mistakes:['הקשתה בגב תחתון','דחיפה מהבהונות','חוסר כיווץ'],xp:15},
  {id:'muscle-up',name:'מאסל אפ',en:'Muscle Up',category:'Skills',level:'מתקדם',muscles:['גב','חזה','ידיים','ליבה'],equipment:'מוט מתח',description:'מיומנות מתקדמת שמשלבת משיכה מתפרצת, מעבר ודחיפה.',steps:['בנה בסיס של מתח מתפרץ','משוך את החזה מעל המוט','העבר מרפקים מעל המוט','דחוף לנעילה מלאה'],mistakes:['ניסיון מוקדם מדי','תלות בתנופה','חוסר שליטה במעבר'],xp:80},
  {id:'tuck-planche',name:'טאק פלאנץ׳',en:'Tuck Planche',category:'Skills',level:'מתקדם',muscles:['כתפיים','חזה','יד אחורית','ליבה'],equipment:'ללא / מקבילים',description:'שלב ראשון משמעותי בדרך לפלאנץ׳ מלא.',steps:['ידיים מתחת לכתפיים','דחוף שכמות קדימה','קפל ברכיים לחזה','נתק רגליים והחזק'],mistakes:['מרפקים כפופים','שכמות לא פעילות','החזקת נשימה'],xp:70}
];

export function exercisesForMuscle(muscle: string): Exercise[] {
  if (muscle === 'הכל') return exercises;
  return exercises.filter((exercise) => exercise.category === muscle || exercise.muscles.includes(muscle));
}

export const programs = [
  {id:'beginner-30',title:'מתחילים מאפס',duration:'30 יום',level:'מתחיל',focus:'בסיס מלא',workouts:3},
  {id:'muscle-up-path',title:'מסלול Muscle Up',duration:'8 שבועות',level:'בינוני+',focus:'משיכה מתפרצת',workouts:4},
  {id:'planche-path',title:'מסלול Planche',duration:'12 שבועות',level:'מתקדם',focus:'כתפיים וליבה',workouts:4},
  {id:'full-body',title:'כוח גוף מלא',duration:'6 שבועות',level:'כולם',focus:'כוח וסיבולת',workouts:3}
];

export const roadmap = [
  {title:'Dead Hang',done:true},
  {title:'Scapula Pull Up',done:true},
  {title:'Negative Pull Up',done:true},
  {title:'Pull Up',done:false},
  {title:'Chest To Bar',done:false},
  {title:'Explosive Pull Up',done:false},
  {title:'Muscle Up',done:false}
];

export const achievements = [
  {title:'אימון ראשון',text:'סיימת את האימון הראשון',xp:50,unlocked:true},
  {title:'10 שכיבות סמיכה',text:'הגעת ל-10 חזרות נקיות',xp:80,unlocked:true},
  {title:'מתח ראשון',text:'בצע מתח מלא ראשון',xp:120,unlocked:false},
  {title:'Muscle Up ראשון',text:'פתח את הסקיל המרכזי',xp:300,unlocked:false}
];
