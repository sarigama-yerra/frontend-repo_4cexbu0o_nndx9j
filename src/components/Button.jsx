import React from 'react'
import { motion } from 'framer-motion'

const base = 'inline-flex items-center justify-center rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors'

const variants = {
  primary:
    'bg-amber-400 text-slate-900 hover:bg-amber-300 focus-visible:ring-amber-300 ring-offset-slate-900',
  secondary:
    'border border-cyan-400/60 text-cyan-300 hover:bg-cyan-400/10 focus-visible:ring-cyan-300 ring-offset-slate-900',
  ghost: 'text-cyan-300 hover:text-white hover:bg-white/5',
}

export function Button({ variant = 'primary', size = 'md', className = '', as = 'button', children, ...props }) {
  const Comp = motion[as] || motion.button
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  }
  return (
    <Comp whileTap={{ scale: 0.98 }} whileHover={{ y: -1 }} className={[base, variants[variant], sizes[size], className].join(' ')} {...props}>
      {children}
    </Comp>
  )
}

export default Button
