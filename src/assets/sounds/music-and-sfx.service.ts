import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicAndSfxService {
  musicSubject$ = new Subject<boolean>();
  sfxSubject$ = new Subject<boolean>();

  sendMusicValue(value: boolean) {
    this.musicSubject$.next(value);
  };
  
  sendSfxValue(value: boolean) {
    this.sfxSubject$.next(value);
  };
}
