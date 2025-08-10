"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const nav = [
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/eventi", label: "Notizie & Eventi" },
  { href: "/direttivo", label: "Direttivo" },
  { href: "/rendiconto", label: "Rendiconto" },
  { href: "/contatti", label: "Contatti" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          Associazione Santantonese per la Lotta ai Tumori O.N.L.U.S.
        </Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm hover:text-secondary">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Apri menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                {nav.map((n) => (
                  <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-base">
                    {n.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
