import { jobs } from './jobs.js'

const CATEGORY_ICONS = {
  Engineering: 'Briefcase',
  'AI & Data': 'Cpu',
  Writing: 'PenLine',
  Admin: 'Layers',
  Internships: 'GraduationCap',
  Design: 'Palette',
  Support: 'ShieldCheck',
  Marketing: 'Sparkles',
  Finance: 'DollarSign',
}

// Base counts include a few not-yet-listed roles so the grid mirrors the
// original design; live counts will come from Supabase later.
const BASE_EXTRA_COUNTS = {
  Engineering: 3,
  'AI & Data': 3,
  Support: 1,
  Marketing: 3,
}

export const categories = Object.keys(CATEGORY_ICONS).map((name) => {
  const liveCount = jobs.filter((j) => j.category === name).length
  const total = liveCount + (BASE_EXTRA_COUNTS[name] || 0) || 1
  return {
    name,
    icon: CATEGORY_ICONS[name],
    count: total,
  }
})
