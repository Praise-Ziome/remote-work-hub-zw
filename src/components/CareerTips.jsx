import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { resources } from '../data/resources.js'

export default function CareerTips() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="eyebrow">Learn</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
            Career tips &amp; guides
          </h2>
        </div>
        <Link
          to="/resources"
          className="hidden items-center gap-1 text-sm font-semibold text-brand-500 hover:gap-1.5 dark:text-brand-300 sm:inline-flex"
        >
          All resources <ArrowRight size={15} />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((r) => (
          <Link
            key={r.id}
            to={`/resources/${r.id}`}
            className="card block p-5 transition hover:border-brand-300 dark:hover:border-brand-400/40"
          >
            <p className="eyebrow">{r.tag}</p>
            <h3 className="mt-2 text-[15px] font-semibold leading-snug">{r.title}</h3>
            <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">{r.excerpt}</p>
            <p className="mt-4 text-xs font-medium text-slate-400 dark:text-slate-500">
              {r.readTime}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
