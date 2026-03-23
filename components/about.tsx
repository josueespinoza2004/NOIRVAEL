"use client"

import { Button } from "@/components/ui/button"
import { Award, Target, Heart, TrendingUp } from "lucide-react"

export function About() {
  return (
    <section id="sobre-mi" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="/professional-fitness-coach.png" alt="Coach profesional" className="w-full h-[600px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-xl border-2 border-primary/20 animate-float">
              <div className="text-4xl font-bold text-primary mb-1">15k+</div>
              <div className="text-sm text-muted-foreground">Horas de Entrenamiento</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sobre Mí</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
              Tu coach dedicado a tu transformación
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              Con más de 5 años de experiencia en el mundo del fitness y la nutrición, mi misión es ayudarte a alcanzar
              tu mejor versión. No solo entreno cuerpos, transformo vidas a través de hábitos saludables y sostenibles.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Certificado Internacional</h4>
                  <p className="text-sm text-muted-foreground">ISSA & ACE Certified</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Enfoque Personalizado</h4>
                  <p className="text-sm text-muted-foreground">Cada cliente es único</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Pasión por Ayudar</h4>
                  <p className="text-sm text-muted-foreground">Tu éxito es mi éxito</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Resultados Comprobados</h4>
                  <p className="text-sm text-muted-foreground">500+ transformaciones</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="text-lg px-8">
              Conoce Mi Historia
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
