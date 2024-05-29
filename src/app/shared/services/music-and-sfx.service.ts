import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicAndSfxService {
  musicSubject$ = new BehaviorSubject<boolean>(false);
  sfxSubject$ = new BehaviorSubject<boolean>(false);
  sfxSuscription!: Subscription;
  sfxActivated!: boolean;
  currentSongSubject$ = new Subject<string>();

  constructor() {
    this.sfxSuscription = this.sfxSubject$.subscribe(
      value => this.sfxActivated = value
    )
  }

  sendMusicValue(value: boolean) {
    this.musicSubject$.next(value);
  };
  
  sendSfxValue(value: boolean) {
    this.sfxSubject$.next(value);
  };

  sendCurrentSong(value: string) {
    this.currentSongSubject$.next(value);
  }
}