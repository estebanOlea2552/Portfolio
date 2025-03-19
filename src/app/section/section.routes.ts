import { HomeComponent } from '../home/home.component';
import { Routes } from '@angular/router';

export const SECTION_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'description',
        loadComponent: () =>
          import('./section-content/description/description.component').then(
            (m) => m.DescriptionComponent
          ),
        data: { animation: 'descriptionAnimation' },
      },
      {
        path: 'stack',
        loadComponent: () =>
          import('./section-content/stack/stack.component').then((m) => m.StackComponent),
        data: { animation: 'stackAnimation' },
      },
      {
        path: 'education',
        loadComponent: () =>
          import('./section-content/education/education.component').then(
            (m) => m.EducationComponent
          ),
        data: { animation: 'educationAnimation' },
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./section-content/projects/projects.component').then(
            (m) => m.ProjectsComponent
          ),
        data: { animation: 'projectsAnimation' },
      },
      {
        path: 'experience',
        loadComponent: () =>
          import('./section-content/experience/experience.component').then(
            (m) => m.ExperienceComponent
          ),
        data: { animation: 'experienceAnimation' },
      },
      {
        path: 'cv',
        loadComponent: () =>
          import('./section-content/cv/cv.component').then((m) => m.CvComponent),
        data: { animation: 'cvAnimation' },
      },
      {
        path: 'social',
        loadComponent: () =>
          import('./section-content/social/social.component').then(
            (m) => m.SocialComponent
          ),
        data: { animation: 'socialAnimation' },
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./section-content/contact/contact.component').then(
            (m) => m.ContactComponent
          ),
        data: { animation: 'contactAnimation' },
      },
      {
        path: 'thanks',
        loadComponent: () =>
          import('./section-content/thanks/thanks.component').then(
            (m) => m.ThanksComponent
          ),
        data: { animation: 'thanksAnimation' },
      },
    ],
  },
  { path: 'home', component: HomeComponent },
];
