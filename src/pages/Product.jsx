import React, { useMemo } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'

const copy: Record<string, { title: string; kicker: string; features: string[] }> = {
  'embrain': {
    title: 'EmBrain',
    kicker: 'Large‑scale research and investigative system for structured entity data.',
    features: [
      'Upload, enrich, validate people and companies',
      'Real‑time deduplication, tagging, notifications',
      'Secure, scalable instances with RBAC',
    ],
  },
  'social-dome': {
    title: 'Social Dome',
    kicker: 'Real‑time social monitoring and scoring with analyst workflows.',
    features: ['AI‑assisted triage', 'Priority scoring with color badges', 'Analyst boards & exports'],
  },
  'napoleon': {
    title: 'Napoleon',
    kicker: 'Automated multi‑model AI research and report generation.',
    features: ['Parallel agents', 'Source‑tracked outputs', 'Exportable investigative reports'],
  },
  'relationships': {
    title: 'Relationship Analysis',
    kicker: 'Graph‑powered exploration of entity connections (Neo4j).',
    features: ['Explorable graph', 'Filter relation types', 'Evidence overlays & timeline'],
  },
}

export default function Product({ slug }) {
  const data = useMemo(() => copy[slug] || copy['embrain'], [slug])

  return (
    <div className="min-h-screen bg-[#0B2545] text-[#E7ECF0]">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="text-cyan-300 text-sm uppercase tracking-wider">{data.title}</div>
              <h1 className="text-4xl font-bold mt-1">{data.kicker}</h1>
            </div>
            <div className="flex gap-3">
              <Button as="a" href="/contact" variant="primary">Schedule a technical demo</Button>
              <Button as="a" href="/resources" variant="secondary">Download datasheet</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="md:col-span-2 rounded-2xl bg-white/5 border border-white/10 h-72 md:h-96 flex items-center justify-center text-cyan-200/70">
              Hero illustration placeholder
            </div>
            <ul className="space-y-3">
              {data.features.map((f, i) => (
                <li key={i} className="rounded-xl bg-white/5 border border-white/10 p-4">{f}</li>
              ))}
            </ul>
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">How it works</h2>
            <ol className="grid md:grid-cols-3 gap-4">
              {['Ingest', 'Enrich', 'Deliver'].map((s, i) => (
                <li key={i} className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="text-cyan-300 font-medium">{i + 1}. {s}</div>
                  <p className="text-sm text-cyan-200/80 mt-1">Step description for {s}.
                  </p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
