import { Directive, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MusicAndSfxService } from '../services/music-and-sfx.service';

@Directive({
  selector: '[sfx-control]',
  standalone: true
})
export class SfxControlDirective {
  hoverSfx: HTMLAudioElement;
  @ViewChild('hoverSfx') hoverSfxaudio!: HTMLAudioElement;

  clickSfx: HTMLAudioElement;
  @ViewChild('hoverSfx') clickSfxaudio!: HTMLAudioElement;

  constructor(private sfx: MusicAndSfxService, private el: ElementRef) {
    this.hoverSfx = new Audio('../assets/sounds/blip_3.mp3');
    this.clickSfx = new Audio('../assets/sounds/click_3.mp3');
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.sfx.sfxActivated ){
      this.hoverSfx.play();
    }
  }
  @HostListener('click') onclick() {
    if (this.sfx.sfxActivated && this.el.nativeElement.id !== 'start'){
      this.clickSfx.play();
    }
  }
}
