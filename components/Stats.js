"use client";
import { useEffect, useRef, useState } from "react";

const icon = { width: 56, height: 56, viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

// TODO: replace with Khaliqia's real figures
const stats = [
  { value: 1500, label: "Students", note: "Studying at Khaliqia", svg: <svg {...icon}><rect x="6" y="12" width="52" height="40" rx="4"/><circle cx="22" cy="28" r="5"/><path d="M14 44c0-6 16-6 16 0M38 26h12M38 34h12"/></svg> },
  { value: 20, label: "Books", note: "Published by our school", svg: <svg {...icon}><path d="M32 18c-6-5-16-5-24-2v32c8-3 18-3 24 2 6-5 16-5 24-2V16c-8-3-18-3-24 2zM32 18v32"/></svg> },
  { value: 100, label: "Teachers", note: "Teaching across our campuses", svg: <svg {...icon}><circle cx="32" cy="16" r="8"/><path d="M16 56c0-14 8-22 16-22s16 8 16 22z"/></svg> },
  { value: 5, label: "Campuses", note: "Branches in the region", svg: <svg {...icon}><path d="M8 56V28l24-18 24 18v28zM26 56V40h12v16"/></svg> },
];

function Counter({ to }) {
  const [n, setN] = useState(to); // real number is in the server HTML (good for SEO)
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now(), dur = 1800;
      const tick = (t) => {
        const p = Math.min((t - t0) / dur, 1);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n.toLocaleString("en-US")}</span>;
}

export default function Stats() {
  return (
    <section className="stats" aria-labelledby="stats-h">
      <div className="wrap">
        <header className="sec-head light">
          <h2 id="stats-h">Khaliqia Educational Complex: progress dashboard</h2>
          <p>Years of excellence and experience.</p>
        </header>
        <ul className="stat-grid">
          {stats.map((s) => (
            <li key={s.label}>
              <div className="stat-ico">{s.svg}</div>
              <div className="stat-num"><Counter to={s.value} />+</div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-note">{s.note}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
