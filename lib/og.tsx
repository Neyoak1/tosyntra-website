// Shared social preview card (the image shown when a link is shared on LinkedIn, WhatsApp, X).
export const ogSize = { width: 1200, height: 630 };

export function OgCard({ title, kicker }: { title: string; kicker: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#eef1ec",
        padding: "64px 72px",
        fontFamily: "sans-serif",
        color: "#10231e",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <svg width="56" height="56" viewBox="0 0 32 32">
          <rect width="32" height="32" rx="8" fill="#10231e" />
          <path d="M8 22 L16 10 L24 22" fill="none" stroke="#dbe8e1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="8" cy="22" r="3" fill="#dbe8e1" />
          <circle cx="16" cy="10" r="3" fill="#dbe8e1" />
          <circle cx="24" cy="22" r="3.4" fill="#f4a21c" />
        </svg>
        <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1.5 }}>Tosyntra</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ fontSize: 30, color: "#0b6e4f", fontWeight: 600 }}>{kicker}</div>
        <div style={{ fontSize: title.length > 60 ? 58 : 70, fontWeight: 700, lineHeight: 1.04, letterSpacing: -2, maxWidth: 1000 }}>
          {title}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#5d6e67" }}>
        <span>tosyntra.com</span>
        <span>GTM engineering · AI automation · Outbound</span>
      </div>
    </div>
  );
}
