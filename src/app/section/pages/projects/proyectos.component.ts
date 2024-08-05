import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  animations: []
})
export class ProyectosComponent {
  counter: number = 0;
  
  next() {
    if(this.counter >= 1) {
      this.counter = 0;
    } else {
      this.counter++;
    }
  }
  previous() {
    if(this.counter <= 0) {
      this.counter = 1;
    } else {
      this.counter--;
    }
  }
}
