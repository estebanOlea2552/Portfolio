import { Component } from '@angular/core';
import {
  bottomBar,
  gatito,
  menuLg,
  topBarHome,
} from 'src/app/shared/animations/home.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [gatito, menuLg, topBarHome, bottomBar],
})
export class HomeComponent {}
