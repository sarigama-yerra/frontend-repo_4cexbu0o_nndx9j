import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B2545] text-[#E7ECF0]">
      <Navbar />
      <main>
        <Hero />
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-6">Solutions</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { key: 'embrain', title: 'EmBrain', copy: 'Secure, scalable POI repository for researchers.' },
                { key: 'social-dome', title: 'Social Dome', copy: 'Real‑time social monitoring and scoring.' },
                { key: 'napoleon', title: 'Napoleon', copy: 'Automated research engine with source tracking.' },
                { key: 'relationships', title: 'Relationship Analysis', copy: 'Graph‑powered connections explorer.' },
              ].map((p) => (
                <a key={p.key} href={`/products/${p.key}`} className="rounded-xl p-5 bg-white/5 border border-white/10 hover:bg-white/10 transition">
                  <div className="text-cyan-300 font-medium">{p.title}</div>
                  <div className="text-sm text-cyan-200/80 mt-1">{p.copy}</div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
