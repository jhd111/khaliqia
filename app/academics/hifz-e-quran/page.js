export const metadata = {
  title: "Hifz-e-Quran",
  description:
    "Hifz-e-Quran programme at Khaliqia Educational Complex: schedule, modern education for Huffaz, features, compulsory Nazra Quran and achievements.",
  alternates: { canonical: "/academics/hifz-e-quran" },
};

// TODO: the figures and achievements below were supplied as given. Replace them with Khaliqia's own.
const stats = [
  ["Total Haffaz", "38,000+"],
  ["Yearly Huffaz", "8,000+"],
  ["Daily Huffaz", "9+"],
  ["Total Qurra", "2,550+"],
];

const schedule = [
  ["حفظ آغاز عمر", "8 سال"],
  ["ترتیب کے مطابق تکمیل حفظ", "ڈھائی سال"],
  ["دھرائی و پختگی منزل", "6 ماہ"],
  ["ٹوٹل عرصہ حفظ", "2 سے 3 سال"],
];

const subjects = ["اردو", "انگلش", "ریاضی"];

const features = [
  "خوبصورت ائرکنڈیشنڈ کلاس رومز",
  "مشفقانہ تربیتی ماحول / ہم نصابی سرگرمیاں",
  "اہداف کے ذریعے مختصر عرصہ میں تکمیل قرآن",
  "داخلی و خارجی امتحانات کا جامع نظام",
  "مانیٹرنگ اور ٹریننگ کا مربوط نظام",
  "طلباء ، اساتذہ اور والدین کی کونسلنگ",
  "ملکی و غیر ملکی مقابلہ جات میں شرکت اورعمدہ کارکردگی",
  "لہجات پر خصوصی توجہ",
  "اخلاقی و کرداری تربیت کا نظام",
];

const nazra = [
  "Completed schedule according to child age",
  "Teachers training (4 a year)",
  "Full assessment and evaluation system by senior Qurra",
  "Phoenix style",
  "Easy Makharij by poem using the TPI method",
  "Competitions for grooming and motivation",
  "Specially designed activities for Quranic education",
];

const achievements = [
  ["Laibba Shahid", "Got 4th position in the International Husn-e-Qiraat competition."],
  ["Abdullah Haroon", "Got the Best Bowler award in PCB ranking, Under 19."],
  ["Fishwa Namoos", "Completed Hifz-e-Quran in only 4 months."],
  ["150 Huffaz in a year (2019)", "Completed Hifz-e-Quran in one year."],
  ["Usman Javed & Shaheer Ayan", "Recited the entire Qur’an in one sitting."],
];

export default function HifzEQuran() {
  return (
    <div className="content">
      <h2>Basic information</h2>
      <ul className="hstats">
        {stats.map(([label, n]) => (
          <li key={label}><strong>{n}</strong><span>{label}</span></li>
        ))}
      </ul>

      <section lang="ur" dir="rtl" className="urdu" aria-label="Hifz programme details in Urdu">
        <h2>شیڈول</h2>
        <dl className="sched">
          {schedule.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>

        <h2>عصری تعلیم</h2>
        <p>حفاظ کیلئے خصوصی تیار کردہ نصاب جس میں درج ذیل مضامین کی بنیادی تعلیم دی جاتی ہے ۔</p>
        <p>
          <strong>مضامین:</strong>{" "}
          {subjects.map((s) => <span className="chip" key={s}>{s}</span>)}
        </p>

        <h2>خصوصیات</h2>
        <ul>{features.map((f) => <li key={f}>{f}</li>)}</ul>
      </section>

      <h2>Nazra Quran (compulsory)</h2>
      <h3>Specification</h3>
      <ul>{nazra.map((n) => <li key={n}>{n}</li>)}</ul>
      <h3>Schedule</h3>
      <ul>
        <li>Start Qaida from Prep class</li>
        <li>Completion period: till 5th class</li>
      </ul>

      <h2>Achievements</h2>
      <ul className="ach">
        {achievements.map(([who, what]) => (
          <li key={who}><strong>{who}</strong> {what}</li>
        ))}
      </ul>
    </div>
  );
}
