import { EventsList } from "@/components/site/events-list"
import { Hero } from "@/components/site/hero"
import { NewsList } from "@/components/site/news-list"
import { Services } from "@/components/site/services"
import { getEvents, getNews, getServices } from "@/lib/content"
import Link from "next/link"

export default async function HomePage() {
  const [events, news, services] = await Promise.all([
    getEvents({ limit: 3 }),
    getNews({ limit: 3 }),
    getServices({ limit: 6 }),
  ])

  return (
    <div>
      <Hero />
      <section className="py-12 md:py-16" id="offered-services">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Servizi offerti</h2>
          <Services services={services} />
        </div>
      </section>
      <section className="py-12 md:py-16 bg-[#F5F5F5]" id="upcoming-events">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Eventi</h2>
            <Link href="/news-and-events#events" className="text-[#4A90E2] underline">
              Vedi tutti
            </Link>
          </div>
          <EventsList events={events} />
        </div>
      </section>

      <section className="py-12 md:py-16" id="latest-news">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Ultime notizie</h2>
            <Link href="/news-and-events#news" className="text-[#4A90E2] underline">
              Vedi tutte
            </Link>
          </div>
          <NewsList news={news} />
        </div>
      </section>

    </div>
  )
}
