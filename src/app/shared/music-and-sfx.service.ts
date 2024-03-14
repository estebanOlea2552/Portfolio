import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicAndSfxService {
  musicSubject$ = new Subject<boolean>();
  sfxSubject$ = new Subject<boolean>();

  sendValue(music: boolean, sfx: boolean) {
    this.musicSubject$.next(music);
    this.sfxSubject$.next(sfx);
  };
}
