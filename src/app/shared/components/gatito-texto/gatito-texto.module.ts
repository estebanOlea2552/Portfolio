import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatitoTextoComponent } from './gatito-texto.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    GatitoTextoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    GatitoTextoComponent
  ]
})
export class GatitoTextoModule { }
