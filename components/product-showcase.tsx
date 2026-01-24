import Image from "next/image"

export function ProductShowcase() {
  const specs = [
    { label: "Channels", value: "8" },
    { label: "Sample Rate", value: "256 Hz" },
    { label: "Battery", value: "12 hrs" },
    { label: "Weight", value: "45g" },
  ]

  return (
    <section id="product" className="bg-primary text-primary-foreground">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-square lg:aspect-auto">
          <Image src="/minimal-white-eeg-headband-product-on-black-backgr.jpg" alt="Easely EEG Headband" fill className="object-cover" />
        </div>

        <div className="p-8 lg:p-16 flex flex-col justify-center">
          <p className="text-sm uppercase tracking-widest text-primary-foreground/60 mb-6">The Product</p>

          <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter mb-8">
            Engineered for
            <br />
            <span className="text-accent">everyday minds</span>
          </h2>

          <p className="text-lg text-primary-foreground/80 max-w-md mb-12 leading-relaxed">
            Medical-grade accuracy meets consumer-friendly design. Dry electrodes, premium materials, and an intuitive
            app that turns complex brain data into actionable insights.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
            {specs.map((spec) => (
              <div key={spec.label}>
                <p className="text-3xl lg:text-4xl font-bold text-accent">{spec.value}</p>
                <p className="text-xs uppercase tracking-widest text-primary-foreground/60 mt-1">{spec.label}</p>
              </div>
            ))}
          </div>

          <div>
            <a
              href="#contact"
              className="inline-block bg-accent text-accent-foreground px-8 py-4 text-sm uppercase tracking-widest hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Reserve Yours — $299
            </a>
            <p className="text-xs text-primary-foreground/60 mt-4">Shipping Q3 2026. $49 refundable deposit.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
