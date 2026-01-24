"use client"

import { useEffect, useRef } from "react"

const testimonials = [
  { text: "Finally, an EEG that doesn't look like medical equipment", author: "Dr. Sarah Chen, Neuroscientist" },
  { text: "I track my focus sessions daily. Game changer for deep work.", author: "Marcus Webb, Software Engineer" },
  { text: "The data quality rivals devices 10x the price", author: "Dr. James Liu, Sleep Researcher" },
  { text: "My meditation practice completely transformed", author: "Anna Kowalski, Mindfulness Coach" },
]

export function TestimonialsMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroll = scrollRef.current
    if (!scroll) return

    let animationId: number
    let position = 0

    const animate = () => {
      position -= 0.5
      if (Math.abs(position) >= scroll.scrollWidth / 2) {
        position = 0
      }
      scroll.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="py-16 border-y border-border overflow-hidden">
      <div ref={scrollRef} className="flex gap-16 whitespace-nowrap">
        {[...testimonials, ...testimonials].map((item, index) => (
          <div key={index} className="flex items-center gap-8 px-8">
            <span className="text-6xl text-accent font-serif">{'"'}</span>
            <div>
              <p className="text-lg lg:text-xl font-medium mb-2">{item.text}</p>
              <p className="text-sm text-muted-foreground">{item.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
