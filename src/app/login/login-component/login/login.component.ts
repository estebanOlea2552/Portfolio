import { Component } from '@angular/core';
import { fadeIn, iniciar, opciones, subtitle, title } from 'src/app/shared/animations/login.animations';
import { MusicAndSfxService } from 'src/app/shared/music-and-sfx.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [title, subtitle, iniciar, opciones, fadeIn]
})
export class LoginComponent {
  disabled: boolean = false;
  music: boolean = false;
  sfx: boolean = false;
  musicOnOffText: string = "OFF";
  sfxOnOffText: string = "OFF";

  constructor(private musicAndSfxService: MusicAndSfxService){}

  confirmSettings() {
    this.musicAndSfxService.sendValue(this.music, this.sfx);
    this.openCloseOptions();
  }

  turnOnOffMusic(){
    if(this.musicOnOffText == "OFF"){
      this.musicOnOffText = "ON"
    }else{
      this.musicOnOffText = "OFF"
    };
    this.music = !this.music;
  }
  
  turnOnOffSfx(){
    if(this.sfxOnOffText == "OFF"){
      this.sfxOnOffText = "ON"
    }else{
      this.sfxOnOffText = "OFF"
    };
    this.sfx = !this.sfx;
  }
  
  openCloseOptions(){
    this.disabled = !this.disabled;
  }
}
