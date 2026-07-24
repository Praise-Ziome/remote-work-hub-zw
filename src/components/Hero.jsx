import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const stats = [
  { value: '20+', label: 'Live jobs' },
  { value: '100%', label: 'Verified' },
  { value: 'Africa', label: 'Focused' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_top,_rgba(79,127,255,0.16),_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(79,127,255,0.22),_transparent_60%)]"
      />

      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
        >
          <ShieldCheck size={13} className="text-emerald-500" />
          Verified opportunities only
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          Find Verified Remote Jobs.
          <br />
          <span className="text-brand-500 dark:text-brand-300">Work From Anywhere.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto mt-5 max-w-xl text-base text-slate-600 dark:text-slate-400"
        >
          Remote Work Hub Zimbabwe curates trusted remote jobs, AI opportunities, freelance
          gigs, and internships for Zimbabweans and professionals across Africa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link to="/jobs" className="btn-primary w-full sm:w-auto">
            Browse Jobs
            <ArrowRight size={16} />
          </Link>
          <Link to="/resources" className="btn-secondary w-full sm:w-auto">
            Career Resources
          </Link>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-4"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-2xl font-extrabold sm:text-3xl">{s.value}</dd>
              <div className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {s.label}
              </div>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
