import type { Metadata } from "next";
import { SongPage, type Song } from "@/components/SongPage";

const sombras: Song = {
  title: "Sombras",
  titleDisplay: "SOMBRAS",
  imageSrc: "/hero1.png",
  imageAlt: "Atlántico — portada del single Sombras",
  links: {
    spotify:
      "https://open.spotify.com/track/17fupB6szKIssgrNgXiYao?si=39784b4e8b214a52",
    youtube: "https://youtu.be/qazR56o9ql8?si=QbcdfdsX69bT8dbs",
    appleMusic: "https://music.apple.com/es/song/sombras/6763089895",
  },
};

export const metadata: Metadata = {
  title: "Atlántico — Sombras",
  description:
    "Escucha el nuevo single de Atlántico, “Sombras”, en Spotify, Apple Music y YouTube.",
  openGraph: {
    title: "Atlántico — Sombras",
    description:
      "Escucha el nuevo single de Atlántico, “Sombras”, en Spotify, Apple Music y YouTube.",
    type: "music.song",
    images: [{ url: sombras.imageSrc }],
  },
};

export default function SombrasPage() {
  return <SongPage song={sombras} theme="dark" />;
}
