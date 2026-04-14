export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="font-serif text-2xl tracking-wide text-foreground mb-4">Деревня Ключи</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Алтайский край. Живём природой — четыре сезона, один характер.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Навигация</p>
            <nav className="flex flex-col gap-3">
              <a href="#about" className="text-sm text-foreground hover:text-sage transition-colors">О деревне</a>
              <a href="#seasons" className="text-sm text-foreground hover:text-sage transition-colors">Сезоны</a>
              <a href="#news" className="text-sm text-foreground hover:text-sage transition-colors">Новости</a>
              <a href="#contact" className="text-sm text-foreground hover:text-sage transition-colors">Контакты</a>
            </nav>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Сезоны</p>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-muted-foreground">Зима · Весна · Лето · Осень</span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} Деревня Ключи
          </p>
          <p className="text-xs text-muted-foreground tracking-wider uppercase">
            Алтайский край
          </p>
        </div>
      </div>
    </footer>
  )
}
