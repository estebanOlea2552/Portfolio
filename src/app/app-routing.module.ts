import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main_title',
    pathMatch: 'full'
  },
  {
    path: 'main_title',
    loadChildren: () => import ('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import ('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'section',
    loadChildren: () => import ('./section/section.module').then(m => m.SectionModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }