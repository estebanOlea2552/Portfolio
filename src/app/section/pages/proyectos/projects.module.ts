import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProyectosComponent } from './proyectos.component';


@NgModule({
  declarations: [
    ProyectosComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  exports: [
    ProyectosComponent
  ]
})
export class ProjectsModule { }
