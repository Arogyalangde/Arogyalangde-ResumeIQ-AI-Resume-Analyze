import { Menu, Bell, Search, RefreshCw } from 'lucide-react';
import type { PageView } from '../../types';

const PAGE_LABELS: Record<PageView, string> = {
  landing: 'Home',
  upload: 'Upload Resume',
  dashboard: 'Analysis Dashboard',
  roadmap: 'Career Roadmap',
  recruiter: 'Recruiter Analytics',
};

interface TopBarProps {
  currentPage: PageView;
  onMobileMenuOpen: () => void;
  onNavigate: (page: PageView) => void;
}

export function TopBar({ currentPage, onMobileMenuOpen, onNavigate }: TopBarProps) {
  return (
    <header className="h-14 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm flex items-center justify-between px-4 lg:px-6 flex-shrink-0">
      <div className="flex items-center gap-3">
        <button
          onClick={onMobileMenuOpen}
          className="lg:hidden text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <Menu size={18} />
        </button>
        <div>
          <h1 className="text-sm font-semibold text-white">{PAGE_LABELS[currentPage]}</h1>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="hidden sm:flex items-center gap-2 text-slate-500 hover:text-slate-300 text-xs px-3 py-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 transition-colors">
          <Search size={13} />
          <span>Search...</span>
          <kbd className="ml-2 text-[10px] text-slate-600">⌘K</kbd>
        </button>
        <button
          onClick={() => onNavigate('upload')}
          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
        >
          <RefreshCw size={12} />
          <span className="hidden sm:inline">Re-analyze</span>
        </button>
        <button className="relative p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
          <Bell size={16} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full" />
        </button>
      </div>
    </header>
  );
}
