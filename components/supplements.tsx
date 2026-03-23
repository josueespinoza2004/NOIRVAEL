"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star } from "lucide-react"

const products = [
  {
    name: "Proteína Whey Premium",
    category: "Proteínas",
    price: "49.99",
    rating: 4.9,
    image: "/whey-protein-container.jpg",
  },
  {
    name: "Pre-Workout Energía",
    category: "Pre-Entreno",
    price: "34.99",
    rating: 4.8,
    image: "/pre-workout-supplement.png",
  },
  {
    name: "BCAA Recovery",
    category: "Recuperación",
    price: "29.99",
    rating: 4.7,
    image: "/bcaa-supplement-powder.jpg",
  },
  {
    name: "Multivitamínico Completo",
    category: "Vitaminas",
    price: "24.99",
    rating: 4.9,
    image: "/multivitamin-bottle.png",
  },
]

export function Supplements() {
  return (
    <section id="suplementos" className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Tienda</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">Suplementos de calidad premium</h2>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto text-pretty">
            Productos certificados y de las mejores marcas para potenciar tus resultados
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Nuevo
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
                <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.rating})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">${product.price}</div>
                  <Button size="sm" className="group/btn">
                    <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Agregar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            Ver Todos los Productos
          </Button>
        </div>
      </div>
    </section>
  )
}
