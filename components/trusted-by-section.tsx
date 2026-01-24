export function TrustedBySection() {
  const logos = [
    { name: "Stanford", text: "Stanford Medicine" },
    { name: "MIT", text: "MIT BCI Lab" },
    { name: "Mayo", text: "Mayo Clinic" },
    { name: "Johns Hopkins", text: "Johns Hopkins" },
    { name: "Harvard", text: "Harvard Medical" },
  ]

  return (
    <section className="py-16 border-y border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by leading research institutions worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-muted-foreground/60 hover:text-muted-foreground transition-colors font-medium text-lg"
            >
              {logo.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
