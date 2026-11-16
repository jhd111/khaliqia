import { menu } from "../lib/menu";

const base = "https://www.khaliqia.edu.pk";
export default function sitemap() {
  const paths = new Set([""]);
  menu.forEach((m) => { paths.add(m.href === "/" ? "" : m.href); (m.children || []).forEach(([, h]) => paths.add(h)); });
  return [...paths].map((p) => ({
    url: base + p, lastModified: new Date(), changeFrequency: "weekly", priority: p === "" ? 1 : 0.7,
  }));
}
