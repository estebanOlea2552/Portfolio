import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatitoTextoComponent } from './gatito-texto.component';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    GatitoTextoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DirectivesModule
  ],
  exports: [
    GatitoTextoComponent
  ]
})
export class GatitoTextoModule { }
