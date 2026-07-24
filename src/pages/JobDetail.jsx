import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, CalendarDays, CheckCircle2, CircleDollarSign, MapPin } from 'lucide-react'
import { jobs, formatDate } from '../data/jobs.js'

export default function JobDetail() {
  const { id } = useParams()
  const job = jobs.find((j) => j.id === id)

  if (!job) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
        <h1 className="text-2xl font-bold">Job not found</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          This listing may have closed or moved.
        </p>
        <Link to="/jobs" className="btn-primary mt-6 inline-flex">
          Back to all jobs
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        to="/jobs"
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
      >
        <ArrowLeft size={15} /> Back to all jobs
      </Link>

      <div className="card p-6 sm:p-8">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold">{job.title}</h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{job.company}</p>
          </div>
          <span className="badge bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
            {job.type}
          </span>
        </div>

        <div className="mb-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <CircleDollarSign size={15} /> {job.pay}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={15} /> {job.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={15} /> Posted {formatDate(job.postedAt)}
          </span>
          {job.verified && (
            <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 size={15} /> Verified listing
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          {job.description}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button type="button" className="btn-primary w-full sm:w-auto">
            Apply Now
          </button>
          <button type="button" className="btn-secondary w-full sm:w-auto">
            Save for later
          </button>
        </div>
      </div>
    </div>
  )
}
