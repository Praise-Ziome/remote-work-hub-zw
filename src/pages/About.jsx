import { ShieldCheck, Users, Globe2 } from 'lucide-react'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Verified only',
    body: 'Every listing is manually checked before it goes live, so you never waste time on a scam.',
  },
  {
    icon: Users,
    title: 'Built for Zimbabweans',
    body: 'We curate roles that actually accept applicants based in Zimbabwe and across Africa.',
  },
  {
    icon: Globe2,
    title: 'Global reach',
    body: 'From SaaS startups to enterprise teams, we connect local talent to remote-first employers worldwide.',
  },
]

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="eyebrow text-center">About us</p>
      <h1 className="mt-2 text-center text-3xl font-bold tracking-tight sm:text-4xl">
        Helping Zimbabwean talent work from anywhere
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-center text-sm text-slate-600 dark:text-slate-400">
        Remote Work Hub Zimbabwe was built to close the gap between skilled professionals in
        Zimbabwe and the growing world of remote-first companies.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title} className="card p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-500 dark:bg-brand-400/10 dark:text-brand-300">
              <p.icon size={18} />
            </span>
            <h3 className="mt-4 text-sm font-semibold">{p.title}</h3>
            <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
