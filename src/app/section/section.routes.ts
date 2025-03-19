import { HomeComponent } from '../home/home.component';
import { Routes } from '@angular/router';

export const SECTION_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'description',
        loadComponent: () =>
          import('./pages/description/descripcion.component').then(
            (m) => m.DescripcionComponent
          ),
        data: { animation: 'descriptionAnimation' },
      },
      {
        path: 'stack',
        loadComponent: () =>
          import('./pages/stack/stack.component').then((m) => m.StackComponent),
        data: { animation: 'stackAnimation' },
      },
      {
        path: 'education',
        loadComponent: () =>
          import('./pages/education/educacion.component').then(
            (m) => m.EducacionComponent
          ),
        data: { animation: 'educationAnimation' },
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./pages/projects/proyectos.component').then(
            (m) => m.ProyectosComponent
          ),
        data: { animation: 'projectsAnimation' },
      },
      {
        path: 'experience',
        loadComponent: () =>
          import('./pages/experience/experiencia.component').then(
            (m) => m.ExperienciaComponent
          ),
        data: { animation: 'experienceAnimation' },
      },
      {
        path: 'cv',
        loadComponent: () =>
          import('./pages/cv/cv.component').then((m) => m.CvComponent),
        data: { animation: 'cvAnimation' },
      },
      {
        path: 'social',
        loadComponent: () =>
          import('./pages/social/redes.component').then(
            (m) => m.RedesComponent
          ),
        data: { animation: 'socialAnimation' },
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact.component').then(
            (m) => m.ContactComponent
          ),
        data: { animation: 'contactAnimation' },
      },
      {
        path: 'thanks',
        loadComponent: () =>
          import('./pages/thanks/gracias.component').then(
            (m) => m.GraciasComponent
          ),
        data: { animation: 'thanksAnimation' },
      },
    ],
  },
  { path: 'home', component: HomeComponent },
];
