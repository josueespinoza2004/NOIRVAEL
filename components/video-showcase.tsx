"use client"

import { Play } from "lucide-react"
import { useI18n } from "@/lib/i18n"

// To add videos: replace the placeholder items below with real video sources.
// Set `src` to the video file path (e.g. "/videos/campaign1.mp4") or a YouTube/Vimeo embed URL.
// Set `poster` to a thumbnail image path.
// Set `type` to "video" for self-hosted or "embed" for YouTube/Vimeo iframes.
const videos = [
  { id: 1, poster: "/NOIRVAEL/NOIRVAEL14.jpeg", src: "", type: "video" as const, title: "Campaign 01" },
  { id: 2, poster: "/NOIRVAEL/NOIRVAEL15.jpeg", src: "", type: "video" as const, title: "Campaign 02" },
  { id: 3, poster: "/NOIRVAEL/NOIRVAEL16.jpeg", src: "", type: "video" as const, title: "Campaign 03" },
]

export function VideoShowcase() {
  const { t } = useI18n()

  return (
    <section id="videos" className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.3em]">{t("video.label")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">{t("video.title")}</h2>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto text-pretty">{t("video.description")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {videos.map((video) => (
            <div key={video.id} className="group relative rounded-xl overflow-hidden aspect-9/16 bg-black cursor-pointer">
              {video.src ? (
                // When video src is available, render actual video
                video.type === "embed" ? (
                  <iframe src={video.src} className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen />
                ) : (
                  <video poster={video.poster} className="w-full h-full object-cover" controls preload="none">
                    <source src={video.src} type="video/mp4" />
                  </video>
                )
              ) : (
                // Placeholder until videos are ready
                <>
                  <img src={video.poster} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 text-primary-foreground ml-1" />
                    </div>
                    <span className="text-white font-semibold tracking-wider text-sm uppercase">{video.title}</span>
                    <span className="text-white/60 text-xs mt-1 tracking-wider">{t("video.coming")}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
