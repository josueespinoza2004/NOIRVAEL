"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, Apple, Package, Video, MapPin, Truck } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const icons = [Dumbbell, Apple, Package, Video, MapPin, Truck]

export function Services() {
  const { t } = useI18n()

  const services = icons.map((icon, i) => ({
    icon,
    title: t(`services.${i}.title`),
    description: t(`services.${i}.description`),
    features: [t(`services.${i}.f0`), t(`services.${i}.f1`), t(`services.${i}.f2`)],
  }))

  return (
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("services.label")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">{t("services.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{t("services.description")}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
