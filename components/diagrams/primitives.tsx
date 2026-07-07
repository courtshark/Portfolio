/**
 * Shared primitives for the hand-drawn SVG architecture diagrams.
 * Colors come from the design tokens so diagrams match the site theme.
 */

export function DiagramBox({
  x,
  y,
  w,
  h,
  label,
  sublabel,
  tone = "neutral",
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sublabel?: string;
  tone?: "neutral" | "accent" | "soft";
}) {
  const fill =
    tone === "accent" ? "var(--accent)" : tone === "soft" ? "var(--accent-soft)" : "var(--surface)";
  const stroke = tone === "accent" ? "var(--accent-strong)" : "var(--border-strong)";
  const text = tone === "accent" ? "#ffffff" : "var(--ink)";
  const subtext = tone === "accent" ? "rgba(255,255,255,0.8)" : "var(--muted)";
  const cx = x + w / 2;

  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={8} fill={fill} stroke={stroke} strokeWidth={1} />
      <text
        x={cx}
        y={sublabel ? y + h / 2 - 4 : y + h / 2 + 4}
        textAnchor="middle"
        fontSize={12.5}
        fontWeight={600}
        fill={text}
      >
        {label}
      </text>
      {sublabel && (
        <text x={cx} y={y + h / 2 + 13} textAnchor="middle" fontSize={11} fill={subtext}>
          {sublabel}
        </text>
      )}
    </g>
  );
}

export function Arrow({
  x1,
  y1,
  x2,
  y2,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="var(--faint)"
      strokeWidth={1.3}
      markerEnd="url(#arrowhead)"
    />
  );
}

export function ArrowDefs() {
  return (
    <defs>
      <marker
        id="arrowhead"
        markerWidth="8"
        markerHeight="8"
        refX="7"
        refY="4"
        orient="auto"
        markerUnits="userSpaceOnUse"
      >
        <path d="M1 1l6 3-6 3" fill="none" stroke="var(--faint)" strokeWidth={1.3} />
      </marker>
    </defs>
  );
}
