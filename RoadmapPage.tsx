import { mockRoadmapMilestones } from '../../data/mockRoadmap';
import type { RoadmapMilestone, RoadmapResource } from '../../types';
import { Card, CardBody } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { CheckCircle2, Circle, Clock, BookOpen, Award, Code, BookMarked, ExternalLink } from 'lucide-react';
import { cn } from '../../utils';

const resourceTypeIcon: Record<RoadmapResource['type'], React.ElementType> = {
  course: BookOpen,
  certification: Award,
  project: Code,
  book: BookMarked,
};

const statusConfig = {
  completed: { color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30', icon: CheckCircle2, lineColor: 'bg-emerald-500' },
  'in-progress': { color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/30', icon: Clock, lineColor: 'bg-indigo-500' },
  upcoming: { color: 'text-slate-500', bg: 'bg-slate-800/60 border-slate-700/40', icon: Circle, lineColor: 'bg-slate-700' },
};

const priorityBadge: Record<string, 'danger' | 'warning' | 'default'> = {
  high: 'danger',
  medium: 'warning',
  low: 'default',
};

function MilestoneCard({ milestone, index }: { milestone: RoadmapMilestone; index: number }) {
  const status = statusConfig[milestone.status];
  const StatusIcon = status.icon;

  return (
    <div className="relative flex gap-5">
      <div className="flex flex-col items-center">
        <div className={cn('w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 z-10', status.bg, 'border-current', status.color)}>
          <StatusIcon size={14} className={status.color} />
        </div>
        {index < mockRoadmapMilestones.length - 1 && (
          <div className={cn('w-0.5 flex-1 mt-2', status.lineColor, 'opacity-30')} />
        )}
      </div>

      <Card className="flex-1 mb-6" hover>
        <CardBody className="space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-semibold text-slate-600 font-mono">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <Badge variant={priorityBadge[milestone.priority]} size="sm">{milestone.priority} priority</Badge>
                <Badge
                  variant={milestone.status === 'completed' ? 'success' : milestone.status === 'in-progress' ? 'indigo' : 'default'}
                  size="sm"
                >
                  {milestone.status}
                </Badge>
              </div>
              <h3 className="text-sm font-bold text-white">{milestone.title}</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">{milestone.description}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 whitespace-nowrap">
                <Clock size={11} />
                {milestone.timeframe}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {milestone.skills.map((skill) => (
              <span key={skill} className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-400">
                {skill}
              </span>
            ))}
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-600 mb-2">Resources</p>
            <div className="space-y-2">
              {milestone.resources.map((resource) => {
                const Icon = resourceTypeIcon[resource.type];
                return (
                  <div key={resource.title} className="flex items-center justify-between gap-3 py-1.5 px-2.5 rounded-lg bg-slate-800/40 border border-slate-700/30 group hover:border-slate-600/50 transition-colors">
                    <div className="flex items-center gap-2 min-w-0">
                      <Icon size={12} className="text-slate-500 flex-shrink-0" />
                      <span className="text-xs text-slate-300 truncate">{resource.title}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-[10px] text-slate-600">{resource.provider}</span>
                      <span className="text-[10px] text-slate-600">·</span>
                      <span className="text-[10px] text-slate-600">{resource.duration}</span>
                      {resource.free && (
                        <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                          Free
                        </span>
                      )}
                      <ExternalLink size={10} className="text-slate-700 group-hover:text-indigo-400 transition-colors" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export function RoadmapPage() {
  const inProgress = mockRoadmapMilestones.filter((m) => m.status === 'in-progress').length;
  const upcoming = mockRoadmapMilestones.filter((m) => m.status === 'upcoming').length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'In Progress', value: inProgress, color: 'text-indigo-400' },
          { label: 'Upcoming', value: upcoming, color: 'text-slate-400' },
          { label: 'Est. Timeline', value: '16 wks', color: 'text-amber-400' },
        ].map((stat) => (
          <Card key={stat.label}>
            <CardBody className="py-4 text-center">
              <div className={`text-2xl font-bold font-mono ${stat.color}`}>{stat.value}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{stat.label}</div>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="pt-2">
        {mockRoadmapMilestones.map((milestone, index) => (
          <MilestoneCard key={milestone.id} milestone={milestone} index={index} />
        ))}
      </div>
    </div>
  );
}
