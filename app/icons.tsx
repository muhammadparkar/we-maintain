type IconProps = { className?: string };

const base = "w-full h-full";

export function IconClock({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className ?? base}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 7v5l3.2 2" />
    </svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className ?? base}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6.5-5.8-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.2-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className ?? base}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className ?? base}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 3.5 9 6c.4.6.3 1.3-.2 1.8L7.4 9.2a12.2 12.2 0 0 0 7.4 7.4l1.4-1.4c.5-.5 1.2-.6 1.8-.2l2.5 2.5c.6.6.5 1.6-.2 2-1.3.9-3 1.3-4.5.8-4.6-1.4-9.1-5.9-10.5-10.5-.5-1.5-.1-3.2.8-4.5.4-.7 1.4-.8 2-.2Z" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className ?? base}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconBuildingHome({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className ?? base}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 10.5 12 4l8 6.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9.5V20h12V9.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20v-5h4v5" />
    </svg>
  );
}

export function IconBuildingOffice({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className ?? base}>
      <rect x="6" y="3.5" width="12" height="17" rx="1" />
      <path strokeLinecap="round" d="M9.5 7.5h1M13.5 7.5h1M9.5 11h1M13.5 11h1M9.5 14.5h1M13.5 14.5h1" />
      <path strokeLinecap="round" d="M10.5 20.5V17h3v3.5" />
    </svg>
  );
}

export function IconTeam({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className ?? base}>
      <circle cx="9" cy="8" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 19c.6-3 2.7-4.7 5.5-4.7S13.9 16 14.5 19" />
      <circle cx="17" cy="9" r="2.4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.8 14.5c2.3.2 3.7 1.6 4.2 3.7" />
    </svg>
  );
}

export function IconTools({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className ?? base}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 6.5a3.5 3.5 0 0 0-4.6 4.1L4 16.5V20h3.5l5.9-5.9a3.5 3.5 0 0 0 4.1-4.6l-2.4 2.4-2-2Z" />
    </svg>
  );
}

export function IconHouseCheck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className ?? base}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 10.5 12 4l8 6.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9.5V20h12V9.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9.5 14.2 1.8 1.8 3.2-3.4" />
    </svg>
  );
}

export function IconBadge({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className ?? base}>
      <circle cx="12" cy="10" r="5.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 20 3-3.2 3 3.2-1-4.5h-4L9 20Z" />
    </svg>
  );
}

export function IconQuote({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? base}>
      <path d="M9.5 6C6.5 7 4.5 9.7 4.5 13.2c0 2.7 1.8 4.6 4 4.6 1.9 0 3.3-1.4 3.3-3.2 0-1.7-1.2-3-2.8-3-.3 0-.6 0-.8.1.2-1.7 1.6-3.3 3.3-4l-2-1.7Zm9 0c-3 1-5 3.7-5 7.2 0 2.7 1.8 4.6 4 4.6 1.9 0 3.3-1.4 3.3-3.2 0-1.7-1.2-3-2.8-3-.3 0-.6 0-.8.1.2-1.7 1.6-3.3 3.3-4l-2-1.7Z" />
    </svg>
  );
}

export function IconWrench({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className ?? base}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 6.5a4 4 0 0 1-5.4 4.6L7 18.5a1.8 1.8 0 0 1-2.5-2.5l7.4-7.6A4 4 0 0 1 17.5 4l-2.6 2.6 1.5 1.5L19 5.5Z" />
    </svg>
  );
}

export function IconThumb({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className ?? base}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 11v9H4.5v-9H7Zm0 0 3.5-6.5c.5-1 2-1 2.5.2.3.8.2 1.7-.2 2.4L11.7 10H18a2 2 0 0 1 2 2.3l-1 5A2 2 0 0 1 17 19H7" />
    </svg>
  );
}

export function IconWhatsapp({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? base}>
      <path d="M12 2.5A9.4 9.4 0 0 0 2.6 11.9c0 1.7.4 3.2 1.3 4.6L2.5 21.5l5.2-1.3a9.4 9.4 0 0 0 4.3 1.1 9.4 9.4 0 1 0 0-18.8Zm0 17a7.6 7.6 0 0 1-3.9-1.1l-.3-.2-3 .8.8-2.9-.2-.3a7.6 7.6 0 1 1 6.6 3.7Zm4.2-5.7c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.9 2.3 1 2.4c.1.2 1.7 2.6 4.1 3.6.6.2 1 .4 1.4.5.6.2 1.1.1 1.5.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}
