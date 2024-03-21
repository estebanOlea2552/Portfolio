import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './section-component/section.component';
import { DescripcionComponent } from './pages/descripcion/descripcion.component';
import { StackComponent } from './pages/stack/stack.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { CvComponent } from './pages/cv/cv.component';
import { RedesComponent } from './pages/redes/redes.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { GraciasComponent } from './pages/gracias/gracias.component';
import { HomeComponent } from '../home/home-component/home.component';

const routes: Routes = [
  {
    path: '',
    component: SectionComponent,
    children:[
      {
        path: 'descripcion', loadChildren: () => import('./pages/descripcion/description.module').then(m => m.DescriptionModule), data: { animation: 'perfilAnimation'}
      },
      {
        path: 'stack', loadChildren: () => import('./pages/stack/stack.module').then(m => m.StackModule), data: { animation: 'stackAnimation'}
      },
      {
        path: 'educacion', loadChildren: () => import('./pages/educacion/education.module').then(m => m.EducationModule), data: { animation: 'educacionAnimation'}
      },
      {
        path: 'proyectos', loadChildren: () => import('./pages/proyectos/projects.module').then(m => m.ProjectsModule), data: { animation: 'proyectosAnimation'}
      },
      {
        path: 'experiencia', loadChildren: () => import('./pages/experiencia/experience.module').then(m => m.ExperienceModule), data: { animation: 'experienciaAnimation'}
      },
      {
        path: 'cv', loadChildren: () => import('./pages/cv/cv.module').then(m => m.CvModule), data: { animation: 'cvAnimation'}
      },
      {
        path: 'redes', loadChildren: () => import('./pages/redes/social.module').then(m => m.SocialModule), data: { animation: 'redesAnimation'}
      },
      {
        path: 'contacto', loadChildren: () => import('./pages/contacto/contact.module').then(m => m.ContactModule), data: { animation: 'contactoAnimation'}
      },
      {
        path: 'gracias', loadChildren: () => import('./pages/gracias/thanks.module').then(m => m.ThanksModule), data: { animation: 'graciasAnimation'}
      },      
    ]
  },
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
