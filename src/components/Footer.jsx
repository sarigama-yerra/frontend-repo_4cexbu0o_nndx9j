import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8 text-sm text-cyan-200/80">
        <div>
          <div className="flex items-center gap-2 text-cyan-300 mb-3">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-teal-400 to-cyan-500" />
            <span className="font-semibold">D‑Shield</span>
          </div>
          <p className="max-w-sm">Preventative intelligence for a world of uncertainty. We help teams stay diligent with evidence‑first insights.</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="font-medium text-cyan-100 mb-2">Company</div>
            <ul className="space-y-1">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/resources" className="hover:text-white">Resources</a></li>
              <li><a href="/legal" className="hover:text-white">Legal</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-cyan-100 mb-2">Contact</div>
            <ul className="space-y-1">
              <li><a href="/contact" className="hover:text-white">Request demo</a></li>
              <li><a href="mailto:hello@dshield.example" className="hover:text-white">hello@dshield.example</a></li>
            </ul>
          </div>
        </div>
        <div className="text-right md:text-left text-cyan-200/60">
          © {new Date().getFullYear()} D‑Shield. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
