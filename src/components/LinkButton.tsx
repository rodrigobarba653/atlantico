import type { ReactNode } from "react";

export type Tone = "light" | "dark";

type LinkButtonProps = {
  href: string;
  label: string;
  sublabel?: string;
  icon: ReactNode;
  /**
   * Card surface tone.
   * - `light` — translucent frosted card (looks best on a dark page).
   * - `dark` — solid near-black card (looks best on a light page).
   * Defaults to `light`.
   */
  tone?: Tone;
};

const toneStyles = {
  light: {
    card: "border-white/10 bg-white/5 backdrop-blur-sm hover:bg-primary/10 hover:shadow-[0_8px_30px_rgba(245,166,35,0.18)]",
    iconWrap: "bg-white/10",
    label: "text-white",
    sublabel: "text-white/60",
    arrow: "text-white/40",
  },
  dark: {
    card: "border-stone-900/80 bg-transparent hover:bg-stone-900/[0.04] hover:shadow-[0_8px_30px_rgba(245,166,35,0.18)]",
    iconWrap: "bg-stone-900/[0.06]",
    label: "text-stone-900",
    sublabel: "text-stone-500",
    arrow: "text-stone-400",
  },
} satisfies Record<Tone, Record<string, string>>;

export function LinkButton({
  href,
  label,
  sublabel,
  icon,
  tone = "light",
}: LinkButtonProps) {
  const t = toneStyles[tone];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex w-full items-center gap-4 rounded-2xl border px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${t.card}`}
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors group-hover:bg-primary/25 ${t.iconWrap}`}
      >
        {icon}
      </span>
      <span className="flex flex-col text-left">
        <span
          className={`text-base font-semibold tracking-tight transition-colors group-hover:text-primary ${t.label}`}
        >
          {label}
        </span>
        {sublabel ? (
          <span className={`text-xs font-medium ${t.sublabel}`}>
            {sublabel}
          </span>
        ) : null}
      </span>
      <span
        className={`ml-auto transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary ${t.arrow}`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M5 12h14" />
          <path d="m13 5 7 7-7 7" />
        </svg>
      </span>
    </a>
  );
}
