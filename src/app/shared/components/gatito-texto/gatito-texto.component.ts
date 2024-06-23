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
  catStopped: string = "../assets/images/gatito.png";
  catAnimated: string = "../assets/images/gatito.gif";
  isAnimating: boolean = false;
  intervalId: any = null;
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
      setTimeout(() => this.addCharacter(), 1300);
    } else {
      this.message = "Hola! Soy Puflito, el Gatito Espacial. Te doy la bienvenida a este Portfolio Web! :)"
      setTimeout(() => this.addCharacter(), 1300);
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

  addCharacter(): void {
    if (this.message) { // Procede solo si hay un mensaje
      if (this.isAnimating && this.intervalId) { // Si hay una animación en curso, cancela el intervalo
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      this.animateCat(true);
      this.isAnimating = true; // Marca que la animación está en curso
      this.newMessage = ''; // Vacía newMessage antes de empezar
      let splittedMessage: string[] = this.message.split("");
      let index = 0;
      
      this.intervalId = setInterval(() => {
        if (index < splittedMessage.length) {
          this.newMessage += splittedMessage[index];
          index++;
        } else {
          this.animateCat(false);
          clearInterval(this.intervalId);
          this.intervalId = null;
          this.isAnimating = false; // Marca que la animación ha terminado
        }
      }, 60);
    }
  }

  getAndAssign(): void {
    this.urlObservable$.next(this.router.url);
  }

  animateCat(start: boolean): void {
    if (start) {
      this.catSrc = this.catAnimated;
    } else {
      this.catSrc = this.catStopped;
    };
  }
}
