import Image from "next/image";

export const metadata = {
  title: "Messages",
  description: "Read messages from the leadership of Khaliqia Educational Complex.",
  alternates: { canonical: "/about/messages" },
};

// TODO: replace names, titles, photos (put files in /public/messages/) and text.
// To add another message, copy one block in this list.
const messages = [
  {
    name: "Chairman's Name",
    role: "Chairman, Khaliqia Educational Complex",
    photo: "/messages/placeholder.svg",
    text: [
      "Education is the strongest gift we can give our children. At Khaliqia Educational Complex we work to give them both knowledge and good character.",
      "A nation grows when its young people are honest, hard-working and well taught. We take this duty seriously, and we thank every parent who trusts us with their child.",
      "Our promise is steady commitment and sincere effort to help every student succeed in this world and the next.",
    ],
  },
  {
    name: "Principal's Name",
    role: "Principal, Khaliqia Educational Complex",
    photo: "/messages/placeholder.svg",
    text: [
      "Welcome to our school. Every child here is known by name and encouraged to do their best.",
      "Our teachers, parents and students work as one team, and together we make learning a joy.",
    ],
  },
];

export default function Messages() {
  return (
    <div className="messages">
      {messages.map((m) => (
        <figure className="msg" key={m.name}>
          <Image src={m.photo} alt={`Photo of ${m.name}`} width={190} height={238} unoptimized />
          <blockquote>
            {m.text.map((t) => <p key={t}>{t}</p>)}
          </blockquote>
          <figcaption><strong>{m.name}</strong>, {m.role}</figcaption>
        </figure>
      ))}
    </div>
  );
}
