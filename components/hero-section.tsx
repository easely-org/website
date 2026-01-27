"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { BrainWaveAnimation } from "./brain-wave-animation"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs text-muted-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Now available for clinical trials
            </div>

            {/* <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground text-balance">
              Normalizing mental wellness for everyone with <span className="font-bold italic">Easely</span>
            </h1> */}

            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              Easely delivers research-grade brain monitoring in a design that patients love. Advanced neural insights,
              simplified for everyone.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Start Building
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start">
              <div>
                <div className="text-2xl font-semibold text-foreground">99.2%</div>
                <div className="text-sm text-muted-foreground">Signal Accuracy</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-2xl font-semibold text-foreground">32ch</div>
                <div className="text-sm text-muted-foreground">EEG Channels</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-2xl font-semibold text-foreground">{"<"}5min</div>
                <div className="text-sm text-muted-foreground">Setup Time</div>
              </div>
            </div>
          </div>

          {/* Right Content - Brain Wave Animation */}
          <div className="relative h-[400px] lg:h-[500px]">
            <BrainWaveAnimation />
          </div>
        </div>
      </div>
    </section>
  )
}
