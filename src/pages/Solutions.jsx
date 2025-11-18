import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Solutions() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/solutions`)
        const data = await res.json()
        setItems(data)
      } catch (e) {}
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-[#0B2545] text-[#E7ECF0]">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Solutions</h1>
          <p className="text-cyan-200/80 max-w-2xl">Preventative intelligence, proactive not reactive. Explore our products.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {items.map((s) => (
              <a key={s.key} href={`/products/${s.key}`} className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition">
                <div className="text-cyan-300 font-semibold">{s.title}</div>
                <div className="text-sm text-cyan-200/80 mt-1">{s.summary}</div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
