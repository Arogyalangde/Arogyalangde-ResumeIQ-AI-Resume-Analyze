import { Card, CardHeader, CardBody } from '../ui/Card';
import type { Keyword } from '../../types';
import { CheckCircle2, XCircle, Tag } from 'lucide-react';
import { importanceColor } from '../../utils';

interface KeywordMatchChartProps {
  keywords: Keyword[];
}

export function KeywordMatchChart({ keywords }: KeywordMatchChartProps) {
  const found = keywords.filter((k) => k.found);
  const missing = keywords.filter((k) => !k.found);
  const matchPct = Math.round((found.length / keywords.length) * 100);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Tag size={16} className="text-amber-400" />
          <h3 className="text-sm font-semibold text-white">Keyword Analysis</h3>
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          <span className="font-mono font-bold text-white">{matchPct}%</span>
          <span className="text-slate-600">match rate</span>
        </div>
      </CardHeader>
      <CardBody className="space-y-5">
        <div className="flex gap-2 h-2 rounded-full overflow-hidden">
          <div
            className="bg-emerald-500 rounded-l-full transition-all duration-700"
            style={{ width: `${matchPct}%` }}
          />
          <div className="flex-1 bg-red-500/30 rounded-r-full" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <CheckCircle2 size={13} className="text-emerald-400" />
              <span className="text-xs font-medium text-emerald-400">Found ({found.length})</span>
            </div>
            <div className="space-y-1.5">
              {found.map((k) => (
                <div key={k.term} className="flex items-center justify-between">
                  <span className="text-xs text-slate-300">{k.term}</span>
                  <span className={`text-[10px] font-medium ${importanceColor(k.importance)}`}>
                    {k.importance}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <XCircle size={13} className="text-red-400" />
              <span className="text-xs font-medium text-red-400">Missing ({missing.length})</span>
            </div>
            <div className="space-y-1.5">
              {missing.map((k) => (
                <div key={k.term} className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 line-through decoration-red-500/40">{k.term}</span>
                  <span className={`text-[10px] font-medium ${importanceColor(k.importance)}`}>
                    {k.importance}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
