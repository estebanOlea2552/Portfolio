import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { CatMessageService } from '../../services/cat-message.service';

@Component({
  selector: 'app-gatito-texto',
  templateUrl: './gatito-texto.component.html',
  styleUrls: ['./gatito-texto.component.css'],
})
export class GatitoTextoComponent implements OnInit, OnDestroy {
  gatitoSwitch: boolean = false;

  catStopped: string = "../assets/images/gatito.png";
  catAnimated: string = "../assets/images/gatito.gif";
  catSrc: string = this.catStopped;

  urlObservable$ = new Subject<String>();
  urlSuscription!: Subscription;

  message: String = "";
  newMessage: string = "";

  constructor(private router: Router, private messagesService: CatMessageService) { }

  ngOnInit(): void {
    this.urlSuscription = this.urlObservable$.subscribe(
      (value) => {
        this.messagesService.assignPath(value)
      }
    )

    if (this.router.url !== '/home') {
      this.newMessage = "";
      this.getAndAssign();
      this.message = this.messagesService.returnMessage();
      setTimeout(() => this.addCharacter(), 1300)
    } else {
      this.message = "Hola! Soy Puflito, el Gatito espacial. Yo seré tu guía a lo largo de esta web :)"
      setTimeout(() => this.addCharacter(), 1300)
      ;
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.newMessage = "";
        this.getAndAssign();
        this.message = this.messagesService.returnMessage();
        this.addCharacter();
      }
    })
  }

  ngOnDestroy(): void {
    this.urlSuscription.unsubscribe();
  }

  addCharacter() {
    let splittedMessage: string[] = this.message.split("");
    let index = 0;
  
    this.animateCat();
    let intervalId = setInterval(() => {
      if (index < splittedMessage.length) {
        this.newMessage += splittedMessage[index];
        index++;
      } else {
        clearInterval(intervalId);
        this.animateCat();
      }
    }, 70);
  }

  getAndAssign() {
    this.urlObservable$.next(this.router.url);
  }

  animateCat() {
    this.gatitoSwitch = !this.gatitoSwitch;
    if (this.gatitoSwitch) {
      this.catSrc = this.catAnimated;
    } else {
      this.catSrc = this.catStopped;
    };
  }
}
