import BackToTop from "./BackToTop";

// TODO: put your real social page URLs
const social = [
  { name: "Facebook", href: "https://facebook.com/", d: "M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.5V11H7v4h2.5v6h4v-6H16l.5-4h-3V8.8c0-.5.2-.8 1-.8z" },
  { name: "YouTube", href: "https://youtube.com/", d: "M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.200 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 002.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 001.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 001.800-1.800C22 15.200 22 12 22 12s0-3.200-.4-4.800zM10 15V9l5.200 3z" },
  { name: "X (Twitter)", href: "https://x.com/", d: "M17.800 3h3l-6.500 7.500L22 21h-6l-4.700-6.100L5.900 21H3l7-8L2.500 3h6.100l4.300 5.600zm-1 16.200h1.700L7.800 4.700H6z" },
  { name: "Instagram", href: "https://instagram.com/", d: "M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm0 2a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2zm5 2.500A4.500 4.500 0 1112 16.500 4.500 4.500 0 0112 7.500zm0 2A2.500 2.500 0 1014.500 12 2.500 2.500 0 0012 9.500zM17.500 6a1 1 0 110 2 1 1 0 010-2z" },
];

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="wrap foot-in">
          <p>
            © {new Date().getFullYear()} <a href="/">Khaliqia Educational Complex</a>
            <span className="sep" aria-hidden="true">|</span>All Rights Reserved
          </p>
          <ul className="social" aria-label="Social media">
            {social.map((s) => (
              <li key={s.name}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={s.d} /></svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
      <BackToTop />
    </>
  );
}
