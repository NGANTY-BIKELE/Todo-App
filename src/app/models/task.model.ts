export interface Task {
  id: string;
  title: string;
  description: string;
  priority: string;
  status: string;
  startDate: string;
  endDate: string;
}

//interface pour les filtres
export interface Filter{
  prioritys: string[];
  statusFilters: string[];
}

//permet
export interface Stats {
  total: number;
  inProgress: number;
  Done: number;
  highPriority: number;
}

export type TaskUpdate = Partial<Pick<Task, 'status' | 'priority'>>