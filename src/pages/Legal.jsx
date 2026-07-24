export default function Legal({ title }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <div className="prose prose-slate mt-6 max-w-none text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        <p>
          This page is a placeholder. Replace this copy with your real {title.toLowerCase()}
          {' '}before launch.
        </p>
      </div>
    </div>
  )
}
