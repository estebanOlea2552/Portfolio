import { animate, style, transition, trigger } from "@angular/animations";

export const gatito = trigger('enterGatito' , [
  transition(':enter', [
    style({
      transform: 'translateX(220%)'
    }),
    animate('700ms 0.3s ease-in')
  ]),
])

export const menuSm = trigger('enterMenu' , [
  transition(':enter', [
    style({ 
      transform: 'translateX(-200%)'
    }),
    animate('700ms 0.3s ease-in')
  ]),      
])

export const section = trigger('enterSection' , [
  transition(':enter', [
    style({ 
      transform: 'scaleY(0%)'
    }),
    animate('600ms 0.4s ease-in')
  ]),      
])

export const topBarSection = trigger('enterTopBar', [
  transition(':enter', [
    style({
      transform: 'translateY(-220%)'
    }),
    animate('1100ms ease-in')
  ])
])

export const bottomBar = trigger('enterBottomBar', [
  transition(':enter', [
    style({       
      transform: 'translateY(220%)'
    }),
    animate('900ms 0.1s ease-in')
  ])
])