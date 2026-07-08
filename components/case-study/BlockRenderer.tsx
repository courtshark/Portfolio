import type { Block } from "@/lib/types";
import { diagramRegistry } from "@/components/diagrams";
import { cx } from "@/lib/utils";

function SyntheticBadge() {
  return (
    <span className="inline-flex items-center rounded-full border border-amber/20 bg-amber-soft px-2 py-0.5 text-[11px] font-medium text-amber">
      Synthetic example
    </span>
  );
}

export function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return <p className="max-w-prose leading-relaxed text-ink-soft">{block.text}</p>;

    case "list": {
      const ListTag = block.ordered ? "ol" : "ul";
      return (
        <ListTag
          className={cx(
            "max-w-prose space-y-2 pl-5 leading-relaxed text-ink-soft",
            block.ordered ? "list-decimal" : "list-disc marker:text-accent"
          )}
        >
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ListTag>
      );
    }

    case "code":
      return (
        <figure className="overflow-hidden rounded-xl border border-border">
          <figcaption className="flex flex-wrap items-center gap-2 border-b border-border bg-surface-raised px-4 py-2 text-xs text-muted">
            <span className="font-mono uppercase">{block.language}</span>
            {block.label && <span>· {block.label}</span>}
            {block.synthetic && <SyntheticBadge />}
          </figcaption>
          <pre className="overflow-x-auto bg-code-bg p-4 text-[13px] leading-relaxed text-code-ink">
            <code>{block.code}</code>
          </pre>
        </figure>
      );

    case "callout": {
      const styles = {
        note: "border-accent-border bg-accent-soft",
        confidential: "border-amber/20 bg-amber-soft",
        limitation: "border-border-strong bg-surface-raised",
      }[block.tone];
      const defaultTitle = {
        note: "Note",
        confidential: "Confidentiality",
        limitation: "Limitations",
      }[block.tone];
      return (
        <aside className={cx("max-w-prose rounded-xl border p-5", styles)}>
          <p className="text-sm font-semibold text-ink">{block.title ?? defaultTitle}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{block.text}</p>
        </aside>
      );
    }

    case "table":
      return (
        <figure className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border-strong text-left">
                {block.headers.map((h) => (
                  <th key={h} scope="col" className="py-2.5 pr-4 font-semibold text-ink">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-b border-border text-ink-soft">
                  {row.map((cell, j) => (
                    <td key={j} className="py-2.5 pr-4">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {(block.caption || block.synthetic) && (
            <figcaption className="mt-2 flex items-center gap-2 text-xs text-faint">
              {block.caption}
              {block.synthetic && <SyntheticBadge />}
            </figcaption>
          )}
        </figure>
      );

    case "diagram": {
      const Diagram = diagramRegistry[block.diagram];
      return (
        <figure className="rounded-xl border border-border bg-surface p-4 sm:p-6">
          <Diagram />
          <figcaption className="mt-3 text-center text-xs text-faint">{block.caption}</figcaption>
        </figure>
      );
    }

    case "stats":
      return (
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {block.items.map((stat) => (
            <div
              key={`${stat.value}-${stat.label}`}
              className="rounded-xl border border-border bg-surface p-4"
            >
              <dd className="font-serif text-2xl font-medium text-accent-strong">{stat.value}</dd>
              <dt className="mt-1 text-xs leading-snug text-muted">
                {stat.label}
                {stat.note ? ` (${stat.note})` : ""}
              </dt>
            </div>
          ))}
        </dl>
      );
  }
}
