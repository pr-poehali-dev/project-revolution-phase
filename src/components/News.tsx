import { useEffect, useRef, useState } from "react"

const news = [
  {
    date: "12 апреля 2026",
    title: "Весенний субботник в деревне",
    text: "Жители деревни Ключи вышли на общий субботник — убрали берег речки и высадили молодые берёзки у дороги.",
  },
  {
    date: "3 марта 2026",
    title: "Снежная зима подходит к концу",
    text: "В этом году выпало рекордное количество снега. Фоторепортаж из заснеженных Ключей уже в галерее сезонов.",
  },
  {
    date: "15 января 2026",
    title: "Новый год в Ключах",
    text: "Деревня встретила Новый год у общей ёлки. Морозный вечер, огни и горячий чай — традиция продолжается.",
  },
]

export function News() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="news" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Жизнь деревни
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Новости
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {news.map((item, index) => (
            <div
              key={item.title}
              className={`bg-background p-10 lg:p-12 transition-all duration-1000 hover:bg-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <p className="text-xs tracking-widest uppercase text-sage mb-6">{item.date}</p>
              <h3 className="font-serif text-2xl text-foreground mb-4 leading-snug">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
