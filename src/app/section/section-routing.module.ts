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
import { HomeComponent } from '../home/home-component/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: SectionComponent,
    children:[
      {path: 'descripcion',component: DescripcionComponent},
      {path: 'stack', component: StackComponent},
      {path: 'educacion', component: EducacionComponent},
      {path: 'proyectos', component: ProyectosComponent},
      {path: 'experiencia', component: ExperienciaComponent},
      {path: 'cv', component: CvComponent},
      {path: 'redes', component: RedesComponent},
      {path: 'contacto', component: ContactoComponent},
      {path: 'gracias', component: GraciasComponent},      
    ]
  },
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
