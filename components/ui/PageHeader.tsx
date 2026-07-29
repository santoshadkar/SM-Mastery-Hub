import { Container } from "./Container";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <Container className="py-10 sm:py-14">
        {eyebrow ? (
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-600">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-3xl text-lg text-slate-600">{description}</p>
        ) : null}
      </Container>
    </div>
  );
}
