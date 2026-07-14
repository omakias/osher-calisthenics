'use client';

import Link from 'next/link';
import { useState } from 'react';
import { asset, muscleById } from '../data/content';

const nav = [
  { href: '/', label: 'בית', icon: '⌂', active: true },
  { href: '/exercises', label: 'תרגילים', icon: '◧' },
  { href: '/warmup', label: 'חימום', icon: '◷' },
  { href: '#progress', label: 'התקדמות', icon: '▥' },
  { href: '#profile', label: 'פרופיל', icon: '○' }
];

const frontRegions = [
  { id: 'chest', color: '#ef4444', d: 'M156 284 C176 250 201 239 221 243 C250 247 272 269 279 303 C286 339 259 363 222 368 C185 371 153 352 146 324 C143 308 147 295 156 284 Z M222 243 C204 255 194 279 191 309 C189 333 198 353 222 368 C246 354 253 332 251 307 C249 278 240 255 222 243 Z' },
  { id: 'shoulders', color: '#38bdf8', d: 'M95 271 C96 247 118 225 145 216 C160 212 174 225 181 244 C170 267 165 291 151 304 C128 309 105 297 95 271 Z M258 246 C265 226 281 213 300 218 C326 225 352 248 362 273 C351 298 329 310 306 304 C292 292 282 267 258 246 Z' },
  { id: 'biceps', color: '#a855f7', d: 'M83 306 C104 301 126 311 134 331 C143 358 144 393 132 417 C121 438 101 452 86 439 C69 421 66 388 72 359 C76 338 77 321 83 306 Z M350 306 C329 301 307 311 299 331 C290 358 289 393 301 417 C312 438 332 452 347 439 C364 421 367 388 361 359 C357 338 356 321 350 306 Z' },
  { id: 'triceps', color: '#f97316', d: 'M129 314 C147 330 154 367 149 400 C146 420 134 438 116 446 C129 412 127 361 116 321 C120 316 124 314 129 314 Z M304 314 C286 330 279 367 284 400 C287 420 299 438 317 446 C304 412 306 361 317 321 C313 316 309 314 304 314 Z' },
  { id: 'abs', color: '#facc15', d: 'M187 357 C208 365 230 365 250 357 C260 398 263 453 264 504 C251 526 236 543 219 553 C200 543 184 526 172 504 C172 452 176 397 187 357 Z M199 378 L239 378 M194 421 L245 421 M190 464 L249 464' },
  { id: 'quads', color: '#22c55e', d: 'M139 584 C162 575 190 574 210 580 C216 631 216 699 205 750 C191 765 170 771 151 762 C134 719 129 641 139 584 Z M225 580 C246 574 274 575 296 584 C307 641 302 719 284 762 C266 771 244 765 230 750 C220 699 219 631 225 580 Z' },
  { id: 'calves', color: '#14b8a6', d: 'M146 758 C166 752 189 752 204 760 C200 817 199 883 190 932 C172 941 151 938 137 925 C126 873 131 809 146 758 Z M231 760 C246 752 269 752 289 758 C304 809 309 873 298 925 C284 938 263 941 245 932 C236 883 235 817 231 760 Z' }
];

const backRegions = [
  { id: 'back', color: '#22c55e', d: 'M132 96 C151 75 171 65 181 65 C194 65 216 77 230 98 C222 124 218 148 222 167 C246 199 258 261 254 320 C250 365 226 411 181 446 C136 411 111 365 106 320 C101 260 114 199 139 167 C143 145 140 123 132 96 Z' },
  { id: 'lats', color: '#06b6d4', d: 'M73 186 C94 169 117 160 137 163 C150 202 153 279 142 340 C130 363 113 383 94 398 C71 370 64 323 66 273 C67 235 67 206 73 186 Z M288 186 C267 169 244 160 224 163 C211 202 208 279 219 340 C231 363 248 383 267 398 C290 370 297 323 295 273 C294 235 294 206 288 186 Z' },
  { id: 'glutes', color: '#f97316', d: 'M108 426 C131 413 162 421 181 449 C199 421 230 413 253 426 C265 459 263 496 250 518 C226 539 197 551 181 552 C164 551 135 539 111 518 C98 496 96 459 108 426 Z' },
  { id: 'hamstrings', color: '#a855f7', d: 'M101 520 C125 524 156 536 176 548 C177 604 173 671 166 705 C152 725 127 737 108 724 C92 677 90 594 101 520 Z M260 520 C236 524 205 536 185 548 C184 604 188 671 195 705 C209 725 234 737 253 724 C269 677 271 594 260 520 Z' },
  { id: 'calves', color: '#14b8a6', d: 'M108 720 C126 710 151 703 170 705 C166 721 164 738 160 752 C144 763 125 760 111 746 C105 738 104 729 108 720 Z M253 720 C235 710 210 703 191 705 C195 721 197 738 201 752 C217 763 236 760 250 746 C256 738 257 729 253 720 Z' }
];

function BodyMap({ side, selected, onSelect }) {
  const regions = side === 'front' ? frontRegions : backRegions;
  const viewBox = side === 'front' ? '0 0 435 1030' : '0 0 360 755';
  const img = side === 'front' ? '/body-front.png' : '/body-back.png';

  return (
    <div className={`body-wrap home-only-body ${side}`}>
      <img className="body-photo" src={asset(img)} alt={side === 'front' ? 'מפת שרירים קדמית' : 'מפת שרירים אחורית'} />
      <svg className="body-overlay anatomy-overlay" viewBox={viewBox} preserveAspectRatio="xMidYMid meet" aria-label="מפת שרירים לחיצה">
        {regions.map((r, index) => {
          const isActive = selected === r.id;
          return (
            <path
              key={`${r.id}-${index}`}
              d={r.d}
              fill={isActive ? `${r.color}cc` : `${r.color}66`}
              stroke={isActive ? '#ffffff' : r.color}
              strokeWidth={isActive ? 5 : 2.25}
              className={`muscle-region anatomy-region ${isActive ? 'active' : ''}`}
              onClick={() => onSelect(r.id)}
            />
          );
        })}
      </svg>
    </div>
  );
}

export default function HomePage() {
  const [side, setSide] = useState('front');
  const [selected, setSelected] = useState('chest');
  const selectedMuscle = muscleById(selected);

  const switchSide = (value) => {
    setSide(value);
    setSelected(value === 'front' ? 'chest' : 'back');
  };

  const openMuscle = (id) => {
    setSelected(id);
    window.location.href = `/exercises?muscle=${id}`;
  };

  return (
    <main className="mobile-app home-single-screen">
      <header className="appbar home-topbar">
        <div className="brand logo-brand">
          <img src={asset('/oc-planche-logo.png')} alt="Osher Calisthenics" />
          <div><b>OSHER</b><small>CALISTHENICS</small></div>
        </div>
        <div className="stats"><b>🔥 12</b><b>⬢ 1,250</b></div>
      </header>

      <section className="map-card home-map-full">
        <div className="card-head home-card-head">
          <div>
            <h2>בחר אזור אימון</h2>
            <p>{selectedMuscle ? selectedMuscle.name : 'לחץ על שריר'} לפתיחת התרגילים</p>
          </div>
          <div className="seg">
            <button className={side === 'front' ? 'on' : ''} onClick={() => switchSide('front')}>קדמי</button>
            <button className={side === 'back' ? 'on' : ''} onClick={() => switchSide('back')}>אחורי</button>
          </div>
        </div>
        <BodyMap side={side} selected={selected} onSelect={openMuscle} />
      </section>

      <nav className="bottom-nav">
        {nav.map(item => (
          <Link key={item.label} href={item.href} className={item.active ? 'active' : ''}>
            <span>{item.icon}</span>
            <small>{item.label}</small>
          </Link>
        ))}
      </nav>
    </main>
  );
}
