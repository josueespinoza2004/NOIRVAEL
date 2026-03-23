"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

const products = [
  { name: "NOIRVAEL Sport Hoodie", category: "Hoodies", price: "69.99", image: "/NOIRVAEL/NOIRVAEL5.png" },
  { name: "NOIRVAEL Dry-Fit Polo", category: "Polos", price: "49.99", image: "/NOIRVAEL/NOIRVAEL7.png" },
  { name: "NOIRVAEL Windbreaker", category: "Chaquetas", price: "89.99", image: "/NOIRVAEL/NOIRVAEL8.png" },
  { name: "NOIRVAEL Pro Leggings", category: "Leggings", price: "54.99", image: "/NOIRVAEL/NOIRVAEL9.png" },
  { name: "NOIRVAEL Muscle Fit Tee", category: "Camisetas", price: "42.99", image: "/NOIRVAEL/NOIRVAEL10.png" },
  { name: "NOIRVAEL Track Jacket", category: "Chaquetas", price: "74.99", image: "/NOIRVAEL/NOIRVAEL11.png" },
  { name: "NOIRVAEL Athletic Wear", category: "Conjuntos", price: "64.99", image: "/NOIRVAEL/NOIRVAEL17.jpeg" },
  { name: "NOIRVAEL Performance Fit", category: "Camisetas", price: "44.99", image: "/NOIRVAEL/NOIRVAEL13.jpeg" },
]

export function Clothing() {
  return (
    <section id="ropa" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.3em]">Colección</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">Ropa Deportiva NOIRVAEL</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Prendas diseñadas para el máximo rendimiento con la elegancia que define nuestra marca
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0">
              <div className="relative overflow-hidden bg-muted aspect-3/4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <CardContent className="p-5">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.category}</div>
                <h3 className="text-lg font-semibold mb-3">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-primary">${product.price}</div>
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <ShoppingCart className="w-4 h-4 mr-1" />
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
            className="text-lg px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent tracking-wider"
          >
            Ver Toda la Colección
          </Button>
        </div>
      </div>
    </section>
  )
}
