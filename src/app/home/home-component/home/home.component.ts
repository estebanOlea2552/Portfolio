import { Component } from '@angular/core';
import { bottomBar, gatitoLg, menuLg, topBar } from 'src/app/shared/animations/home.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [gatitoLg, menuLg, topBar, bottomBar],
})
export class HomeComponent {

}
