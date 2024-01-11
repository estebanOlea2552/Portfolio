import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursorComponent } from './shared/cursor/cursor.component';

const routes: Routes = [
  {
    path: '',
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
  {
    path: 'cursor',
    component: CursorComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
