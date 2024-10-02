import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { HomePage } from './home/home.page';

export const routes: Routes = [

  {
    path: '',
    component: TabsPage,
    children: [
        {
            path: 'home',
            component: HomePage
          },
          
          {
            path: '',
            redirectTo: '/tabs/home',
            pathMatch: 'full',
          },
    ]
  },
  {
    path: 'job/:id',
    loadComponent: () => import('./job-detail/job-detail.page').then( m => m.JobDetailPage)
  }
    
  
];
