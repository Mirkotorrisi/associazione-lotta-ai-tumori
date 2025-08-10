export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
      {subtitle ? <p className="text-muted-foreground mt-2 max-w-3xl">{subtitle}</p> : null}
    </div>
  )
}
