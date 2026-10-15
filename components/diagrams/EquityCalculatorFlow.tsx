import { Arrow, ArrowDefs, DiagramBox } from "./primitives";

export function EquityCalculatorFlow() {
  return (
    <svg
      viewBox="0 0 720 300"
      role="img"
      aria-label="DI Calculator data flow: three import paths (CSV or .xlsx upload, pasted Excel data, and pre-aggregated counts) feed column mapping and validation, then the PPG-1 engine (margin of error, n ≤ 10, and gap to close), producing simple and technical results, then a privacy plan (small-group and complementary suppression with a reconstruction check) before CSV and print output. In the public demo, import is disabled and only synthetic sample data is used."
      className="h-auto w-full"
    >
      <ArrowDefs />

      {/* Import paths */}
      <DiagramBox x={8} y={18} w={140} h={44} label="CSV · .xlsx" sublabel="file upload" />
      <DiagramBox x={8} y={76} w={140} h={44} label="Pasted data" sublabel="from Excel" />
      <DiagramBox x={8} y={134} w={140} h={44} label="Pre-aggregated" sublabel="group counts" />

      <Arrow x1={148} y1={40} x2={170} y2={88} />
      <Arrow x1={148} y1={98} x2={170} y2={98} />
      <Arrow x1={148} y1={156} x2={170} y2={108} />

      {/* Mapping & validation */}
      <DiagramBox
        x={172}
        y={66}
        w={142}
        h={62}
        label="Validation"
        sublabel="mapping · filters · dimensions"
        tone="soft"
      />
      <Arrow x1={314} y1={97} x2={340} y2={97} />

      {/* PPG-1 engine */}
      <DiagramBox
        x={342}
        y={62}
        w={152}
        h={70}
        label="PPG-1 engine"
        sublabel="MoE · n ≤ 10 · gap to close"
        tone="accent"
      />
      <Arrow x1={494} y1={97} x2={520} y2={95} />

      {/* Results → privacy plan → export (vertical tail) */}
      <DiagramBox x={522} y={66} w={150} h={58} label="Results" sublabel="simple / technical" />
      <Arrow x1={597} y1={124} x2={597} y2={150} />
      <DiagramBox
        x={522}
        y={150}
        w={150}
        h={58}
        label="Privacy plan"
        sublabel="suppression · recon check"
        tone="soft"
      />
      <Arrow x1={597} y1={208} x2={597} y2={234} />
      <DiagramBox x={522} y={234} w={150} h={50} label="CSV · Print" sublabel="privacy applied" />
    </svg>
  );
}
