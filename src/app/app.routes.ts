import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'main-title',
    pathMatch: 'full',
  },
  {
    path: 'main-title',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('../app/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'section',
    loadComponent: () =>
      import('./section/section.component').then((m) => m.SectionComponent),
    loadChildren: () =>
      import('./section/section.routes').then((m) => m.SECTION_ROUTES),
  },
];
