import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variants = {
  primary:
    "bg-gradient-to-l from-gold to-gold-dark text-background shadow-lg shadow-gold/25 hover:shadow-gold/45 hover:brightness-110",
  secondary:
    "bg-surface-elevated text-foreground border border-border hover:border-gold/40 hover:bg-surface",
  outline:
    "border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold/60",
  ghost: "text-muted hover:text-foreground hover:bg-surface-elevated",
};

const sizes = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-2.5",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl font-semibold transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
