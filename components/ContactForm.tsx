"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const topics = [
  "Hiring a GTM engineer",
  "GTM engineering project",
  "Automation or AI agent",
  "Outbound setup",
  "Analytics or dashboards",
  "Partnership",
  "Something else",
];

type State = { kind: "idle" | "sending" | "sent" | "error"; message?: string; mailto?: string };

export function ContactForm() {
  const [state, setState] = useState<State>({ kind: "idle" });
  const [topic, setTopic] = useState("GTM engineering project");

  // /contact?topic=hiring preselects the hiring option (used by the Skills page)
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("topic") === "hiring") setTopic("Hiring a GTM engineer");
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState({ kind: "sending" });

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(`${data.topic}: ${data.name}`)}&body=${encodeURIComponent(
      `${data.message}\n\n${data.name}\n${data.company || ""}\n${data.email}`,
    )}`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        form.reset();
        setState({ kind: "sent" });
        return;
      }
      if (res.status === 422) {
        setState({ kind: "error", message: json.error });
        return;
      }
      setState({
        kind: "error",
        message: "The message could not be sent from the site. Send it by email instead; your text is already filled in.",
        mailto,
      });
    } catch {
      setState({
        kind: "error",
        message: "The message could not be sent. Check your connection, or send it by email instead.",
        mailto,
      });
    }
  }

  if (state.kind === "sent") {
    return (
      <div className="notice is-ok" role="status">
        Message sent. We reply within one working day, usually sooner.
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="company">Company <span className="hint">(optional)</span></label>
          <input id="company" name="company" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="topic">What is it about?</label>
          <select id="topic" name="topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">{topic === "Hiring a GTM engineer" ? "Tell us about the role" : "How does your team find and follow up with leads today?"}</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder={topic === "Hiring a GTM engineer" ? "The role, the stack you use, contract or full-time, and your time zone." : "A few lines is plenty: what you sell, who to, and where it gets stuck."}
        />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {state.kind === "error" && (
        <div className="notice is-error" role="alert">
          {state.message}{" "}
          {state.mailto && <a href={state.mailto}>Open in email</a>}
        </div>
      )}
      <div>
        <button type="submit" className="btn btn-primary" disabled={state.kind === "sending"}>
          {state.kind === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
