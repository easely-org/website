"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function ContactSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 border-t border-border">
      <div className="px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-sm uppercase tracking-widest text-accent mb-4">Get Early Access</p>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter mb-8 text-balance">
              Be among the first to read your mind
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Join our waitlist for exclusive early access, founder pricing, and updates on our journey to make
              brain-computer interfaces accessible to everyone.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-muted border-none px-6 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-widest hover:bg-accent transition-colors flex items-center justify-center gap-2"
                >
                  Join <ArrowRight size={16} />
                </button>
              </form>
            ) : (
              <div className="bg-accent/10 border border-accent p-6">
                <p className="text-accent font-medium">Welcome to the future.</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {"We'll"} be in touch with exclusive updates and early access details.
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Navigation</p>
                <ul className="space-y-2">
                  <li>
                    <a href="#process" className="hover:text-accent transition-colors">
                      Process
                    </a>
                  </li>
                  <li>
                    <a href="#product" className="hover:text-accent transition-colors">
                      Product
                    </a>
                  </li>
                  <li>
                    <a href="#science" className="hover:text-accent transition-colors">
                      Science
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Connect</p>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-accent transition-colors">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-accent transition-colors">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-accent transition-colors">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-border">
              <p className="text-7xl lg:text-9xl font-bold tracking-tighter text-accent">EASELY</p>
              <p className="text-sm text-muted-foreground mt-4">© 2026 Easely Inc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
