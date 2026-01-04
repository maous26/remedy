import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'promo';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  const variants = {
    default: 'bg-earth-100 text-earth-700',
    success: 'bg-sage-100 text-sage-700',
    warning: 'bg-gold-100 text-gold-700',
    error: 'bg-terracotta-100 text-terracotta-700',
    promo: 'bg-terracotta-500 text-white',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
