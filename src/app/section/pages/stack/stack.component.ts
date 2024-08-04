import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css'],
})
export class StackComponent {
  currentIndex: number = 0;
  scrolling: boolean = false;
  totalCards: number = 2;

  @HostListener('window:wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (this.scrolling) return;
    this.scrolling = true;

    if (event.deltaY > 0) {
      this.nextCard();
    } else {
      this.prevCard();
    }

    setTimeout(() => {
      this.scrolling = false;
    }, 500);
  }

  nextCard() {
    if (this.currentIndex < this.totalCards - 1) {
      this.currentIndex++;
    }
  }

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  getTransform() {
    return `translateY(-${this.currentIndex * 100}%)`;
  }
}
