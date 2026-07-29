import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { AssessmentApp } from "@/components/assessment/AssessmentApp";

export const metadata: Metadata = {
  title: "Maturity Self-Assessment",
  description:
    "A 35-question self-assessment across 7 dimensions of the Scrum Master and Agile Coach role.",
};

export default function AssessmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Self-Assessment"
        title="Scrum Master Maturity Self-Assessment"
        description="Rate yourself across 7 dimensions of the role. Everything is computed in your browser — nothing is sent to a server or saved."
      />
      <Container className="py-10">
        <AssessmentApp />
      </Container>
    </>
  );
}
