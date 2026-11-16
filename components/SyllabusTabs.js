"use client";
import { useRef, useState } from "react";
import Blocks from "./Blocks";

export default function SyllabusTabs({ levels }) {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  const onKeyDown = (e) => {
    const last = levels.length - 1;
    let n = null;
    if (e.key === "ArrowRight") n = active === last ? 0 : active + 1;
    if (e.key === "ArrowLeft") n = active === 0 ? last : active - 1;
    if (e.key === "Home") n = 0;
    if (e.key === "End") n = last;
    if (n === null) return;
    e.preventDefault();
    setActive(n);
    refs.current[n]?.focus();
  };

  return (
    <div className="syl">
      <div className="tabs" role="tablist" aria-label="Select class" onKeyDown={onKeyDown}>
        {levels.map((l, i) => (
          <button key={l.id} ref={(el) => (refs.current[i] = el)} role="tab" id={`tab-${l.id}`}
            aria-selected={i === active} aria-controls={`panel-${l.id}`} tabIndex={i === active ? 0 : -1}
            className="tab" onClick={() => setActive(i)}>
            {l.label}
          </button>
        ))}
      </div>
      {/* every panel is in the HTML (hidden when inactive) so search engines can read it all */}
      {levels.map((l, i) => (
        <div key={l.id} role="tabpanel" id={`panel-${l.id}`} aria-labelledby={`tab-${l.id}`} hidden={i !== active} tabIndex={0}>
          <h3>{l.label} syllabus</h3>
          <Blocks blocks={l.blocks} offset={1} />
        </div>
      ))}
    </div>
  );
}
