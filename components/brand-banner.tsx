"use client"

interface BrandBannerProps {
  image: string
  align?: "left" | "right" | "center"
  text?: string
  subtitle?: string
}

export function BrandBanner({ image, align = "center", text, subtitle }: BrandBannerProps) {
  const overlayAlign = {
    left: "bg-linear-to-r from-black/80 via-black/40 to-transparent items-center justify-start",
    right: "bg-linear-to-l from-black/80 via-black/40 to-transparent items-center justify-end",
    center: "bg-black/50 items-center justify-center",
  }

  const textAlign = {
    left: "text-left pl-8 md:pl-16",
    right: "text-right pr-8 md:pr-16",
    center: "text-center",
  }

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
      <img src={image} alt="NOIRVAEL" className="w-full h-full object-cover object-center" />
      <div className={`absolute inset-0 flex ${text ? overlayAlign[align] : "bg-black/20"}`}>
        {text && (
          <div className={`${textAlign[align]}`}>
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-[0.2em]">{text}</h3>
            {subtitle && <p className="text-white/70 mt-2 text-sm md:text-base tracking-wider">{subtitle}</p>}
          </div>
        )}
      </div>
    </div>
  )
}
