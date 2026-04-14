import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch,  } from '@angular/common/http';
import { 
  provideLucideIcons,
  LucideArrowLeft as ArrowLeft,
  LucideX as X,
  LucideCalendar as Calendar,
  LucideTrash as Trash,
  LucideHouse as House,
  LucideSquarePen as SquarePen,
  LucidePlus as Plus,
  LucideSettings as Settings,
  LucideLayoutDashboard as LayoutDashboard,
  LucideListTodo as ListTodo,
  LucideCheckCircle as CheckCircle,
  LucideSearch as Search,
  LucideFilter as Filter,
  LucideList as List,
  LucideLayoutGrid as LayoutGrid
} from '@lucide/angular';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideLucideIcons(ArrowLeft, X ,Calendar, Trash, House, SquarePen, Plus, Settings, LayoutDashboard, ListTodo, CheckCircle, Search, Filter, List, LayoutGrid)
  ]
};
