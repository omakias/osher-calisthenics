import Link from 'next/link';
const items=[['/','בית'],['/exercises','תרגילים'],['/programs','תוכניות'],['/roadmap','Roadmap'],['/achievements','הישגים']];
export default function BottomNav(){return <nav className="tabs">{items.map(([href,label])=><Link className="tab" key={href} href={href}>{label}</Link>)}</nav>}
