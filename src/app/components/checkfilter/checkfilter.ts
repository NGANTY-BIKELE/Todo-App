import { Component,Output,EventEmitter } from '@angular/core';
import { Filter } from '../../models/task.model';


@Component({
  selector: 'app-checkfilter',
  imports: [],
  templateUrl: './checkfilter.html',
  styleUrl: './checkfilter.css',
})
export class CheckfilterComponent {

  @Output() filterChange = new EventEmitter<Filter>()

  filterActive: Filter ={
    prioritys:[],
    statusFilters:[]
  }

  toggleFilter(type: 'prioritys' | 'statusFilters', value:string){
    const list = this.filterActive[type]
    const index = list.indexOf(value)

    if(index > -1){
      list.splice(index,1)
    }
    else{
      list.push(value)
    }
    this.filterChange.emit(this.filterActive)
  }
}
