import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { SectionComponent } from './section-component/section.component';
import { MenuModule } from '../shared/components/menu/menu.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GatitoTextoModule } from '../shared/components/gatito-texto/gatito-texto.module';

@NgModule({
  declarations: [
    SectionComponent
  ],
  imports: [
    CommonModule,
    SectionRoutingModule,
    MenuModule,
    GatitoTextoModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class SectionModule { }
