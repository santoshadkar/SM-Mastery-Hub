export type IconProps = { className?: string };

const base = "h-6 w-6";

export function IconCompass({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
      <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.5 9.5 13 13l-3.5 1.5L11 11l3.5-1.5Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconWrench({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.7 6.3a4 4 0 0 0-5.4 4.6L4 16.2V19h2.8l5.3-5.3a4 4 0 0 0 4.6-5.4l-2.6 2.6-2-.6-.6-2 2.6-2.6Z"
      />
    </svg>
  );
}

export function IconTarget({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconBookOpen({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.5c-1.4-1.2-3.4-1.8-5.5-1.8-.6 0-1 .4-1 1v11c0 .6.4 1 1 1 2.1 0 4.1.6 5.5 1.8 1.4-1.2 3.4-1.8 5.5-1.8.6 0 1-.4 1-1v-11c0-.6-.4-1-1-1-2.1 0-4.1.6-5.5 1.8Z"
      />
      <path strokeLinecap="round" d="M12 6.5v12" />
    </svg>
  );
}

export function IconChartBar({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 19V10M12 19V5M19 19v-7" />
    </svg>
  );
}

export function IconUsers({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path strokeLinecap="round" d="M3.5 19c.6-3 2.8-5 5.5-5s4.9 2 5.5 5" />
      <circle cx="17" cy="9" r="2.3" />
      <path strokeLinecap="round" d="M15.8 14.2c1.9.4 3.4 2 3.9 4.3" />
    </svg>
  );
}

export function IconLayers({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m12 4 8 4.5-8 4.5-8-4.5L12 4Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 13 8 4.5 8-4.5" />
    </svg>
  );
}

export function IconLightbulb({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6M10 21h4M8 12a4 4 0 1 1 8 0c0 1.8-1 2.6-1.6 3.4-.4.5-.4 1.1-.4 1.6H10c0-.5 0-1.1-.4-1.6C9 14.6 8 13.8 8 12Z" />
    </svg>
  );
}

export function IconSparkles({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4M12 17v4M4 12h4M16 12h4M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M6.3 17.7l2.1-2.1M15.6 8.4l2.1-2.1" />
    </svg>
  );
}

export function IconClipboardCheck({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
      <rect x="6" y="4" width="12" height="16" rx="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 4V3.5A1.5 1.5 0 0 1 10.5 2h3A1.5 1.5 0 0 1 15 3.5V4M9 13l2 2 4-4" />
    </svg>
  );
}

export function IconBoard({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
      <rect x="3.5" y="4" width="17" height="16" rx="1.5" />
      <path strokeLinecap="round" d="M8.5 8v9M13 8v5.5M17.5 8v7" />
    </svg>
  );
}
