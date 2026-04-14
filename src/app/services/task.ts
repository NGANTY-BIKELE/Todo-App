import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { Task } from '../models/task.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  
  private url = "http://localhost:3000/tasks"
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  public tasks$ = this.tasksSubject.asObservable()

  constructor(private http:HttpClient)  {} 

  getTask():Observable<Task[]>{
     return this.http.get<Task[]>(this.url).pipe(
      tap((data) => {
        this.tasksSubject.next(data)
      })
    )
  }

  createTask(task:Task){
     return this.http.post<Task>(this.url, task).pipe(
      tap((updateTask) => {
        const currentsTask = this.tasksSubject.value
        this.tasksSubject.next([...currentsTask, updateTask])
      }),
     catchError((error:HttpErrorResponse) =>{
      console.error(error)
      return throwError(() => new Error(`Erreur lors de la creation de la tache ${task.title}`))
     })
    )
  }

  deleteTask(id:string): Observable<Task[]>{
    return this.http.delete<Task[]>(`${this.url}/${id}`).pipe(
      tap(() => {
        const currentsTask = this.tasksSubject.value
        const updateTask = currentsTask.filter((task) => task.id != id)
        this.tasksSubject.next(updateTask)
      }),
      catchError((error:HttpErrorResponse) => {
        console.error(error)
        return throwError(() => new Error(`Erreur lors de la suppression de la tache ${id}`))
      })
    )
  }

  getTaskById(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.url}/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => new Error(`Erreur lors de la récupération de la tâche ${id}`));
      })
    );
  }

}
