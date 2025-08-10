import Image from "next/image"
import Link from "next/link"

export function NewsList({ news }: { news: any[] }) {
  if (!news?.length) return <p className="text-muted-foreground">Nessuna notizia disponibile.</p>

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {news.map((n) => (
        <article key={n.slug} className="rounded-lg border overflow-hidden bg-white flex flex-col">
          {n.image && (
            <Image
              src={n.image || "/placeholder.svg"}
              alt={n.title}
              width={600}
              height={360}
              className="w-full h-auto"
            />
          )}
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="font-semibold text-lg">{n.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{new Date(n.date).toLocaleDateString()}</p>
            <p className="text-sm text-muted-foreground mt-3 line-clamp-3">{n.excerpt}</p>
            <div className="mt-auto pt-4">
              <Link href={`/news-and-events/news/${n.slug}`} className="text-secondary underline">
                Leggi di più
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
