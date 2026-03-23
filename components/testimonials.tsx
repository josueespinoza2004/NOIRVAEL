"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const testimonialsData = [
  { name: "María González", image: "/happy-woman-fitness-client.jpg", rating: 5 },
  { name: "Carlos Ramírez", image: "/athletic-man-fitness-client.jpg", rating: 5 },
  { name: "Ana Martínez", image: "/sporty-woman-fitness-client.jpg", rating: 5 },
  { name: "Jorge Silva", image: "/fit-man-fitness-transformation.jpg", rating: 5 },
  { name: "Laura Pérez", image: "/healthy-woman-fitness-client.jpg", rating: 5 },
  { name: "Roberto Díaz", image: "/strong-man-fitness-client.jpg", rating: 5 },
]

export function Testimonials() {
  const { t } = useI18n()

  const testimonials = testimonialsData.map((td, i) => ({
    ...td,
    role: t(`testimonials.${i}.role`),
    text: t(`testimonials.${i}.text`),
  }))

  return (
    <section id="testimonios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("testimonials.label")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">{t("testimonials.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{t("testimonials.description")}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/20" />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
