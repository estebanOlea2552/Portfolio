import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CursorComponent implements OnInit {
  isTouch: boolean = this.isTouchDevice();
  top: string = '10';
  left: string = '10';
  clicked: boolean = false;
  hover: boolean = false;
  hidden: boolean = true;

  ngOnInit(): void {
    this.setInitialPosition();
  }

  isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  setInitialPosition() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    // Ajustando la posición para la esquina inferior derecha
    this.top = windowHeight - 20 + 'px';
    this.left = windowWidth - 20 + 'px';
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove($event: MouseEvent) {
    this.top = $event.pageY - 4 + 'px';
    this.left = $event.pageX - 8 + 'px';
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown() {
    this.clicked = true;
  }
  @HostListener('document:mouseup', ['$event'])
  onMouseUp() {
    this.clicked = false;
  }

  @HostListener('document:mouseleave', ['$event'])
  onMouseLeave() {
    this.hidden = true;
  }

  @HostListener('document:mouseenter', ['$event'])
  onMouseEnter() {
    this.hidden = false;
  }
}
