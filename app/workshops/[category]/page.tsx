import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { LinkCard } from "@/components/ui/Card";
import { workshopCategories, getWorkshopCategory, getWorkshopsByCategory } from "@/lib/content/workshops";

type PageParams = Promise<{ category: string }>;

export function generateStaticParams() {
  return workshopCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { category } = await params;
  const cat = getWorkshopCategory(category);
  if (!cat) return {};
  return { title: cat.name, description: cat.description };
}

export default async function WorkshopCategoryPage({ params }: { params: PageParams }) {
  const { category } = await params;
  const cat = getWorkshopCategory(category);
  if (!cat) notFound();

  const workshops = getWorkshopsByCategory(category);

  return (
    <>
      <PageHeader eyebrow="Workshops" title={cat.name} description={cat.description} />
      <Container className="py-10">
        <div className="grid gap-6 sm:grid-cols-2">
          {workshops.map((w) => (
            <LinkCard
              key={w.slug}
              href={`/workshops/${category}/${w.slug}`}
              title={w.title}
              description={`${w.objective} (${w.duration})`}
            />
          ))}
        </div>
        <div className="mt-10">
          <Link href="/workshops" className="text-sm font-medium text-brand-600 hover:text-brand-700">
            &larr; Back to Workshops
          </Link>
        </div>
      </Container>
    </>
  );
}
