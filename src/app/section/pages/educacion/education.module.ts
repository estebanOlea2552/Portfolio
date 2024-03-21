import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { EducacionComponent } from './educacion.component';


@NgModule({
  declarations: [
     EducacionComponent   
  ],
  imports: [
    CommonModule,
    EducationRoutingModule
  ],
  exports: [
    EducacionComponent
  ]
})
export class EducationModule { }
