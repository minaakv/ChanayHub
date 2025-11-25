import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import StrategyView from './components/StrategyView';
import CalendarView from './components/CalendarView';
import CompetitorAnalysis from './components/CompetitorAnalysis';
import ResourcesView from './components/ResourcesView';
import { AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case AppView.DASHBOARD:
        return <Dashboard changeView={setCurrentView} />;
      case AppView.STRATEGY:
        return <StrategyView />;
      case AppView.CALENDAR:
        return <CalendarView />;
      case AppView.COMPETITORS:
        return <CompetitorAnalysis />;
      case AppView.RESOURCES:
        return <ResourcesView />;
      default:
        return <Dashboard changeView={setCurrentView} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar 
        currentView={currentView} 
        setCurrentView={setCurrentView}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main className="flex-1 transition-all duration-300 ease-in-out w-full">
        <div className="p-4 lg:p-8 mt-16 lg:mt-0 max-w-7xl mx-auto">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;