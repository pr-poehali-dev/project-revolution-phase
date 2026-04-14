import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { News } from "@/components/News"
import { Seasons } from "@/components/Seasons"
import { Philosophy } from "@/components/Philosophy"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <News />
      <Seasons />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  )
}
