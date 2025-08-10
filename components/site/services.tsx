import type { ServiceItem } from "@/lib/types"
import Image from "next/image"

export function Services({ services }: { services: ServiceItem[] }) {
  if (!services?.length) return <p className="text-muted-foreground">Nessun servizio disponibile.</p>

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {services.map((s) => (
        <article key={s.slug} className="rounded-lg border overflow-hidden bg-white flex flex-col">
          {s.image && (
            <Image src={s.image || "/placeholder.svg"} alt={s.title} width={600} height={360} className="w-full h-auto" />
          )}
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="font-semibold text-lg">{s.title}</h3>
            {s.excerpt && <p className="text-sm text-muted-foreground mt-3 line-clamp-3">{s.excerpt}</p>}
          </div>
        </article>
      ))}
    </div>
  )
}
