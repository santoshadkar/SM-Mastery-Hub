import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { LinkCard } from "@/components/ui/Card";
import { toolEntries } from "@/lib/content/tools";

export const metadata: Metadata = {
  title: "Tools Hub",
  description: "Practical guidance for Scrum Masters using Jira, Confluence, Azure DevOps, and AI.",
};

export default function ToolsHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tools Hub"
        title="Practical guidance for the tools you use daily"
        description="Not a feature tour — a working Scrum Master's take on what to configure, what to watch, and what to ignore."
      />
      <Container className="py-10">
        <div className="grid gap-6 sm:grid-cols-2">
          {toolEntries.map((entry) => (
            <LinkCard
              key={entry.slug}
              href={`/tools/${entry.slug}`}
              title={entry.title}
              description={entry.description}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
