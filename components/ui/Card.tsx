import Link from "next/link";

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function LinkCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
    >
      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      <span className="mt-4 inline-block text-sm font-medium text-brand-600 group-hover:text-brand-700">
        Read more &rarr;
      </span>
    </Link>
  );
}

export function Callout({
  title,
  children,
  tone = "info",
}: {
  title: string;
  children: React.ReactNode;
  tone?: "info" | "warning";
}) {
  const toneClasses =
    tone === "warning"
      ? "border-amber-300 bg-amber-50"
      : "border-brand-200 bg-brand-50";
  return (
    <div className={`rounded-lg border ${toneClasses} p-5`}>
      <p className="mb-1 font-semibold text-slate-900">{title}</p>
      <div className="text-sm leading-6 text-slate-700">{children}</div>
    </div>
  );
}
