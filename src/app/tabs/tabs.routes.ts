import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
        {
            path: 'home',
            loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
        },
        {
          path: 'profile',
          loadComponent: () => import('./profile/profile.page').then(m => m.ProfilePage)
        },
        {
            path: '',
            redirectTo: '/tabs/home',
            pathMatch: 'full',
        },
    ],
  },
  {
    path: 'job/:id',
    loadComponent: () => import('./job-detail/job-detail.page').then( m => m.JobDetailPage)
  },{
    path: 'applyjob/:jobPost/:type/:salary',
    loadComponent: () => import('./applyjob/applyjob.page').then(m => m.ApplyjobPage)
  }
  
  
 
];
