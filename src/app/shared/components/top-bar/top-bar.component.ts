import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { topBarHome } from '../../animations/home.animations';
import { topBarSection } from '../../animations/section.animations';
import { Subscription } from 'rxjs';
import { MusicAndSfxService } from '../../services/music-and-sfx.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  standalone: true,
  imports: [CommonModule],
  animations: [topBarHome, topBarSection]
})
export class TopBarComponent implements OnInit, OnDestroy {
  musicIsActivated!: boolean;
  sfxIsActivated!: boolean;
  musicSuscription!: Subscription;
  sfxSuscription!: Subscription;
  currentSongSuscription!: Subscription;
  songName: string = "";

  constructor(private musicAndSfx: MusicAndSfxService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.musicSuscription = this.musicAndSfx.musicSubject$.subscribe(
      value => this.musicIsActivated = value
    );
    this.sfxSuscription = this.musicAndSfx.sfxSubject$.subscribe(
      value => this.sfxIsActivated = value
    );
    this.currentSongSuscription = this.musicAndSfx.currentSongSubject$.subscribe(
      (value) => {
        this.songName = this.extractSongName(value);
        this.cdr.detectChanges();
      }
    );
  }

  ngOnDestroy(): void {
    this.musicSuscription.unsubscribe();
    this.sfxSuscription.unsubscribe();
    this.currentSongSuscription.unsubscribe();
  }

  turnOnOffMusic() {
    if (this.musicIsActivated) {
      this.musicIsActivated = false;
    } else {
      this.musicIsActivated = true;
    }
    this.musicAndSfx.sendMusicValue(this.musicIsActivated);
  }

  turnOnOffSfx() {
    if (this.sfxIsActivated) {
      this.sfxIsActivated = false;
    } else {
      this.sfxIsActivated = true;
    }
    this.musicAndSfx.sendSfxValue(this.sfxIsActivated);
  }

  extractSongName(currentSong: string): string {
    const match = currentSong.match(/\/([^/]+)\.mp3$/);
    return match ? match[1] : '';
  }
}
