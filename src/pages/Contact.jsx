import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    // Placeholder for a future Supabase insert or edge function call.
    setTimeout(() => setStatus('done'), 600)
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-16 sm:px-6 lg:px-8">
      <p className="eyebrow text-center">Contact</p>
      <h1 className="mt-2 text-center text-3xl font-bold tracking-tight">Get in touch</h1>
      <p className="mx-auto mt-3 max-w-sm text-center text-sm text-slate-500 dark:text-slate-400">
        Questions about a listing, a partnership, or posting a role? Send us a message.
      </p>

      {status === 'done' ? (
        <div className="card mt-8 flex flex-col items-center gap-3 p-8 text-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
            <Mail size={18} />
          </span>
          <p className="text-sm font-medium">Thanks — we'll reply within 2 business days.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="card mt-8 space-y-4 p-6">
          <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
          <Field
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 dark:border-white/10 dark:bg-surface-850"
            />
          </div>
          <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full">
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </button>
        </form>
      )}
    </div>
  )
}

function Field({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-300">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 dark:border-white/10 dark:bg-surface-850"
      />
    </div>
  )
}
