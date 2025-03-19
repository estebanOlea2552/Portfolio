import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  bottomBar,
  gatito,
  menuLg,
  topBarHome,
} from 'src/app/shared/animations/home.animations';
import { GatitoTextoComponent } from 'src/app/shared/components/cat/gatito-texto.component';
import { MenuPrincipalComponent } from 'src/app/shared/components/full-menu/menu-principal.component';
import { TopBarComponent } from 'src/app/shared/components/top-bar/top-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    TopBarComponent,
    MenuPrincipalComponent,
    GatitoTextoComponent,
  ],
  animations: [gatito, menuLg, topBarHome, bottomBar],
})
export class HomeComponent {}
