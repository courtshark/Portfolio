import { Arrow, ArrowDefs, DiagramBox } from "./primitives";

export function CertificatePipeline() {
  return (
    <svg
      viewBox="0 0 720 260"
      role="img"
      aria-label="Certificate eligibility pipeline: over five hundred public program pages are scraped with Python and R into structured requirement rules; student records are queried with SQL into course completions; both feed a business-rule matching layer that produces a validated list of over two hundred eligible students used for outreach."
      className="h-auto w-full"
    >
      <ArrowDefs />

      {/* Top path: public data */}
      <DiagramBox x={10} y={24} w={150} h={54} label="Public pages" sublabel="500+ scraped" />
      <Arrow x1={160} y1={51} x2={188} y2={51} />
      <DiagramBox x={190} y={24} w={150} h={54} label="Scraping" sublabel="Python · R" tone="soft" />
      <Arrow x1={340} y1={51} x2={396} y2={106} />

      {/* Bottom path: student data */}
      <DiagramBox x={10} y={182} w={150} h={54} label="Student records" sublabel="institutional SIS" />
      <Arrow x1={160} y1={209} x2={188} y2={209} />
      <DiagramBox x={190} y={182} w={150} h={54} label="SQL extraction" sublabel="completions" tone="soft" />
      <Arrow x1={340} y1={209} x2={396} y2={154} />

      {/* Matching */}
      <DiagramBox
        x={398}
        y={100}
        w={160}
        h={60}
        label="Rule matching"
        sublabel="requirements × records"
        tone="accent"
      />
      <Arrow x1={558} y1={130} x2={586} y2={130} />

      <DiagramBox x={588} y={100} w={122} h={60} label="Outreach list" sublabel="200+ students" />
    </svg>
  );
}
