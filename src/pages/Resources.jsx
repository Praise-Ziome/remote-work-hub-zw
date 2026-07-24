import { Link } from 'react-router-dom'
import { resources } from '../data/resources.js'

export default function Resources() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="eyebrow">Learn</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight">Career tips &amp; guides</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Practical advice for finding and keeping great remote work.
        </p>
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
    </div>
  )
}
