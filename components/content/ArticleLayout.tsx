import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";

export function ArticleLayout({
  eyebrow,
  title,
  description,
  backHref,
  backLabel,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  backHref: string;
  backLabel: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} description={description} />
      <Container className="py-10">
        <div className="mx-auto max-w-3xl">
          <div className="prose-content">{children}</div>
          <div className="mt-12 border-t border-slate-200 pt-6">
            <Link href={backHref} className="text-sm font-medium text-brand-600 hover:text-brand-700">
              &larr; {backLabel}
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
