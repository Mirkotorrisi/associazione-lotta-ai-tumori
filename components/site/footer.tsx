import { getContacts } from "@/lib/content"
import Link from "next/link"

export async function Footer() {
  const contacts = await getContacts()
  
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-bold text-lg mb-2">ASLT</div>
          <p className="text-sm text-muted-foreground">Insieme, dal 1989, contro i tumori.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Navigazione</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/chi-siamo" className="hover:underline">
                Chi siamo
              </Link>
            </li>
            
            <li>
              <Link href="/eventi" className="hover:underline">
                Notizie & Eventi
              </Link>
            </li>
            <li>
              <Link href="/direttivo" className="hover:underline">
                Direttivo
              </Link>
            </li>
            <li>
              <Link href="/rendiconto" className="hover:underline">
                Rendiconto
              </Link>
            </li>
            <li>
              <Link href="/contatti" className="hover:underline">
                Contatti
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contatti</h4>
          <ul className="text-sm space-y-1">
            <li>{contacts.address}</li>
            <li>
              Email:
              <a href={`mailto:${contacts.email}`} className="text-secondary underline">
                {contacts.email}
              </a>
            </li>
            <li>
              Tel:
              <a href={`tel:${contacts.phone?.replace?.(/\s/g, "")}`} className="text-secondary underline">
                {contacts.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground py-4">
        © {new Date().getFullYear()} ASLT. Tutti i diritti riservati.
      </div>
    </footer>
  )
}
