export function Hero() {
  return (
    <section className="px-6 lg:px-8 pt-10 pb-8 max-w-7xl mx-auto">
      <div className="relative">
        {/* Big background text */}
        <div
          aria-hidden="true"
          className="absolute -top-4 left-0 font-serif font-bold text-[clamp(80px,18vw,200px)] leading-none select-none pointer-events-none"
          style={{ color: "hsl(var(--sand))", zIndex: 0 }}
        >
          Ключи
        </div>

        {/* Foreground content */}
        <div className="relative z-10 pt-16 md:pt-24">
          <h1 className="font-sans font-bold text-3xl md:text-4xl text-foreground leading-tight mb-3">
            Деревня<br />Ключи
          </h1>
          <p className="text-sm text-muted-foreground">
            Сысертского муниципального округа Свердловской области
          </p>
        </div>
      </div>

      <hr className="mt-8 border-border" />
    </section>
  )
}
