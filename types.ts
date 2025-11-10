export interface Responsibility {
  name: string;
  tasks: string[];
}

export interface Role {
  puesto: string;
  mision: string;
  reportaA: string;
  supervisaA: string;
  responsibilities: Responsibility[];
  tipo: 'Agencia' | 'Interno' | 'Mondraker';
  area: string;
}

export interface Task {
  tarea: string;
  puesto: string;
  tipo: 'Agencia' | 'Interno';
}
