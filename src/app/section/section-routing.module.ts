import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './section-component/section.component';
import { HomeComponent } from '../home/home-component/home.component';

const routes: Routes = [
  {
    path: '',
    component: SectionComponent,
    children: [
      {
        path: 'description',
        loadChildren: () =>
          import('./pages/description/description.module').then(
            (m) => m.DescriptionModule
          ),
        data: { animation: 'descriptionAnimation' },
      },
      {
        path: 'stack',
        loadChildren: () =>
          import('./pages/stack/stack.module').then((m) => m.StackModule),
        data: { animation: 'stackAnimation' },
      },
      {
        path: 'education',
        loadChildren: () =>
          import('./pages/education/education.module').then(
            (m) => m.EducationModule
          ),
        data: { animation: 'educationAnimation' },
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./pages/projects/projects.module').then(
            (m) => m.ProjectsModule
          ),
        data: { animation: 'projectsAnimation' },
      },
      {
        path: 'experience',
        loadChildren: () =>
          import('./pages/experience/experience.module').then(
            (m) => m.ExperienceModule
          ),
        data: { animation: 'experienceAnimation' },
      },
      {
        path: 'cv',
        loadChildren: () =>
          import('./pages/cv/cv.module').then((m) => m.CvModule),
        data: { animation: 'cvAnimation' },
      },
      {
        path: 'social',
        loadChildren: () =>
          import('./pages/social/social.module').then((m) => m.SocialModule),
        data: { animation: 'socialAnimation' },
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./pages/contact/contact.module').then((m) => m.ContactModule),
        data: { animation: 'contactAnimation' },
      },
      {
        path: 'thanks',
        loadChildren: () =>
          import('./pages/thanks/thanks.module').then((m) => m.ThanksModule),
        data: { animation: 'thanksAnimation' },
      },
    ],
  },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionRoutingModule {}
