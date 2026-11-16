export const metadata = {
  title: "Examination",
  description:
    "How students are assessed at Khaliqia Educational Complex, from informal assessment in Nursery and Prep to unified and board-pattern examinations.",
  alternates: { canonical: "/academics/examination" },
};

export default function Examination() {
  return (
    <div className="content">
      <h2>Nursery, Prep</h2>
      <p>All assessments are carried out in a relaxed and informal manner. There are no formal end of term tests.</p>

      <h2>Class 1 – 7</h2>
      <p>
        Formal mid-year examination is held at the end of the first term and an annual examination at the
        conclusion of the final term. In addition to the examination results, the term marks reflect a student’s
        all round progress, including performance in course-work assignments, projects and tests.
      </p>

      <h2>Class 8 – 10</h2>
      <p>
        Examinations are modeled on the Divisional Board pattern giving due consideration to the academic
        attainment targets of the classes concerned. Trial examinations are held in preparation for the final
        examination after course coverage.
      </p>

      <h2>Unified Examination</h2>
      <p>
        The unified examinations ensure uniformity in syllabus coverage as well as the marking process. These
        examinations enhance the school’s philosophy of continually working towards academic excellence. Each
        campus has developed its own examination cell to ensure sanctity of the examination process.
      </p>
    </div>
  );
}
