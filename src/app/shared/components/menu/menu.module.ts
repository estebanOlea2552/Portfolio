import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { GatitoTextoComponent } from '../gatito-texto/gatito-texto.component';

@NgModule({
  declarations: [
    MenuPrincipalComponent,
    MenuLateralComponent,
    GatitoTextoComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ],
  exports: [
    MenuPrincipalComponent,
    MenuLateralComponent,
    GatitoTextoComponent,
  ]
})
export class MenuModule { }