import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';
import { scoreToRingColor, scoreToGrade } from '../../utils';

interface ScoreRingProps {
  score: number;
  size?: number;
  strokeWidth?: number;
  label: string;
  sublabel?: string;
  delay?: number;
}

export function ScoreRing({ score, size = 140, strokeWidth = 10, label, sublabel, delay = 0 }: ScoreRingProps) {
  const animated = useAnimatedCounter(score, 1400, delay);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (animated / 100) * circumference;
  const color = scoreToRingColor(score);
  const { label: gradeLabel, color: gradeColor } = scoreToGrade(score);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgb(30 41 59)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            style={{ transition: 'stroke-dashoffset 0.05s linear' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-white font-mono">{animated}</span>
          <span className={`text-xs font-medium mt-0.5 ${gradeColor}`}>{gradeLabel}</span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-slate-200">{label}</p>
        {sublabel && <p className="text-xs text-slate-500 mt-0.5">{sublabel}</p>}
      </div>
    </div>
  );
}
