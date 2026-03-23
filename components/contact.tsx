"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MessageCircle, Instagram, Facebook, Youtube, MapPin, Clock } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Contact() {
  const { t } = useI18n()

  const contactMethods = [
    { icon: Phone, title: t("contact.phone"), value: "+34 612 345 678", link: "tel:+34612345678", color: "bg-primary/10 text-primary" },
    { icon: Mail, title: t("contact.email"), value: "info@noirvael.com", link: "mailto:info@noirvael.com", color: "bg-accent/10 text-accent" },
    { icon: MessageCircle, title: t("contact.whatsapp"), value: "+34 612 345 678", link: "https://wa.me/34612345678", color: "bg-primary/10 text-primary" },
    { icon: Instagram, title: t("contact.instagram"), value: "@noirvael", link: "https://instagram.com/noirvael", color: "bg-accent/10 text-accent" },
  ]

  return (
    <section id="contacto" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("contact.label")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">{t("contact.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{t("contact.description")}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a key={index} href={method.link} target="_blank" rel="noopener noreferrer" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                <CardContent className="p-6 text-center">
                  <div className={`${method.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <method.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground">{method.value}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">{t("contact.form.title")}</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">{t("contact.form.name")}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" placeholder={t("contact.form.namePh")} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t("contact.form.lastName")}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" placeholder={t("contact.form.lastNamePh")} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact.form.email")}</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" placeholder={t("contact.form.emailPh")} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact.form.phone")}</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" placeholder={t("contact.form.phonePh")} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact.form.message")}</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder={t("contact.form.messagePh")} />
                </div>
                <Button size="lg" className="w-full text-lg">{t("contact.form.send")}</Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0"><MapPin className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h4 className="font-semibold mb-2">{t("contact.location.title")}</h4>
                    <p className="text-muted-foreground">Calle Fitness 123<br />28001 Madrid, España</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0"><Clock className="w-6 h-6 text-accent" /></div>
                  <div>
                    <h4 className="font-semibold mb-2">{t("contact.schedule.title")}</h4>
                    <p className="text-muted-foreground">{t("contact.schedule.weekdays")}<br />{t("contact.schedule.saturday")}<br />{t("contact.schedule.sunday")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">{t("contact.ready.title")}</h3>
                <p className="mb-6 opacity-90">{t("contact.ready.description")}</p>
                <Button size="lg" variant="secondary" className="w-full">{t("contact.ready.cta")}</Button>
              </CardContent>
            </Card>
            <div className="flex gap-4 justify-center">
              {[Instagram, Facebook, Youtube, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="bg-card hover:bg-primary hover:text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
