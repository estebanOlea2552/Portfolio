import { animate, style, transition, trigger } from "@angular/animations";

export const menuSm = trigger('enterMenu' , [
    transition(':enter', [
      style({ 
        transform: 'translateX(-200%)'
       }),
      animate('800ms 0.3s ease-in')
    ]),      
])

export const gatito = trigger('enterGatito' , [
  transition(':enter', [
    style({
      transform: 'translateX(220%)'
     }),
    animate('800ms 0.3s ease-in')
  ]),      
])

export const section = trigger('enterSection' , [
    transition(':enter', [
      style({ 
        transform: 'scaleY(0%)'
       }),
      animate('600ms 0.5s ease-in')
    ]),      
])

export const topBar = trigger('enterTopBar', [
  transition(':enter', [
    style({
      transform: 'translateY(-200%)'
    }),
    animate('1100ms ease-in')
  ])
])

export const bottomBar = trigger('enterBottomBar', [
  transition(':enter', [
    style({       
      transform: 'translateY(200%)'
    }),
    animate('1100ms ease-in')
  ])
])

