import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { ChatProvider } from "@/components/chat/ChatContext";
import { ChatLauncher } from "@/components/chat/ChatLauncher";

export const metadata: Metadata = {
  title: {
    default: "ScrumMaster Hub",
    template: "%s | ScrumMaster Hub",
  },
  description:
    "A content and tools portal for practicing Scrum Masters and Agile Coaches: knowledge base, tool guides, a maturity self-assessment, free resources, and an AI assistant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white font-sans text-slate-900">
        <ChatProvider>
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ChatLauncher />
        </ChatProvider>
      </body>
    </html>
  );
}
