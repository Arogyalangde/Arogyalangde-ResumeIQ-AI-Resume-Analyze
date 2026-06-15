import { useFileDrop } from '../../hooks/useFileDrop';
import { ProgressBar } from '../ui/ProgressBar';
import { Upload, FileText, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '../../utils';

type UploadState = 'idle' | 'uploading' | 'parsing' | 'analyzing' | 'complete' | 'error';

interface UploadZoneProps {
  onFile: (file: File) => void;
  state: UploadState;
  progress: number;
  fileName: string | null;
}

const stageLabels: Record<UploadState, string> = {
  idle: '',
  uploading: 'Uploading resume...',
  parsing: 'Parsing document structure...',
  analyzing: 'Running AI analysis...',
  complete: 'Analysis complete!',
  error: 'Something went wrong.',
};

const stageColors: Record<UploadState, string> = {
  idle: 'bg-indigo-500',
  uploading: 'bg-indigo-500',
  parsing: 'bg-purple-500',
  analyzing: 'bg-amber-500',
  complete: 'bg-emerald-500',
  error: 'bg-red-500',
};

export function UploadZone({ onFile, state, progress, fileName }: UploadZoneProps) {
  const { isDragging, dragHandlers, openFilePicker, fileInputRef, handleFileInput } = useFileDrop(onFile);

  const isProcessing = ['uploading', 'parsing', 'analyzing'].includes(state);

  return (
    <div className="max-w-xl mx-auto w-full">
      <div
        {...dragHandlers}
        onClick={!isProcessing ? openFilePicker : undefined}
        className={cn(
          'relative rounded-2xl border-2 border-dashed p-12 flex flex-col items-center justify-center gap-4 transition-all duration-200',
          !isProcessing && 'cursor-pointer',
          isDragging
            ? 'border-indigo-500 bg-indigo-500/5 scale-[1.01]'
            : state === 'complete'
            ? 'border-emerald-500/50 bg-emerald-500/5'
            : state === 'error'
            ? 'border-red-500/50 bg-red-500/5'
            : isProcessing
            ? 'border-indigo-500/30 bg-indigo-500/3'
            : 'border-slate-700 bg-slate-900/40 hover:border-slate-600 hover:bg-slate-900/60',
        )}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={handleFileInput}
        />

        {state === 'idle' && (
          <>
            <div className="w-16 h-16 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center">
              <Upload size={28} className="text-indigo-400" />
            </div>
            <div className="text-center">
              <p className="text-base font-semibold text-white mb-1">
                {isDragging ? 'Drop your resume here' : 'Upload your resume'}
              </p>
              <p className="text-sm text-slate-500">
                Drag & drop or click to browse — PDF, DOC, DOCX
              </p>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-600">
              <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">Max 10 MB</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">Instant analysis</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">No storage</span>
            </div>
          </>
        )}

        {isProcessing && (
          <div className="w-full flex flex-col items-center gap-5">
            <div className="flex items-center gap-3">
              <Loader2 size={20} className="text-indigo-400 animate-spin" />
              <div>
                <p className="text-sm font-semibold text-white">{stageLabels[state]}</p>
                {fileName && (
                  <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1.5">
                    <FileText size={11} />
                    {fileName}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full max-w-sm">
              <div className="flex justify-between text-[11px] text-slate-500 mb-2">
                <span>Progress</span>
                <span className="font-mono">{progress}%</span>
              </div>
              <ProgressBar
                value={progress}
                color={stageColors[state]}
                height="lg"
                animated
              />
            </div>
          </div>
        )}

        {state === 'complete' && (
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <CheckCircle2 size={26} className="text-emerald-400" />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-emerald-400">Analysis complete</p>
              <p className="text-xs text-slate-500 mt-0.5">{fileName}</p>
            </div>
          </div>
        )}

        {state === 'error' && (
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
              <AlertCircle size={26} className="text-red-400" />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-red-400">Analysis failed</p>
              <p className="text-xs text-slate-500 mt-1">Click to try again</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
