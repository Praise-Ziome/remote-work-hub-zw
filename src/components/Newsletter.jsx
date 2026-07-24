import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | submitting | done

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setStatus('submitting')
    // Placeholder for future Supabase insert into a `subscribers` table.
    setTimeout(() => {
      setStatus('done')
      setEmail('')
    }, 600)
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 px-6 py-12 text-center text-white sm:px-12">
        <span className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
          <Mail size={20} />
        </span>
        <h2 className="text-2xl font-bold sm:text-3xl">Get new remote jobs weekly</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-white/85">
          Join thousands of Zimbabwean professionals getting verified opportunities delivered
          to their inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-6 flex max-w-md flex-col gap-2.5 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border-0 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/70"
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:opacity-70"
          >
            {status === 'done' ? 'Subscribed ✓' : status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  )
}
