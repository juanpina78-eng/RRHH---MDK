import React, { useMemo, useState } from 'react';
import { roles } from '../data/roles';
import { Role } from '../types';
import RoleModal from './RoleModal';
import './OrgChart.css';

interface TreeNode {
  role: Role;
  children: TreeNode[];
}

const buildOrgTree = (): TreeNode[] => {
  const allNodes = roles.map(role => ({ role, children: [] } as TreeNode));
  const nodeMap = new Map(allNodes.map(node => [node.role.puesto, node]));
  const childPuestos = new Set<string>();

  allNodes.forEach(node => {
    const { reportaA, puesto } = node.role;
    
    // Improved logic to find parent
    // First, check if "reportaA" exactly matches a "puesto"
    let parentNode = nodeMap.get(reportaA);
    
    // If not found, search for titles or names within the "reportaA" string
    if (!parentNode) {
        for (const pNode of allNodes) {
             if (pNode.role.puesto === puesto) continue;

            const parentPuesto = pNode.role.puesto;
            const parentTitle = parentPuesto.split(' (')[0].trim();
            const parentNameMatch = parentPuesto.match(/\((.*?)\)/);
            const parentName = parentNameMatch ? parentNameMatch[1].trim() : null;

            if (parentTitle.length > 4 && reportaA.includes(parentTitle)) {
                parentNode = pNode;
                break;
            }
            if (parentName && parentName.length > 4 && reportaA.includes(parentName)) {
                parentNode = pNode;
                break;
            }
        }
    }
    

    if (parentNode && parentNode.role.puesto !== puesto) {
      if (!parentNode.children.some(child => child.role.puesto === puesto)) {
        parentNode.children.push(node);
      }
      childPuestos.add(puesto);
    }
  });
  
  const roots = allNodes.filter(node => !childPuestos.has(node.role.puesto));
  
  const sortNodes = (nodes: TreeNode[]) => {
      nodes.sort((a, b) => a.role.puesto.localeCompare(b.role.puesto));
      nodes.forEach(node => sortNodes(node.children));
  };
  sortNodes(roots);

  return roots;
};


const OrgChartNode: React.FC<{ node: TreeNode; onNodeClick: (role: Role) => void; }> = ({ node, onNodeClick }) => {
  const typeColorClass = node.role.tipo === 'Agencia' 
    ? 'border-t-blue-500' 
    : 'border-t-green-500';

  return (
    <li>
      <div className={`node-card ${typeColorClass}`} onClick={() => onNodeClick(node.role)}>
        <p className="font-bold text-gray-800 text-sm">{node.role.puesto.split(' (')[0]}</p>
        <p className="text-xs text-gray-500">{node.role.puesto.match(/\((.*?)\)/)?.[1] || ''}</p>
      </div>
      {node.children.length > 0 && (
        <ul>
          {node.children.map(child => (
            <OrgChartNode key={child.role.puesto} node={child} onNodeClick={onNodeClick} />
          ))}
        </ul>
      )}
    </li>
  );
};


const OrgChart: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const tree = useMemo(() => buildOrgTree(), []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Organigrama Interactivo</h2>
      <div className="org-chart-container">
        <div className="org-chart">
            {tree.length > 0 ? (
            <ul>
                {tree.map(rootNode => (
                <OrgChartNode key={rootNode.role.puesto} node={rootNode} onNodeClick={setSelectedRole} />
                ))}
            </ul>
            ) : (
            <p className="text-gray-500">No se pudo construir el organigrama.</p>
            )}
        </div>
      </div>
       {selectedRole && <RoleModal role={selectedRole} onClose={() => setSelectedRole(null)} />}
    </div>
  );
};

export default OrgChart;
