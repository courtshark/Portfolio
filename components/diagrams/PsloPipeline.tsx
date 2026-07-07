import { Arrow, ArrowDefs, DiagramBox } from "./primitives";

export function PsloPipeline() {
  return (
    <svg
      viewBox="0 0 720 240"
      role="img"
      aria-label="PSLO automation pipeline: a program URL inventory feeds automated collection across 300+ pages, then extraction and structuring, then workbook generation producing 300+ Excel files, then QA and reconciliation. Pages that fail parsing route to a manual review queue that feeds back into structuring."
      className="h-auto w-full"
    >
      <ArrowDefs />

      <DiagramBox x={10} y={40} w={128} h={56} label="URL inventory" sublabel="300+ programs" />
      <Arrow x1={138} y1={68} x2={158} y2={68} />

      <DiagramBox x={160} y={40} w={128} h={56} label="Collection" sublabel="page content" />
      <Arrow x1={288} y1={68} x2={308} y2={68} />

      <DiagramBox x={310} y={40} w={128} h={56} label="Extraction" sublabel="structuring" tone="soft" />
      <Arrow x1={438} y1={68} x2={458} y2={68} />

      <DiagramBox x={460} y={40} w={128} h={56} label="Generation" sublabel="300+ workbooks" tone="accent" />
      <Arrow x1={588} y1={68} x2={608} y2={68} />

      <DiagramBox x={610} y={40} w={100} h={56} label="QA" sublabel="reconciliation" />

      {/* Exception path */}
      <Arrow x1={374} y1={96} x2={374} y2={148} />
      <DiagramBox x={310} y={150} w={128} h={52} label="Exception queue" sublabel="manual review" tone="soft" />
      <Arrow x1={438} y1={176} x2={510} y2={98} />

      <text x={382} y={130} fontSize={11} fill="var(--muted)">
        unparseable pages
      </text>
    </svg>
  );
}
