import { useState } from "react"
import Icon from "@/components/ui/icon"

const news = [
  {
    tag: "событие",
    date: "31 мая 2026",
    title: "Региональный Сабантуй — 31 мая в Кадниково",
    text: "Губернатор Свердловской области Денис Паслер подписал распоряжение: 31 мая в селе Кадниково Сысертского муниципального округа состоится региональный Сабантуй. В программе — свыше 25 национальных подворий, выставка-ярмарка народных промыслов, дегустация татарских и башкирских блюд.",
  },
  {
    tag: "новость",
    date: "12 апреля 2026",
    title: "Весенний субботник в деревне",
    text: "Жители деревни Ключи вышли на общий субботник — убрали берег речки и высадили молодые берёзки у дороги.",
  },
  {
    tag: "новость",
    date: "3 марта 2026",
    title: "Снежная зима подходит к концу",
    text: "В этом году выпало рекордное количество снега. Фоторепортаж из заснеженных Ключей уже в галерее сезонов.",
  },
  {
    tag: "новость",
    date: "15 января 2026",
    title: "Новый год в Ключах",
    text: "Деревня встретила Новый год у общей ёлки. Морозный вечер, огни и горячий чай — традиция продолжается.",
  },
]

export function News() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? news.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === news.length - 1 ? 0 : c + 1))

  const item = news[current]

  return (
    <section id="news" className="px-6 lg:px-8 py-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-[220px_1fr] gap-10">
        {/* Left label */}
        <div>
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">Актуально</p>
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-foreground leading-tight">
            Новости<br />деревни
          </h2>
        </div>

        {/* Right: card + counter */}
        <div>
          {/* Counter */}
          <div className="flex items-center justify-end gap-2 mb-4">
            <span className="text-sm text-muted-foreground">{current + 1}/{news.length}</span>
            <div className="flex gap-1">
              {news.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-px transition-all duration-300 ${
                    i === current ? "w-8 bg-foreground" : "w-5 bg-border"
                  }`}
                  aria-label={`Новость ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Card */}
          <div className="border border-border rounded-sm p-6 md:p-8 bg-background">
            <div className="flex items-center gap-3 mb-5">
              <span className="border border-border rounded-full text-xs px-3 py-1 text-muted-foreground">
                {item.tag}
              </span>
              <span className="bg-foreground text-background text-xs px-3 py-1 rounded-full font-medium">
                {item.date}
              </span>
            </div>

            <h3 className="font-sans font-bold text-lg md:text-xl text-foreground mb-3 leading-snug">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {item.text}
            </p>

            <div className="flex items-center justify-between">
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                Читать далее →
              </a>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-9 h-9 border border-border flex items-center justify-center hover:bg-sand transition-colors"
                  aria-label="Предыдущая"
                >
                  <Icon name="ChevronLeft" size={16} />
                </button>
                <button
                  onClick={next}
                  className="w-9 h-9 border border-border flex items-center justify-center hover:bg-sand transition-colors"
                  aria-label="Следующая"
                >
                  <Icon name="ChevronRight" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
