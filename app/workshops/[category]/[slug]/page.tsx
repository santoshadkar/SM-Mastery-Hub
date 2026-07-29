import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Callout } from "@/components/ui/Card";
import { allWorkshops, getWorkshop, getWorkshopCategory, getWorkshopsByCategory } from "@/lib/content/workshops";

type PageParams = Promise<{ category: string; slug: string }>;

export function generateStaticParams() {
  return allWorkshops.map((w) => ({ category: w.category, slug: w.slug }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { category, slug } = await params;
  const workshop = getWorkshop(category, slug);
  if (!workshop) return {};
  return { title: workshop.title, description: workshop.objective };
}

export default async function WorkshopPage({ params }: { params: PageParams }) {
  const { category, slug } = await params;
  const workshop = getWorkshop(category, slug);
  if (!workshop) notFound();

  const cat = getWorkshopCategory(category)!;
  const related = getWorkshopsByCategory(category).filter((w) => w.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader eyebrow={`Workshops / ${cat.name}`} title={workshop.title} description={workshop.objective} />
      <Container className="py-10">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-brand-50 px-3 py-1 font-medium text-brand-700">
              Duration: {workshop.duration}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
              Audience: {workshop.audience}
            </span>
          </div>

          <div className="prose-content mt-6">
            <h2>Why it matters</h2>
            <p>{workshop.whyItMatters}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-slate-900">Materials</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
              {workshop.materials.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-slate-900">Agenda</h2>
            <div className="mt-4 space-y-4">
              {workshop.agenda.map((step, i) => (
                <div key={i} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4">
                  <div className="w-20 shrink-0 text-sm font-semibold text-brand-600">{step.time}</div>
                  <div>
                    <p className="font-semibold text-slate-900">{step.step}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Callout title="Facilitator tips">
              <ul className="list-disc space-y-1.5 pl-5">
                {workshop.facilitatorTips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </Callout>
          </div>

          {related.length > 0 ? (
            <div className="mt-14 border-t border-slate-200 pt-8">
              <h2 className="text-lg font-bold text-slate-900">More from {cat.name}</h2>
              <ul className="mt-4 space-y-3">
                {related.map((w) => (
                  <li key={w.slug}>
                    <Link
                      href={`/workshops/${category}/${w.slug}`}
                      className="font-medium text-brand-600 hover:text-brand-700"
                    >
                      {w.title} &rarr;
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-10 border-t border-slate-200 pt-6">
            <Link href={`/workshops/${category}`} className="text-sm font-medium text-brand-600 hover:text-brand-700">
              &larr; Back to {cat.name}
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
