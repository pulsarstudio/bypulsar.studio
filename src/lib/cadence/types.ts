// Mirrored by hand from Cadence (packages/db/src/work.ts, public-gallery.ts):
// what GET /v1/public/orgs/bypulsarstudio/work[/:slug] answers. It only grows.

import type { Locale } from "../../i18n/dict";

export interface PublicProjectCover {
  original: string;
  w400: string;
  w800: string;
  w1600: string;
  alt: string | null;
}

export interface PublicProjectSummary {
  slug: string;
  name: string;
  client: string;
  year: number;
  tags: string[];
  featured: boolean;
  order: number;
  cover: PublicProjectCover | null;
  url: string | null;
  updatedAt: string | null;
  translations: Partial<Record<Locale, { about: string }>>;
}

export interface SitePhotoView {
  kind: "photo";
  url: string;
  alt: string | null;
}

export interface SiteVideoView {
  kind: "video";
  url: string;
  alt: string | null;
  videoUrl: string;
  videoType: string;
  durationMs: number;
}

export type SiteGalleryView = SitePhotoView | SiteVideoView;

export interface PublicProject extends PublicProjectSummary {
  copyright: string | null;
  gallery: SiteGalleryView[];
}
