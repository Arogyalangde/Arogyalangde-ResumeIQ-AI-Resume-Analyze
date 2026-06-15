import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import type { Skill } from '../../types';
import { Card, CardHeader, CardBody } from '../ui/Card';
import { Cpu } from 'lucide-react';

interface SkillsRadarChartProps {
  skills: Skill[];
}

function CustomTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: { skill: string; level: number }; value: number }> }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 shadow-xl text-xs">
      <p className="font-semibold text-white">{payload[0].payload.skill}</p>
      <p className="text-slate-400 mt-0.5">
        Proficiency: <span className="text-indigo-400 font-mono font-semibold">{payload[0].value}%</span>
      </p>
    </div>
  );
}

export function SkillsRadarChart({ skills }: SkillsRadarChartProps) {
  const radarData = skills
    .filter((s) => s.category === 'technical')
    .slice(0, 7)
    .map((s) => ({ skill: s.name, level: s.level }));

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Cpu size={16} className="text-emerald-400" />
          <h3 className="text-sm font-semibold text-white">Skills Radar</h3>
        </div>
        <span className="text-xs text-slate-500">Technical proficiency</span>
      </CardHeader>
      <CardBody>
        <ResponsiveContainer width="100%" height={220}>
          <RadarChart data={radarData} margin={{ top: 8, right: 24, bottom: 8, left: 24 }}>
            <PolarGrid stroke="rgb(30 41 59)" />
            <PolarAngleAxis
              dataKey="skill"
              tick={{ fill: '#64748b', fontSize: 10 }}
            />
            <Radar
              name="Skill Level"
              dataKey="level"
              stroke="#6366f1"
              fill="#6366f1"
              fillOpacity={0.15}
              strokeWidth={2}
            />
            <Tooltip content={<CustomTooltip />} />
          </RadarChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
}
