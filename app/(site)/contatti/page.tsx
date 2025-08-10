import { PageHeader } from "@/components/site/page-header"
import { getContacts } from "@/lib/content"
import { Building, Facebook, Instagram, Linkedin, Mail, Phone, Smartphone } from "lucide-react"

export default async function ContactPage() {
  const contacts = await getContacts()

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <PageHeader title="Contatti" subtitle="Scrivici per informazioni, collaborazioni o supporto." />
      <div className="grid md:grid-cols-2 gap-8">

        <div className="p-6 rounded-lg border bg-gray-50">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Building className="h-5 w-5" />
              Sede
            </h3>
          <p>{contacts.address}</p>
          <p className="mt-2 flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>Email:</span>
            <a className="text-secondary underline" href={`mailto:${contacts.email}`}>
              {contacts.email}
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>Telefono:</span>
            <a className="text-secondary underline" href={`tel:${contacts.phone?.replace?.(/\s/g, "")}`}>
              {contacts.phone}
            </a>
          </p>
          {contacts.mobile && (
            <p className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              <span>Cellulare (solo per SMS):</span>
              <a className="text-secondary underline" href={`tel:${contacts.mobile?.replace?.(/\s/g, "")}`}>
                {contacts.mobile}
              </a>
            </p>
          )}
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Social</h4>
            <ul className="space-y-1">
              <li className="flex items-center gap-2">
                <Facebook className="h-4 w-4" />
                <a className="text-secondary underline" href="#" aria-label="Facebook">
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                <a className="text-secondary underline" href="#" aria-label="Instagram">
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <a className="text-secondary underline" href="#" aria-label="LinkedIn">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
