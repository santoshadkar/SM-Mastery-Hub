import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { DeckViewer } from "@/components/workshops/DeckViewer";
import { DeckOutline } from "@/components/workshops/DeckOutline";
import { allWorkshops, getWorkshop, getWorkshopCategory } from "@/lib/content/workshops";
import { allDecks, deckPptxPath, getDeck } from "@/lib/content/workshops/decks";

type PageParams = Promise<{ category: string; slug: string }>;

export function generateStaticParams() {
  return allWorkshops.filter((w) => allDecks.some((d) => d.workshopSlug === w.slug)).map((w) => ({ category: w.category, slug: w.slug }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { category, slug } = await params;
  const workshop = getWorkshop(category, slug);
  const deck = getDeck(slug);
  if (!workshop || !deck) return {};
  return {
    title: `${workshop.title} — presentation deck`,
    description: `${deck.slides.length}-slide presentation for the ${workshop.title} workshop: concepts, live examples, real-life use, ice breakers and further reading.`,
  };
}

export default async function WorkshopDeckPage({ params }: { params: PageParams }) {
  const { category, slug } = await params;
  const workshop = getWorkshop(category, slug);
  const deck = getDeck(slug);
  if (!workshop || !deck) notFound();

  const cat = getWorkshopCategory(category)!;
  const count = (kind: string) => deck.slides.filter((s) => s.kind === kind).length;
  const sourceCount = deck.slides.find((s) => s.kind === "sources")?.sources?.length ?? 0;
  const inside = [
    `${deck.slides.length} slides`,
    "2 ice-breaker options",
    `${count("concept")} concept slides`,
    `${count("example")} live example${count("example") === 1 ? "" : "s"}`,
    "real-life use",
    "hands-on activity",
    `${sourceCount} sources`,
  ];

  return (
    <>
      <PageHeader
        eyebrow={`Workshops / ${cat.name} / Presentation`}
        title={`${workshop.title} — presentation deck`}
        description={`${deck.subtitle}. Present it straight from this page, or download the editable PowerPoint and add your own team's examples.`}
      />
      <Container className="py-8">
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={deckPptxPath(slug)}
            download
            className="rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Download PowerPoint (.pptx)
          </a>
          <Link
            href={`/workshops/${category}/${slug}`}
            className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            &larr; Workshop facilitation guide
          </Link>
        </div>

        <ul className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-slate-700" aria-label="What is inside this deck">
          {inside.map((item) => (
            <li key={item} className="rounded-full bg-slate-100 px-3 py-1">
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-6 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900 sm:hidden">
          On a phone? Slides are small on narrow screens — turn your phone sideways, tap Full screen, or use{" "}
          <span className="font-semibold">Read the whole deck as text</span> below.
        </p>

        <div className="mt-6">
          <DeckViewer deck={deck} />
        </div>

        <details className="mt-10 rounded-xl border border-slate-200 bg-white p-4">
          <summary className="cursor-pointer font-semibold text-slate-900">Read the whole deck as text</summary>
          <p className="mt-2 text-sm text-slate-600">
            A plain-text version of every slide — handy for skimming, searching, or preparing before you present.
          </p>
          <DeckOutline deck={deck} />
        </details>
      </Container>
    </>
  );
}
