import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './cv.component';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';

@NgModule({
  declarations: [
    CvComponent    
  ],
  imports: [
    CommonModule,
    CvRoutingModule,
    DirectivesModule
  ],
  exports: [
    CvComponent      
  ]
})
export class CvModule { }
