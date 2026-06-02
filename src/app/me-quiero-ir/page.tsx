import type { Metadata } from "next";
import Script from "next/script";
import { SongPage, type Song } from "@/components/SongPage";

const META_PIXEL_ID = "952786404211204";

const meQuieroIr: Song = {
  title: "Me Quiero Ir",
  titleDisplay: "ME QUIERO IR",
  imageSrc: "/hero1.png",
  imageAlt: "Atlántico — portada del single Me Quiero Ir",
  links: {
    spotify:
      "https://open.spotify.com/track/4z1Xe6y45Od383bweDr8lx?si=c7528fda0493455b",
    youtube: "https://youtu.be/l1IXh7rdXJk",
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
  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
      <SongPage song={meQuieroIr} theme="light" />
    </>
  );
}
