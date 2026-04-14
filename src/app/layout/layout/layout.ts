import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../../components/header/header';
import { 
  LucideLayoutDashboard, 
  LucideListTodo, 
  LucideCheckCircle, 
  LucideSettings 
} from '@lucide/angular';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive, 
    HeaderComponent,
    LucideLayoutDashboard,
    LucideListTodo,
    LucideCheckCircle,
    LucideSettings
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class LayoutComponent {}
