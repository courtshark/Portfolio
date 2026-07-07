import { Arrow, ArrowDefs, DiagramBox } from "./primitives";

export function DatacenterTrackerPipeline() {
  return (
    <svg
      viewBox="0 0 720 300"
      role="img"
      aria-label="AI Infrastructure Research Desk pipeline: social sources (Reddit and StockTwits), SEC EDGAR filings, and news and market data feed Python ingestion collectors, which feed a zero-to-one-hundred signal scoring engine, stored in a SQLite research model, and served through a local API to a web interface showing watchlists, signals, and premarket views."
      className="h-auto w-full"
    >
      <ArrowDefs />

      {/* Sources */}
      <DiagramBox x={10} y={16} w={150} h={52} label="Social signals" sublabel="Reddit · StockTwits" />
      <DiagramBox x={10} y={124} w={150} h={52} label="SEC EDGAR" sublabel="filings & events" />
      <DiagramBox x={10} y={232} w={150} h={52} label="News & market" sublabel="prices · headlines" />

      <Arrow x1={160} y1={42} x2={208} y2={130} />
      <Arrow x1={160} y1={150} x2={208} y2={150} />
      <Arrow x1={160} y1={258} x2={208} y2={170} />

      {/* Ingestion */}
      <DiagramBox x={210} y={122} w={140} h={56} label="Ingestion" sublabel="Python collectors" tone="soft" />
      <Arrow x1={350} y1={150} x2={378} y2={150} />

      {/* Scoring */}
      <DiagramBox x={380} y={116} w={140} h={68} label="Signal scoring" sublabel="0–100 keyword engine" tone="accent" />

      {/* Store + UI */}
      <DiagramBox x={550} y={40} w={160} h={52} label="SQLite model" sublabel="companies · relationships" />
      <DiagramBox x={550} y={208} w={160} h={52} label="Web UI" sublabel="watchlists · premarket" />
      <Arrow x1={630} y1={92} x2={630} y2={206} />
      <Arrow x1={520} y1={132} x2={548} y2={78} />

      <text x={638} y={155} fontSize={11} fill="var(--muted)">
        local API
      </text>
    </svg>
  );
}
