import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { GatitoTextoPrincipalComponent } from '../gatito-texto-principal/gatito-texto-principal.component';
import { GatitoTextoSecundarioComponent } from '../gatito-texto-secundario/gatito-texto-secundario.component';



@NgModule({
  declarations: [
    MenuPrincipalComponent,
    MenuLateralComponent,
    GatitoTextoPrincipalComponent,
    GatitoTextoSecundarioComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ],
  exports: [
    MenuPrincipalComponent,
    MenuLateralComponent,
    GatitoTextoPrincipalComponent,
    GatitoTextoSecundarioComponent
  ]
})
export class MenuModule { }