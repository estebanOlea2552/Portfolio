import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { fadeIn, iniciar, opciones, subtitle, title } from 'src/app/shared/animations/login.animations';
import { MusicAndSfxService } from 'src/app/shared/music-and-sfx.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [title, subtitle, iniciar, opciones, fadeIn]
})
export class LoginComponent implements OnInit {
  disabled: boolean = false;
  music!: boolean;
  sfx!: boolean;
  musicSuscription!: Subscription;
  sfxSuscription!: Subscription
  musicOnOffText!: string;
  sfxOnOffText!: string;

  constructor(private musicAndSfx: MusicAndSfxService, private router: Router){}

  ngOnInit(): void {
    this.music = this.musicAndSfx.musicSubject$.getValue();
    this.sfx = this.musicAndSfx.sfxSubject$.getValue();
    
    if(this.music) {
      this.musicOnOffText = 'ON';
    } else {
      this.musicOnOffText = 'OFF';
    };

    if(this.sfx) {
      this.sfxOnOffText = 'ON';
    } else {
      this.sfxOnOffText = 'OFF';
    };
  }
  
  turnOnOffMusic() {
    if(!this.music) {
      this.musicOnOffText = 'ON';
    } else {
      this.musicOnOffText = 'OFF';
    };

    this.music = !this.music;
    this.musicAndSfx.sendMusicValue(this.music);
  }
  
  turnOnOffSfx() {
    if(!this.sfx) {
      this.sfxOnOffText = 'ON';
    } else {
      this.sfxOnOffText = 'OFF';
    };

    this.sfx = !this.sfx;
    this.musicAndSfx.sendSfxValue(this.sfx);
  }

  confirmSettings() {
    this.openCloseOptions();
  }
  
  openCloseOptions() {
    this.disabled = !this.disabled;
  }

  navigateToNewRoute(route: any) {
    this.router.navigate([route]);
  }
}