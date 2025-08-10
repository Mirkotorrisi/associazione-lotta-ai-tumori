import { PageHeader } from "@/components/site/page-header"
import { getPage } from "@/lib/content"
import Link from "next/link"

type boardPageData = {
  founders?: string[]
  board?: string[]
  revisors?: string[]
  helplines?: { name: string; phone: string }[]
  links?: { label: string; url: string }[]
  html: string
}

export default async function BoardPage() {
  const page: boardPageData = await getPage("board")
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <PageHeader
        title="Direttivo e Fondatori"
      />
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">I Fondatori - 1989</h3>
          <ul className="space-y-1">
            {page.founders?.map((f: string, idx: number) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mt-10 mb-4">Direttivo</h3>
          <ul className="space-y-1">
            {page.board?.map((b: string, idx: number) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mt-10 mb-4">Revisori dei conti</h3>
          <ul className="space-y-1">
            {page.revisors?.map((r: string, idx: number) => (
              <li key={idx}>{r}</li>
            ))}
          </ul>
        </div>
        <aside className="space-y-6">
          <div className="p-4 rounded-lg border bg-gray-50">
            <h4 className="font-semibold mb-2">Numeri utili</h4>
            <ul className="list-disc pl-5 space-y-1">
              {page.helplines?.map((h: { name: string; phone: string }, i: number) => (
                <li key={i}>
                  <span className="font-medium">{h.name}:</span>{" "}
                  <Link href={`tel:${h.phone}`} className="text-secondary underline">
                    {h.phone}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-gray-50">
            <h4 className="font-semibold mb-2">Link utili</h4>
            <ul className="list-disc pl-5 space-y-1">
              {page.links?.map((l: { label: string; url: string }, i: number) => (
                <li key={i}>
                  <Link href={l.url} className="text-secondary underline" target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
