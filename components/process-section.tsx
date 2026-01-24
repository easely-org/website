export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Wear",
      description: "Slip on the lightweight Easely headband. No gel, no prep, no discomfort.",
    },
    {
      number: "02",
      title: "Connect",
      description: "Bluetooth sync to your phone in seconds. Our app guides you through calibration.",
    },
    {
      number: "03",
      title: "Discover",
      description: "See your brain activity in real-time. Track patterns, set goals, unlock insights.",
    },
  ]

  return (
    <section id="process" className="py-24 lg:py-32 border-t border-border">
      <div className="px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24">
          <div>
            <p className="text-sm uppercase tracking-widest text-accent mb-4">Our Process</p>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter text-balance">
              Three steps to
              <br />
              cognitive clarity
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md mt-6 lg:mt-0 leading-relaxed">
            We stripped away everything complex about EEG technology and built something anyone can use at home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {steps.map((step) => (
            <div key={step.number} className="bg-background p-8 lg:p-12 group hover:bg-muted transition-colors">
              <span className="text-7xl lg:text-9xl font-bold text-muted-foreground/20 group-hover:text-accent/20 transition-colors">
                {step.number}
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold mt-4 mb-4 tracking-tight">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
