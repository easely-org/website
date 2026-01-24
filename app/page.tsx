import { Navigation } from "@/components/navigation"
import { HeroEditorial } from "@/components/hero-editorial"
import { ProcessSection } from "@/components/process-section"
import { ProductShowcase } from "@/components/product-showcase"
import { TestimonialsMarquee } from "@/components/testimonials-marquee"
import { ScienceSection } from "@/components/science-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* <Navigation /> */}
      <HeroEditorial />
      {/* <ProcessSection /> */}
      {/* <ProductShowcase /> */}
      {/* <TestimonialsMarquee /> */}
      {/* <ScienceSection /> */}
      {/* <ContactSection /> */}
    </main>
  )
}
