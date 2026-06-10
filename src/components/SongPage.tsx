import Image from "next/image";
import { LinkButton, type Tone } from "@/components/LinkButton";
import { SocialIconLink } from "@/components/SocialIconLink";
import {
  AppleMusicIcon,
  InstagramIcon,
  SpotifyIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/icons";

export type Song = {
  /** Display name used in copy + link button labels, e.g. "Sombras" */
  title: string;
  /** Big heading shown above the links, e.g. "SOMBRAS" */
  titleDisplay: string;
  /** Path to the hero image (in /public) */
  imageSrc: string;
  /** Alt text for the hero image */
  imageAlt: string;
  /** Streaming URLs. Omit a platform to hide its button. */
  links: {
    spotify?: string;
    youtube?: string;
    appleMusic?: string;
  };
};

export type Theme = "dark" | "light";

const themeStyles = {
  dark: {
    section: "",
    title: "text-yellow-300",
    titleDisplay: "text-yellow-300",
    description: "text-white/60",
    descriptionAccent: "text-white/90",
    eyebrow: "text-white/50",
    footer: "text-white/30",
    imageOverlay:
      "bg-gradient-to-b from-black/0 via-black/0 to-black/40 lg:bg-gradient-to-r lg:from-black/40 lg:via-black/0 lg:to-black/0",
  },
  light: {
    section: "bg-stone-50",
    title: "text-stone-900",
    titleDisplay: "text-amber-700",
    description: "text-stone-600",
    descriptionAccent: "font-medium text-stone-900",
    eyebrow: "text-stone-500",
    footer: "text-stone-400",
    imageOverlay:
      "bg-gradient-to-b from-black/0 via-black/0 to-black/30 lg:bg-gradient-to-r lg:from-black/0 lg:via-black/0 lg:to-black/30",
  },
} satisfies Record<Theme, Record<string, string>>;

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/somosatlantico/",
    icon: <InstagramIcon className="h-5 w-5" />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@somosatlantico",
    icon: <TikTokIcon className="h-5 w-5" />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@somosatlanticos",
    icon: <YouTubeIcon className="h-5 w-5" />,
  },
];

export function SongPage({
  song,
  theme = "dark",
}: {
  song: Song;
  theme?: Theme;
}) {
  const t = themeStyles[theme];
  // Cards/icons should contrast with the page surface.
  const tone: Tone = theme === "light" ? "dark" : "light";

  const musicLinks = [
    song.links.spotify && {
      label: `${song.title} en Spotify`,
      sublabel: "Escúchala en Spotify",
      href: song.links.spotify,
      icon: <SpotifyIcon className="h-5 w-5 text-[#1DB954]" />,
    },
    song.links.youtube && {
      label: `${song.title} en YouTube`,
      sublabel: "Mira el video oficial",
      href: song.links.youtube,
      icon: <YouTubeIcon className="h-5 w-5 text-[#FF0000]" />,
    },
    song.links.appleMusic && {
      label: `${song.title} en Apple Music`,
      sublabel: "Disponible en Apple Music",
      href: song.links.appleMusic,
      icon: <AppleMusicIcon className="h-5 w-5 text-[#FA3F6F]" />,
    },
  ].filter((link): link is NonNullable<typeof link> => Boolean(link));

  return (
    <main className="flex min-h-screen flex-col-reverse lg:flex-row">
      <section
        className={`flex flex-1 items-center justify-center px-6 py-12 sm:px-10 lg:px-16 lg:py-20 ${t.section}`}
      >
        <div className="w-full max-w-md">
          <header className="mb-10 flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1
              className={`font-sans text-6xl font-bold tracking-tight sm:text-8xl ${t.title}`}
            >
              atlántico
            </h1>
            <h2
              className={`font-serif text-3xl font-light tracking-tight sm:text-5xl ${t.titleDisplay}`}
            >
              {song.titleDisplay}
            </h2>
            <p
              className={`mt-4 max-w-sm text-sm leading-relaxed ${t.description}`}
            >
              Nuevo single{" "}
              <span className={t.descriptionAccent}>“{song.title}”</span>{" "}
              disponible ahora en todas las plataformas.
            </p>
          </header>

          <div className="flex flex-col gap-3">
            {musicLinks.map((link) => (
              <LinkButton
                key={link.href}
                href={link.href}
                label={link.label}
                sublabel={link.sublabel}
                icon={link.icon}
                tone={tone}
              />
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 lg:items-start">
            <p
              className={`text-xs font-medium uppercase tracking-[0.4em] ${t.eyebrow}`}
            >
              Síguenos
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <SocialIconLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  icon={link.icon}
                  tone={tone}
                />
              ))}
            </div>
          </div>

          <footer
            className={`mt-12 text-center text-xs lg:text-left ${t.footer}`}
          >
            © {new Date().getFullYear()} Atlántico. Todos los derechos
            reservados.
          </footer>
        </div>
      </section>

      <section className="relative h-72 w-full overflow-hidden sm:h-80 lg:h-auto lg:flex-1">
        <Image
          src={song.imageSrc}
          alt={song.imageAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top lg:object-center"
        />
        <div className={`absolute inset-0 ${t.imageOverlay}`} />
      </section>
    </main>
  );
}
