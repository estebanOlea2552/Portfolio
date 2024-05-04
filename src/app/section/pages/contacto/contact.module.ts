import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactoComponent } from './contacto.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactoComponent
  ]
})
export class ContactModule { }
