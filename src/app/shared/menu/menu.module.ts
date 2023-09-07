import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuPrincipalComponent } from './menu-principal-component/menu-principal.component';
import { MenuLateralComponent } from './menu-lateral-component/menu-lateral.component';


@NgModule({
  declarations: [
    MenuPrincipalComponent,
    MenuLateralComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ],
  exports: [
    MenuPrincipalComponent,
    MenuLateralComponent
  ]
})
export class MenuModule { }
