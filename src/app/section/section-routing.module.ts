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
      {path: 'descripcion', component: DescripcionComponent, data: { animation: 'perfilAnimation'}},
      {path: 'stack', component: StackComponent, data: { animation: 'stackAnimation'}},
      {path: 'educacion', component: EducacionComponent, data: { animation: 'educacionAnimation'}},
      {path: 'proyectos', component: ProyectosComponent, data: { animation: 'proyectosAnimation'}},
      {path: 'experiencia', component: ExperienciaComponent, data: { animation: 'experienciaAnimation'}},
      {path: 'cv', component: CvComponent, data: { animation: 'cvAnimation'}},
      {path: 'redes', component: RedesComponent, data: { animation: 'redesAnimation'}},
      {path: 'contacto', component: ContactoComponent, data: { animation: 'contactoAnimation'}},
      {path: 'gracias', component: GraciasComponent, data: { animation: 'graciasAnimation'}},      
    ]
  },
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
