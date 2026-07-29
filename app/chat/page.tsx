import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ChatWindow } from "@/components/chat/ChatWindow";

export const metadata: Metadata = {
  title: "Chat | ScrumMaster Hub",
  description: "Ask the Scrum Master Assistant about Agile, Scrum, SAFe, and facilitation.",
};

export default function ChatPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI Assistant"
        title="Scrum Master Assistant"
        description="A friendly, practical chat assistant scoped to Agile, Scrum, SAFe, facilitation, and Jira/Confluence/Azure DevOps questions. Nothing is saved after you refresh."
      />
      <Container className="py-10">
        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white shadow-sm">
          <ChatWindow variant="page" />
        </div>
      </Container>
    </>
  );
}
