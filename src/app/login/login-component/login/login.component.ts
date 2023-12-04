import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  opciones: boolean = false;
  music: boolean = true;

  constructor(){
  };
  
  opcionesHandle(){
    this.opciones = !this.opciones;
  };
}
