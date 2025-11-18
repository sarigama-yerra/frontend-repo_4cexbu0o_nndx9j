import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from './Button'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/use-cases', label: 'Use cases' },
  { to: '/resources', label: 'Resources' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', h)
    h()
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-cyan-300">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-teal-400 to-cyan-500 shadow-lg" />
          <span className="font-semibold tracking-tight">D‑Shield</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <NavLink key={n.to} to={n.to} className={({ isActive }) => `text-sm ${isActive ? 'text-white' : 'text-cyan-200/80 hover:text-white'}`}>{n.label}</NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <Button as="a" href="/contact" variant="primary" size="md">Request demo</Button>
        </div>

        <button className="md:hidden p-2 text-cyan-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className="block text-cyan-200 hover:text-white">{n.label}</NavLink>
            ))}
            <Button as="a" href="/contact" variant="primary" size="md" className="w-full">Request demo</Button>
          </div>
        </div>
      )}
    </header>
  )
}
