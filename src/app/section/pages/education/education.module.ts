import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { EducacionComponent } from './educacion.component';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';

@NgModule({
  declarations: [
    EducacionComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule,
    DirectivesModule
  ],
  exports: [
    EducacionComponent
  ]
})
export class EducationModule { }
