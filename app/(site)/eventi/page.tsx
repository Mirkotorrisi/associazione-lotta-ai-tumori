import { PageHeader } from "@/components/site/page-header"
import { getEvents, getNews } from "@/lib/content"
import { EventsList } from "@/components/site/events-list"
import { NewsList } from "@/components/site/news-list"

export default async function NewsEventsPage() {
  const [events, news] = await Promise.all([getEvents(), getNews()])

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <PageHeader
        title="Notizie ed eventi"
        subtitle="Resta aggiornato sui nostri prossimi appuntamenti e sulle ultime novità. Partecipa anche tu!"
      />
      <section id="events" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Calendario eventi</h2>
        <EventsList events={events} />
      </section>
      <section id="news">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Notizie</h2>
        <NewsList news={news} />
      </section>
    </div>
  )
}
