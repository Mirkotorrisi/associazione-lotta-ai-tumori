import "@/app/globals.css"
import { Footer } from "@/components/site/footer"
import { Header } from "@/components/site/header"
import type { ReactNode } from "react"


export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className="antialiased text-gray-900 bg-white">
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
