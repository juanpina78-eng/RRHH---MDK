import React from 'react';
import { Role } from '../types';

interface RoleModalProps {
  role: Role;
  onClose: () => void;
}

const DetailSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-6">
    <h4 className="font-bold text-sm uppercase text-gray-500 mb-2 tracking-wider">{title}</h4>
    <div className="text-gray-800 text-base space-y-1">{children}</div>
  </div>
);

const RoleModal: React.FC<RoleModalProps> = ({ role, onClose }) => {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-200 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{role.puesto}</h2>
            <p className="text-gray-500">{role.area}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          <DetailSection title="Misión"><p>{role.mision}</p></DetailSection>
          <DetailSection title="Reporta A"><p>{role.reportaA}</p></DetailSection>
          <DetailSection title="Supervisa A"><p>{role.supervisaA}</p></DetailSection>
          
          <div>
            <h4 className="font-bold text-sm uppercase text-gray-500 mb-2 tracking-wider">Responsabilidades y Tareas</h4>
            <div className="space-y-4">
              {role.responsibilities.map((resp, index) => (
                <div key={index} className="pl-4 border-l-2 border-gray-200">
                  <p className="font-semibold text-gray-800">{resp.name.replace(/^R\d+\.\s?/, '')}</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                    {resp.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="ml-2">{task.replace(/^T\d+\.\s?/, '')}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleModal;
