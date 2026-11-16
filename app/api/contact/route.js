import { NextResponse } from "next/server";

// Sends the message with Resend (https://resend.com). Set these in .env.local (see .env.example):
// RESEND_API_KEY, CONTACT_TO (where you receive messages), CONTACT_FROM (a sender verified in Resend)
export async function POST(req) {
  let b;
  try { b = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  if (b.website) return NextResponse.json({ ok: true }); // spam trap filled: pretend success

  const name = String(b.name || "").trim().slice(0, 100);
  const email = String(b.email || "").trim().slice(0, 150);
  const message = String(b.message || "").trim().slice(0, 3000);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please fill in your name, a valid email and a message." }, { status: 400 });
  }

  const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
    return NextResponse.json({ error: "The inquiry form is not set up yet. Please contact us by phone or email." }, { status: 503 });
  }

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: CONTACT_FROM, to: [CONTACT_TO], reply_to: email,
      subject: `Website inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });
  if (!r.ok) return NextResponse.json({ error: "Could not send your message. Please try again later." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
