import { Instagram, Facebook, Youtube, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold tracking-[0.15em]">
                NOIR<span className="text-primary">VAEL</span>
              </span>
            </div>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Tu marca premium de fitness y estilo de vida. Transformamos vidas a través del entrenamiento, la nutrición y el estilo.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li><a href="#servicios" className="text-secondary-foreground/80 hover:text-primary transition-colors">Entrenamiento Personal</a></li>
              <li><a href="#servicios" className="text-secondary-foreground/80 hover:text-primary transition-colors">Planes Nutricionales</a></li>
              <li><a href="#ropa" className="text-secondary-foreground/80 hover:text-primary transition-colors">Ropa Deportiva</a></li>
              <li><a href="#suplementos" className="text-secondary-foreground/80 hover:text-primary transition-colors">Suplementos</a></li>
              <li><a href="#servicios" className="text-secondary-foreground/80 hover:text-primary transition-colors">Entrenamiento Online</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li><a href="#sobre-mi" className="text-secondary-foreground/80 hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#testimonios" className="text-secondary-foreground/80 hover:text-primary transition-colors">Testimonios</a></li>
              <li><a href="#contacto" className="text-secondary-foreground/80 hover:text-primary transition-colors">Contacto</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Aviso Legal</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">© 2025 NOIRVAEL. Todos los derechos reservados.</p>
            <p className="text-secondary-foreground/60 text-sm">Premium Fitness & Lifestyle</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
