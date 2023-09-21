import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home-component/home/home.component';

import { HomeRoutingModule } from './home-routing.module';
import { MenuModule } from '../shared/molecules/menu/menu.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MenuModule
  ]
})
export class HomeModule { }
