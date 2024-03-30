import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfxControlDirective } from './sfx-control.directive';



@NgModule({
  declarations: [
    SfxControlDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SfxControlDirective
  ]
})
export class DirectivesModule { }
