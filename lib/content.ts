import { marked } from "marked"
import fs from "node:fs/promises"
import nodePath from "node:path"
import type { ContactInfo, EventItem, NewsItem, PageContent, ProjectItem, ServiceItem } from "./types"


async function fetchJSON<T>(path: string): Promise<T> {
  // If referencing a file under public/content, read from filesystem during SSR
  if (path.startsWith("/content/")) {
    const filePath = nodePath.join(process.cwd(), "public", path)
    const data = await fs.readFile(filePath, "utf-8")
    return JSON.parse(data) as T
  }
  // Fallback for absolute/external URLs
  const res = await fetch(path, { cache: "no-store" })
  if (!res.ok) throw new Error(`Failed to fetch ${path}`)
  return res.json()
}


export async function getNews(opts?: { limit?: number }): Promise<NewsItem[]> {
  const data = await fetchJSON<{ items: NewsItem[] }>("/content/news/index.json")
  const items = data.items.sort((a, b) => +new Date(b.date) - +new Date(a.date))
  return typeof opts?.limit === "number" ? items.slice(0, opts.limit) : items
}

export async function getEvents(opts?: { limit?: number }): Promise<EventItem[]> {
  const data = await fetchJSON<{ items: EventItem[] }>("/content/events/index.json")
  const items = data.items.sort((a, b) => +new Date(b.date) - +new Date(a.date))
  return typeof opts?.limit === "number" ? items.slice(0, opts.limit) : items
}

export async function getProjects(opts?: { limit?: number }): Promise<ProjectItem[]> {
  const data = await fetchJSON<{ items: ProjectItem[] }>("/content/projects/index.json")
  const items = data.items
  return typeof opts?.limit === "number" ? items.slice(0, opts.limit) : items
}

export async function getServices(opts?: { limit?: number }): Promise<ServiceItem[]> {
  const data = await fetchJSON<{ items: ServiceItem[] }>("/content/services/index.json")
  const items = data.items
  return typeof opts?.limit === "number" ? items.slice(0, opts.limit) : items
}

export async function getContacts(): Promise<ContactInfo> {
  return fetchJSON<ContactInfo>("/content/contacts.json")
}

export async function getPage(slug: "about" | "support" | "whatwedo" | "board" | "report"): Promise<PageContent> {
  const data = (await fetchJSON<unknown>(`/content/pages/${slug}.json`)) as { body?: string; [k: string]: unknown }
  const html = await marked.parse(data.body || "")
  return { ...data, html }
}
