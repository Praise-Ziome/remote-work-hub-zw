import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { resources } from '../data/resources.js'

export default function ResourceDetail() {
  const { id } = useParams()
  const resource = resources.find((r) => r.id === id)

  if (!resource) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
        <h1 className="text-2xl font-bold">Guide not found</h1>
        <Link to="/resources" className="btn-primary mt-6 inline-flex">
          Back to resources
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        to="/resources"
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
      >
        <ArrowLeft size={15} /> Back to resources
      </Link>

      <p className="eyebrow">{resource.tag}</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">{resource.title}</h1>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{resource.readTime}</p>

      <div className="prose prose-slate mt-8 max-w-none text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        <p>{resource.excerpt}</p>
        <p className="mt-4">
          Full guide content is on the way — this placeholder page is wired up so the article
          route works end to end while the real write-up is being finished.
        </p>
      </div>
    </div>
  )
}
