import { BarChart3, Brain, FileText, Map, Users, X, ChevronRight } from 'lucide-react';
import type { PageView } from '../../types';
import { cn } from '../../utils';

interface NavItem {
  id: PageView;
  label: string;
  icon: React.ElementType;
  badge?: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Analysis Dashboard', icon: BarChart3 },
  { id: 'upload', label: 'Upload Resume', icon: FileText },
  { id: 'roadmap', label: 'Career Roadmap', icon: Map },
  { id: 'recruiter', label: 'Recruiter Analytics', icon: Users, badge: 'New' },
];

interface SidebarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

export function Sidebar({ currentPage, onNavigate, mobileOpen, onMobileClose }: SidebarProps) {
  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onMobileClose}
        />
      )}

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 flex flex-col bg-slate-950 border-r border-slate-800 transition-transform duration-300',
          'lg:translate-x-0 lg:static lg:z-auto',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Brain size={16} className="text-white" />
            </div>
            <div>
              <span className="text-sm font-bold text-white tracking-tight">ResumeIQ</span>
              <p className="text-[10px] text-slate-500 leading-none mt-0.5">AI-Powered Analysis</p>
            </div>
          </div>
          <button onClick={onMobileClose} className="lg:hidden text-slate-500 hover:text-white p-1 rounded">
            <X size={16} />
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          <p className="px-3 text-[10px] font-semibold uppercase tracking-widest text-slate-600 mb-3">Menu</p>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  onMobileClose();
                }}
                className={cn(
                  'w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150',
                  active
                    ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent',
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon size={16} className={active ? 'text-indigo-400' : 'text-slate-500'} />
                  {item.label}
                </div>
                <div className="flex items-center gap-2">
                  {item.badge && (
                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-indigo-600 text-white">
                      {item.badge}
                    </span>
                  )}
                  {active && <ChevronRight size={14} className="text-indigo-400" />}
                </div>
              </button>
            );
          })}
        </nav>

        <div className="px-4 py-4 border-t border-slate-800">
          <div className="flex items-center gap-3 px-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
              A
            </div>
            <div>
              <p className="text-xs font-medium text-slate-300">Alex Morgan</p>
              <p className="text-[10px] text-slate-600">Senior Engineer</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
