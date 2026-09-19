/* ===========================================================
   Remote Work Hub ZW — script.js
   =========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMenu();
  renderJobs();
  renderCategories();
  renderResources();
  initNewsletter();
   loadJobs();
  document.getElementById('year').textContent = new Date().getFullYear();
});

/* ---------- Theme toggle (persisted via localStorage) ---------- */
function initTheme(){
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('rwh-theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const initial = stored || (prefersLight ? 'light' : 'dark');

  root.setAttribute('data-theme', initial);

  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('rwh-theme', next);
  });
}

/* ---------- Mobile menu ---------- */
function initMenu(){
  const btn = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- Supabase ---------- */
const SUPABASE_URL = 'https://goylezcgimcpajlazbie.supabase.co';
const SUPABASE_KEY = 'sb_publishable_-0IapWLjf6T1ktwv683QCg_nqaf87Xe';

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

/* ---------- Data ---------- */
const JOBS = [
  {
    title: 'Remote Frontend Developer',
    company: 'Andela',
    pay: '$2,500 - $4,000/mo',
    location: 'Remote (Africa)',
    date: '7/18/2026',
    desc: 'Build responsive UIs with React and Tailwind for global clients.',
    tag: 'Engineering'
  },
  {
    title: 'AI Data Annotator',
    company: 'Scale AI',
    pay: '$5 - $12/hr',
    location: 'Remote Worldwide',
    date: '7/20/2026',
    desc: 'Label images, text, and audio to help train AI models.',
    tag: 'AI & Data'
  },
  {
    title: 'Freelance Content Writer',
    company: 'Contently',
    pay: '$0.10 - $0.30/word',
    location: 'Remote',
    date: '7/21/2026',
    desc: 'Write blog articles for SaaS and fintech brands.',
    tag: 'Writing'
  },
  {
    title: 'Virtual Assistant',
    company: 'Belay',
    pay: '$800 - $1,500/mo',
    location: 'Remote',
    date: '7/15/2026',
    desc: 'Support US-based executives with scheduling and email.',
    tag: 'Admin'
  },
  {
    title: 'Junior Python Developer Intern',
    company: 'Turing',
    pay: '$500/mo stipend',
    location: 'Remote',
    date: '7/19/2026',
    desc: '3-month paid internship on real client projects.',
    tag: 'Internships'
  },
  {
    title: 'UX/UI Designer',
    company: 'Toptal',
    pay: '$40 - $80/hr',
    location: 'Remote',
    date: '7/17/2026',
    desc: 'Design user flows and interfaces for enterprise clients.',
    tag: 'Design'
  }
];

const CATEGORIES = [
  { name: 'Engineering', count: 4, icon: 'briefcase' },
  { name: 'AI & Data',   count: 4, icon: 'cpu' },
  { name: 'Writing',     count: 1, icon: 'pen' },
  { name: 'Admin',       count: 2, icon: 'briefcase' },
  { name: 'Internships', count: 2, icon: 'cap' },
  { name: 'Design',      count: 2, icon: 'palette' },
  { name: 'Support',     count: 1, icon: 'shield' },
  { name: 'Marketing',   count: 3, icon: 'spark' },
  { name: 'Finance',     count: 1, icon: 'dollar' }
];

const RESOURCES = [
  {
    cat: 'Safety',
    title: 'How to Spot Fake Remote Jobs',
    desc: 'Red flags every job seeker in Africa should know before applying.',
    read: '5 min read'
  },
  {
    cat: 'Career',
    title: 'CV Tips for Remote Roles',
    desc: 'Craft a CV that stands out to global remote employers.',
    read: '6 min read'
  },
  {
    cat: 'Career',
    title: 'Remote Interview Tips',
    desc: 'How to prepare, dress, and connect for video interviews.',
    read: '4 min read'
  }
];

const ICONS = {
  briefcase: '<path d="M3 7h18v12H3z" stroke="currentColor" stroke-width="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" stroke-width="2"/>',
  cpu: '<rect x="6" y="6" width="12" height="12" rx="1" stroke="currentColor" stroke-width="2"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  pen: '<path d="M12 20h9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  cap: '<path d="M2 9l10-5 10 5-10 5-10-5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" stroke="currentColor" stroke-width="2"/>',
  palette: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><circle cx="8.5" cy="10.5" r="1" fill="currentColor"/><circle cx="12" cy="8" r="1" fill="currentColor"/><circle cx="15.5" cy="10.5" r="1" fill="currentColor"/><path d="M12 21a2 2 0 0 1-2-2c0-1 1-1 1-2s-1-1-1-2a4 4 0 0 1 4-4" stroke="currentColor" stroke-width="2"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  dollar: '<path d="M12 2v20M17 6.5c0-1.9-2.2-3.5-5-3.5s-5 1.6-5 3.5S9.2 10 12 10s5 1.6 5 3.5-2.2 3.5-5 3.5-5-1.6-5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
};



/* ---------- Renderers ---------- */

async function loadJobs() {
  const { data, error } = await supabaseClient
    .from('jobs')
    .select('*')
    .eq('status', 'published')
    .order('posted_at', { ascending: false });

  if (error) {
    console.error('Error loading jobs:', error);
    return;
  }

  JOBS.length = 0;

  data.forEach(job => {
    JOBS.push({
      title: job.title,
      company: job.company,
      pay: job.pay,
      location: job.location,
      date: job.posted_at
        ? new Date(job.posted_at).toLocaleDateString()
        : '',
      desc: job.description,
      tag: job.category
    });
  });

  renderJobs();

  console.log('Jobs rendered from Supabase:', JOBS);
}

function renderJobs(){
  const grid = document.getElementById('job-grid');
  grid.innerHTML = JOBS.map(job => `
    <article class="job-card">
      <div class="job-card-top">
        <h3 class="job-title">${escapeHTML(job.title)}</h3>
        <span class="pill pill-remote">Remote</span>
      </div>
      <p class="job-company">${escapeHTML(job.company)}</p>
      <div class="job-meta">
        <span>${iconSvg('dollar', 13)} ${escapeHTML(job.pay)}</span>
        <span>${iconSvg('pin', 13)} ${escapeHTML(job.location)}</span>
        <span>${iconSvg('calendar', 13)} ${escapeHTML(job.date)}</span>
      </div>
      <p class="job-desc">${escapeHTML(job.desc)}</p>
      <div class="job-card-bottom">
        <div class="job-tags">
          <span class="tag">${escapeHTML(job.tag)}</span>
          <span class="verified-tag">${iconSvg('check', 13)} Verified</span>
        </div>
        <button class="btn btn-primary" type="button" data-job="${escapeHTML(job.title)}">View Details</button>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('[data-job]').forEach(btn => {
    btn.addEventListener('click', () => {
      alert(`Details for "${btn.dataset.job}" coming soon.`);
    });
  });
}

function renderCategories(){
  const grid = document.getElementById('category-grid');
  grid.innerHTML = CATEGORIES.map(cat => `
    <div class="category-card" tabindex="0" role="button">
      <div class="category-icon">${iconSvg(cat.icon, 18)}</div>
      <div>
        <p class="category-name">${escapeHTML(cat.name)}</p>
        <p class="category-count">${cat.count} open role${cat.count === 1 ? '' : 's'}</p>
      </div>
    </div>
  `).join('');
}

function renderResources(){
  const grid = document.getElementById('resource-grid');
  grid.innerHTML = RESOURCES.map(r => `
    <article class="resource-card" tabindex="0" role="button">
      <p class="resource-cat">${escapeHTML(r.cat)}</p>
      <h3 class="resource-title">${escapeHTML(r.title)}</h3>
      <p class="resource-desc">${escapeHTML(r.desc)}</p>
      <p class="resource-read">${escapeHTML(r.read)}</p>
    </article>
  `).join('');
}

function initNewsletter(){
  const form = document.getElementById('newsletter-form');
  const input = document.getElementById('newsletter-email');
  const note = document.getElementById('newsletter-note');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if(!isValid){
      note.textContent = 'Please enter a valid email address.';
      return;
    }

    note.textContent = `Thanks! We'll send job alerts to ${email}.`;
    form.reset();
  });
}

/* ---------- Helpers ---------- */
function escapeHTML(str){
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function iconSvg(name, size = 14){
  const extra = {
    pin: '<path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" stroke-width="2"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" stroke-width="2"/><path d="M16 3v4M8 3v4M3 10h18" stroke="currentColor" stroke-width="2"/>',
    check: '<path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
  };
  const path = ICONS[name] || extra[name] || '';
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">${path}</svg>`;
}
