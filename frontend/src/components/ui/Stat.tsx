interface StatProps {
  value: string;
  label: string;
}

export function Stat({ value, label }: StatProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 text-center shadow-sm transition-colors hover:border-primary/30">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative">
        <div className="text-3xl font-black text-primary sm:text-4xl">{value}</div>
        <div className="mt-2 text-sm font-medium text-muted">{label}</div>
      </div>
    </div>
  );
}

export function StatsBar({ stats }: { stats: StatProps[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat, i) => (
        <Stat key={i} {...stat} />
      ))}
    </div>
  );
}
