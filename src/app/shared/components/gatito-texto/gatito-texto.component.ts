import { Component } from '@angular/core';

@Component({
  selector: 'app-gatito-texto',
  templateUrl: './gatito-texto.component.html',
  styleUrls: ['./gatito-texto.component.css']
})
export class GatitoTextoComponent {
  gatitoSwitch: boolean = false;
  gatitoQuieto: String = "../../../../assets/images/gatito_quieto.png";
  gatitoAnimado: String = "../../../../assets/images/gatito_animado.gif";
  gatitoSrc: String = this.gatitoQuieto;

  animarGatito(){
    this.gatitoSwitch = !this.gatitoSwitch;
    if(this.gatitoSwitch){
      this.gatitoSrc = this.gatitoAnimado;
    }
    else{
      this.gatitoSrc = this.gatitoQuieto;
    }
  }
}
