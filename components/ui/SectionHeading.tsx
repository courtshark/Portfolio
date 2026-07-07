interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  as?: "h1" | "h2";
  id?: string;
}

export function SectionHeading({ eyebrow, title, lead, as: Heading = "h2", id }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent-strong">
          {eyebrow}
        </p>
      )}
      <Heading id={id} className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        {title}
      </Heading>
      {lead && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{lead}</p>}
    </div>
  );
}
