import { useState, useCallback } from 'react';
import type { AnalysisResult } from '../types';

import {
  mockAnalysisResult,
  dataAnalyticsAnalysis,
  cloudAnalysis,
  aiMlAnalysis,
} from '../data/mockAnalysis';

type AnalysisState = 'idle' | 'uploading' | 'parsing' | 'analyzing' | 'complete' | 'error';

interface UseResumeAnalysisReturn {
  analysisState: AnalysisState;
  uploadProgress: number;
  result: AnalysisResult | null;
  fileName: string | null;
  analyzeResume: (file: File) => Promise<void>;
  reset: () => void;
}

const STAGE_DURATIONS: Record<string, number> = {
  uploading: 1800,
  parsing: 1200,
  analyzing: 2000,
};

export function useResumeAnalysis(): UseResumeAnalysisReturn {
  const [analysisState, setAnalysisState] = useState<AnalysisState>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const simulateProgress = (
    from: number,
    to: number,
    duration: number,
    onUpdate: (value: number) => void,
  ): Promise<void> => {
    return new Promise((resolve) => {
      const steps = 30;
      const stepDuration = duration / steps;
      const stepSize = (to - from) / steps;
      let current = from;
      let step = 0;

      const interval = setInterval(() => {
        step++;
        current = Math.min(to, from + stepSize * step);
        onUpdate(Math.round(current));
        if (step >= steps) {
          clearInterval(interval);
          resolve();
        }
      }, stepDuration);
    });
  };

  const analyzeResume = useCallback(async (file: File) => {
    setFileName(file.name);
    setAnalysisState('uploading');
    setUploadProgress(0);

    await simulateProgress(0, 35, STAGE_DURATIONS.uploading, setUploadProgress);

    setAnalysisState('parsing');
    await simulateProgress(35, 65, STAGE_DURATIONS.parsing, setUploadProgress);

    setAnalysisState('analyzing');
    await simulateProgress(65, 100, STAGE_DURATIONS.analyzing, setUploadProgress);

    const lowerFileName = file.name.toLowerCase();

if (
  lowerFileName.includes('data') ||
  lowerFileName.includes('analytics') ||
  lowerFileName.includes('powerbi') ||
  lowerFileName.includes('tableau')
) {
  setResult(dataAnalyticsAnalysis);
} else if (
  lowerFileName.includes('cloud') ||
  lowerFileName.includes('aws') ||
  lowerFileName.includes('devops')
) {
  setResult(cloudAnalysis);
} else if (
  lowerFileName.includes('ai') ||
  lowerFileName.includes('ml') ||
  lowerFileName.includes('machine')
) {
  setResult(aiMlAnalysis);
} else {
  setResult(mockAnalysisResult);
}

setAnalysisState('complete');
  }, []);

  const reset = useCallback(() => {
    setAnalysisState('idle');
    setUploadProgress(0);
    setResult(null);
    setFileName(null);
  }, []);

  return { analysisState, uploadProgress, result, fileName, analyzeResume, reset };
}

