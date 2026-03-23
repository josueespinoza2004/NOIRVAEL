"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Perdió 15kg en 4 meses",
    image: "/happy-woman-fitness-client.jpg",
    rating: 5,
    text: "NexoDirect cambió mi vida completamente. No solo perdí peso, gané confianza y energía. El seguimiento personalizado hace toda la diferencia.",
  },
  {
    name: "Carlos Ramírez",
    role: "Ganó 8kg de músculo",
    image: "/athletic-man-fitness-client.jpg",
    rating: 5,
    text: "Los planes de entrenamiento y nutrición son increíbles. En 6 meses logré resultados que nunca pensé posibles. Totalmente recomendado.",
  },
  {
    name: "Ana Martínez",
    role: "Mejoró su rendimiento",
    image: "/sporty-woman-fitness-client.jpg",
    rating: 5,
    text: "Como atleta, necesitaba un coach que entendiera mis necesidades. El programa online me permite entrenar desde cualquier lugar sin perder calidad.",
  },
  {
    name: "Jorge Silva",
    role: "Transformación completa",
    image: "/fit-man-fitness-transformation.jpg",
    rating: 5,
    text: "Después de años intentando por mi cuenta, finalmente encontré el apoyo que necesitaba. Los suplementos recomendados también son de excelente calidad.",
  },
  {
    name: "Laura Pérez",
    role: "Recuperó su salud",
    image: "/healthy-woman-fitness-client.jpg",
    rating: 5,
    text: "No solo mejoré físicamente, mi salud general cambió. El enfoque holístico de NexoDirect es lo que realmente marca la diferencia.",
  },
  {
    name: "Roberto Díaz",
    role: "Superó sus límites",
    image: "/strong-man-fitness-client.jpg",
    rating: 5,
    text: "La atención personalizada y el seguimiento constante me ayudaron a superar mis límites. Cada sesión es un paso más hacia mis objetivos.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonios</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">Historias de éxito reales</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Descubre cómo NexoDirect ha transformado la vida de cientos de personas
          </p>
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

                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                  />
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
