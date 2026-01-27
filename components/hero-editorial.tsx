"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

export function HeroEditorial() {
  const topCanvasRef = useRef<HTMLCanvasElement>(null)
  const bottomCanvasRef = useRef<HTMLCanvasElement>(null)

  const setupWaveCanvas = (canvas: HTMLCanvasElement, waveConfig: { yOffset: number; speedMultiplier: number }) => {
    const ctx = canvas.getContext("2d")
    if (!ctx) return () => {}

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener("resize", resize)

    const baseWaves = [
      { frequency: 0.015, amplitude: 50, speed: 0.025, offset: 0 },
      { frequency: 0.012, amplitude: 60, speed: 0.018, offset: Math.PI / 4 },
      { frequency: 0.02, amplitude: 35, speed: 0.035, offset: Math.PI / 2 },
      { frequency: 0.018, amplitude: 45, speed: 0.022, offset: Math.PI },
      { frequency: 0.025, amplitude: 30, speed: 0.04, offset: Math.PI * 1.5 },
    ]
    
    // Apply speed multiplier to create different wave speeds
    const waves = baseWaves.map(wave => ({
      ...wave,
      speed: wave.speed * waveConfig.speedMultiplier
    }))

    let animationId: number
    let time = 0

    const draw = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      ctx.clearRect(0, 0, width, height)

      waves.forEach((wave, index) => {
        ctx.beginPath()
        // All waves in #7d6050 with varying opacity
        ctx.strokeStyle = `rgba(125, 96, 80, ${0.12 + index * 0.08})`
        ctx.lineWidth = 1.5

        const baseY = height * waveConfig.yOffset

        for (let x = 0; x < width; x++) {
          const y =
            baseY +
            Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude +
            Math.sin(x * wave.frequency * 2.5 + time * wave.speed * 1.8) * wave.amplitude * 0.4 +
            Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 0.5) * wave.amplitude * 0.2

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      })

      time++
      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }

  useEffect(() => {
    // Alpha waves (8-12 Hz) - faster
    const cleanupTop = topCanvasRef.current ? setupWaveCanvas(topCanvasRef.current, { yOffset: 0.5, speedMultiplier: 1.0 }) : () => {}
    // Theta waves (4-8 Hz) - slower (roughly half the speed of alpha)
    const cleanupBottom = bottomCanvasRef.current
      ? setupWaveCanvas(bottomCanvasRef.current, { yOffset: 0.5, speedMultiplier: 0.5 })
      : () => {}

    return () => {
      cleanupTop()
      cleanupBottom()
    }
  }, [])

  return (
    <section className="h-screen flex flex-col overflow-hidden bg-background">
      {/* Top Waves Section */}
      <div className="flex-1 relative min-h-[28vh]">
        <canvas ref={topCanvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute top-6 left-6 lg:left-12">
          <b><p className="text-xs font-sans text-foreground/50 tracking-widest uppercase">Alpha Waves 8-12 Hz</p></b>
        </div>
        {/* Gradient fade to center */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Text Section - Center */}
      <div className="px-6 lg:px-12 py-6 relative z-10 flex-shrink-0">
  <div className="max-w-3xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
      <span style={{ color: '#583d2b' }}>Normalizing mental wellness
       with</span>
      <span style={{ color: '#272821' }} className="text-5xl md:text-6xl lg:text-7xl">Easely</span>
    </h1>

    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center">
      <button
        type="button"
        data-fillout-id="468hDBTvq3us"
        data-fillout-embed-type="popup"
        data-fillout-trigger
        data-fillout-dynamic-resize
        data-fillout-inherit-parameters
        data-fillout-popup-size="small"
        style={{ backgroundColor: '#583d2b' }}
        className="text-background px-8 py-3 text-xs uppercase tracking-widest hover:opacity-80 transition-opacity text-center cursor-pointer font-sans"
      >
        Join Waitlist
      </button>
      <Script src="https://server.fillout.com/embed/v1/" strategy="afterInteractive" />

      <a
        href="#science"
        style={{ borderColor: '#583d2b' }}
        className="border px-8 py-3 text-xs uppercase tracking-widest hover:bg-[#583d2b] hover:text-background transition-colors text-center font-sans"
      >
        The Science
      </a>
        <a
        href="https://geteasely.substack.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundColor: '#583d2b' }}
        className="text-background px-8 py-3 text-xs uppercase tracking-widest font-sans"
        >
        Newsletter
      </a>
    </div>
  </div>
</div>


      {/* Bottom Waves Section */}
      <div className="flex-1 relative min-h-[28vh]">
        {/* Gradient fade from center */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-10" />
        <canvas ref={bottomCanvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute bottom-6 right-6 lg:right-12 text-right">
          <b><p className="text-xs font-sans text-foreground/50 tracking-widest uppercase">Theta Waves 4-8 Hz</p></b>
        </div>
      </div>
    </section>
  )
}
