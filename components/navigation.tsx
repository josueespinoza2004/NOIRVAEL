"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t, locale, setLocale } = useI18n()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#ropa", label: t("nav.clothing") },
    { href: "#suplementos", label: t("nav.supplements") },
    { href: "#sobre-mi", label: t("nav.about") },
    { href: "#testimonios", label: t("nav.testimonials") },
    { href: "#servicios", label: t("nav.services") },
    { href: "#contacto", label: t("nav.contact") },
  ]

  const showBg = isScrolled || isMobileMenuOpen
  const linkColor = showBg ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
  const logoColor = showBg ? "text-foreground" : "text-white"

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showBg ? "bg-background shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <span className={`text-2xl font-bold tracking-[0.15em] ${logoColor} transition-colors`}>
              N<span className="text-primary">Ø</span>IRVAEL
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={`${linkColor} transition-colors font-medium text-sm uppercase tracking-wider`}>
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setLocale(locale === "en" ? "es" : "en")}
              className={`flex items-center gap-1.5 ${linkColor} transition-colors text-sm font-medium uppercase tracking-wider`}
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              {locale === "en" ? "ES" : "EN"}
            </button>
            <Button size="lg" className="animate-pulse-glow tracking-wider">
              {t("nav.cta")}
            </Button>
          </div>

          <button className={`md:hidden ${logoColor} transition-colors`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-background z-40 animate-in fade-in duration-200">
          <div className="flex flex-col gap-6 p-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-foreground hover:text-primary transition-colors font-medium py-2 text-lg uppercase tracking-wider" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setLocale(locale === "en" ? "es" : "en")}
              className="flex items-center gap-1.5 text-foreground hover:text-primary transition-colors text-lg font-medium uppercase tracking-wider py-2"
            >
              <Globe className="w-5 h-5" />
              {locale === "en" ? "Español" : "English"}
            </button>
            <Button size="lg" className="w-full tracking-wider text-lg mt-4">{t("nav.cta")}</Button>
          </div>
        </div>
      )}
    </nav>
  )
}
