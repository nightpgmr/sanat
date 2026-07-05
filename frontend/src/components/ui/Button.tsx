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
    "bg-gradient-to-l from-primary-light to-primary text-white shadow-md shadow-primary/25 hover:shadow-primary/40 hover:brightness-110",
  secondary:
    "bg-surface text-foreground border border-border hover:border-primary/30 hover:bg-surface-elevated shadow-sm",
  outline:
    "border border-primary/40 text-primary hover:bg-primary/5 hover:border-primary/60",
  ghost: "text-muted hover:text-primary hover:bg-surface-elevated",
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
