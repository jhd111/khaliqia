export const metadata = {
  title: "About Us",
  description:
    "Learn about Khaliqia Educational Complex: our story, mission, vision and core values.",
  alternates: { canonical: "/about" },
};

const icon = { width: 72, height: 72, viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: 5, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

const values = ["Faith", "Honesty", "Excellence", "Respect", "Responsibility", "Service"];

export default function AboutOverview() {
  return (
    <>
      <section className="about">
        <div className="about-crest" aria-hidden="true">K</div>
        <header className="sec-head">
          <h2>About Khaliqia Educational Complex</h2>
          <p>We offer high-quality teaching and a wide range of extra-curricular activities.</p>
        </header>

        {/* TODO: replace all text below with the school's real story */}
        <div className="about-body">
          <p>
            Khaliqia Educational Complex was founded on a simple belief: every child deserves an education that
            builds knowledge, character and faith together. Our classrooms are places where children learn to
            ask questions, work hard and treat others with respect.
          </p>
          <p>
            Our approach joins sound academics with strong values. Qualified teachers guide students through the
            curriculum while helping them grow in confidence, discipline and a sense of responsibility towards
            their families and their community.
          </p>

          <header className="sec-head history">
            <h2>History of Khaliqia Educational Complex</h2>
          </header>

          <p>
            What began as a small school with a handful of classrooms has grown steadily through the trust of
            parents and the dedication of our staff. Each year we have added facilities, trained our teachers
            and widened the activities open to our students.
          </p>
          <p>
            Today our students take part in academics, sports, quizzes, debates and Quranic studies. Every
            achievement encourages the next, and every challenge helps us plan better for the future.
          </p>
        </div>
      </section>

      <section className="mvv" aria-label="Mission, vision and core values">
        <div className="wrap mvv-grid">
          <div>
            <svg {...icon}><circle cx="32" cy="32" r="26" /><circle cx="32" cy="32" r="14" /><circle cx="32" cy="32" r="2" /></svg>
            <h2>Mission</h2>
            <p>
              To give every student a high-quality education, build their personality and confidence, and
              prepare them to serve their society with responsibility and dedication.
            </p>
          </div>
          <div>
            <svg {...icon}><path d="M4 32C14 16 50 16 60 32 50 48 14 48 4 32z" /><circle cx="32" cy="32" r="7" /></svg>
            <h2>Vision</h2>
            <p className="vision">Learning that builds knowledge, character and faith.</p>
          </div>
          <div>
            <svg {...icon}>
              <circle cx="24" cy="38" r="11" strokeWidth="9" strokeDasharray="5 5.5" />
              <circle cx="24" cy="38" r="4" />
              <circle cx="48" cy="18" r="7" strokeWidth="7" strokeDasharray="3.5 3.5" />
            </svg>
            <h2>Core values</h2>
            <ul>{values.map((v) => <li key={v}>{v}</li>)}</ul>
          </div>
        </div>
      </section>
    </>
  );
}
