import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout';
import { MyTasksComponent } from './pages/my-tasks/my-tasks';
import { CompletedComponent } from './pages/completed/completed';
import { SettingComponent } from './pages/setting/setting';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { TasksDetailsComponent } from './components/tasks-details/tasks-details';

export const routes: Routes = [
    {path: '', component: LayoutComponent, children:[
        {path: 'my-tasks', component: MyTasksComponent},
        {path: 'completed', component: CompletedComponent},
        {path: 'setting', component: SettingComponent},
        {path: 'dashboard', component: DashboardComponent},
        {path: 'tasks-details/:id', component: TasksDetailsComponent},
        {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
    }
];
