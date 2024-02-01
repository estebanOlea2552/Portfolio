import { Component, ViewChild, ElementRef } from '@angular/core';
import { MusicAndSfxService } from './shared/music-and-sfx.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Esteban Olea - Portfolio';
  musicOnOf: boolean = false;
  sfxOnOf: boolean = false;
  @ViewChild('audio', {static: true}) audio: ElementRef | undefined;

  constructor(private musicAndSfxService: MusicAndSfxService) {}

  ngOnInit() {
    this.musicAndSfxService.musicObservable$.subscribe(value => {
      this.musicOnOf = value;

      if(this.musicOnOf == true){
        this.audio?.nativeElement.play();
      }else{
        this.audio?.nativeElement.pause();
      };

      console.log('Valor de Música: ', this.musicOnOf);
    });
    this.musicAndSfxService.sfxObservable$.subscribe(value => {
      this.sfxOnOf = value
      console.log('Valor de Sfx: ', this.sfxOnOf);
    });
  }
}
