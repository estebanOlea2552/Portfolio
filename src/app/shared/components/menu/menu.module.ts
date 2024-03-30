import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    MenuPrincipalComponent,
    MenuLateralComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    DirectivesModule
  ],
  exports: [
    MenuPrincipalComponent,
    MenuLateralComponent
  ]
})
export class MenuModule { }