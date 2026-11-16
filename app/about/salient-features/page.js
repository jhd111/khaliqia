import Features from "../../../components/Features";

export const metadata = {
  title: "Salient Features",
  description:
    "Discover what makes Khaliqia Educational Complex special: personality development, Quranic studies, teacher training, co-curricular activities and more.",
  alternates: { canonical: "/about/salient-features" },
};

// TODO: replace all text below with the school's real details.
const intro =
  "Khaliqia Educational Complex combines modern teaching methods with strong values. Our aim is to help every student do well in their studies and grow into a confident, honest and responsible person.";

const sections = [
  { h: "Pre-School", p: ["Young children learn through play, stories and hands-on activities in a warm and safe setting. Trained teachers help them build early reading, number and social skills."] },
  { h: "Personality Development", p: ["Teachers guide students to build good manners, confidence and self-discipline alongside their lessons. Character is taught through daily example, not only through books."] },
  { h: "Department of Quranic Studies", sub: [
    { h: "Nazra Quran", p: "Nazra classes are part of the daily timetable for all students, with regular checking of each child's progress by dedicated teachers." },
    { h: "Hifz Quran (Optional)", p: "Students who show interest and ability can join the Hifz programme. It runs alongside regular school lessons so that studies are not left behind." },
    { h: "Hifz Workshops", p: "Workshops for Hifz teachers share good methods for revision, memory and encouragement." },
  ] },
  { h: "Teachers Training", p: ["Teachers attend training workshops during the year to improve their classroom skills. New teachers receive guidance before they begin teaching."] },
  { h: "Co-Curricular Activities", p: ["Sports, quizzes, debates, educational trips and creative competitions help students discover their talents and learn teamwork."] },
  { h: "Research and Development (R&D)", p: ["Our academic team reviews lessons, exams and teaching methods each year, so that students always learn from up-to-date and well-planned material."] },
  { h: "Activity Based Teaching", p: ["Lessons include discussions, projects and practical work, so students understand ideas instead of only memorising them."] },
  { h: "Islamic Studies", p: ["Islamic studies are taught at every level in a clear and balanced way, helping students understand their faith and live by it."] },
  { h: "Liaison with Parents", p: ["Parent-teacher meetings are held regularly to share each child's progress and to discuss any concerns together."] },
];

export default function SalientFeatures() {
  return (
    <>
      <Features />
      <div className="content">
        <p>{intro}</p>
        {sections.map((s) => (
          <section key={s.h}>
            <h2>{s.h}</h2>
            {s.p?.map((t) => <p key={t}>{t}</p>)}
            {s.sub?.map((x) => (
              <div key={x.h}>
                <h3>{x.h}</h3>
                <p>{x.p}</p>
              </div>
            ))}
          </section>
        ))}
      </div>
    </>
  );
}
