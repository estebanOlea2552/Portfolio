import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { CatMessageService } from '../../services/cat-message.service';

@Component({
  selector: 'app-gatito-texto',
  templateUrl: './gatito-texto.component.html',
  styleUrls: ['./gatito-texto.component.css']
})
export class GatitoTextoComponent implements OnInit, DoCheck, OnDestroy {
  gatitoSwitch: boolean = false;
  gatitoQuieto: String = "../../../../assets/images/gatito_v3.png";
  gatitoAnimado: String = "../../../../assets/images/gatito_v3.gif";
  gatitoSrc: String = this.gatitoQuieto;
  urlObservable$ = new Subject<String>();
  urlSuscription!: Subscription;
  message!: String;

  constructor(private router: Router, private messagesService: CatMessageService){}

  ngOnInit(): void {
    this.urlSuscription = this.urlObservable$.subscribe(
      (value) => {
        this.messagesService.assignToPath(value)
      }
    )
  }

  ngDoCheck(): void {
    this.getAndAssign()
    this.message = this.messagesService.comparePath()
    
  }

  ngOnDestroy(): void {
    this.urlSuscription.unsubscribe()
  }

  getAndAssign(){
    this.urlObservable$.next(this.getUrl());
  }

  getUrl(){
    return this.router.url;
  }

  animarGatito(){
    this.gatitoSwitch = !this.gatitoSwitch;
    if (this.gatitoSwitch){
      this.gatitoSrc = this.gatitoAnimado;
    } else{
      this.gatitoSrc = this.gatitoQuieto;
    };
  }
}
