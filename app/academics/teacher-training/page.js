export const metadata = {
  title: "Teachers’ Training",
  description:
    "Training resources and programmes that help the teachers of Khaliqia Educational Complex improve their classroom skills.",
  alternates: { canonical: "/academics/teacher-training" },
};

const resources = [
  "School leadership",
  "Managing schools (administrative staff)",
  "Managing classrooms (teaching faculty)",
  "Achieving goals for higher classroom excellence",
  "Improving student grades",
  "School improvement programs",
  "Teacher / Student assessment manuals",
  "Literacy development",
  "Strategic planning for schools",
  "Guides for school staff development",
  "Learning through technology",
  "Guides for professional development of teachers",
  "Teacher training manuals",
  "School law cases and concepts",
  "Curriculum planning guides",
  "Educational philosophy",
  "Tips and new innovative ideas for fresh teachers",
  "Theory and practices of training teaching faculty",
  "Tips for lecturers",
];

export default function TeacherTraining() {
  return (
    <div className="content">
      <p>
        Khaliqia Educational Complex is working hard to improve and innovate new ways of assisting teaching
        faculty for knowledge-based learning and enhancing their own personal capacity through comprehensive
        resources. Here are just some of the resources that we currently have and are continuing to expand each
        day:
      </p>
      <ul className="cols">{resources.map((r) => <li key={r}>{r}</li>)}</ul>
    </div>
  );
}
