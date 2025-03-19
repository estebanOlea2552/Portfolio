import { Component, ViewChild, ElementRef, AfterViewChecked, OnDestroy } from '@angular/core';
import { MusicAndSfxService } from './shared/services/music-and-sfx.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewChecked, OnDestroy {
  title = 'Esteban Olea - Portfolio';
  @ViewChild('audio') audio: ElementRef | undefined;
  musicSuscription!: Subscription;
  songIndex: number = 0;
  songsList: string[] = [
    "../assets/sounds/Cody O'Quinn - Gamer Instincts.mp3",
    "../assets/sounds/Cody O'Quinn - Cherry Cola.mp3",
    "../assets/sounds/Cody O'Quinn - Sunny Dreams.mp3",
    "../assets/sounds/Cody O'Quinn - Berrylife City.mp3"
  ]
  currentSong: string = this.songsList[0];

  constructor(private musicAndSfx: MusicAndSfxService) {}


  ngAfterViewChecked(): void {
    this.playPauseMusic();
    this.musicAndSfx.sendCurrentSong(this.currentSong);
  }

  ngOnDestroy(): void {
    this.musicSuscription.unsubscribe();
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

  nextSong(): void{
    this.songIndex = (this.songIndex + 1) % this.songsList.length;
    this.currentSong = this.songsList[this.songIndex];
    this.audio?.nativeElement.load();
    this.audio?.nativeElement.play();
    this.musicAndSfx.sendCurrentSong(this.currentSong);
  }
}