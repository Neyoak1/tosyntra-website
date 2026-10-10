// Hero diagram: how a raw signal becomes a booked meeting, with the accounts
// that drop out at each stage. One marigold pulse travels the spine.

const nodes = [
  { y: 4, title: "Signal", sub: "Hiring, funding, a new leader" },
  { y: 84, title: "Research", sub: "Enrich and verify the account" },
  { y: 164, title: "Score", sub: "Check fit against your ICP" },
  { y: 244, title: "Approve", sub: "A person reviews the draft" },
  { y: 324, title: "Meeting", sub: "Booked and synced to your CRM", end: true },
];

const drops = ["Wrong market", "Bad data", "Low fit", "Not now"];

const SPINE_X = 14;
const NODE_X = 40;
const NODE_W = 272;
const NODE_H = 62;

export function SignalFlow() {
  const top = nodes[0].y + NODE_H / 2;
  const bottom = nodes[nodes.length - 1].y + NODE_H / 2;
  return (
    <figure className="flow" aria-labelledby="flow-cap">
      <figcaption id="flow-cap" className="flow-caption">
        <span>How one account moves through a Tosyntra system</span>
      </figcaption>
      <svg
        viewBox="0 0 470 396"
        role="img"
        aria-label="A signal is researched, scored and approved by a person before it becomes a meeting synced to the CRM. Accounts in the wrong market, with bad data, low fit or poor timing drop out along the way."
      >
        <path className="wire" d={`M ${SPINE_X} ${top} L ${SPINE_X} ${bottom}`} />
        {nodes.map((n, i) => {
          const cy = n.y + NODE_H / 2;
          return (
            <g key={n.title}>
              <path className="wire" d={`M ${SPINE_X} ${cy} L ${NODE_X} ${cy}`} />
              {i < drops.length && (
                <g>
                  <path className="wire-drop" d={`M ${NODE_X + NODE_W} ${cy} L ${NODE_X + NODE_W + 18} ${cy}`} />
                  <text className="drop-label" x={NODE_X + NODE_W + 24} y={cy + 4}>
                    {drops[i]}
                  </text>
                </g>
              )}
              <g className={`node${n.end ? " is-end" : ""}`}>
                <rect x={NODE_X} y={n.y} width={NODE_W} height={NODE_H} rx="10" />
                <text x={NODE_X + 18} y={n.y + 27}>{n.title}</text>
                <text className="sub" x={NODE_X + 18} y={n.y + 48}>{n.sub}</text>
              </g>
            </g>
          );
        })}
        <circle
          className="pulse"
          r="6.5"
          style={{ offsetPath: `path("M ${SPINE_X} ${top} L ${SPINE_X} ${bottom}")` }}
        />
      </svg>
    </figure>
  );
}
