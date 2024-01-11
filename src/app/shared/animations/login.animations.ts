import { animate, style, transition, trigger } from "@angular/animations";

export const title =  trigger ('titleEnter', [
    transition (':enter', [
      style({
        transform: 'translateY(-200%)', opacity : 0
      }),
      animate ('1s ease-in')
    ])
])

export const subtitle = trigger('subtitleEnter', [
    transition(':enter', [
      style({
        transform: 'translateY(200%)', opacity : 0
      }),
      animate ('0.5s 1.5s ease-in')
    ])
])

export const iniciar = trigger('enterLeft', [
    transition(':enter', [
      style({
        transform: 'translateX(-100%)', opacity: 0
      }),
      animate ('0.5s 2.5s')        
    ])
])

export const opciones = trigger('enterRight', [
    transition(':enter', [
      style({
        transform: 'translateX(100%)', opacity: 0
      }),
      animate ('0.5s 2.5s')        
    ])
])

export const fadeIn = trigger('fadeIn', [
    transition(':enter', [
      style({opacity: 0}),
      animate ('1s 2.5s')
    ])
  ])


