import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class EducationComponent {
  counter: number = 0;

  next() {
    if (this.counter >= 3) {
      this.counter = 0;
    } else {
      this.counter++;
    }
  }
  previous() {
    if (this.counter <= 0) {
      this.counter = 3;
    } else {
      this.counter--;
    }
  }
}
