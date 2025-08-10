import { notFound } from "next/navigation"
import Image from "next/image"
import { marked } from "marked"
import { getNews } from "@/lib/content"

export async function generateStaticParams() {
  const items = await getNews()
  return items.map((i) => ({ slug: i.slug }))
}

export default async function NewsDetail({ params }: { params: { slug: string } }) {
  const items = await getNews()
  const item = items.find((i) => i.slug === params.slug)
  if (!item) return notFound()

  const html = await marked.parse(item.body || "")

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{item.title}</h1>
        <p className="text-sm text-muted-foreground mb-6">{new Date(item.date).toLocaleDateString()}</p>
        {item.image && (
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            width={1200}
            height={700}
            className="w-full h-auto rounded-lg mb-6"
          />
        )}
        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </div>
  )
}
