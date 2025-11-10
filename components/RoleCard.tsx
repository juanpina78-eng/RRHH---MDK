
import React from 'react';
import { Role } from '../types';

interface RoleCardProps {
  role: Role;
  onSelect: () => void;
}

const RoleCard: React.FC<RoleCardProps> = ({ role, onSelect }) => {
  const typeColor = role.tipo === 'Agencia' 
    ? 'bg-blue-100 text-blue-800' 
    : role.tipo === 'Mondraker' || role.tipo === 'Interno'
    ? 'bg-green-100 text-green-800'
    : 'bg-gray-100 text-gray-800';

  return (
    <div
      onClick={onSelect}
      className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
    >
      <div className="p-5 flex-grow">
        <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">{role.puesto}</h3>
      </div>
      <div className="p-3 bg-gray-50 border-t border-gray-200">
         <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${typeColor}`}>
            {role.tipo}
        </span>
      </div>
    </div>
  );
};

export default RoleCard;
