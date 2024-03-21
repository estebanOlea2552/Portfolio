import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienciaComponent } from './experiencia.component';


@NgModule({
  declarations: [
    ExperienciaComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule
  ],
  exports: [
    ExperienciaComponent
  ]
})
export class ExperienceModule { }
