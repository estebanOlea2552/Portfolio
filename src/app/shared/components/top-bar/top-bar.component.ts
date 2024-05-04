import { AfterContentChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { topBarHome } from '../../animations/home.animations';
import { topBarSection } from '../../animations/section.animations';
import { Subscription } from 'rxjs';
import { MusicAndSfxService } from '../../services/music-and-sfx.service';

@Component({
  standalone: true,
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  imports: [  ],
  animations: [ topBarHome, topBarSection ]
})
export class TopBarComponent implements AfterContentChecked, OnDestroy {
  musicIsActivated!: boolean;
  sfxIsActivated!: boolean;
  musicSuscription!: Subscription;
  sfxSuscription!: Subscription;

  constructor(private musicAndSfx: MusicAndSfxService){}

  ngAfterContentChecked(): void {
    this.musicSuscription = this.musicAndSfx.musicSubject$.subscribe(
      value => this.musicIsActivated = value
    );
    this.sfxSuscription = this.musicAndSfx.sfxSubject$.subscribe(
      value => this.sfxIsActivated = value
    );
  }

  ngOnDestroy(): void {
    this.musicSuscription.unsubscribe();
    this.sfxSuscription.unsubscribe();
  }

  turnOnOffMusic(){
    if(this.musicIsActivated){
      this.musicIsActivated = false; 
    } else {
      this.musicIsActivated = true;
    }
    this.musicAndSfx.sendMusicValue(this.musicIsActivated);
  }

  turnOnOffSfx(){
    if(this.sfxIsActivated){
      this.sfxIsActivated = false;
    } else {
    this.sfxIsActivated = true;
    }
    this.musicAndSfx.sendSfxValue(this.sfxIsActivated);
  }
}
