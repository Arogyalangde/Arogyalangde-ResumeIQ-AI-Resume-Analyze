import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import type { ATSTrendPoint } from '../../types';
import { Card, CardHeader, CardBody } from '../ui/Card';
import { TrendingUp } from 'lucide-react';

interface ATSTrendChartProps {
  data: ATSTrendPoint[];
}

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 shadow-xl text-xs">
      <p className="text-slate-400 mb-1.5">{label}</p>
      {payload.map((entry) => (
        <div key={entry.name} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
          <span className="text-slate-300">{entry.name}:</span>
          <span className="font-mono font-semibold text-white">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

export function ATSTrendChart({ data }: ATSTrendChartProps) {
  const latestScore = data[data.length - 1]?.score ?? 0;
  const firstScore = data[0]?.score ?? 0;
  const delta = latestScore - firstScore;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <TrendingUp size={16} className="text-indigo-400" />
          <h3 className="text-sm font-semibold text-white">ATS Score Trend</h3>
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          <span className={delta >= 0 ? 'text-emerald-400' : 'text-red-400'}>
            {delta >= 0 ? '+' : ''}{delta} pts
          </span>
          <span className="text-slate-600">vs 6 months ago</span>
        </div>
      </CardHeader>
      <CardBody>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgb(30 41 59)" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fill: '#64748b', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: '#64748b', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              domain={[50, 100]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ fontSize: 11, paddingTop: 12 }}
              iconType="circle"
              iconSize={8}
            />
            <Line
              type="monotone"
              dataKey="score"
              name="Your Score"
              stroke="#6366f1"
              strokeWidth={2.5}
              dot={{ r: 4, fill: '#6366f1', strokeWidth: 0 }}
              activeDot={{ r: 6, fill: '#6366f1' }}
            />
            <Line
              type="monotone"
              dataKey="industry"
              name="Industry Avg"
              stroke="#475569"
              strokeWidth={1.5}
              strokeDasharray="4 4"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
}
