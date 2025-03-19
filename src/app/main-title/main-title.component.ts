import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  fadeIn,
  iniciar,
  opciones,
  subtitle,
  title,
} from 'src/app/shared/animations/main-title.animations';
import { MusicAndSfxService } from 'src/app/shared/services/music-and-sfx.service';

@Component({
  selector: 'app-main-title',
  templateUrl: './main-title.component.html',
  styleUrls: ['./main-title.component.css'],
  standalone: true,
  imports: [CommonModule],
  animations: [title, subtitle, iniciar, opciones, fadeIn],
})
export class MainTitleComponent implements OnInit, OnDestroy {
  enterLeaveAnimations = false;

  hideElement: boolean = false;
  music: boolean = false;
  sfx: boolean = false;
  musicSuscription!: Subscription;
  sfxSuscription!: Subscription;
  musicOnOffText: string = 'OFF';
  sfxOnOffText: string = 'OFF';
  startButtonAudio: HTMLAudioElement = new Audio(
    '../../../assets/sounds/start_1.mp3'
  );

  constructor(
    private musicAndSfx: MusicAndSfxService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.musicSuscription = this.musicAndSfx.musicSubject$.subscribe(
      (value) => (this.music = value)
    );
    this.sfxSuscription = this.musicAndSfx.sfxSubject$.subscribe(
      (value) => (this.sfx = value)
    );

    this.enterLeaveAnimations = true;

    if (this.music) {
      this.musicOnOffText = 'ON';
    } else {
      this.musicOnOffText = 'OFF';
    }

    if (this.sfx) {
      this.sfxOnOffText = 'ON';
    } else {
      this.sfxOnOffText = 'OFF';
    }
  }

  ngOnDestroy(): void {
    this.musicSuscription.unsubscribe();
    this.sfxSuscription.unsubscribe();
  }

  toggleForLeaveAnim() {
    this.enterLeaveAnimations = !this.enterLeaveAnimations;
  }

  turnOnOffMusic() {
    if (!this.music) {
      this.musicOnOffText = 'ON';
    } else {
      this.musicOnOffText = 'OFF';
    }
    this.music = !this.music;
    this.musicAndSfx.sendMusicValue(this.music);
  }

  turnOnOffSfx() {
    if (!this.sfx) {
      this.sfxOnOffText = 'ON';
    } else {
      this.sfxOnOffText = 'OFF';
    }
    this.sfx = !this.sfx;
    this.musicAndSfx.sendSfxValue(this.sfx);
  }

  confirmSettings() {
    this.openCloseOptions();
  }

  openCloseOptions() {
    this.hideElement = !this.hideElement;
  }

  navigateToNewRoute(route: any) {
    if (this.sfx) {
      this.startButtonAudio.play();
    }
    this.toggleForLeaveAnim();
    setTimeout(() => {
      this.router.navigate([route]);
    }, 1000);
  }
}
