import { Component } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  counter: number = 0;
  
  next() {
    if(this.counter >= 3) {
      this.counter = 0;
    } else {
      this.counter++;
    }
  }
  previous() {
    if(this.counter <= 0) {
      this.counter = 3;
    } else {
      this.counter--;
    }
  }
}