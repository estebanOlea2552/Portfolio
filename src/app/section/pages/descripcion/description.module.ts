import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescriptionRoutingModule } from './description-routing.module';
import { DescripcionComponent } from './descripcion.component';


@NgModule({
  declarations: [
    DescripcionComponent    
  ],
  imports: [
    CommonModule,
    DescriptionRoutingModule
  ],
  exports: [
    DescripcionComponent      
  ]
})
export class DescriptionModule { }
