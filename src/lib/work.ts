// What the Work pages draw, from Cadence's public projects.

import type { Locale } from "../i18n/dict";
import type { PublicProjectSummary, SiteGalleryView } from "./cadence/types";

export const tagKey = (tag: string) => tag.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** Every tag in use, in order of first appearance: the filters of /work. */
export const tagsOf = (projects: PublicProjectSummary[]) => [...new Set(projects.flatMap((project) => project.tags))];

/** The home shows the featured projects; with none marked yet, the first three. */
export const homeProjects = (projects: PublicProjectSummary[]) => {
  const featured = projects.filter((project) => project.featured);
  return featured.length > 0 ? featured : projects.slice(0, 3);
};

/** The paragraph per language, as the page swaps it; English (the studio's first language) is the fallback. */
export const aboutOf = (project: Pick<PublicProjectSummary, "translations">): Partial<Record<Locale, string>> =>
  Object.fromEntries(Object.entries(project.translations).map(([locale, text]) => [locale, text?.about ?? ""]));

export const aboutInEnglish = (project: Pick<PublicProjectSummary, "translations">) =>
  project.translations.en?.about ?? Object.values(project.translations)[0]?.about ?? "";

/** Cadence stores the original; `/original.<ext>` → `/w<width>.<ext>` is the whole image contract. */
export const variant = (url: string, width: 400 | 800 | 1600) => url.replace(/\/original\.(\w+)(?=$|[?#])/, `/w${width}.$1`);

export const galleryAlt = (entry: SiteGalleryView, projectName: string) => entry.alt ?? projectName;
