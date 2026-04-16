import { Component, OnInit, inject } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task';
import { AsyncPipe } from '@angular/common';
import { TaskCardComponent } from '../../components/task-card/task-card';
import { FilterBarComponent } from '../../components/filter-bar/filter-bar';
import { ButtonComponent } from '../../components/button/button';
import { CheckfilterComponent } from '../../components/checkfilter/checkfilter';
import { TaskFormComponent } from '../../components/task-form/task-form';
import { Filter } from '../../models/task.model';
import { LucideFunnel, LucidePlus, LucideList, LucideLayoutGrid } from '@lucide/angular';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-my-tasks',
  imports: [
    ButtonComponent,
    LucideFunnel,
    TaskCardComponent, 
    AsyncPipe, 
    LucidePlus,  
    LucideList, 
    LucideLayoutGrid,
    FilterBarComponent,
    CheckfilterComponent,
    TaskFormComponent
  ],
  templateUrl:'./my-tasks.html',
  styleUrl: './my-tasks.css',
})
export class MyTasksComponent implements OnInit {

  tasks$!: Observable<Task[]>;
  todo$!: Observable<Task[]>;
  inProgress$!: Observable<Task[]>;
  done$!: Observable<Task[]>;
  isFilterVisible =false
  searchWord = new BehaviorSubject<string>('')
  filterValue = new BehaviorSubject<Filter>({prioritys:[], statusFilters:[]})
  uiService = inject(UiService)

  constructor(private tasks: TaskService) {}

  ngOnInit(): void {
    this.tasks$ = this.tasks.tasks$;
    this.tasks.getTask().subscribe();

    //combineLatest permet de combiner les observables et de les observer en meme temps
    const filterTasks$ = combineLatest([
      this.filterValue,
      this.tasks$,
      this.searchWord
    ]).pipe(
      map(([filter,allTasks, motsaisi]) =>{

        const term = (motsaisi || '').toLowerCase()
        
        return allTasks.filter((tasks) =>{
          const wordFilter = (tasks.title || '').toLowerCase().includes(term)
          const priorityFilter = filter.prioritys.length === 0 || filter.prioritys.includes(tasks.priority || '')
          const statusFilter = filter.statusFilters.length === 0 || filter.statusFilters.includes(tasks.status || '')
          
          return wordFilter && priorityFilter && statusFilter
        })
      }
    )
    )

    //permet de separer les taches par statut
    this.todo$ = filterTasks$.pipe(
      map(tasks => tasks.filter(t => (t.status || '') === 'To do'))
    );
    this.inProgress$ = filterTasks$.pipe(
      map(tasks => tasks.filter(t => (t.status || '') === 'In Progress'))
    );
    this.done$ = filterTasks$.pipe(
      map(tasks => tasks.filter(t => (t.status || '') === 'Done'))
    );
  }

  handleDeleteTask(id:string){
    if(confirm("voulez vous vraiment supprimer cette tache?")){
      this.tasks.deleteTask(id).subscribe({
        next:(() =>{
          alert(`la tache ${id} a ete supprimee avec succes`)
        }),
        error:(err) => {
          console.error(err.message)
        }
      })
    }
  }

  onSearchChange(searchTerme:string){
    this.searchWord.next(searchTerme)
  }

  toggleFilterMenu(){
    this.isFilterVisible = !this.isFilterVisible
  }

  onFilterChange(newFilter:Filter){
    this.filterValue.next(newFilter)
  }
}
