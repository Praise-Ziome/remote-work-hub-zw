import { Briefcase, Facebook, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-200 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-white">
                <Briefcase size={16} />
              </span>
              <span className="text-sm font-bold">
                Remote Work Hub <span className="text-brand-500 dark:text-brand-300">ZW</span>
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-slate-500 dark:text-slate-400">
              Verified remote jobs and career resources for Zimbabweans and professionals
              across Africa.
            </p>
          </div>

          <FooterColumn
            title="Explore"
            links={[
              { to: '/jobs', label: 'Jobs' },
              { to: '/resources', label: 'Resources' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' },
            ]}
          />
          <FooterColumn
            title="Legal"
            links={[
              { to: '/disclaimer', label: 'Disclaimer' },
              { to: '/privacy', label: 'Privacy Policy' },
            ]}
          />

          <div>
            <p className="text-sm font-semibold">Follow us</p>
            <div className="mt-3 flex gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:text-brand-500 dark:border-white/10 dark:text-slate-400"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:text-brand-500 dark:border-white/10 dark:text-slate-400"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-400 dark:border-white/10 dark:text-slate-500">
          © {year} Remote Work Hub Zimbabwe. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-3 space-y-2.5">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="text-sm text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
