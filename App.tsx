
import React, { useState } from 'react';
import Header from './components/Header';
import RolesDirectory from './components/RolesDirectory';
import TaskFinder from './components/TaskFinder';
import OrgChart from './components/OrgChart';

type View = 'directory' | 'tasks' | 'orgchart';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('directory');

  const renderContent = () => {
    switch (currentView) {
      case 'directory':
        return <RolesDirectory />;
      case 'tasks':
        return <TaskFinder />;
      case 'orgchart':
        return <OrgChart />;
      default:
        return <RolesDirectory />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <main id="app-container" className="p-4 sm:p-6 md:p-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
