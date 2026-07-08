import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">404</p>
      <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-ink">
        No data found at this address
      </h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist. Consider it a rare unvalidated input on this
        site.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <ButtonLink href="/">Back home</ButtonLink>
        <ButtonLink href="/projects" variant="secondary">
          Browse projects
        </ButtonLink>
      </div>
    </Container>
  );
}
