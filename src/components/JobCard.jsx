import { motion } from 'framer-motion'
import { CircleDollarSign, MapPin, CalendarDays, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatDate } from '../data/jobs.js'

export default function JobCard({ job, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: Math.min(index, 6) * 0.05 }}
      className="card flex flex-col p-5"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[15px] font-semibold leading-tight">{job.title}</h3>
          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{job.company}</p>
        </div>
        <span className="badge shrink-0 bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
          {job.type}
        </span>
      </div>

      <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-1">
          <CircleDollarSign size={13} /> {job.pay}
        </span>
        <span className="inline-flex items-center gap-1">
          <MapPin size={13} /> {job.location}
        </span>
        <span className="inline-flex items-center gap-1">
          <CalendarDays size={13} /> {formatDate(job.postedAt)}
        </span>
      </div>

      <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">{job.description}</p>

      <div className="mt-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-xs">
          <span className="rounded-md bg-brand-50 px-2 py-1 font-medium text-brand-600 dark:bg-brand-400/10 dark:text-brand-300">
            {job.category}
          </span>
          {job.verified && (
            <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 size={13} /> Verified
            </span>
          )}
        </div>
        <Link to={`/jobs/${job.id}`} className="btn-primary !px-4 !py-2 text-xs">
          View Details
        </Link>
      </div>
    </motion.article>
  )
}
