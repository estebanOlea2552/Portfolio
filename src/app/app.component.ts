import { Component, ViewChild, ElementRef } from '@angular/core';
import { MusicAndSfxService } from './shared/music-and-sfx.service';
import { MessageByRouterService } from './shared/message-by-router.service';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Esteban Olea - Portfolio';
  musicOnOf: boolean = false;
  sfxOnOf: boolean = false;
  @ViewChild('audio') audio: ElementRef | undefined;

  constructor(private musicAndSfxService: MusicAndSfxService,private urlObservable: MessageByRouterService, private router: Router) {}

  ngOnInit(): void {
    this.musicAndSfxService.musicSubject$.subscribe(value => {
      this.musicOnOf = value;

      if (this.musicOnOf == true){
        this.audio?.nativeElement.play();
      } else{
        this.audio?.nativeElement.pause();
      };
    });  

      this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.urlObservable.addMessage(event.url)
      }
      });
  }
}
