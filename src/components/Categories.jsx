import * as Icons from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { categories } from '../data/categories.js'

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="eyebrow">Explore</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
          Browse by category
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((cat, i) => {
          const Icon = Icons[cat.icon] || Icons.Briefcase
          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: Math.min(i, 8) * 0.04 }}
            >
              <Link
                to={`/jobs?category=${encodeURIComponent(cat.name)}`}
                className="card group flex items-center gap-3 p-4 hover:border-brand-300 dark:hover:border-brand-400/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500 transition group-hover:bg-brand-500 group-hover:text-white dark:bg-brand-400/10 dark:text-brand-300">
                  <Icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{cat.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {cat.count} open role{cat.count === 1 ? '' : 's'}
                  </p>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
