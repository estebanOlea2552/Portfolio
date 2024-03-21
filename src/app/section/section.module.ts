import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
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
import { MenuModule } from '../shared/components/menu/menu.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GatitoTextoModule } from '../shared/components/gatito-texto/gatito-texto.module';


@NgModule({
  declarations: [
    SectionComponent,
    // DescripcionComponent,
    // StackComponent,
    // EducacionComponent,
    // ProyectosComponent,
    // ExperienciaComponent,
    // CvComponent,
    // RedesComponent,
    // ContactoComponent,
    // GraciasComponent,
  ],
  imports: [
    CommonModule,
    SectionRoutingModule,
    MenuModule,
    GatitoTextoModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SectionModule { }
