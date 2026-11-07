# Ollie Garden

Website for a youth gardening service based in Sooke, Shirley, and Metchosin. Offers whipper snipping and weeding at an hourly rate.

Built with [Astro](https://astro.build) and deployed to GitHub Pages at [ollie-garden.com](https://ollie-garden.com).

## Pages

- `/` — Services
- `/testimonials/` — Customer testimonials
- `/contact/` — Contact form (powered by Formspree)

## Search and crawlers

Astro generates `/sitemap-index.xml` and its sitemap during the build using
the `site` URL in `astro.config.mjs`. Each page uses shared SEO metadata in
`src/components/SeoHead.astro`. `public/robots.txt` allows all crawlers,
including AI crawlers, and points to the sitemap. If the domain changes,
update both `site` in the Astro config and the sitemap URL in `robots.txt`.
Crawler access does not guarantee indexing or inclusion in AI services.

## Commands

Node.js 22.23.4 or newer is required.

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start local dev server at `localhost:4321`  |
| `npm run build`   | Build for production to `./dist/`           |
| `npm run preview` | Preview the production build locally        |

Pushes to `main` are automatically deployed via GitHub Actions.
