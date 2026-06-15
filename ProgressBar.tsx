import { cn } from '../../utils';

interface ProgressBarProps {
  value: number;
  max?: number;
  color?: string;
  height?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  className?: string;
}

const heightClasses = {
  sm: 'h-1',
  md: 'h-1.5',
  lg: 'h-2',
};

export function ProgressBar({
  value,
  max = 100,
  color = 'bg-indigo-500',
  height = 'md',
  animated = false,
  className,
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className={cn('w-full rounded-full bg-slate-800', heightClasses[height], className)}>
      <div
        className={cn('rounded-full transition-all duration-700 ease-out', color, heightClasses[height], animated && 'animate-pulse-slow')}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
