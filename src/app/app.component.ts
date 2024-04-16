import { Component, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { MusicAndSfxService } from './shared/services/music-and-sfx.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'Esteban Olea - Portfolio';
  @ViewChild('audio') audio: ElementRef | undefined;
  musicSuscription!: Subscription;

  constructor(private musicAndSfx: MusicAndSfxService) {}

  ngAfterViewChecked(): void {
    this.playPauseMusic();
  }

  playPauseMusic(): void {
    this.musicSuscription = this.musicAndSfx.musicSubject$.subscribe(
      (value) => {
        if (value === true){
          this.audio?.nativeElement.play();
        } else {
          this.audio?.nativeElement.pause();
        };
      }
    );
  }
}