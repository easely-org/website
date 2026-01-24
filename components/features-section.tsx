import { Activity, Zap, Shield, Cpu, Wifi, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Activity,
    title: "Real-Time Analysis",
    description: "Process neural signals with sub-millisecond latency for live brain-computer interface applications.",
  },
  {
    icon: Zap,
    title: "Ultra-Low Noise",
    description:
      "Industry-leading signal quality with <0.5μV RMS noise floor for capturing the subtlest neural events.",
  },
  {
    icon: Shield,
    title: "Medical Grade",
    description: "FDA-cleared and CE-marked. Built for clinical environments with full regulatory compliance.",
  },
  {
    icon: Cpu,
    title: "Edge Processing",
    description: "On-device AI processes data locally, ensuring privacy and enabling offline operation.",
  },
  {
    icon: Wifi,
    title: "Wireless Freedom",
    description: "Bluetooth 5.0 with 24-hour battery life. Full mobility without sacrificing data quality.",
  },
  {
    icon: BarChart3,
    title: "Rich Analytics",
    description: "Comprehensive dashboards with customizable metrics, trends, and exportable reports.",
  },
]

export function FeaturesSection() {
  return (
    <section id="solutions" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance">
            Built for researchers, designed for patients
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Easely combines clinical-grade precision with consumer-friendly design, making advanced EEG accessible to
            everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
