import { Component } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css'],
})
export class StackComponent {
  counter: number = 0;
  
  next() {
    if(this.counter >= 2) {
      this.counter = 0;
    } else {
      this.counter++;
    }
  }
  previous() {
    if(this.counter <= 0) {
      this.counter = 2;
    } else {
      this.counter--;
    }
  }
}
