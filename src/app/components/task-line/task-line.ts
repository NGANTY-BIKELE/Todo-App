import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { LucideSquarePen, LucideTrash } from '@lucide/angular';

@Component({
  selector: 'app-task-line',
  standalone: true,
  imports: [CommonModule, LucideSquarePen, LucideTrash],
  templateUrl: './task-line.html',
  styleUrl: './task-line.css',
})
export class TaskLineComponent {
  @Input() task!: Task;

  get statusStyle() {
    const status = (this.task.status || '').toLowerCase();
    
    if (status === 'done') {
      return { 'background-color': '#22C55E', 'color': '#ffffff' };
    } else if (status === 'in progress') {
      return { 'background-color': '#3B82F6', 'color': '#ffffff' };
    } else {
      return { 'background-color': '#9CA3AF', 'color': '#ffffff' };
    }
  }

  get priorityStyle() {
    const priority = (this.task.priority || '').toLowerCase();
    
    if (priority === 'high') {
      return { 'background-color': '#f37979', 'color': '#ffffff' };
    } else if (priority === 'medium') {
      return { 'background-color': '#f3c479', 'color': '#ffffff' };
    } else {
      return { 'background-color': '#f3f079', 'color': '#ffffff' };
    }
  }
}
