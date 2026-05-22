# Atlántico — Link Tree

A Next.js link tree for the band **Atlántico**. The layout is a 50/50 horizontal split on desktop (links on the left, image on the right) and stacks vertically on mobile.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router) + React 19
- TypeScript
- Tailwind CSS v4

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
src/
  app/
    layout.tsx        # Root layout + page metadata
    page.tsx          # The link tree page (50/50 desktop, stacked mobile)
    globals.css       # Tailwind + theme tokens
  components/
    LinkButton.tsx    # Music link card with icon + arrow
    SocialIconLink.tsx# Circular social icon button
    icons.tsx         # Inline SVG brand icons
public/
  band-image.svg      # Placeholder band image (replace with a real photo)
```

## Replace the band image

The right-hand image lives at `public/band-image.svg`. Drop your own picture
into `public/` (e.g. `band-image.jpg`) and update the `src` in
`src/app/page.tsx`:

```tsx
<Image src="/band-image.jpg" ... />
```

## Edit links

The music + social links are defined as plain arrays at the top of
`src/app/page.tsx`. Edit the `musicLinks` and `socialLinks` arrays to add,
remove or reorder destinations.
