import { useState } from 'react';
import { Sidebar } from './components/ui/Sidebar';
import { TopBar } from './components/ui/TopBar';
import { LandingPage } from './components/landing/LandingPage';
import { UploadPage } from './pages/UploadPage';
import { DashboardPage } from './pages/DashboardPage';
import { RoadmapPage } from './components/roadmap/RoadmapPage';
import { RecruiterPage } from './components/recruiter/RecruiterPage';
import { useResumeAnalysis } from './hooks/useResumeAnalysis';
import { mockAnalysisResult } from './data/mockAnalysis';
import type { PageView } from './types';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('landing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { analysisState, uploadProgress, result, fileName, analyzeResume, reset } = useResumeAnalysis();

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    if (page === 'upload') reset();
  };

  const handleFile = async (file: File) => {
    await analyzeResume(file);
  };

  if (currentPage === 'landing') {
    return (
      <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
        <header className="border-b border-slate-800 px-6 py-4 flex items-center justify-between sticky top-0 z-30 bg-slate-950/90 backdrop-blur-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">R</span>
            </div>
            <span className="text-sm font-bold text-white">ResumeIQ</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Demo
            </button>
            <button
              onClick={() => setCurrentPage('upload')}
              className="text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-1.5 rounded-lg transition-colors"
            >
              Analyze Resume
            </button>
          </div>
        </header>
        <LandingPage onNavigate={handleNavigate} />
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-950 text-white overflow-hidden">
      <Sidebar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        mobileOpen={mobileMenuOpen}
        onMobileClose={() => setMobileMenuOpen(false)}
      />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <TopBar
          currentPage={currentPage}
          onMobileMenuOpen={() => setMobileMenuOpen(true)}
          onNavigate={handleNavigate}
        />

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {currentPage === 'upload' && (
            <UploadPage
              analysisState={analysisState}
              uploadProgress={uploadProgress}
              fileName={fileName}
              onFile={handleFile}
              onNavigate={handleNavigate}
            />
          )}

          {currentPage === 'dashboard' && (
            <DashboardPage result={result ?? mockAnalysisResult} />
          )}

          {currentPage === 'roadmap' && <RoadmapPage />}

          {currentPage === 'recruiter' && <RecruiterPage />}
        </main>
      </div>
    </div>
  );
}
