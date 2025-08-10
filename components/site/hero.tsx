import { getContacts } from "@/lib/content"
import Image from "next/image"

export async function Hero() {
  const contacts = await getContacts()
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Insieme, dal 1989, contro i tumori.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Sostieni ASLT con il tuo 5×1000: basta indicare il codice fiscale <strong>{contacts.fiscalCode}</strong>.
          </p>
        </div>
        <div className="relative rounded-lg overflow-hidden border">
          <Image
            src={"/placeholder.svg?height=600&width=900&query=hands united community in action photo"}
            alt="Mani unite, comunità in azione"
            width={900}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary-light/20 to-transparent pointer-events-none" />
        </div>
      </div>
      <div className="absolute -z-10 inset-0 bg-gradient-to-b from-secondary-light/20 to-transparent" />
    </section>
  )
}
