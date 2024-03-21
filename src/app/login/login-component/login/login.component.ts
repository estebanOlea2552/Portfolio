import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fadeIn, iniciar, opciones, subtitle, title } from 'src/app/shared/animations/login.animations';
import { MusicAndSfxService } from 'src/assets/sounds/music-and-sfx.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [title, subtitle, iniciar, opciones, fadeIn]
})
export class LoginComponent {
  disabled: boolean = false;
  music: boolean = true;
  sfx: boolean = true;
  musicOnOffText: string = "OFF";
  sfxOnOffText: string = "OFF";

  constructor(private musicS: MusicAndSfxService, private router: Router){}

  confirmSettings() {
    this.openCloseOptions();
  }

  turnOnOffMusic() {
    if (this.musicOnOffText === "OFF"){
      this.musicOnOffText = "ON"
    } else {
      this.musicOnOffText = "OFF"
    };
    this.musicS.sendMusicValue(this.music);
    this.music = !this.music;
  }
  
  turnOnOffSfx() {
    if(this.sfxOnOffText == "OFF"){
      this.sfxOnOffText = "ON"
    }else{
      this.sfxOnOffText = "OFF"
    };
    this.musicS.sendSfxValue(this.sfx)
    this.sfx = !this.sfx;
  }
  
  openCloseOptions(){
    this.disabled = !this.disabled;
  }

  navigateToNewRoute(route: any){
    this.router.navigate([route]);
  }
}
