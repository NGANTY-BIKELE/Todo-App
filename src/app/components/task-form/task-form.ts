import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from '../../services/task';
import { Task } from '../../models/task.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button';
import { LucideX } from '@lucide/angular';
import { UiService } from '../../services/ui.service';
@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule, ButtonComponent, LucideX],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskFormComponent implements OnInit {

  tasks$! : Observable<Task[]>
  form!:FormGroup
  uiService = inject(UiService)

  constructor(private tasks:TaskService, private fb: FormBuilder){}

  ngOnInit(): void {
    this.tasks$ = this.tasks.tasks$
    this.onCreateForm()
  }
  
  onCreateForm(){
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(20)]],
      priority: ['', Validators.required],
      status: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.form.invalid){
      alert(`veuillez remplir tous les champs`)
      return
    }
    this.onPostForm()
  }

  onPostForm(){
    const infosForm = this.form.value
    const newPostForm = {
      ...infosForm
    }
    this.tasks.createTask(newPostForm).subscribe({
      next:(() => {
        alert(`tache creee avec succes`)
        this.onClearForm();
        this.uiService.closeTaskForm();
      }),
      error:((error) => {
        console.error(error.message)
      })
    })
  }

  onCancel() {
    this.uiService.closeTaskForm();
  }

  onClearForm(){
    this.form.reset()
  }
}
