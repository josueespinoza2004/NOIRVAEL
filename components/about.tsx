"use client"

import { Button } from "@/components/ui/button"
import { Award, Target, Heart, TrendingUp } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function About() {
  const { t } = useI18n()
  return (
    <section id="sobre-mi" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/NOIRVAEL/couch.jpg" alt="Erick Ruiz - NOIRVAEL Coach" className="w-full h-[600px] object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-white/90 text-sm font-semibold tracking-[0.3em] uppercase">NOIRVAEL</span>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-xl border border-primary/20 animate-float">
              <div className="text-4xl font-bold text-primary mb-1">15k+</div>
              <div className="text-sm text-muted-foreground">{t("about.floatStat")}</div>
            </div>
          </div>
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-[0.3em]">{t("about.label")}</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">{t("about.title")}</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">{t("about.description")}</p>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0"><Award className="w-6 h-6 text-primary" /></div>
                <div><h4 className="font-semibold mb-1">{t("about.cert.title")}</h4><p className="text-sm text-muted-foreground">{t("about.cert.sub")}</p></div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0"><Target className="w-6 h-6 text-accent" /></div>
                <div><h4 className="font-semibold mb-1">{t("about.focus.title")}</h4><p className="text-sm text-muted-foreground">{t("about.focus.sub")}</p></div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0"><Heart className="w-6 h-6 text-primary" /></div>
                <div><h4 className="font-semibold mb-1">{t("about.passion.title")}</h4><p className="text-sm text-muted-foreground">{t("about.passion.sub")}</p></div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0"><TrendingUp className="w-6 h-6 text-accent" /></div>
                <div><h4 className="font-semibold mb-1">{t("about.results.title")}</h4><p className="text-sm text-muted-foreground">{t("about.results.sub")}</p></div>
              </div>
            </div>
            <Button size="lg" className="text-lg px-8 tracking-wider">{t("about.cta")}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
