import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent),  // Updated path to the generated component
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent),  // Updated path to the generated component
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then( m => m.routes)
  }
];
