import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home-component/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MenuModule } from '../shared/components/menu/menu.module';
import { GatitoTextoModule } from '../shared/components/gatito-texto/gatito-texto.module';
import { TopBarComponent } from '../shared/components/top-bar/top-bar.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MenuModule,
    GatitoTextoModule,
    TopBarComponent,
  ],
})
export class HomeModule {}
