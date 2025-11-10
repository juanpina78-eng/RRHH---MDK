import React from 'react';

type View = 'directory' | 'tasks' | 'orgchart';

interface HeaderProps {
  currentView: View;
  setCurrentView: (view: View) => void;
}

const MondrakerLogo: React.FC = () => (
    <div>
        <span style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.1em' }} className="block text-xl font-bold tracking-wider uppercase text-gray-800">
            MONDRAKER
        </span>
        <span style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.3em' }} className="block text-xs font-medium tracking-widest uppercase text-gray-500">
            BIKE COMPANY
        </span>
    </div>
);


const NavButton: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => {
  const activeClasses = 'text-gray-900 border-gray-800';
  const inactiveClasses = 'text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-300';

  return (
    <button
      onClick={onClick}
      className={`px-1 py-2 text-sm font-semibold transition-colors duration-200 border-b-2 ${isActive ? activeClasses : inactiveClasses}`}
    >
      {label}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <MondrakerLogo />
          </div>
          <nav className="hidden md:flex md:space-x-8">
            <NavButton
              label="Directorio de Roles"
              isActive={currentView === 'directory'}
              onClick={() => setCurrentView('directory')}
            />
            <NavButton
              label="¿Quién Hace Qué?"
              isActive={currentView === 'tasks'}
              onClick={() => setCurrentView('tasks')}
            />
            <NavButton
              label="Organigrama"
              isActive={currentView === 'orgchart'}
              onClick={() => setCurrentView('orgchart')}
            />
          </nav>
        </div>
      </div>
       <nav className="md:hidden flex justify-around p-2 border-t border-gray-200">
            <NavButton
              label="Roles"
              isActive={currentView === 'directory'}
              onClick={() => setCurrentView('directory')}
            />
            <NavButton
              label="Tareas"
              isActive={currentView === 'tasks'}
              onClick={() => setCurrentView('tasks')}
            />
            <NavButton
              label="Organigrama"
              isActive={currentView === 'orgchart'}
              onClick={() => setCurrentView('orgchart')}
            />
        </nav>
    </header>
  );
};

export default Header;