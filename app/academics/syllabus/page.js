import Blocks from "../../../components/Blocks";
import SyllabusTabs from "../../../components/SyllabusTabs";
import { parse, general, levels } from "../../../lib/syllabus";

export const metadata = {
  title: "Syllabus",
  description:
    "Admission information and class-wise syllabus for Play Group, Nursery, Prep and Classes 1 to 8 at Khaliqia Educational Complex.",
  alternates: { canonical: "/academics/syllabus" },
};

export default function Syllabus() {
  const parsed = levels.map((l) => ({ id: l.id, label: l.label, blocks: parse(l.text) }));
  return (
    <div className="content">
      <Blocks blocks={parse(general)} />
      <h2>Admission syllabi for Khaliqia Educational Complex</h2>
      <SyllabusTabs levels={parsed} />
    </div>
  );
}
