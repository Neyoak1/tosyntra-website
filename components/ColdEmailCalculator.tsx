"use client";

import { useMemo, useState } from "react";

function NumberField({
  id,
  label,
  hint,
  value,
  onChange,
  min,
  max,
  step = 1,
}: {
  id: string;
  label: string;
  hint?: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step?: number;
}) {
  return (
    <div className="field">
      <label htmlFor={id}>
        {label} {hint && <span className="hint">{hint}</span>}
      </label>
      <input
        id={id}
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        step={step}
        value={Number.isFinite(value) ? value : ""}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

export function ColdEmailCalculator() {
  const [prospects, setProspects] = useState(2000); // new prospects per month
  const [steps, setSteps] = useState(3); // emails per prospect
  const [sendDays, setSendDays] = useState(22); // sending days per month
  const [perMailbox, setPerMailbox] = useState(30); // emails per mailbox per day
  const [perDomain, setPerDomain] = useState(2); // mailboxes per domain
  const [buffer, setBuffer] = useState(20); // % headroom

  const r = useMemo(() => {
    const safe = (n: number, min = 1) => (Number.isFinite(n) && n >= min ? n : min);
    const emailsMonth = safe(prospects, 0) * safe(steps);
    const perDay = emailsMonth / safe(sendDays);
    const mailboxesRaw = perDay / safe(perMailbox);
    const mailboxes = Math.max(1, Math.ceil(mailboxesRaw * (1 + Math.max(0, buffer) / 100)));
    const domains = Math.max(1, Math.ceil(mailboxes / safe(perDomain)));
    return { emailsMonth, perDay: Math.ceil(perDay), mailboxes, domains };
  }, [prospects, steps, sendDays, perMailbox, perDomain, buffer]);

  const fmt = (n: number) => n.toLocaleString("en-GB");

  return (
    <div className="tool">
      <form className="form" onSubmit={(e) => e.preventDefault()} aria-label="Your outbound plan">
        <NumberField id="prospects" label="New prospects per month" value={prospects} onChange={setProspects} min={0} max={1000000} step={100} />
        <div className="form-row">
          <NumberField id="steps" label="Emails per prospect" hint="(incl. follow-ups)" value={steps} onChange={setSteps} min={1} max={10} />
          <NumberField id="days" label="Sending days per month" value={sendDays} onChange={setSendDays} min={1} max={31} />
        </div>
        <div className="form-row">
          <NumberField id="mailbox" label="Emails per mailbox per day" hint="(30–50 is typical)" value={perMailbox} onChange={setPerMailbox} min={1} max={200} />
          <NumberField id="domain" label="Mailboxes per domain" hint="(2–3 is typical)" value={perDomain} onChange={setPerDomain} min={1} max={10} />
        </div>
        <NumberField id="buffer" label="Spare capacity" hint="(% extra, so you can rest a mailbox)" value={buffer} onChange={setBuffer} min={0} max={100} step={5} />
      </form>

      <div className="tool-results" aria-live="polite">
        <h2>What you need</h2>
        <div className="result-big">
          <div>
            <strong>{fmt(r.domains)}</strong>
            <span>sending domains</span>
          </div>
          <div>
            <strong>{fmt(r.mailboxes)}</strong>
            <span>mailboxes</span>
          </div>
          <div>
            <strong>{fmt(r.perDay)}</strong>
            <span>emails per sending day</span>
          </div>
          <div>
            <strong>{fmt(r.emailsMonth)}</strong>
            <span>emails per month</span>
          </div>
        </div>
        <p>
          Warm each new mailbox for around two to four weeks before sending at full volume, and set up SPF, DKIM and
          DMARC on every domain. Keep cold email off your main domain.
        </p>
      </div>
    </div>
  );
}
