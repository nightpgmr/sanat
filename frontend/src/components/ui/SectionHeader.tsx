interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  badge,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span
          className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide ${
            light
              ? "border-white/30 bg-white/10 text-white"
              : "border-primary/20 bg-primary/5 text-primary"
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-white" : "bg-primary"}`} />
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/75" : "text-muted"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
