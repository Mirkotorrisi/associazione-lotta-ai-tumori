import type { ProjectItem, ServiceItem } from "@/lib/types";
import Image from "next/image";

// Reusable cards grid for simple items (projects, services)
export function SimpleCards({ items, emptyLabel = "Nessun elemento disponibile." }: { items: Array<ProjectItem | ServiceItem>; emptyLabel?: string }) {
  if (!items?.length) return <p className="text-muted-foreground">{emptyLabel}</p>
  return (
    <div className="grid gap-6">
      {items.map((p) => (
        <div key={p.slug} className="rounded-lg border overflow-hidden bg-white">
          {"image" in p && p.image && (
            <Image
              src={p.image || "/placeholder.svg"}
              alt={p.title}
              width={600}
              height={360}
              className="w-full h-auto"
            />
          )}
          <div className="p-5">
            <h3 className="font-semibold">{p.title}</h3>
            {"excerpt" in p && <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{p.excerpt}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}

// Backwards compatibility
export function ProjectCards({ projects }: { projects: ProjectItem[] }) {
  return <SimpleCards items={projects} emptyLabel="Nessun progetto attivo al momento." />
}
