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