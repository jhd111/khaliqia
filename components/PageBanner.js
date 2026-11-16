"use client";
import { usePathname } from "next/navigation";
import { menu } from "../lib/menu";

// Finds the page title from the menu (sub-items first, so /about -> "Overview").
function titleFor(path) {
  for (const m of menu) for (const [t, h] of m.children || []) if (h === path) return t;
  const top = menu.find((m) => m.href === path);
  return top ? top.title : null;
}

export default function PageBanner() {
  const path = usePathname();
  if (path === "/") return null;           // no banner on the home page
  const title = titleFor(path.replace(/\/$/, ""));
  if (!title) return null;                  // unknown route (e.g. 404): no banner
  return (
    <section className="banner">
      <div className="wrap">
        <h1>{title}<span className="sr"> | Khaliqia Educational Complex</span></h1>
      </div>
    </section>
  );
}
