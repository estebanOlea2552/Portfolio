import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './section-component/section.component';
import { HomeComponent } from '../home/home-component/home.component';

const routes: Routes = [
  {
    path: '',
    component: SectionComponent,
    children:[
      {
        path: 'description', loadChildren: () => import('./pages/descripcion/description.module').then(m => m.DescriptionModule), data: { animation: 'descriptionAnimation'}
      },
      {
        path: 'stack', loadChildren: () => import('./pages/stack/stack.module').then(m => m.StackModule), data: { animation: 'stackAnimation'}
      },
      {
        path: 'education', loadChildren: () => import('./pages/educacion/education.module').then(m => m.EducationModule), data: { animation: 'educationAnimation'}
      },
      {
        path: 'projects', loadChildren: () => import('./pages/proyectos/projects.module').then(m => m.ProjectsModule), data: { animation: 'projectsAnimation'}
      },
      {
        path: 'experience', loadChildren: () => import('./pages/experiencia/experience.module').then(m => m.ExperienceModule), data: { animation: 'experienceAnimation'}
      },
      {
        path: 'cv', loadChildren: () => import('./pages/cv/cv.module').then(m => m.CvModule), data: { animation: 'cvAnimation'}
      },
      {
        path: 'social', loadChildren: () => import('./pages/redes/social.module').then(m => m.SocialModule), data: { animation: 'socialAnimation'}
      },
      {
        path: 'contact', loadChildren: () => import('./pages/contacto/contact.module').then(m => m.ContactModule), data: { animation: 'contactAnimation'}
      },
      {
        path: 'thanks', loadChildren: () => import('./pages/gracias/thanks.module').then(m => m.ThanksModule), data: { animation: 'thanksAnimation'}
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
