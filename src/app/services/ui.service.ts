import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  showTaskForm = signal(false);

  // toggleTaskForm() {
  //   this.showTaskForm.update(val => !val);
  // }

  closeTaskForm() {
    this.showTaskForm.set(false);
  }

  openTaskForm() {
    this.showTaskForm.set(true);
  }
}
