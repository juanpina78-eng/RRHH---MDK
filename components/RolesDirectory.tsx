
import React, { useState, useMemo } from 'react';
import { roles } from '../data/roles';
import { Role } from '../types';
import RoleCard from './RoleCard';
import RoleModal from './RoleModal';

const RolesDirectory: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [areaFilter, setAreaFilter] = useState<string>('all');

  const areas = useMemo(() => ['all', ...Array.from(new Set(roles.map(r => r.area)))], []);
  const types = useMemo(() => ['all', ...Array.from(new Set(roles.map(r => r.tipo)))], []);

  const filteredRoles = useMemo(() => {
    return roles.filter(role => {
      const typeMatch = typeFilter === 'all' || role.tipo === typeFilter;
      const areaMatch = areaFilter === 'all' || role.area === areaFilter;
      return typeMatch && areaMatch;
    });
  }, [typeFilter, areaFilter]);

  return (
    <div className="container mx-auto">
      <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <h2 className="text-xl font-bold text-gray-800 md:col-span-1 flex items-center">Directorio de Roles</h2>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700 mb-1">Filtrar por Tipo</label>
              <select
                id="type-filter"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
              >
                {types.map(t => <option key={t} value={t}>{t === 'all' ? 'Todos los Tipos' : t}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="area-filter" className="block text-sm font-medium text-gray-700 mb-1">Filtrar por Área</label>
              <select
                id="area-filter"
                value={areaFilter}
                onChange={(e) => setAreaFilter(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
              >
                {areas.map(a => <option key={a} value={a}>{a === 'all' ? 'Todas las Áreas' : a}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>

      {filteredRoles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRoles.map(role => (
            <RoleCard key={role.puesto} role={role} onSelect={() => setSelectedRole(role)} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500">No se encontraron roles con los filtros seleccionados.</p>
        </div>
      )}

      {selectedRole && <RoleModal role={selectedRole} onClose={() => setSelectedRole(null)} />}
    </div>
  );
};

export default RolesDirectory;
