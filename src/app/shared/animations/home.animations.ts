import { animate, style, transition, trigger } from "@angular/animations";

export const gatitoLg = trigger('enterGatito' , [
    transition(':enter', [
      style({
        transform: 'translateX(200%)'
       }),
      animate('700ms 0.3s ease-in')
    ]),      
])

export const menuLg = trigger('enterMenu' , [
    transition(':enter', [
      style({
        transform: 'translateX(-200%)'
       }),
      animate('700ms 0.3s ease-in')
    ]),      
])

export const topBar = trigger('enterTopBar', [
    transition(':enter', [
      style({
        transform: 'translateY(-200%)'
      }),
      animate('1s ease-in')
    ])
])

export const bottomBar = trigger('enterBottomBar', [
    transition(':enter', [
      style({       
        transform: 'translateY(200%)'
      }),
      animate('1s ease-in')
    ])
])