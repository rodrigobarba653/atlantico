import type { Metadata } from "next";
import { SongPage, type Song } from "@/components/SongPage";

const meQuieroIr: Song = {
  title: "Me Quiero Ir",
  titleDisplay: "ME QUIERO IR",
  imageSrc: "/hero1.png",
  imageAlt: "Atlántico — portada del single Me Quiero Ir",
  links: {
    spotify:
      "https://open.spotify.com/track/4z1Xe6y45Od383bweDr8lx?si=c7528fda0493455b",
    youtube: "https://youtu.be/ue6UF6wiH5A?si=QEjalmt_9JCQOek1",
    appleMusic: "https://music.apple.com/es/song/me-quiero-ir/6763089894",
  },
};

export const metadata: Metadata = {
  title: "Atlántico — Me Quiero Ir",
  description:
    "Escucha el nuevo single de Atlántico, “Me Quiero Ir”, en Spotify, Apple Music y YouTube.",
  openGraph: {
    title: "Atlántico — Me Quiero Ir",
    description:
      "Escucha el nuevo single de Atlántico, “Me Quiero Ir”, en Spotify, Apple Music y YouTube.",
    type: "music.song",
    images: [{ url: meQuieroIr.imageSrc }],
  },
};

export default function MeQuieroIrPage() {
  return <SongPage song={meQuieroIr} theme="light" />;
}
