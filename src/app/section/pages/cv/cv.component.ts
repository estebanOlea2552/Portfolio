import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  animations: []
})
export class CvComponent {

  constructor() {}

  onMouseEnter(button: HTMLElement) {
    button.classList.toggle('button-container-hover');
  }
  onMouseLeave(button: HTMLElement) {
    button.classList.toggle('button-container-hover');
  }

  openFile(event: MouseEvent, button: HTMLElement) {
    const url = button.getAttribute('href');

    event.preventDefault();
    button.classList.toggle('button-container-click');
    setTimeout(() =>
      button.classList.toggle('button-container-click'), 100
    );

    if (url) {
      setTimeout(() => {
        window.open(url, '_blank');
      }, 300);
    }
  }

  downloadFile(event: MouseEvent, button: HTMLElement) {
    const url = button.getAttribute('href');
    const downloadLink = document.createElement('a');
    
    event.preventDefault();
    button.classList.toggle('button-container-click');
    setTimeout(() => 
      button.classList.toggle('button-container-click'), 100
    );

    downloadLink.href = url || '';
    downloadLink.download = button.getAttribute('download') || '';
    document.body.appendChild(downloadLink);
    setTimeout(() => {
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }, 300);
  }
}
