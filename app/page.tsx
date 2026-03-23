import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Clothing } from "@/components/clothing"
import { Testimonials } from "@/components/testimonials"
import { Supplements } from "@/components/supplements"
import { Contact } from "@/components/contact"
import { FitnessTest } from "@/components/fitness-test"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { BrandBanner } from "@/components/brand-banner"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <BrandBanner image="/NOIRVAEL/NOIRVAEL14.jpeg" align="left" text="NOIRVAEL" subtitle="Rendimiento sin compromisos" />
      <About />
      <Clothing />
      <Supplements />
      <Testimonials />
      <Contact />
      <FitnessTest />
      <Footer />
    </main>
  )
}
