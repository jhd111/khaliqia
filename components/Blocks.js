// Renders blocks produced by parse() in lib/syllabus.js
export default function Blocks({ blocks, offset = 0 }) {
  return blocks.map((b, i) => {
    if (b.t === "ul") return <ul key={i}>{b.items.map((x, j) => <li key={j}>{x}</li>)}</ul>;
    if (b.t === "p") return <p key={i}>{b.text}</p>;
    const Tag = `h${Math.min(b.lvl + 1 + offset, 6)}`;
    return <Tag key={i}>{b.text}</Tag>;
  });
}
