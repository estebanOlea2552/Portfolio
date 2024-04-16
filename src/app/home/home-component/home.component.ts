import { Component } from '@angular/core';
import { bottomBar, gatito, menuLg, topBar } from 'src/app/shared/animations/home.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [gatito, menuLg, topBar, bottomBar],
})
export class HomeComponent {

  constructor(){}

}
