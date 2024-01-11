import { animate, style, transition, trigger } from "@angular/animations";

export const menuSm = trigger('enterMenu' , [
    transition(':enter', [
      style({ 
        transform: 'translateX(-200%)'
       }),
      animate('1000ms ease-in')
    ]),      
])

export const gatitoSm = trigger('enterGatito' , [
    transition(':enter', [
      style({ 
        transform: 'translateX(200%)'
       }),
      animate('1000ms ease-in')
    ]),      
])

export const section = trigger('enterSection' , [
    transition(':enter', [
      style({ 
        transform: 'scaleY(0%)'
       }),
      animate('800ms 0.2s ease-in')
    ]),      
])

