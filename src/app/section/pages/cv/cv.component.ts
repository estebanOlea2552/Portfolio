import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  animations: []
})
export class CvComponent {
  scrollTop: number = 0;

  @HostListener('scroll', ['$event'])
  onScroll(event: Event): void {
    const target = event.target as HTMLElement;
      this.scrollTop = target.scrollTop;
  }
}
