import type { Improvement } from '../../types';
import { Card, CardHeader, CardBody } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Lightbulb, ArrowUpRight } from 'lucide-react';
import { priorityColor } from '../../utils';

interface ImprovementsPanelProps {
  improvements: Improvement[];
}

const categoryIcon: Record<Improvement['category'], string> = {
  content: '✍️',
  format: '📐',
  keywords: '🔍',
  structure: '🏗️',
};

export function ImprovementsPanel({ improvements }: ImprovementsPanelProps) {
  const sorted = [...improvements].sort((a, b) => b.impact - a.impact);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Lightbulb size={16} className="text-amber-400" />
          <h3 className="text-sm font-semibold text-white">Recommended Improvements</h3>
        </div>
        <Badge variant="warning">{improvements.length} actions</Badge>
      </CardHeader>
      <CardBody className="space-y-3">
        {sorted.map((item) => (
          <div
            key={item.id}
            className="group flex gap-3 p-3 rounded-lg bg-slate-800/40 border border-slate-700/40 hover:border-slate-600/60 hover:bg-slate-800/60 transition-all duration-150"
          >
            <div className="text-base mt-0.5 flex-shrink-0">{categoryIcon[item.category]}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <p className="text-xs font-semibold text-slate-200 leading-tight">{item.title}</p>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded border ${priorityColor(item.priority)}`}>
                    {item.priority}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-emerald-400">+{item.impact}pt</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">{item.description}</p>
            </div>
            <ArrowUpRight size={14} className="text-slate-600 group-hover:text-indigo-400 transition-colors flex-shrink-0 mt-0.5" />
          </div>
        ))}
      </CardBody>
    </Card>
  );
}
