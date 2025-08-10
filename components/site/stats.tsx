export function Stats({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-lg border bg-white p-6 text-center">
          <div className="text-3xl font-bold text-secondary">{s.value}</div>
          <div className="text-sm mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
