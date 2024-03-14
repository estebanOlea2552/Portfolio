import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { bottomBar, gatito, menuLg, topBar } from 'src/app/shared/animations/home.animations';
import { MessageByRouterService } from 'src/app/shared/message-by-router.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [gatito, menuLg, topBar, bottomBar],
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private urlObservable: MessageByRouterService){}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.urlObservable.addMessage(event.url)
      }
    });
  }
}
