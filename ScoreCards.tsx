import { ScoreRing } from '../ui/ScoreRing';
import { Card, CardBody } from '../ui/Card';
import type { AnalysisResult } from '../../types';
import { ShieldCheck, Activity, Search, Heart } from 'lucide-react';
import { cn } from '../../utils';

interface ScoreCardsProps {
  result: AnalysisResult;
}

const healthConfig = {
  excellent: { color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20', label: 'Excellent' },
  good: { color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20', label: 'Good' },
  'needs-work': { color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20', label: 'Needs Work' },
  critical: { color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20', label: 'Critical' },
};

export function ScoreCards({ result }: ScoreCardsProps) {
  const health = healthConfig[result.healthStatus];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <Card hover glow>
        <CardBody className="flex flex-col items-center py-6">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
            <ShieldCheck size={16} className="text-indigo-400" />
          </div>
          <ScoreRing score={result.atsScore} label="ATS Score" sublabel="Applicant Tracking" delay={0} />
        </CardBody>
      </Card>

      <Card hover glow>
        <CardBody className="flex flex-col items-center py-6">
          <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
            <Activity size={16} className="text-purple-400" />
          </div>
          <ScoreRing score={result.resumeScore} label="Resume Score" sublabel="Overall quality" delay={150} />
        </CardBody>
      </Card>

      <Card hover glow>
        <CardBody className="flex flex-col items-center py-6">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
            <Search size={16} className="text-amber-400" />
          </div>
          <ScoreRing score={result.keywordMatch} label="Keyword Match" sublabel="vs. job description" delay={300} />
        </CardBody>
      </Card>

      <Card hover>
        <CardBody className="flex flex-col items-center justify-center py-6 gap-4">
          <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
            <Heart size={16} className="text-rose-400" />
          </div>
          <div className="text-center">
            <p className="text-xs text-slate-500 mb-2">Resume Health</p>
            <div className={cn('inline-flex items-center px-3 py-1.5 rounded-full border text-sm font-semibold', health.bg, health.color)}>
              {health.label}
            </div>
            <p className="text-[11px] text-slate-600 mt-2 max-w-[140px] leading-relaxed">
              {result.healthStatus === 'good' && 'Competitive for most senior roles. A few targeted fixes will push you to excellent.'}
              {result.healthStatus === 'excellent' && 'Your resume is highly optimized and competitive.'}
              {result.healthStatus === 'needs-work' && 'Several key areas need attention before applying.'}
              {result.healthStatus === 'critical' && 'Major structural and keyword issues need immediate attention.'}
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
