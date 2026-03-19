import { HeroEditorial } from "@/components/hero-editorial"
import { AboutSection } from "@/components/about-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroEditorial />
      <AboutSection />
    </main>
  )
}
