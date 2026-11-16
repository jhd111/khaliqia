import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Contact Khaliqia Educational Complex by phone, email or in person, find us on the map, or send us an inquiry online.",
  alternates: { canonical: "/contact" },
};

// TODO: put your real details here.
const PHONE = "+92 000 0000000";
const EMAIL = "info@example.com";
const ADDRESS = "Your school address, city";
// Google Maps > Share > Embed a map > copy the src="..." link of the iframe and paste it here.
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.119595338159!2d75.1534823!3d32.267499199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c061e09e2d9af%3A0x910d7a2b182f80e9!2skhaliqia%20eductional%20complex!5e1!3m2!1sen!2s!4v1794833243738!5m2!1sen!2s";
const MAP_LINK = "https://maps.app.goo.gl/nnJNXWvZArqy4hi17";

const icon = { width: 72, height: 72, viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: 3.5, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

const items = [
  { title: "By phone", text: "Call us during office hours.", detail: <a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>,
    svg: <svg {...icon}><path d="M16 8h10l4 12-6 4a34 34 0 0016 16l4-6 12 4v10a6 6 0 01-6 6C28 54 10 36 10 14a6 6 0 016-6z" /></svg> },
  { title: "By email", text: "Write to us at the following address.", detail: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>,
    svg: <svg {...icon}><rect x="6" y="14" width="52" height="36" rx="4" /><path d="M8 18l24 18 24-18" /></svg> },
  { title: "Visit us", text: "Visit us in person and meet our representatives.", detail: <span>{ADDRESS}</span>,
    svg: <svg {...icon}><path d="M32 58S12 38 12 24a20 20 0 0140 0c0 14-20 34-20 34z" /><circle cx="32" cy="24" r="7" /></svg> },
  { title: "Write us", text: "Send an inquiry by filling in the form below.", detail: <a href="#contact-form">Open the inquiry form</a>,
    svg: <svg {...icon}><path d="M10 54V16a4 4 0 014-4h36a4 4 0 014 4v38l-8-6-8 6-8-6-8 6-8-6z" /><path d="M20 24h24M20 34h16" /></svg> },
];

export default function Contact() {
  return (
    <>
      <section className="ct-info wrap" aria-label="Ways to contact us">
        <ul>
          {items.map((it) => (
            <li key={it.title}>
              <div className="ct-ico">{it.svg}</div>
              <h2>{it.title}</h2>
              <p>{it.text}</p>
              <p className="ct-detail">{it.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="ct-map" aria-labelledby="map-h">
        <h2 id="map-h">Locate us on Google Maps</h2>
        {MAP_EMBED_URL ? (
          <iframe title="Map showing the location of Khaliqia Educational Complex" src={MAP_EMBED_URL} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        ) : (
          <div className="ct-map-ph">Add your Google Maps embed link in <code>app/contact/page.js</code></div>
        )}
        {MAP_LINK && <p className="ct-maplink"><a href={MAP_LINK} target="_blank" rel="noopener noreferrer">Open in Google Maps</a></p>}
      </section>

      <section className="ct-form" id="contact-form" aria-labelledby="form-h">
        <div className="ct-form-in">
          <h2 id="form-h" className="sr">Send us an inquiry</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
