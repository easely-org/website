"use client"

import { useEffect, useRef } from "react"

export function BrainWaveAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2
      canvas.height = canvas.offsetHeight * 2
      ctx.scale(2, 2)
    }

    resize()
    window.addEventListener("resize", resize)

    const waves = [
      { amplitude: 30, frequency: 0.02, phase: 0, color: "rgba(45, 212, 191, 0.8)", speed: 0.05 },
      { amplitude: 25, frequency: 0.025, phase: 1, color: "rgba(45, 212, 191, 0.5)", speed: 0.04 },
      { amplitude: 20, frequency: 0.03, phase: 2, color: "rgba(45, 212, 191, 0.3)", speed: 0.03 },
      { amplitude: 35, frequency: 0.015, phase: 3, color: "rgba(45, 212, 191, 0.6)", speed: 0.06 },
    ]

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      const centerY = canvas.offsetHeight / 4

      waves.forEach((wave, waveIndex) => {
        ctx.beginPath()
        ctx.strokeStyle = wave.color
        ctx.lineWidth = 2

        for (let x = 0; x < canvas.offsetWidth; x++) {
          const y =
            centerY +
            waveIndex * 60 +
            Math.sin(x * wave.frequency + time * wave.speed + wave.phase) * wave.amplitude +
            Math.sin(x * wave.frequency * 2 + time * wave.speed * 1.5) * (wave.amplitude / 3)

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()
      })

      // Draw nodes
      const nodeCount = 8
      for (let i = 0; i < nodeCount; i++) {
        const x = (canvas.offsetWidth / (nodeCount + 1)) * (i + 1)
        const baseY = centerY + 90
        const y = baseY + Math.sin(time * 0.03 + i * 0.5) * 20

        // Glow effect
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 20)
        gradient.addColorStop(0, "rgba(45, 212, 191, 0.8)")
        gradient.addColorStop(0.5, "rgba(45, 212, 191, 0.3)")
        gradient.addColorStop(1, "transparent")

        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(x, y, 20, 0, Math.PI * 2)
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.fillStyle = "rgba(45, 212, 191, 1)"
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fill()

        // Connection lines
        if (i < nodeCount - 1) {
          const nextX = (canvas.offsetWidth / (nodeCount + 1)) * (i + 2)
          const nextY = baseY + Math.sin(time * 0.03 + (i + 1) * 0.5) * 20

          ctx.beginPath()
          ctx.strokeStyle = "rgba(45, 212, 191, 0.2)"
          ctx.lineWidth = 1
          ctx.moveTo(x, y)
          ctx.lineTo(nextX, nextY)
          ctx.stroke()
        }
      }

      time++
      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full" style={{ maxWidth: "600px", maxHeight: "400px" }} />
    </div>
  )
}
