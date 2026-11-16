"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

// Swap `bg` for a photo: add `image: "/slides/one.jpg"` and render with next/image if you like.
const slides = [
  { title: "A life-changing approach to learning", text: "Curiosity, character and confidence from pre-school to matric.", cta: ["Apply for admission", "/admission"], bg: "linear-gradient(120deg,#14532d,#1d7a45)" },
  { title: "Teachers who know every child", text: "Small classes, caring staff and regular progress updates for parents.", cta: ["Meet our campuses", "/campuses"], bg: "linear-gradient(120deg,#7c2d12,#c2570c)" },
  { title: "Learning beyond the classroom", text: "Sports, science fairs, debates and arts alongside strong academics.", cta: ["See our curriculum", "/academics"], bg: "linear-gradient(120deg,#1e3a5f,#2f6db0)" },
];

export default function Carousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = useCallback((n) => setI((n + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className="carousel" aria-roledescription="carousel" aria-label="Highlights"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onKeyDown={(e) => { if (e.key === "ArrowLeft") go(i - 1); if (e.key === "ArrowRight") go(i + 1); }}>
      {slides.map((s, n) => (
        <div key={n} className={`slide ${n === i ? "on" : ""}`} style={{ background: s.bg }}
          role="group" aria-roledescription="slide" aria-label={`${n + 1} of ${slides.length}`} aria-hidden={n !== i}>
          <div className="wrap slide-in">
            {/* key on the active slide restarts the entrance animation */}
            <div key={n === i ? "a" : "b"} className="copy">
              <h2>{s.title}</h2>
              <p>{s.text}</p>
              <Link href={s.cta[1]} className="btn" tabIndex={n === i ? 0 : -1}>{s.cta[0]}</Link>
            </div>
          </div>
        </div>
      ))}
      <button className="arrow prev" aria-label="Previous slide" onClick={() => go(i - 1)}>‹</button>
      <button className="arrow next" aria-label="Next slide" onClick={() => go(i + 1)}>›</button>
      <div className="dots">
        {slides.map((_, n) => (
          <button key={n} aria-label={`Go to slide ${n + 1}`} aria-current={n === i} className={n === i ? "d on" : "d"} onClick={() => go(n)} />
        ))}
      </div>
    </section>
  );
}
