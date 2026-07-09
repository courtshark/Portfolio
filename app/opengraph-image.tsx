import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — Analytics, Automation & Data Products`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand tokens mirrored from globals.css (ImageResponse can't read CSS vars).
const BACKGROUND = "#fbfaf8";
const INK = "#1c1b1a";
const MUTED = "#57534e";
const ACCENT = "#14574a";
const BORDER = "#e7e4df";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BACKGROUND,
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: ACCENT,
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 600,
          }}
        >
          {site.name} · {site.role}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div style={{ display: "flex", fontSize: 76, lineHeight: 1.1, color: INK, maxWidth: "980px" }}>
            {site.headline}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              lineHeight: 1.4,
              color: MUTED,
              maxWidth: "900px",
              fontFamily: "Helvetica, Arial, sans-serif",
            }}
          >
            Analytics, automation, and data products across higher education, healthcare technology,
            and operations.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            borderTop: `2px solid ${BORDER}`,
            paddingTop: "28px",
            fontSize: 26,
            color: MUTED,
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          <div style={{ display: "flex", width: 14, height: 14, borderRadius: 7, background: ACCENT }} />
          courtneyyoungberg.com
        </div>
      </div>
    ),
    { ...size }
  );
}
