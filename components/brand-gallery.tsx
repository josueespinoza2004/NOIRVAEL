"use client"

const images = [
  "/NOIRVAEL/NOIRVAEL13.jpeg",
  "/NOIRVAEL/NOIRVAEL14.jpeg",
  "/NOIRVAEL/NOIRVAEL15.jpeg",
  "/NOIRVAEL/NOIRVAEL16.jpeg",
  "/NOIRVAEL/NOIRVAEL17.jpeg",
  "/NOIRVAEL/NOIRVAEL18.jpeg",
]

export function BrandGallery() {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <span className="text-primary font-semibold text-sm uppercase tracking-[0.3em]">Lifestyle</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 tracking-tight">El Estilo NOIRVAEL</h2>
        <p className="text-lg text-secondary-foreground/70 max-w-xl mx-auto">
          Más que una marca, un estilo de vida. Descubre la esencia de NOIRVAEL.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 px-4 max-w-6xl mx-auto">
        {images.map((src, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-lg group ${i === 0 || i === 5 ? "row-span-2 aspect-[3/5]" : "aspect-square"}`}
          >
            <img
              src={src}
              alt={`NOIRVAEL lifestyle ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-end p-4">
              <span className="text-white/0 group-hover:text-white/90 transition-colors duration-500 text-sm font-semibold tracking-widest uppercase">
                NOIRVAEL
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
