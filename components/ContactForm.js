"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    const body = Object.fromEntries(new FormData(f));
    setStatus({ state: "sending", msg: "Sending…" });
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      f.reset();
      setStatus({ state: "ok", msg: "Thank you! Your message has been sent." });
    } catch (err) {
      setStatus({ state: "error", msg: err.message });
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate={false}>
      <div className="ct-two">
        <label><span className="sr">Name</span><input name="name" type="text" placeholder="Name" required maxLength={100} autoComplete="name" /></label>
        <label><span className="sr">Email</span><input name="email" type="email" placeholder="Email" required maxLength={150} autoComplete="email" /></label>
      </div>
      <label><span className="sr">Your message</span><textarea name="message" placeholder="Your message" rows={5} required maxLength={3000} /></label>
      {/* spam trap: real visitors never see or fill this */}
      <div className="trap" aria-hidden="true"><input name="website" tabIndex={-1} autoComplete="off" /></div>
      <button type="submit" className="ct-send" disabled={status.state === "sending"}>Send</button>
      <p className={`ct-status ${status.state}`} role="status" aria-live="polite">{status.msg}</p>
    </form>
  );
}
