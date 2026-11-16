export const metadata = {
  title: "Admission Procedure",
  description:
    "How to apply to Khaliqia Educational Complex: eligibility, registration, admission test, admission formalities, fees and rules of payment.",
  alternates: { canonical: "/admission" },
};

// TODO: add the age for each level, e.g. ["Nursery", "3 years"]. Ages are counted on 31st July.
const classLevels = [];

const arrow = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
);

const receive = ["Relevant fee structure slip", "Appointment card with testing date & time on it", "Registration receipt", "Prospectus purchase cash receipt", "Admission and fee payment information", "Prospectus & newsletter (if any)"];
const documents = ["A photocopy of Provisional Certificate and Character Certificate from last institution attended", "2 recent passport size photographs", "Attested photocopy of Birth Certificate", "Report card from last school"];
const fees = [["A", "Registration Fee", "Non-refundable"], ["B", "Admission Fee", "Non-refundable"], ["C", "Security Fee", "Refundable"], ["D", "Tuition Fee", "Payable every two months"], ["E", "Computer Fee", "Payable every two months"]];
const given = ["Admission Order (original)", "Book List", "Uniform List"];
const notes = ["Fee is subject to annual review.", "Family packages are available in selected schools.", "Application forms are available at the school office and should be filled in the school."];
const payment = [
  "Fees are charged for all twelve months of the year and are payable every month.",
  "Parents have the option to pay the fee for the whole year as a lump sum.",
  "The fees payable for the period of the summer vacation are paid in advance and prior to closure.",
  "Once the fee bill has been issued, payment is made directly to the bank where the school operates its account. Parents must pay the fees by the date specified on the fee bill.",
  "Fees paid after the due date is subject to a flat surcharge as specified on the fee bill.",
  "If the tuition fee has not been paid by the end of the second month, the student is automatically withdrawn.",
];
const rules = [
  "Applications for Class 1 onward are tested in three subjects: English, Urdu and Mathematics.",
  "The passing percentage is 50%. Duration of each paper is approximately 30 minutes.",
  "For the written test, the child should come properly equipped with a pencil, eraser, sharpener and ruler.",
  "The papers are not set from any specific textbooks or syllabus but are of a general nature designed to test the aptitude of the child in the basic subjects.",
  "The test paper is not shown to anyone and only marks are communicated to the parents / guardians.",
  "A candidate caught cheating during the admission test will be rejected.",
  "The list displaying names of selected candidates will be put up on the notice board of the concerned branch on the date given by the school.",
];

const List = ({ items }) => <ul>{items.map((x) => <li key={x}>{x}</li>)}</ul>;

export default function Admission() {
  return (
    <>
      {/* 1 */}
      <section className="adm" id="eligibility">
        <div className="adm-in">
          <header className="sec-head">
            <h2>1. Eligibility</h2>
            <p>Interested in admission for your child at Khaliqia Educational Complex? Please check the age required for each level.</p>
          </header>
          <div className="tbl-wrap">
            <table className="tbl">
              <thead><tr><th scope="col">Class levels</th><th scope="col">Age on July 31st</th></tr></thead>
              <tbody>
                {classLevels.length
                  ? classLevels.map(([c, a]) => <tr key={c}><td>{c}</td><td>{a}</td></tr>)
                  : <tr><td colSpan={2} className="empty">Age details will be added soon. Please contact the school office.</td></tr>}
              </tbody>
            </table>
          </div>
          <div className="btn-row"><a className="btn with-ico" href="#registration">{arrow}Registration</a></div>
        </div>
      </section>

      {/* 2 */}
      <section className="adm grey" id="registration">
        <div className="adm-in">
          <header className="sec-head">
            <h2>2. Register for Admission Test</h2>
            <p>Parents wishing to admit a child should first register for admission test.</p>
          </header>
          <List items={[
            "Register for an admission test by completing the admission form at the school office and taking an appointment card for the test and interview.",
            "Registration does not in any way confirm or guarantee admission. It is subject to getting through an admission test / interview and availability of the seat.",
            "The class for which a child is tested is determined according to the child’s age as of 31st July (28th/29th February in case of Balochistan).",
          ]} />
          <div className="btn-row"><a className="btn with-ico" href="#admission-test">{arrow}Admission Test</a></div>
        </div>
      </section>

      {/* 3 */}
      <section className="adm" id="admission-test">
        <div className="adm-in">
          <header className="sec-head">
            <svg className="adm-icon" width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 10h30a6 6 0 016 6v6H24v26a6 6 0 01-12 0V16a6 6 0 016-6zM24 22v26a6 6 0 006 6h22a6 6 0 006-6v-4H36"/></svg>
            <h2>3. Admission Test</h2>
            <p>Our assessment process combines a written test taken by the child with an interview of the parents.</p>
          </header>
          <h3>Nursery – Prep</h3>
          <p>An informal individual assessment test is taken combined with an interview with both the parents. Generally, the reading level of a child, the vocabulary and concepts of colours and numbers are assessed. In addition, the confidence of the child, the level of spoken English and motor skills are taken into consideration.</p>
          <h3>Class 1 onward</h3>
          <List items={rules} />
          <p><strong>In all cases, merit is the sole criterion for admission. The decision of the school cannot be challenged in any way and will be final.</strong></p>
          <div className="btn-row"><a className="btn with-ico" href="#formalities">{arrow}Admission Formalities</a></div>
        </div>
      </section>

      {/* 4 */}
      <section className="adm grey" id="formalities">
        <div className="adm-in">
          <header className="sec-head">
            <h2>4. Admission Formalities</h2>
            <p>Parents are bound to fulfill all admission formalities.</p>
          </header>
          <ol className="steps">
            <li>Parents fill in the admission form and pay the registration fees after which they receive:<List items={receive} /></li>
            <li>The documents to be attached with the admission form include:<List items={documents} /></li>
            <li>Test and interview with both the parents on the specified date.</li>
            <li>Result is finalised within a week of the test and displayed on the notice board. Parents are informed about further formalities.</li>
            <li>Parents are given the admission fee bill, payable by a certain due date in a specific bank as mentioned on the fee bill.</li>
            <li>
              The following fees are payable:
              <div className="tbl-wrap">
                <table className="tbl">
                  <thead><tr><th scope="col">No.</th><th scope="col">Fee</th><th scope="col">Terms</th></tr></thead>
                  <tbody>{fees.map(([n, f, t]) => <tr key={n}><td>{n}</td><td>{f}</td><td>{t}</td></tr>)}</tbody>
                </table>
              </div>
            </li>
            <li>On receipt of paid fee bill, parents are given:<List items={given} /></li>
          </ol>
          <h3>Note</h3>
          <List items={notes} />
          <h3>Rules of payment</h3>
          <List items={payment} />
        </div>
      </section>

      {/* 5 */}
      <section className="adm" id="success">
        <div className="adm-in">
          <header className="sec-head">
            <h2>5. Success</h2>
            <p>You will be welcomed into a thriving student-led learning environment.</p>
          </header>
          <p>
            We are committed to ensuring that our pupils receive the best pastoral care and support, so that they
            feel happy and safe here and are able to thrive and achieve academically. Our Student Services team
            are all trained to work with young people, and as part of the team we have other students who support
            the application process.
          </p>
        </div>
      </section>
    </>
  );
}
