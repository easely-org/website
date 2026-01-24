import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Easely Pro",
    description: "For clinical research",
    price: "Contact Sales",
    features: [
      "32-channel dry electrode system",
      "Medical-grade certification",
      "Real-time data streaming",
      "Cloud analytics platform",
      "Priority support",
      "Custom API access",
    ],
    highlighted: true,
  },
  {
    name: "Easely Core",
    description: "For academic research",
    price: "$4,999",
    features: [
      "16-channel dry electrode system",
      "Research-grade signals",
      "Desktop application",
      "Standard analytics",
      "Community support",
      "Data export tools",
    ],
    highlighted: false,
  },
]

export function ProductSection() {
  return (
    <section id="products" className="py-24 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance">Choose your platform</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            From academic research to clinical trials, we have a solution that fits your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <div
              key={product.name}
              className={`relative p-8 rounded-xl border ${
                product.highlighted ? "border-primary bg-card" : "border-border bg-card/50"
              }`}
            >
              {product.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-semibold text-foreground">{product.price}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  product.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
