import { Component } from '@angular/core';
import { fadeIn, iniciar, opciones, subtitle, title } from 'src/app/shared/animations/login.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [title, subtitle, iniciar, opciones, fadeIn]
})
export class LoginComponent {

}
