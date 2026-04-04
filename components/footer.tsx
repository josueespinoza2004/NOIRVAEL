"use client"

import { Instagram, Facebook, Youtube, Twitter } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold tracking-[0.15em]">NOIR<span className="text-primary">VÆL</span></span>
            </div>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">{t("footer.description")}</p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.services")}</h3>
            <ul className="space-y-3">
              <li><a href="#servicios" className="text-secondary-foreground/80 hover:text-primary transition-colors">{t("footer.services.training")}</a></li>
              <li><a href="#servicios" className="text-secondary-foreground/80 hover:text-primary transition-colors">{t("footer.services.nutrition")}</a></li>
              <li><a href="#ropa" className="text-secondary-foreground/80 hover:text-primary transition-colors">{t("footer.services.clothing")}</a></li>
              <li><a href="#suplementos" className="text-secondary-foreground/80 hover:text-primary transition-colors">{t("footer.services.supplements")}</a></li>
              <li><a href="#servicios" className="text-secondary-foreground/80 hover:text-primary transition-colors">{t("footer.services.online")}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.company")}</h3>
            <ul className="space-y-3">
              <li><a href="#sobre-mi" className="text-secondary-foreground/80 hover:text-primary transition-colors">{t("footer.company.about")}</a></li>
              <li><a href="#testimonios" className="text-secondary-foreground/80 hover:text-primary transition-colors">{t("footer.company.testimonials")}</a></li>
              <li><a href="#contacto" className="text-secondary-foreground/80 hover:text-primary transition-colors">{t("footer.company.contact")}</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">{t("footer.company.blog")}</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">{t("footer.company.faq")}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">{t("footer.legal.privacy")}</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">{t("footer.legal.terms")}</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">{t("footer.legal.cookies")}</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">{t("footer.legal.notice")}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">© {new Date().getFullYear()} NOIRVÆL. {t("footer.copyright")}</p>
            <p className="text-secondary-foreground/60 text-sm">{t("footer.tagline")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
