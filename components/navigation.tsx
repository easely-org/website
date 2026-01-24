"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-accent text-2xl font-bold tracking-tighter">EASELY</span>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          <Link href="#process" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">
            Process
          </Link>
          <Link href="#product" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">
            Product
          </Link>
          <Link href="#science" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">
            Science
          </Link>
          <Link href="#contact" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">
            Contact
          </Link>
        </div>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="bg-primary text-primary-foreground px-6 py-3 text-sm uppercase tracking-widest hover:bg-accent transition-colors"
          >
            Get Early Access
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
          <div className="flex flex-col p-6 gap-6">
            <Link href="#process" className="text-sm uppercase tracking-widest" onClick={() => setIsOpen(false)}>
              Process
            </Link>
            <Link href="#product" className="text-sm uppercase tracking-widest" onClick={() => setIsOpen(false)}>
              Product
            </Link>
            <Link href="#science" className="text-sm uppercase tracking-widest" onClick={() => setIsOpen(false)}>
              Science
            </Link>
            <Link
              href="#contact"
              className="bg-primary text-primary-foreground px-6 py-3 text-sm uppercase tracking-widest text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Early Access
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
