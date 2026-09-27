# Figma to Code: Whitepace landing page

A responsive landing page rebuilt from the free [Whitepace SaaS Landing Page](https://www.figma.com/community/file/1156860863353724933/whitepace-saas-landing-page) Figma Community template.

**Live demo:** https://tiagofrjesus.github.io/figma-to-code-demo/

## Stack

- HTML + [Tailwind CSS v4](https://tailwindcss.com/)
- TypeScript, built with [Vite](https://vite.dev/)
- Deployed to GitHub Pages with GitHub Actions on every push to `main`

## How it was built

1. **Design tokens from Figma.** Colors, font and container width were read from the Figma file through the Figma REST API and defined once in `src/style.css` (`@theme`). Every section uses the same classes: `bg-navy`, `text-ink`, `btn-primary` and so on.
2. **Assets exported as SVG** from the Figma file, then optimised with SVGO (1.1 MB down to about 230 KB).
3. **One HTML file per section** in `src/sections/`, put together in order by `src/main.ts`.
4. **Mobile-first layout.** The Figma file has 320px, 768px and 1440px frames. The page follows them and scales between them (headings step down on mid-size screens so nothing overflows).

## QA checklist

- Side-by-side comparison with the Figma frames at 1440px and 320px
- No horizontal scroll at 375, 768, 1024 and 1440px, checked automatically with Playwright
- Semantic HTML: one `h1`, `h2` per section, lists for plans and links, `nav` landmarks
- Alt text on meaningful images, decorative images hidden from screen readers
- Keyboard focus styles on buttons, mobile menu with `aria-expanded`

## Run locally

```bash
npm install
npm run dev
```
