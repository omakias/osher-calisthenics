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

export const exercises: Exercise[] = [
  {id:'push-up',name:'שכיבות סמיכה',en:'Push Up',category:'חזה',level:'מתחיל',muscles:['חזה','יד אחורית','כתפיים','ליבה'],equipment:'ללא',description:'תרגיל בסיסי לפיתוח כוח בפלג גוף עליון ושליטה בגוף.',steps:['מקם ידיים מעט רחב מרוחב הכתפיים','שמור גוף ישר מהראש עד העקבים','רד בשליטה עד שהחזה קרוב לרצפה','דחוף חזרה למעלה בלי לשבור קו גוף'],mistakes:['אגן נופל','מרפקים פתוחים מדי','חצי טווח תנועה'],xp:20},
  {id:'pull-up',name:'מתח',en:'Pull Up',category:'גב',level:'בינוני',muscles:['גב רחב','יד קדמית','שכמות','ליבה'],equipment:'מוט מתח',description:'תרגיל מרכזי לפיתוח גב, כוח משיכה ושליטה.',steps:['אחוז במוט מעט רחב מהכתפיים','התחל מתלייה מלאה','משוך חזה לכיוון המוט','רד בשליטה עד יישור ידיים'],mistakes:['תנופה מוגזמת','לא יורדים עד הסוף','כתפיים מכווצות'],xp:35},
  {id:'squat',name:'סקוואט',en:'Squat',category:'רגליים',level:'מתחיל',muscles:['ארבע ראשי','ישבן','ירך אחורית','ליבה'],equipment:'ללא',description:'בסיס חזק לרגליים, יציבה ותנועה נכונה.',steps:['עמוד ברוחב כתפיים','שלח אגן לאחור','רד עם גב ניטרלי','עלה דרך דחיפה מהרגליים'],mistakes:['ברכיים קורסות פנימה','עקבים עולים','גב מתעגל'],xp:20},
  {id:'plank',name:'פלאנק',en:'Plank',category:'בטן',level:'מתחיל',muscles:['בטן','גב תחתון','כתפיים'],equipment:'ללא',description:'תרגיל סטטי לליבה חזקה ויציבות.',steps:['מרפקים מתחת לכתפיים','כווץ בטן וישבן','שמור קו גוף ישר','נשום רגוע'],mistakes:['אגן גבוה מדי','אגן נמוך מדי','עצירת נשימה'],xp:15},
  {id:'muscle-up',name:'מאסל אפ',en:'Muscle Up',category:'Skills',level:'מתקדם',muscles:['גב','חזה','ידיים','ליבה'],equipment:'מוט מתח',description:'מיומנות מתקדמת שמשלבת משיכה מתפרצת, מעבר ודחיפה.',steps:['בנה בסיס של מתח מתפרץ','משוך את החזה מעל המוט','העבר מרפקים מעל המוט','דחוף לנעילה מלאה'],mistakes:['ניסיון מוקדם מדי','תלות בתנופה','חוסר שליטה במעבר'],xp:80},
  {id:'tuck-planche',name:'טאק פלאנץ׳',en:'Tuck Planche',category:'Skills',level:'מתקדם',muscles:['כתפיים','חזה','יד אחורית','ליבה'],equipment:'ללא / מקבילים',description:'שלב ראשון משמעותי בדרך לפלאנץ׳ מלא.',steps:['ידיים מתחת לכתפיים','דחוף שכמות קדימה','קפל ברכיים לחזה','נתק רגליים והחזק'],mistakes:['מרפקים כפופים','שכמות לא פעילות','החזקת נשימה'],xp:70},
  {id:'handstand',name:'עמידת ידיים',en:'Handstand',category:'Skills',level:'בינוני',muscles:['כתפיים','טרפזים','ליבה','אמות'],equipment:'קיר בהתחלה',description:'מיומנות של שיווי משקל, כוח כתפיים ושליטה.',steps:['התחל מול קיר','דחוף כתפיים למעלה','כווץ בטן וישבן','תרגל נשימה ושליטה'],mistakes:['גב מקושת מדי','מרפקים כפופים','ראש יוצא קדימה'],xp:60},
  {id:'l-sit',name:'אל סיט',en:'L-Sit',category:'בטן',level:'בינוני',muscles:['בטן','כופפי ירך','כתפיים','יד אחורית'],equipment:'מקבילים / רצפה',description:'החזקה סטטית חזקה לליבה וכופפי ירך.',steps:['הנח ידיים לצידי הגוף','דחוף כתפיים מטה','יישר רגליים קדימה','החזק עם גב גבוה'],mistakes:['כתפיים עולות לאוזניים','ברכיים כפופות מדי','קריסה בגב'],xp:45}
];

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
