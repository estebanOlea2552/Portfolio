import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicAndSfxService {
  private sendMusicValueSubject = new Subject<boolean>();
  private sendSfxValueSubject = new Subject<boolean>();
  musicObservable$ = this.sendMusicValueSubject.asObservable();
  sfxObservable$ = this.sendSfxValueSubject.asObservable()

  sendMusicValue(value: boolean) {
    this.sendMusicValueSubject.next(value);
  };
  sendSfxValue(value: boolean) {
    this.sendSfxValueSubject.next(value);
  };
}
