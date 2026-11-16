"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// TODO: replace with your real partner/project logos.
// Sample logos live in /public/partners/. Replace each file (png/svg) with your own, keeping the same name.
const partners = [
  { name: "Publications", href: "#", logo: "/partners/publications.svg" },
  { name: "Girls Care Program", href: "#", logo: "/partners/girls-care.svg" },
  { name: "Child Development Program", href: "#", logo: "/partners/child-development.svg" },
  { name: "Parenting Workshops", href: "#", logo: "/partners/parenting.svg" },
  { name: "Nazra and Hifz", href: "#", logo: "/partners/nazra-hifz.svg" },
  { name: "Sports Club", href: "#", logo: "/partners/sports.svg" },
];

export default function Partners() {
  const track = useRef(null);
  const [paused, setPaused] = useState(false);

  const scrollByOne = (dir) => {
    const el = track.current;
    if (!el) return;
    const step = el.firstElementChild.getBoundingClientRect().width;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    if (dir > 0 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => scrollByOne(1), 3500);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className="partners" aria-label="Our programs and partners"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="wrap partners-in">
        <button className="p-arrow left" aria-label="Previous logos" onClick={() => scrollByOne(-1)}>‹</button>
        <ul className="p-track" ref={track}>
          {partners.map((p) => (
            <li key={p.name}>
              <a href={p.href} aria-label={p.name}>
                {p.logo
                  ? <Image src={p.logo} alt={p.name} width={240} height={270} unoptimized />
                  : <span className="p-ph">{p.name}</span>}
              </a>
            </li>
          ))}
        </ul>
        <button className="p-arrow right" aria-label="Next logos" onClick={() => scrollByOne(1)}>›</button>
      </div>
    </section>
  );
}
