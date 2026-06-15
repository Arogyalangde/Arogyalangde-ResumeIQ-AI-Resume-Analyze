import type { JobMatch } from '../../types';
import { Card, CardHeader, CardBody } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Briefcase, MapPin, DollarSign, Clock, CheckCircle2, XCircle } from 'lucide-react';
import { cn } from '../../utils';

interface JobMatchPanelProps {
  matches: JobMatch[];
}

function MatchScoreBadge({ score }: { score: number }) {
  const variant = score >= 90 ? 'success' : score >= 80 ? 'indigo' : score >= 70 ? 'warning' : 'default';
  return <Badge variant={variant}>{score}% match</Badge>;
}

function JobCard({ job }: { job: JobMatch }) {
  const barWidth = job.matchScore;
  const barColor = job.matchScore >= 90
    ? 'from-emerald-500 to-emerald-400'
    : job.matchScore >= 80
    ? 'from-indigo-500 to-indigo-400'
    : 'from-amber-500 to-amber-400';

  return (
    <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-150 group">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h4 className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
            {job.jobTitle}
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">{job.company}</p>
        </div>
        <MatchScoreBadge score={job.matchScore} />
      </div>

      <div className="h-1 rounded-full bg-slate-800 mb-3 overflow-hidden">
        <div
          className={cn('h-full rounded-full bg-gradient-to-r transition-all duration-700', barColor)}
          style={{ width: `${barWidth}%` }}
        />
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
        <span className="flex items-center gap-1 text-[11px] text-slate-500">
          <MapPin size={10} />
          {job.location}
        </span>
        <span className="flex items-center gap-1 text-[11px] text-slate-500">
          <DollarSign size={10} />
          {job.salary}
        </span>
        <span className="flex items-center gap-1 text-[11px] text-slate-500">
          <Clock size={10} />
          {job.postedDate}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <p className="text-[10px] font-medium text-emerald-500 mb-1 flex items-center gap-1">
            <CheckCircle2 size={10} /> Strong matches
          </p>
          <div className="flex flex-wrap gap-1">
            {job.strongMatches.slice(0, 3).map((s) => (
              <span key={s} className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[10px] font-medium text-red-500 mb-1 flex items-center gap-1">
            <XCircle size={10} /> Missing skills
          </p>
          <div className="flex flex-wrap gap-1">
            {job.missingSkills.map((s) => (
              <span key={s} className="text-[10px] px-1.5 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function JobMatchPanel({ matches }: JobMatchPanelProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Briefcase size={16} className="text-indigo-400" />
          <h3 className="text-sm font-semibold text-white">Job Match Analysis</h3>
        </div>
        <Badge variant="indigo">{matches.length} roles</Badge>
      </CardHeader>
      <CardBody className="space-y-3">
        {matches.map((job) => (
          <JobCard key={`${job.company}-${job.jobTitle}`} job={job} />
        ))}
      </CardBody>
    </Card>
  );
}
