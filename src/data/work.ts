// PREVIEW DATA — stands in for Cadence's public `work` endpoints
// (GET /v1/public/orgs/bypulsarstudio/work) until the site reads the API.
// Same shape as Cadence's PublicProject, so swapping the source later is
// a change in this file's loader, not in the pages.
//
// `media: null` renders a placeholder block: the real covers and galleries
// are uploaded in Cadence, not committed here.

import type { Locale } from "../i18n/dict";

export type WorkMedia = {
  /** Image URL. null → placeholder block (preview only). */
  src: string | null;
  alt: string;
  /** width / height */
  ratio: number;
};

export type WorkProject = {
  slug: string;
  name: string;
  client: string;
  year: number;
  /** Disciplines — the filter of /work. Written by the studio in Cadence. */
  tags: string[];
  /** One paragraph per language; `en` always, the others when written. */
  about: Partial<Record<Locale, string>> & { en: string };
  copyright?: string;
  /** Live project. */
  url?: string;
  cover: WorkMedia;
  gallery: WorkMedia[];
  featured: boolean;
  /** Preview-only marker: a made-up entry, not a real client. */
  sample?: boolean;
};

const placeholder = (alt: string, ratio: number): WorkMedia => ({ src: null, alt, ratio });

// In the studio's own order (Cadence: drag to reorder).
export const workProjects: WorkProject[] = [
  {
    slug: "pattone",
    name: "Pattone",
    client: "Club Randonneurs · Madrid",
    year: 2026,
    tags: ["Brand identity", "Website", "Cadence"],
    about: {
      en: "A real running crew with events and collabs, but no identity or system holding it together. We built its visual language, a site designed for whoever lands on it, and a platform the club updates by chat.",
      es: "Una comunidad de running real, con eventos y colaboraciones, pero sin identidad ni sistema que lo reuniera todo. Construimos su lenguaje visual, una web pensada desde quien la visita y una plataforma que el club actualiza por chat.",
      fr: "Une vraie communauté de running, avec événements et collaborations, mais sans identité ni système pour tout réunir. Nous avons créé son langage visuel, un site pensé pour ceux qui le visitent et une plateforme que le club met à jour par chat.",
    },
    url: "https://pattone.com/en/",
    cover: placeholder("Pattone — cover", 4 / 3),
    gallery: [
      placeholder("Pattone — identity", 16 / 9),
      placeholder("Pattone — site, home", 4 / 5),
      placeholder("Pattone — site, event page", 4 / 5),
      placeholder("Pattone — Cadence", 16 / 9),
    ],
    featured: true,
  },
  {
    slug: "pexter",
    name: "Pexter",
    client: "Pet care · US",
    year: 2026,
    tags: ["Website", "Online store", "AI Photoshoot"],
    about: {
      en: "A storefront that makes dog waste gear feel like a brand, plus AI product compositions built from existing photos — the brand's personality, no new shoot.",
      es: "Una tienda que convierte accesorios para perros en marca, y composiciones de producto con IA a partir de fotos existentes: la personalidad de la marca, sin un shooting nuevo.",
      fr: "Une boutique qui fait des accessoires pour chiens une vraie marque, et des compositions produit par IA à partir de photos existantes : la personnalité de la marque, sans nouveau shooting.",
    },
    url: "https://www.pexter.us",
    cover: placeholder("Pexter — cover", 4 / 3),
    gallery: [
      placeholder("Pexter — storefront", 16 / 9),
      placeholder("Pexter — AI composition", 1),
      placeholder("Pexter — AI composition", 1),
    ],
    featured: true,
  },
  {
    slug: "sample-packaging",
    name: "Sample project 03",
    client: "Sample client",
    year: 2026,
    tags: ["Packaging"],
    about: {
      en: "A made-up entry that shows a longer paragraph and the copyright note. The about text of a real project is written in Cadence, one paragraph per language, and falls back to English when a language is missing.",
    },
    copyright:
      "Sample copyright note. A real project can carry the line its client asks for: who owns the work shown and on what terms it is presented here.",
    cover: placeholder("Sample project 03 — cover", 4 / 3),
    gallery: [
      placeholder("Sample", 4 / 5),
      placeholder("Sample", 4 / 5),
      placeholder("Sample", 16 / 9),
    ],
    featured: true,
    sample: true,
  },
  {
    slug: "sample-event-design",
    name: "Sample project 04",
    client: "Sample client",
    year: 2025,
    tags: ["Event design", "Photo & video"],
    about: { en: "A made-up entry, here only to show how the grid and the filters behave with more projects." },
    cover: placeholder("Sample project 04 — cover", 4 / 3),
    gallery: [placeholder("Sample", 16 / 9), placeholder("Sample", 16 / 9)],
    featured: false,
    sample: true,
  },
  {
    slug: "sample-mobile-app",
    name: "Sample project 05",
    client: "Sample client",
    year: 2025,
    tags: ["Mobile app", "Cadence"],
    about: { en: "A made-up entry, here only to show how the grid and the filters behave with more projects." },
    cover: placeholder("Sample project 05 — cover", 4 / 3),
    gallery: [placeholder("Sample", 9 / 16), placeholder("Sample", 9 / 16), placeholder("Sample", 9 / 16)],
    featured: false,
    sample: true,
  },
  {
    slug: "sample-ai-photoshoot",
    name: "Sample project 06",
    client: "Sample client",
    year: 2024,
    tags: ["AI Photoshoot", "Brand identity"],
    about: { en: "A made-up entry, here only to show how the grid and the filters behave with more projects." },
    cover: placeholder("Sample project 06 — cover", 4 / 3),
    gallery: [placeholder("Sample", 4 / 5), placeholder("Sample", 4 / 5)],
    featured: false,
    sample: true,
  },
];

export const featuredProjects = workProjects.filter((project) => project.featured);

/** The filters of /work: every tag in use, in order of first appearance. */
export const workTags = [...new Set(workProjects.flatMap((project) => project.tags))];

export const tagKey = (tag: string) => tag.toLowerCase().replace(/[^a-z0-9]+/g, "-");
