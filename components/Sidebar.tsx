import React from 'react';
import { LayoutDashboard, Target, Calendar, BookOpen, TrendingUp, Menu, X } from 'lucide-react';
import { AppView } from '../types';

interface SidebarProps {
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navItems = [
    { view: AppView.DASHBOARD, label: 'Dashboard', icon: LayoutDashboard },
    { view: AppView.STRATEGY, label: 'Strategy Framework', icon: Target },
    { view: AppView.CALENDAR, label: 'Weekly Schedule', icon: Calendar },
    { view: AppView.COMPETITORS, label: 'Market & Trends', icon: TrendingUp },
    { view: AppView.RESOURCES, label: 'Kenya Resources', icon: BookOpen },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-green-900 z-50 flex items-center px-4 justify-between shadow-md">
        <span className="text-white font-bold text-lg">Chanay Hub</span>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Container */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40 w-64 bg-green-900 text-white transform transition-transform duration-200 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col h-full
      `}>
        <div className="p-6 mt-16 lg:mt-0">
          <h1 className="text-2xl font-bold tracking-tight text-green-100">Chanay Agri</h1>
          <p className="text-xs text-green-300 mt-1 uppercase tracking-wider">Management Hub</p>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => {
                setCurrentView(item.view);
                setIsMobileMenuOpen(false);
              }}
              className={`
                w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                ${currentView === item.view ? 'bg-green-800 text-white shadow-lg' : 'text-green-200 hover:bg-green-800/50 hover:text-white'}
              `}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 bg-green-950">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold">
              CA
            </div>
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-green-400">Chanay Processors</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;