import React, { useState, useMemo } from 'react';
import { roles } from '../data/roles';
import { Task } from '../types';

// Helper component to highlight search matches
const HighlightedText: React.FC<{ text: string; highlight: string }> = ({ text, highlight }) => {
  if (!highlight.trim()) {
    return <>{text}</>;
  }
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <mark key={i} className="bg-yellow-200 text-black px-0 py-0 rounded">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
};


const TaskFinder: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const allTasks = useMemo(() => {
    const generatedTasks: Task[] = [];
    roles.forEach(role => {
        const puestoSimple = role.puesto.split(' (')[0].trim();
        role.responsibilities.forEach(resp => {
            resp.tasks.forEach(taskText => {
                generatedTasks.push({
                    tarea: taskText.replace(/^T\d+\.\s?/, ''),
                    puesto: puestoSimple,
                    // Normalize 'Mondraker' to 'Interno' for consistency
                    tipo: role.tipo === 'Mondraker' ? 'Interno' : role.tipo,
                });
            });
        });
    });
    return generatedTasks;
  }, []);

  const filteredTasks = useMemo(() => {
    if (!searchTerm.trim()) {
      return allTasks;
    }
    const lowercasedTerm = searchTerm.toLowerCase();
    return allTasks.filter(task =>
      task.tarea.toLowerCase().includes(lowercasedTerm) ||
      task.puesto.toLowerCase().includes(lowercasedTerm)
    );
  }, [searchTerm, allTasks]);

  return (
    <div className="container mx-auto">
      <div className="mb-8 sticky top-16 bg-white py-4 z-10">
        <h2 className="text-xl font-bold text-gray-800 mb-2">¿Quién Hace Qué?</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar por tarea o puesto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500"
          />
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarea Operativa</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Puesto Responsable</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo de Rol</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTasks.map((task, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                   <HighlightedText text={task.tarea} highlight={searchTerm} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                   <HighlightedText text={task.puesto} highlight={searchTerm} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${task.tipo === 'Agencia' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                    {task.tipo}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
         {filteredTasks.length === 0 && (
            <div className="text-center py-10">
                <p className="text-gray-500">No se encontraron tareas para "{searchTerm}".</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default TaskFinder;