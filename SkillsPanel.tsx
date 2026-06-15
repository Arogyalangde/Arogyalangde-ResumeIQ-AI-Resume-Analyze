import type { Skill } from '../../types';
import { Card, CardHeader, CardBody } from '../ui/Card';
import { ProgressBar } from '../ui/ProgressBar';
import { Badge } from '../ui/Badge';
import { Zap, TrendingUp } from 'lucide-react';

interface SkillsPanelProps {
  skills: Skill[];
}

function SkillRow({ skill }: { skill: Skill }) {
  const barColor =
    skill.category === 'technical'
      ? 'bg-indigo-500'
      : skill.category === 'soft'
      ? 'bg-emerald-500'
      : 'bg-purple-500';

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="text-xs text-slate-300 truncate">{skill.name}</span>
            {skill.trending && (
              <TrendingUp size={10} className="text-amber-400 flex-shrink-0" />
            )}
          </div>
          <span className="text-[11px] font-mono text-slate-400 ml-2">{skill.level}%</span>
        </div>
        <ProgressBar value={skill.level} color={barColor} height="sm" />
      </div>
    </div>
  );
}

export function SkillsPanel({ skills }: SkillsPanelProps) {
  const technical = skills.filter((s) => s.category === 'technical');
  const soft = skills.filter((s) => s.category === 'soft');

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Zap size={16} className="text-yellow-400" />
          <h3 className="text-sm font-semibold text-white">Skill Analysis</h3>
        </div>
        <Badge variant="default">{skills.length} skills</Badge>
      </CardHeader>
      <CardBody className="space-y-5">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">Technical</span>
          </div>
          <div className="space-y-3">
            {technical.map((s) => (
              <SkillRow key={s.name} skill={s} />
            ))}
          </div>
        </div>

        <div className="h-px bg-slate-800" />

        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">Soft Skills</span>
          </div>
          <div className="space-y-3">
            {soft.map((s) => (
              <SkillRow key={s.name} skill={s} />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-slate-600 pt-1">
          <TrendingUp size={10} className="text-amber-400" />
          <span className="text-amber-500">Trending</span> = high demand in current job market
        </div>
      </CardBody>
    </Card>
  );
}
