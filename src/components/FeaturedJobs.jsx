import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { jobs } from '../data/jobs.js'
import JobCard from './JobCard.jsx'

export default function FeaturedJobs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="eyebrow">Opportunities</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
            Featured remote jobs
          </h2>
        </div>
        <Link
          to="/jobs"
          className="hidden items-center gap-1 text-sm font-semibold text-brand-500 hover:gap-1.5 dark:text-brand-300 sm:inline-flex"
        >
          See all jobs <ArrowRight size={15} />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job, i) => (
          <JobCard key={job.id} job={job} index={i} />
        ))}
      </div>

      <Link
        to="/jobs"
        className="mt-6 flex items-center justify-center gap-1 text-sm font-semibold text-brand-500 dark:text-brand-300 sm:hidden"
      >
        See all jobs <ArrowRight size={15} />
      </Link>
    </section>
  )
}
