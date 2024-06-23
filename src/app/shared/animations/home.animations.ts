import { animate, style, transition, trigger } from "@angular/animations";

export const gatito = trigger('enterGatito' , [
  transition(':enter', [
    style({
      transform: 'translateX(250%)'
    }),
    animate('700ms 0.3s ease-in')
  ]),      
])

export const menuLg = trigger('enterMenu' , [
  transition(':enter', [
    style({
      transform: 'translateX(-220%)'
    }),
    animate('700ms 0.3s ease-in')
  ]),      
])

export const topBarHome = trigger('enterTopBar', [
  transition(':enter', [
    style({
      transform: 'translateY(-220%)'
    }),
    animate('1000ms ease-in')
  ])
])

export const bottomBar = trigger('enterBottomBar', [
  transition(':enter', [
    style({       
      transform: 'translateY(220%)'
    }),
    animate('1s ease-in')
  ])
])