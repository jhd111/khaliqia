const icon = { width: 72, height: 72, viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

const items = [
  { title: "Personality development", text: "Our teachers focus on building each student's character and confidence, alongside meaningful education.",
    svg: <svg {...icon}><path d="M6 56h14V44h12V32h12V20h14v36z"/><circle cx="14" cy="14" r="4"/><path d="M14 20v10l6 6"/></svg> },
  { title: "Teachers training", text: "Workshops are held regularly for in-service and newly appointed teachers, so classrooms keep improving.",
    svg: <svg {...icon}><rect x="8" y="8" width="48" height="26" rx="2"/><path d="M16 22l8-6 8 6 10-8M32 34v6M20 56l12-16 12 16"/></svg> },
  { title: "Hifz Quran-e-Kareem", text: "A dedicated Quranic studies wing gives talented students the chance to memorise the Quran.",
    svg: <svg {...icon}><path d="M32 18c-6-5-16-5-24-2v32c8-3 18-3 24 2 6-5 16-5 24-2V16c-8-3-18-3-24 2zM32 18v32"/></svg> },
  { title: "Co-curricular activities", text: "Sports competitions, educational trips, quiz programmes and debates are held throughout the year.",
    svg: <svg {...icon}><path d="M32 8C17 8 8 19 8 30c0 8 6 10 10 10 5 0 4 6 8 8 4 3 30 0 30-18C56 19 47 8 32 8z"/><circle cx="22" cy="24" r="3"/><circle cx="34" cy="20" r="3"/><circle cx="44" cy="28" r="3"/></svg> },
];

export default function Features() {
  return (
    <section className="features" aria-labelledby="features-h">
      <div className="wrap">
        <header className="sec-head">
          <h2 id="features-h">Salient features of Khaliqia Educational Complex</h2>
          <p>Education that prepares children for this world and the hereafter.</p>
        </header>
        <ul className="feat-grid">
          {items.map((it) => (
            <li key={it.title}>
              <div className="feat-ico">{it.svg}</div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
