import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const seasons = [
  {
    id: "winter",
    name: "Зима",
    emoji: "❄️",
    description: "Белая тишина и морозный воздух",
    bg: "bg-slate-100",
    accent: "text-slate-500",
    photos: [
      { src: "/placeholder.jpg", caption: "Снежные поля" },
      { src: "/placeholder.jpg", caption: "Заснеженный лес" },
      { src: "/placeholder.jpg", caption: "Зимний рассвет" },
      { src: "/placeholder.jpg", caption: "Ключи под снегом" },
    ],
  },
  {
    id: "spring",
    name: "Весна",
    emoji: "🌿",
    description: "Первые цветы и пробуждение земли",
    bg: "bg-green-50",
    accent: "text-green-600",
    photos: [
      { src: "/placeholder.jpg", caption: "Первоцветы" },
      { src: "/placeholder.jpg", caption: "Половодье" },
      { src: "/placeholder.jpg", caption: "Зелёные луга" },
      { src: "/placeholder.jpg", caption: "Весенний воздух" },
    ],
  },
  {
    id: "summer",
    name: "Лето",
    emoji: "☀️",
    description: "Буйная зелень и долгие вечера",
    bg: "bg-yellow-50",
    accent: "text-yellow-600",
    photos: [
      { src: "/placeholder.jpg", caption: "Летние поля" },
      { src: "/placeholder.jpg", caption: "Речка в жару" },
      { src: "/placeholder.jpg", caption: "Деревенский вечер" },
      { src: "/placeholder.jpg", caption: "Заливные луга" },
    ],
  },
  {
    id: "autumn",
    name: "Осень",
    emoji: "🍂",
    description: "Золото листьев и запах земли",
    bg: "bg-orange-50",
    accent: "text-orange-600",
    photos: [
      { src: "/placeholder.jpg", caption: "Золотой лес" },
      { src: "/placeholder.jpg", caption: "Осенний туман" },
      { src: "/placeholder.jpg", caption: "Урожай" },
      { src: "/placeholder.jpg", caption: "Закат над полем" },
    ],
  },
]

export function Seasons() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSeason, setActiveSeason] = useState<string | null>(null)
  const [activePhoto, setActivePhoto] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const openGallery = (seasonId: string) => {
    setActiveSeason(seasonId)
    setActivePhoto(0)
  }

  const closeGallery = () => {
    setActiveSeason(null)
    setActivePhoto(null)
  }

  const currentSeason = seasons.find(s => s.id === activeSeason)

  return (
    <section ref={sectionRef} id="seasons" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Фоторепортажи
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Сезоны деревни
          </h2>
          <p
            className={`mt-6 text-muted-foreground max-w-xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Нажмите на карточку — и откроется фоторепортаж этого времени года
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {seasons.map((season, index) => (
            <button
              key={season.id}
              onClick={() => openGallery(season.id)}
              className={`group relative aspect-square ${season.bg} overflow-hidden transition-all duration-1000 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <span className="text-5xl md:text-6xl mb-4">{season.emoji}</span>
                <p className={`font-serif text-2xl md:text-4xl font-light text-foreground`}>{season.name}</p>
                <p className="text-sm text-muted-foreground mt-2 text-center">{season.description}</p>
              </div>
              <div className="absolute inset-0 bg-sage/0 group-hover:bg-sage/10 transition-colors duration-500" />
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-sage text-primary-foreground text-xs tracking-widest uppercase px-3 py-1.5">
                  Смотреть
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {activeSeason && currentSeason && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={closeGallery}
        >
          <div
            className="max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-3xl mr-3">{currentSeason.emoji}</span>
                <span className="font-serif text-3xl text-foreground">{currentSeason.name}</span>
                <p className="text-muted-foreground text-sm mt-1 ml-10">{currentSeason.description}</p>
              </div>
              <button
                onClick={closeGallery}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Закрыть"
              >
                <Icon name="X" size={24} />
              </button>
            </div>

            {/* Main photo */}
            <div className="relative aspect-video bg-sand overflow-hidden mb-4">
              <img
                src={currentSeason.photos[activePhoto ?? 0].src}
                alt={currentSeason.photos[activePhoto ?? 0].caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-6">
                <p className="text-white text-sm tracking-wide">{currentSeason.photos[activePhoto ?? 0].caption}</p>
              </div>
              {/* Prev / Next */}
              <button
                onClick={() => setActivePhoto(p => p !== null && p > 0 ? p - 1 : currentSeason.photos.length - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 p-2 hover:bg-background transition-colors"
              >
                <Icon name="ChevronLeft" size={20} />
              </button>
              <button
                onClick={() => setActivePhoto(p => p !== null ? (p + 1) % currentSeason.photos.length : 0)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 p-2 hover:bg-background transition-colors"
              >
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {currentSeason.photos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhoto(i)}
                  className={`aspect-square bg-sand overflow-hidden transition-all duration-300 ${
                    activePhoto === i ? "ring-2 ring-sage" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
