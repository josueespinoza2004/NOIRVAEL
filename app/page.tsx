import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Clothing } from "@/components/clothing"
import { BrandGallery } from "@/components/brand-gallery"
import { Testimonials } from "@/components/testimonials"
import { Supplements } from "@/components/supplements"
import { Contact } from "@/components/contact"
import { FitnessTest } from "@/components/fitness-test"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Clothing />
      <BrandGallery />
      <Supplements />
      <Testimonials />
      <Contact />
      <FitnessTest />
      <Footer />
    </main>
  )
}
