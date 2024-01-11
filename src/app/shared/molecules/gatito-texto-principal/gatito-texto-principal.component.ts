import { Component } from '@angular/core';

@Component({
  selector: 'app-gatito-texto-principal',
  templateUrl: './gatito-texto-principal.component.html',
  styleUrls: ['./gatito-texto-principal.component.css']
})
export class GatitoTextoPrincipalComponent {

  gatitoSwitch: boolean = false;
  gatitoQuieto: String = "../../../../assets/images/gatito_quieto.png";
  gatitoAnimado: String = "../../../../assets/images/gatito_animado.gif";
  gatitoSrc: String = this.gatitoQuieto;

  constructor (){    
  }

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
