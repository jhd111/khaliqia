import Image from "next/image";

export const metadata = {
  title: "Uniform",
  description:
    "School uniform for kids, Hifz students and senior students at Khaliqia Educational Complex, for boys and girls.",
  alternates: { canonical: "/admission/uniform" },
};

// TODO: check every item against Khaliqia's real uniform, and replace the placeholder photos
// (put your photos in /public/uniform/ and change the paths below).
const boysPhoto = "/uniform/boys.svg";
const girlsPhoto = "/uniform/girls.svg";

const sections = [
  {
    id: "kids", title: "Kids Uniform", photos: [boysPhoto, girlsPhoto],
    boys: ["Green Check Shirt", "Light Green Pants", "Green Blazer", "Black Shoes", "Black Socks"],
    girls: ["Green Check Frock", "White Shalwar", "White Scarf & Green Blazer", "Black Shoes", "Black Socks"],
  },
  {
    id: "hifz", title: "Hifz Students’ Uniform",
    boys: ["White Shalwar Qamiz", "Black Waist Coat", "Green Blazer", "Black Shoes", "Black Socks"],
    girls: ["White Shalwar Qamiz", "White Dopatta or White Scarf or Veil", "Black Shoes", "Black Socks"],
  },
  {
    id: "senior", title: "Senior Students’ Uniform", photos: [boysPhoto, girlsPhoto],
    boys: ["Green Check Shirt", "Light Green Pants", "Green Blazer", "Black Shoes", "Black Socks"],
    girls: ["Green Check Qamiz", "White Shalwar", "Green Blazer & White Scarf", "Black Shoes", "Black Socks"],
  },
];

export default function Uniform() {
  return (
    <div className="uni">
      {sections.map((s) => (
        <section key={s.id} aria-labelledby={`${s.id}-h`}>
          <h2 id={`${s.id}-h`}>{s.title}</h2>
          <div className={`uni-row ${s.photos ? "" : "nophoto"}`}>
            {s.photos && (
              <Image className="uni-photo pl" src={s.photos[0]} alt={`${s.title}: boys`} width={300} height={360} unoptimized />
            )}
            <div className="uni-card boys">
              <h3>Boys</h3>
              <ul>{s.boys.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div className="uni-card girls">
              <h3>Girls</h3>
              <ul>{s.girls.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            {s.photos && (
              <Image className="uni-photo pr" src={s.photos[1]} alt={`${s.title}: girls`} width={300} height={360} unoptimized />
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
