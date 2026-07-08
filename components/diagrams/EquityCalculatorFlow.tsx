import { Arrow, ArrowDefs, DiagramBox } from "./primitives";

export function EquityCalculatorFlow() {
  return (
    <svg
      viewBox="0 0 720 320"
      role="img"
      aria-label="Equity Gap Calculator data flow: four import paths (file upload, pasted data, pre-aggregated entry, and column auto-detection) feed a validation and normalization layer, then the PPG-1 calculation engine, which produces simple results, technical results, and export, share, and print outputs."
      className="h-auto w-full"
    >
      <ArrowDefs />

      {/* Import paths */}
      <DiagramBox x={10} y={16} w={160} h={48} label="File upload" sublabel="CSV · .xlsx · .xls" />
      <DiagramBox x={10} y={92} w={160} h={48} label="Pasted data" sublabel="Excel / table paste" />
      <DiagramBox x={10} y={168} w={160} h={48} label="Pre-aggregated" sublabel="group counts" />
      <DiagramBox x={10} y={244} w={160} h={48} label="Auto-detection" sublabel="header mapping" />

      <Arrow x1={170} y1={40} x2={218} y2={132} />
      <Arrow x1={170} y1={116} x2={218} y2={148} />
      <Arrow x1={170} y1={192} x2={218} y2={162} />
      <Arrow x1={170} y1={268} x2={218} y2={178} />

      {/* Validation */}
      <DiagramBox x={220} y={124} w={145} h={62} label="Validation &" sublabel="normalization" tone="soft" />

      <Arrow x1={365} y1={155} x2={398} y2={155} />

      {/* Engine */}
      <DiagramBox
        x={400}
        y={112}
        w={150}
        h={86}
        label="PPG-1 engine"
        sublabel="thresholds · min-n · gaps"
        tone="accent"
      />

      <Arrow x1={550} y1={135} x2={568} y2={58} />
      <Arrow x1={550} y1={155} x2={568} y2={155} />
      <Arrow x1={550} y1={175} x2={568} y2={252} />

      {/* Outputs */}
      <DiagramBox x={570} y={32} w={140} h={52} label="Simple results" sublabel="plain language" />
      <DiagramBox x={570} y={129} w={140} h={52} label="Technical results" sublabel="rates · gaps · n" />
      <DiagramBox x={570} y={226} w={140} h={52} label="Export · Print" sublabel="Excel · share" />
    </svg>
  );
}
