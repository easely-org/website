export function ScienceSection() {
  const waveTypes = [
    {
      name: "Delta",
      range: "0.5-4 Hz",
      description: "Deep sleep, healing, regeneration",
      color: "bg-muted-foreground/20",
    },
    {
      name: "Theta",
      range: "4-8 Hz",
      description: "Creativity, intuition, meditation",
      color: "bg-muted-foreground/40",
    },
    {
      name: "Alpha",
      range: "8-12 Hz",
      description: "Relaxed focus, calm alertness",
      color: "bg-accent",
    },
    {
      name: "Beta",
      range: "12-30 Hz",
      description: "Active thinking, concentration",
      color: "bg-muted-foreground/60",
    },
    {
      name: "Gamma",
      range: "30-100 Hz",
      description: "Peak performance, insight",
      color: "bg-muted-foreground/80",
    },
  ]

  return (
    <section id="science" className="py-24 lg:py-32 bg-muted">
      <div className="px-6 lg:px-12">
        <div className="max-w-3xl mb-16 lg:mb-24">
          <p className="text-sm uppercase tracking-widest text-accent mb-4">The Science</p>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter mb-8">Your brain speaks in waves</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every thought, every emotion, every moment of focus creates unique electrical patterns. Easely captures
            these signals through advanced dry-electrode technology and translates them into insights you can actually
            use.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {waveTypes.map((wave) => (
            <div
              key={wave.name}
              className="bg-background p-6 group hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <div className={`w-full h-2 ${wave.color} mb-6 group-hover:bg-accent`} />
              <h3 className="text-xl font-bold mb-1">{wave.name}</h3>
              <p className="text-sm font-mono text-muted-foreground group-hover:text-primary-foreground/60 mb-4">
                {wave.range}
              </p>
              <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed">
                {wave.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-24 pt-16 lg:pt-24 border-t border-border">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
            <div>
              <p className="text-5xl lg:text-7xl font-bold tracking-tighter">94%</p>
              <p className="text-sm text-muted-foreground mt-2">Signal accuracy vs. clinical EEG</p>
            </div>
            <div>
              <p className="text-5xl lg:text-7xl font-bold tracking-tighter">12</p>
              <p className="text-sm text-muted-foreground mt-2">Published peer-reviewed studies</p>
            </div>
            <div>
              <p className="text-5xl lg:text-7xl font-bold tracking-tighter">3yr</p>
              <p className="text-sm text-muted-foreground mt-2">R&D with leading universities</p>
            </div>
            <div>
              <p className="text-5xl lg:text-7xl font-bold tracking-tighter">FDA</p>
              <p className="text-sm text-muted-foreground mt-2">Clearance pending 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
