"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Hero() {
  const { t } = useI18n()
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img src="/NOIRVAEL/NOIRVAEL25.jpeg" alt="NOIRVAEL Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-black/40" />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 animate-in fade-in slide-in-from-bottom duration-700">
            <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/30 tracking-widest uppercase">
              {t("hero.badge")}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom duration-700 delay-100 text-balance tracking-tight">
            {t("hero.title1")}<span className="text-primary">{t("hero.titleHighlight")}</span>{t("hero.title2")}
          </h1>
          <p className="text-xl md:text-2xl text-white/85 mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200 text-pretty">
            {t("hero.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <Button size="lg" className="text-lg px-8 py-6 group tracking-wider">
              {t("hero.cta1")}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              <Play className="mr-2 w-5 h-5" />
              {t("hero.cta2")}
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-16 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-white/80">{t("hero.stat1")}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-white/80">{t("hero.stat2")}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-white/80">{t("hero.stat3")}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
