import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialRoutingModule } from './social-routing.module';
import { RedesComponent } from './redes.component';

@NgModule({
  declarations: [
    RedesComponent
  ],
  imports: [
    CommonModule,
    SocialRoutingModule
  ],
  exports: [
    RedesComponent
  ]
})
export class SocialModule { }
