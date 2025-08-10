import Image from "next/image"
import Link from "next/link"

export function EventsList({ events }: { events: any[] }) {
  if (!events?.length) return <p className="text-muted-foreground">Nessun evento in programma.</p>

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {events.map((e) => (
        <article key={e.slug} className="rounded-lg border overflow-hidden bg-white flex flex-col">
          {e.image && (
            <Image
              src={e.image || "/placeholder.svg"}
              alt={e.title}
              width={600}
              height={360}
              className="w-full h-auto"
            />
          )}
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="font-semibold text-lg">{e.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">
              {new Date(e.date).toLocaleString()} • {e.location}
            </p>
            <p className="text-sm text-muted-foreground mt-3 line-clamp-3">{e.excerpt}</p>
            <div className="mt-auto pt-4">
              <Link href={`/news-and-events/events/${e.slug}`} className="text-secondary underline">
                Scopri di più
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
