import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThanksRoutingModule } from './thanks-routing.module';
import { GraciasComponent } from './gracias.component';

@NgModule({
  declarations: [
    GraciasComponent
  ],
  imports: [
    CommonModule,
    ThanksRoutingModule
  ],
  exports: [
    GraciasComponent
  ]
})
export class ThanksModule { }
