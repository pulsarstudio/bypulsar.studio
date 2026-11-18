// READ ONLY. This site never writes content: the studio writes its projects
// in Cadence (cadence.club/bypulsarstudio) and this reads them per request
// with the club's read key. No fallback content: when Cadence cannot be read
// the page says so, it never shows old or made-up projects.

import { cadence } from "../../config";
import type { PublicProject, PublicProjectSummary } from "./types";

const REQUEST_TIMEOUT_MS = 8_000;
const CACHE_MS = 60_000;

export type Read<T> =
  | { state: "ok"; data: T }
  | { state: "missing" }
  | { state: "unavailable"; reason: string };

function setting(name: "CADENCE_API_URL" | "CADENCE_ORG" | "CADENCE_READ_KEY"): string {
  const built = import.meta.env[name] as string | undefined;
  return (built ?? process.env[name] ?? "").trim();
}

function clubUrl(): string {
  const api = (setting("CADENCE_API_URL") || cadence.api.url).replace(/\/$/, "");
  const org = setting("CADENCE_ORG") || cadence.api.org;
  return `${api}/v1/public/orgs/${encodeURIComponent(org)}`;
}

const answers = new Map<string, { at: number; answer: Read<unknown> }>();

async function read(path: string): Promise<Read<unknown>> {
  const readKey = setting("CADENCE_READ_KEY");
  if (!readKey) return { state: "unavailable", reason: "no_read_key" };

  const kept = answers.get(path);
  if (kept && Date.now() - kept.at < CACHE_MS) return kept.answer;

  let answer: Read<unknown>;
  try {
    const res = await fetch(`${clubUrl()}${path}`, {
      headers: { "x-cadence-key": readKey, accept: "application/json" },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
    if (res.ok) {
      answer = { state: "ok", data: (await res.json()) as unknown };
    } else {
      const body = (await res.json().catch(() => null)) as { code?: string } | null;
      const code = body?.code ?? String(res.status);
      answer = code === "project_not_found" ? { state: "missing" } : { state: "unavailable", reason: code };
    }
  } catch {
    answer = { state: "unavailable", reason: "unreachable" };
  }

  if (answer.state === "unavailable") console.error(`[cadence] ${path}: ${answer.reason}`);
  // A failure is not kept: the next request tries again.
  if (answer.state !== "unavailable") answers.set(path, { at: Date.now(), answer });
  return answer;
}

/** Every published project, in the studio's own order. */
export async function readProjects(): Promise<Read<PublicProjectSummary[]>> {
  return (await read("/work")) as Read<PublicProjectSummary[]>;
}

/** One published project with its gallery; `missing` for a draft or an unknown slug. */
export async function readProject(slug: string): Promise<Read<PublicProject>> {
  return (await read(`/work/${encodeURIComponent(slug)}`)) as Read<PublicProject>;
}
