import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import type { SectionBreakdown } from '../../types';
import { Card, CardHeader, CardBody } from '../ui/Card';
import { LayoutGrid } from 'lucide-react';
import { scoreToRingColor } from '../../utils';

interface SectionBreakdownChartProps {
  data: SectionBreakdown[];
}

function CustomTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: SectionBreakdown }> }) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;

  return (
    <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 shadow-xl text-xs space-y-1">
      <p className="font-semibold text-white">{d.section}</p>
      <p className="text-slate-400">Score: <span className="text-white font-mono">{d.score}/100</span></p>
      <p className="text-slate-400">Weight: <span className="text-white">{d.weight}%</span></p>
    </div>
  );
}

export function SectionBreakdownChart({ data }: SectionBreakdownChartProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <LayoutGrid size={16} className="text-purple-400" />
          <h3 className="text-sm font-semibold text-white">Section Breakdown</h3>
        </div>
        <span className="text-xs text-slate-500">Weighted scores</span>
      </CardHeader>
      <CardBody>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: -20 }} barSize={28}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgb(30 41 59)" horizontal={true} vertical={false} />
            <XAxis
              dataKey="section"
              tick={{ fill: '#64748b', fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: '#64748b', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              domain={[0, 100]}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(99,102,241,0.05)' }} />
            <Bar dataKey="score" radius={[4, 4, 0, 0]}>
              {data.map((entry) => (
                <Cell key={entry.section} fill={scoreToRingColor(entry.score)} fillOpacity={0.85} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
}
