import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageByRouterService } from '../../message-by-router.service';

@Component({
  selector: 'app-gatito-texto',
  templateUrl: './gatito-texto.component.html',
  styleUrls: ['./gatito-texto.component.css']
})
export class GatitoTextoComponent implements OnInit {
  gatitoSwitch: boolean = false;
  gatitoQuieto: String = "../../../../assets/images/gatito_quieto.png";
  gatitoAnimado: String = "../../../../assets/images/gatito_animado.gif";
  gatitoSrc: String = this.gatitoQuieto;
  urlPath: String | undefined;

  constructor(private router: Router, private urlObservable: MessageByRouterService){}

  ngOnInit(): void {
    this.urlObservable.message$.subscribe(
      value => this.urlPath = value
    );
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
