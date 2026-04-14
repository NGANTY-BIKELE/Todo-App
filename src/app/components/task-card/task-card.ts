import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';
import { NgStyle } from '@angular/common';
import { LucideSquarePen, LucideTrash } from '@lucide/angular';
import { RouterLink } from '@angular/router';
// import { EventEmitter } from 'stream';
@Component({
  selector: 'app-task-card',
  imports: [NgStyle, LucideSquarePen, LucideTrash, RouterLink],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCardComponent {
  @Input() task!: Task;

  @Output() onDelte = new EventEmitter<string>()

  onDeleteClick(){
    this.onDelte.emit(this.task.id)
  }

  get priorityStripeStyle() {
    const priority = (this.task.priority || '').toLowerCase();
    if (priority === 'high') {
      return { 'background-color': '#EF4444' };
    } else if (priority === 'medium') {
      return { 'background-color': '#F59E0B' };
    } else {
      return { 'background-color': '#3B82F6' };
    }
  }

  get priorityStyle() {
    const priority = (this.task.priority || '').toLowerCase();
    if (priority === 'high') {
      return { 'background-color': '#FEE2E2', 'color': '#B91C1C' };
    } else if (priority === 'medium') {
      return { 'background-color': '#FEF3C7', 'color': '#92400E' };
    } else {
      return { 'background-color': '#DBEAFE', 'color': '#1D4ED8' };
    }
  }

  // get statusStyle() {
  //   const status = (this.task.status || '').toLowerCase();
  //   if (status === 'done') {
  //     return { 'background-color': '#22C55E', 'color': '#ffffff' };
  //   } else if (status === 'in progress') {
  //     return { 'background-color': '#3B82F6', 'color': '#ffffff' };
  //   } else {
  //     return { 'background-color': '#9CA3AF', 'color': '#ffffff' };
  //   }
  // }
}
