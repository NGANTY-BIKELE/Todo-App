//permet de définir la structure d'une tâche
export interface Task {
    id: number;
    title: string;
    description: string;
    priority: 'Low' | 'Medium' | 'High';
    status: 'To Do' | 'In Progress' | 'Done';
    startDate: Date;
    endDate: Date;
}