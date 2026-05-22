import type { ReactNode } from "react";
import type { Tone } from "@/components/LinkButton";

type SocialIconLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
  /**
   * Surface tone — matches `LinkButton` so social icons sit on the same palette.
   * Defaults to `light`.
   */
  tone?: Tone;
};

const toneStyles = {
  light:
    "border-white/10 bg-white/5 text-white/80 hover:bg-primary/15 hover:text-primary",
  dark: "border-stone-900/80 bg-transparent text-stone-900 hover:bg-stone-900/[0.04] hover:text-primary",
} satisfies Record<Tone, string>;

export function SocialIconLink({
  href,
  label,
  icon,
  tone = "light",
}: SocialIconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${toneStyles[tone]}`}
    >
      {icon}
    </a>
  );
}
