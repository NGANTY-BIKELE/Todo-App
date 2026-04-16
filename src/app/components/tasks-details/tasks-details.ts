import { Component, OnInit,Input, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, ParamMap } from '@angular/router';
import { LucideArrowLeft, LucideCalendar } from '@lucide/angular';
import { TaskService } from '../../services/task';
import { Observable, switchMap, tap } from 'rxjs';
import { Task } from '../../models/task.model';
import { AsyncPipe } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-tasks-details',
  imports: [LucideArrowLeft, LucideCalendar, RouterLink, AsyncPipe, ReactiveFormsModule, FormsModule, ButtonComponent],
  templateUrl: './tasks-details.html',
  styleUrl: './tasks-details.css',
})
export class TasksDetailsComponent implements OnInit {

  task$!: Observable<Task>;
  updateForm!: FormGroup
  @Input() task!: Task

  isSaving = signal(false)
  errMessage = signal<string | null>(null)

  constructor(private route:ActivatedRoute, private tasksService:TaskService, private fb:FormBuilder){}

  ngOnInit(): void {
    // this.task$ = this.tasksService.tasks$
    this.onBuilForm()
    this.task$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = String(params.get('id'));
        return this.tasksService.getTaskById(id);
      }),
      tap((task) => {
        this.task = task
        this.updateForm.patchValue({
          status:task.status,
          priority:task.priority
        })
      })
    )

  }

  onBuilForm(){
    this.updateForm = this.fb.group({
      status: [this.task?.status],
      priority: [this.task?.priority]
    })
  }

  saveChange(){
    if(this.updateForm.invalid || !this.updateForm.dirty) return

    if(confirm(`voulez vous vraiment modifier la tache ${this.task.id}?`)){
      this.isSaving.set(true)
      this.errMessage.set(null)
      const dataForm = this.updateForm.value

      this.tasksService.updateTask(this.task.id, dataForm).subscribe({
        next: (updatedataForm) => {
          this.task = { ...this.task, ...updatedataForm };

          this.isSaving.set(false);

          alert(`La tâche ${this.task.id} a été modifiée avec succès`);
        },
        error:((err) => {
          console.error(`save failed`,err)
          this.errMessage.set(`erreur lors de l'enregistrement`)
          this.isSaving.set(false)
        })
    })

    }
  }


  onCancelChange(){
    this.updateForm.reset({
      status: this.task.status,
      priority: this.task.priority
    })
    this.isSaving.set(false)
    this.errMessage.set(null)
  }
}

