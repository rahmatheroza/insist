# INSIST Research Community Website

Official website for **INSIST** (Intelligent and Sustainable Information Systems Research Group), Universitas Sriwijaya.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui**
- **Framer Motion**
- **Lucide React**
- **Geist Font**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── about/
│   ├── research/
│   ├── people/
│   ├── projects/
│   ├── publications/
│   ├── news/
│   ├── join/
│   └── contact/
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # Homepage sections
│   ├── shared/           # Reusable primitives
│   └── ui/               # shadcn/ui components
├── content/              # Site content (CMS-ready)
├── lib/                  # Utilities
└── types/                # TypeScript interfaces
```

## Content Management

Content is organized by section under `src/content/`:

```
src/content/
├── site.ts           → Global config (name, logo, email, nav)
├── home/             → Homepage-only sections
│   ├── hero.ts
│   ├── impact.ts
│   └── community.ts
├── about.ts
├── research.ts
├── news.ts
├── join.ts
├── people.ts
├── projects.ts
└── publications.ts
```

Each file exports typed data matching interfaces in `src/types/`. This structure is designed for future migration to Markdown or a headless CMS.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## Deployment

Optimized for [Vercel](https://vercel.com). Connect the repository and deploy with default Next.js settings.

## License

Copyright © INSIST Research Community, Universitas Sriwijaya.
