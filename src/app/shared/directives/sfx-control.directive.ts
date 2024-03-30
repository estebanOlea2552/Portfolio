import { Directive, HostListener, ViewChild } from '@angular/core';
import { MusicAndSfxService } from '../music-and-sfx.service';

@Directive({
  selector: '[sfx-control]'
})
export class SfxControlDirective {
  sound: HTMLAudioElement;
  sfxActivated!: boolean;
  @ViewChild('audio') audio!: HTMLAudioElement;

  constructor(private sfx: MusicAndSfxService) {
    this.sound = new Audio('../../assets/sounds/blip_5.wav');
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.sfx.sfxActivated === true){
      this.sound.play();
    }
  }
}
