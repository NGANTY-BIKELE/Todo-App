import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MyTasksComponent } from '../my-tasks/my-tasks';
import { TaskService } from '../../services/task';
import { Task, Stats } from '../../models/task.model';
import {LucideClipboardList,LucideLoader,LucideCheckCircle,LucideFlame,} from '@lucide/angular';


@Component({
  selector: 'app-dashboard',
  imports:[
    MyTasksComponent,
    AsyncPipe,
    LucideClipboardList,
    LucideLoader,
    LucideCheckCircle,
    LucideFlame,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent implements OnInit {
  stats$!: Observable<Stats>;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTask().subscribe();

    this.stats$ = this.taskService.tasks$.pipe(
      map((tasks: Task[]) => ({
        total: tasks.length,
        inProgress: tasks.filter((t) => t.status === 'In progress').length,
        Done: tasks.filter((t) => t.status === 'Done').length,
        highPriority: tasks.filter((t) => t.priority === 'High').length,
      }))
    );
  }
}
