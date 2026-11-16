"use client";
import Link from "next/link";
import { useState } from "react";
import { menu } from "../lib/menu";

export default function Header() {
  const [open, setOpen] = useState(false);   // mobile menu
  const [sub, setSub] = useState(null);      // mobile accordion
  const close = () => { setOpen(false); setSub(null); };

  return (
    <header className="header">
      <div className="wrap header-in">
        <Link href="/" className="brand" onClick={close}>
          <span className="crest" aria-hidden="true">K</span>
          <span>Khaliqia<small>Educational Complex</small></span>
        </Link>
        <button className="burger" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
          <span className="sr">Menu</span><i /><i /><i />
        </button>
        <nav id="nav" aria-label="Main" className={open ? "nav open" : "nav"}>
          <ul className="menu">
            {menu.map((m) => (
              <li key={m.href} className={`${m.children ? "has-sub" : ""} ${sub === m.title ? "open" : ""}`}>
                <Link href={m.href} onClick={close}>{m.title}<small>{m.sub}</small></Link>
                {m.children && (
                  <>
                    <button className="chev" aria-expanded={sub === m.title} aria-label={`${m.title} submenu`}
                      onClick={() => setSub(sub === m.title ? null : m.title)}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
                    </button>
                    <ul className="sub">
                      {m.children.map(([t, h]) => (
                        <li key={t}><Link href={h} onClick={close}>{t}</Link></li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
