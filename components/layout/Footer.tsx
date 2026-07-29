import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="no-print border-t border-slate-200 bg-slate-50">
      <Container className="flex flex-col gap-4 py-10 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} ScrumMaster Hub. Built for practicing Scrum Masters
          and Agile Coaches.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/knowledge" className="hover:text-brand-700">
            Knowledge Hub
          </Link>
          <Link href="/tools" className="hover:text-brand-700">
            Tools Hub
          </Link>
          <Link href="/workshops" className="hover:text-brand-700">
            Workshops
          </Link>
          <Link href="/assessment" className="hover:text-brand-700">
            Self-Assessment
          </Link>
          <Link href="/resources" className="hover:text-brand-700">
            Resources
          </Link>
        </div>
      </Container>
    </footer>
  );
}
