import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, ParamMap } from '@angular/router';
import { LucideArrowLeft, LucideCalendar } from '@lucide/angular';
import { TaskService } from '../../services/task';
import { Observable, switchMap } from 'rxjs';
import { Task } from '../../models/task.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-tasks-details',
  imports: [LucideArrowLeft, LucideCalendar, RouterLink, AsyncPipe],
  templateUrl: './tasks-details.html',
  styleUrl: './tasks-details.css',
})
export class TasksDetailsComponent implements OnInit {

  // taskId: string | null = null;
  task$!: Observable<Task>;

  constructor(private route:ActivatedRoute, private tasksService:TaskService){}

  ngOnInit(): void {
    this.task$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = String(params.get('id'));
        return this.tasksService.getTaskById(id);
      })
    );
  }
}
