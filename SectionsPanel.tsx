import { useState } from 'react';
import type { ResumeSection } from '../../types';
import { Card, CardHeader, CardBody } from '../ui/Card';
import { ProgressBar } from '../ui/ProgressBar';
import { FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { scoreToGrade, scoreToRingColor } from '../../utils';
import { cn } from '../../utils';

interface SectionsPanelProps {
  sections: ResumeSection[];
}

function SectionRow({ section }: { section: ResumeSection }) {
  const [expanded, setExpanded] = useState(false);
  const { label, color } = scoreToGrade(section.score);

  return (
    <div className="border border-slate-800/60 rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-3 hover:bg-slate-800/30 transition-colors"
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold text-slate-200">{section.name}</span>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-medium ${color}`}>{label}</span>
                <span className="text-xs font-mono font-bold text-white">{section.score}</span>
              </div>
            </div>
            <ProgressBar
              value={section.score}
              color={section.score >= 80 ? 'bg-emerald-500' : section.score >= 65 ? 'bg-indigo-500' : 'bg-amber-500'}
            />
          </div>
        </div>
        <div className="ml-3 text-slate-500 flex-shrink-0">
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </div>
      </button>

      <div className={cn('overflow-hidden transition-all duration-200', expanded ? 'max-h-96' : 'max-h-0')}>
        <div className="px-3 pb-3 space-y-2">
          <p className="text-[11px] text-slate-500 leading-relaxed bg-slate-800/40 rounded p-2">
            {section.feedback}
          </p>
          <div className="space-y-1">
            {section.items.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-[11px] text-slate-400">
                <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: scoreToRingColor(section.score) }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SectionsPanel({ sections }: SectionsPanelProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <FileText size={16} className="text-blue-400" />
          <h3 className="text-sm font-semibold text-white">Resume Sections</h3>
        </div>
        <span className="text-xs text-slate-500">{sections.length} sections analyzed</span>
      </CardHeader>
      <CardBody className="space-y-2">
        {sections.map((section) => (
          <SectionRow key={section.name} section={section} />
        ))}
      </CardBody>
    </Card>
  );
}
