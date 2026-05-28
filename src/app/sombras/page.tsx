import type { Metadata } from "next";
import Script from "next/script";
import { SongPage, type Song } from "@/components/SongPage";

const META_PIXEL_ID = "858630783962696";

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
      <SongPage song={sombras} theme="dark" />
    </>
  );
}
