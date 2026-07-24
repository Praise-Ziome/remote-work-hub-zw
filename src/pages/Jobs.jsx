import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import { jobs } from '../data/jobs.js'
import { categories } from '../data/categories.js'
import JobCard from '../components/JobCard.jsx'

export default function Jobs() {
  const [params, setParams] = useSearchParams()
  const activeCategory = params.get('category') || 'All'
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      const matchesCategory = activeCategory === 'All' || job.category === activeCategory
      const q = query.trim().toLowerCase()
      const matchesQuery =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.category.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  function setCategory(name) {
    if (name === 'All') {
      params.delete('category')
    } else {
      params.set('category', name)
    }
    setParams(params, { replace: true })
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="eyebrow">Opportunities</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight">All remote jobs</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          {filtered.length} verified opportunit{filtered.length === 1 ? 'y' : 'ies'} right now.
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search jobs, companies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 dark:border-white/10 dark:bg-surface-850"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <FilterPill label="All" active={activeCategory === 'All'} onClick={() => setCategory('All')} />
          {categories.map((c) => (
            <FilterPill
              key={c.name}
              label={c.name}
              active={activeCategory === c.name}
              onClick={() => setCategory(c.name)}
            />
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="card p-10 text-center text-sm text-slate-500 dark:text-slate-400">
          No jobs match that search yet. Try a different keyword or category.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((job, i) => (
            <JobCard key={job.id} job={job} index={i} />
          ))}
        </div>
      )}
    </div>
  )
}

function FilterPill({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
        active
          ? 'border-brand-500 bg-brand-500 text-white'
          : 'border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5'
      }`}
    >
      {label}
    </button>
  )
}
