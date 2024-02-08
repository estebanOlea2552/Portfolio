import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css']
})
export class CursorComponent {
  isTouch: boolean = this.isTouchDevice();
  top: any;
  left: any;
  clicked: boolean = false;
  hover: boolean = false;
  hidden: boolean = true;

  isTouchDevice() {
    return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove($event: MouseEvent) {
    this.top = ($event.pageY -4) + "px";
    this.left = ($event.pageX - 8) + "px";
  };

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

  @HostListener('document:mouseover', ['$event'])
  onMouseOver($event: MouseEvent){

  }
}
