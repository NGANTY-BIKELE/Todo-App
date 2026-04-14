import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { LucideSearch } from '@lucide/angular';


@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports:[
    LucideSearch, ReactiveFormsModule
  ],
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.css',
})
export class FilterBarComponent {

  searchControl = new FormControl('')

  @Output() searchChange = new EventEmitter<string>()

  onSearchChange(){
    const newValue = this.searchControl.value
    this.searchChange.emit(newValue || '')
  }
}
