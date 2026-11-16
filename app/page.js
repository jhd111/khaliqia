import Link from "next/link";
import Carousel from "../components/Carousel";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Partners from "../components/Partners";

const cards = [
  ["Admission procedure", "/admission", "No written test for pre-school. Admission for primary and secondary classes is based on a short interaction.", "#be123c"],
  ["Salient features", "/about", "A trusted school with qualified teachers, safe campuses and a focus on values.", "#0369a1"],
  ["Campuses", "/campuses", "Find a Khaliqia campus near you and book a visit.", "#15803d"],
  ["Curriculum", "/academics", "Learning inside and outside the classroom, with steady support at each level.", "#475569"],
  ["News & events", "/news", "Results, events and notices from across our campuses.", "#c2570c"],
];

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <h1 className="sr">Khaliqia Educational Complex: quality school education in Gujranwala</h1>
      <Carousel />

      <section className="band">
        <div className="wrap band-in">
          <p>Khaliqia Educational Complex gives children a strong start with caring teachers and a values-first approach to learning.</p>
          <Link href="/campuses" className="btn dark">Find us nearby</Link>
        </div>
      </section>

      <section className="wrap cards" aria-label="Quick links">
        {cards.map(([t, h, d, c]) => (
          <Link key={h} href={h} className="card">
            <h2 style={{ color: c }}>{t}</h2>
            <p>{d}</p>
          </Link>
        ))}
      </section>

      <section className="wrap why">
        <div>
          <h2>Why choose Khaliqia Educational Complex?</h2>
          <p>We combine solid academics with activities that build confidence. Parents choose us for our teachers, our discipline and the care each child receives.</p>
          <p>Visit a campus, meet the staff and see how your child will learn.</p>
        </div>
        <div className="video" role="img" aria-label="Video placeholder: add your school video here" />
      </section>

      <Features />
      <Stats />

      <section className="news">
        <div className="wrap">
          <h2>Latest news</h2>
          <p>Add your news posts here.</p>
        </div>
      </section>

      <Partners />
    </>
  );
}
