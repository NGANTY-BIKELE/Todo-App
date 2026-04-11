import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskFormComponet } from './components/task-form/task-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskFormComponet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TodoApp');
}
