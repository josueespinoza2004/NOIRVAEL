"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { Navigation } from "@/components/navigation"

// Add or edit team members here
const team = [
  {
    name: "Erick Ruiz",
    role: { en: "Founder & CEO", es: "Fundador & CEO" },
    image: "/NOIRVAEL/couch.jpg",
    bio: {
      en: "Fitness coach and entrepreneur with 5+ years of experience. Founded NOIRVÆL to merge his passion for training with premium streetwear.",
      es: "Coach fitness y emprendedor con más de 5 años de experiencia. Fundó NOIRVÆL para fusionar su pasión por el entrenamiento con ropa streetwear premium.",
    },
  },
  // Add more team members below:
  // {
  //   name: "Name",
  //   role: { en: "Role in English", es: "Rol en Español" },
  //   image: "/path/to/image.jpg",
  //   bio: {
  //     en: "Bio in English",
  //     es: "Bio en Español",
  //   },
  // },
]

export default function AboutPage() {
  const { t, locale } = useI18n()

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      {/* Hero */}
      <section className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/NOIRVAEL/NOIRVAEL15.jpeg" alt="NOIRVAEL" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">{t("aboutPage.hero")}</h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto">{t("aboutPage.heroSub")}</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.3em]">{t("aboutPage.mission.label")}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-8">{t("aboutPage.mission.title")}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t("aboutPage.mission.text")}</p>
        </div>
      </section>

      {/* Brand images */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["/NOIRVAEL/NOIRVAEL18.jpeg", "/NOIRVAEL/NOIRVAEL16.jpeg", "/NOIRVAEL/NOIRVAEL19.jpeg"].map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden aspect-square">
                <img src={src} alt="NOIRVAEL" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-[0.3em]">{t("aboutPage.team.label")}</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">{t("aboutPage.team.title")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <Card key={i} className="overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">{member.role[locale]}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio[locale]}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
