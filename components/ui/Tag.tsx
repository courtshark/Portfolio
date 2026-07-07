import { cx } from "@/lib/utils";

export function Tag({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "accent" | "amber";
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        tone === "neutral" && "border-border bg-surface text-muted",
        tone === "accent" && "border-accent-border bg-accent-soft text-accent-strong",
        tone === "amber" && "border-amber/20 bg-amber-soft text-amber"
      )}
    >
      {children}
    </span>
  );
}
