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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/NOIRVAEL/NOIRVAEL11.png" alt="NOIRVAEL Coach" className="w-full h-[600px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-white/90 text-sm font-semibold tracking-[0.3em] uppercase">NOIRVAEL</span>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-xl border border-primary/20 animate-float">
              <div className="text-4xl font-bold text-primary mb-1">15k+</div>
              <div className="text-sm text-muted-foreground">Horas de Entrenamiento</div>
            </div>

            {/* Brand decoration */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-xl overflow-hidden shadow-lg border-2 border-primary/30">
              <img src="/NOIRVAEL/NOIRVAEL12.png" alt="NOIRVAEL" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-[0.3em]">Sobre Nosotros</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
              Dedicados a tu transformación
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              Con más de 5 años de experiencia en el mundo del fitness y la nutrición, NOIRVAEL nació de la pasión por ayudar a las personas a alcanzar su mejor versión. No solo entrenamos cuerpos, transformamos vidas a través de hábitos saludables, estilo y rendimiento.
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
                  <p className="text-sm text-muted-foreground">Tu éxito es nuestro éxito</p>
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

            <Button size="lg" className="text-lg px-8 tracking-wider">
              Conoce Nuestra Historia
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
