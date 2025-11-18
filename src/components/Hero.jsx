import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import Button from './Button'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pb-24 overflow-hidden" aria-label="D‑Shield hero">
      <div className="absolute inset-0 [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]">
        <canvas id="particles-canvas" className="absolute inset-0" />
        <div className="absolute inset-0 bg-[#0B2545]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(0,163,163,0.2),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_30%,rgba(255,181,71,0.15),transparent)] pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-teal-300 via-cyan-300 to-purple-300 text-transparent bg-clip-text">
            Keeping You Diligent — In a World of Uncertainty.
          </h1>
          <p className="mt-4 text-[#E7ECF0]/90 max-w-prose">
            We don't wait for danger to knock — we map it, vet it, and brief it out of existence.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Button as="a" href="/contact" variant="primary" size="lg">Request demo</Button>
            <Button as="a" href="/solutions" variant="secondary" size="lg">Explore solutions</Button>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <dt className="text-xs uppercase tracking-wide text-cyan-200/70">Disruption Rate</dt>
              <dd className="text-2xl font-semibold text-white">90%</dd>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <dt className="text-xs uppercase tracking-wide text-cyan-200/70">Support</dt>
              <dd className="text-2xl font-semibold text-white">24/7</dd>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <dt className="text-xs uppercase tracking-wide text-cyan-200/70">Interventions</dt>
              <dd className="text-2xl font-semibold text-white">75+</dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-1 h-[420px] md:h-[540px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/40">
          <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="md:col-span-1 space-y-4">
          {[
            { label: 'Threat level', value: 'Guarded', color: 'text-teal-300' },
            { label: 'Availability', value: '24/7', color: 'text-amber-300' },
            { label: 'Interventions', value: '75+', color: 'text-cyan-300' },
          ].map((c, i) => (
            <motion.div key={i} whileHover={{ y: -2 }} className="rounded-xl bg-white/5 border border-white/10 p-4">
              <div className="text-xs uppercase tracking-wide text-cyan-200/70">{c.label}</div>
              <div className={`mt-1 text-2xl font-semibold ${c.color}`}>{c.value}</div>
              <div className="mt-2 text-xs text-[#E7ECF0]/70">Live operational metric</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
