/** ScrumMaster Hub mark: an iteration arrow around a centre dot. Keep in sync with app/icon.svg. */
export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#4F46E5" />
      <path
        d="M44.7 23.11 A15.5 15.5 0 1 1 27.99 17.03"
        fill="none"
        stroke="#fff"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path d="M37.16 14.57 L26.12 10.07 L29.85 23.98 Z" fill="#fff" />
      <circle cx="32" cy="32" r="4.4" fill="#fff" />
    </svg>
  );
}
