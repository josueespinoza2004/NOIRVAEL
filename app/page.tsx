import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Clothing } from "@/components/clothing"
import { VideoShowcase } from "@/components/video-showcase"
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
      <Clothing />
      <VideoShowcase />
      <Supplements />
      <About />
      <Services />
      <FitnessTest />
      <Contact />
      <Testimonials />
      <Footer />
    </main>
  )
}
