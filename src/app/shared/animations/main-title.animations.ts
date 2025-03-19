import { animate, style, transition, trigger } from "@angular/animations";

export const title = trigger ('titleEnter', [
    transition (':enter', [
      style({
        transform: 'translateY(-200%)',
        opacity : 0
      }),
      animate ('1s 0.5s ease-in-out', style({
        transform: 'translateY(0%)',
        opacity: 1,
      }))
    ]),
    transition (':leave', [
      style({
        transform: 'scale(1)',
        opacity: 1,
      }),
      animate ('1s ease-out', style({
        transform: 'scale(1.2)',
        opacity: 0
      }))
    ])
])

export const subtitle = trigger('subtitleEnter', [
    transition(':enter', [
      style({
        transform: 'translateY(200%)',
        opacity : 0
      }),
      animate ('0.5s 2s ease-in-out')
    ]),
    transition (':leave', [
      style({
        transform: 'scale(1)',
        opacity: 1,
      }),
      animate ('1s ease-out', style({
        transform: 'scale(1.2)',
        opacity: 0
      }))
    ])
])

export const iniciar = trigger('enterLeft', [
    transition(':enter', [
      style({
        transform: 'translateX(-100%)', opacity: 0
      }),
      animate ('0.5s 3s')        
    ]),
    transition(':leave', [
      style({
        opacity: 1
      }),
      animate('0.1s ease-out', style({
        opacity: 0
      }))
    ])
])

export const opciones = trigger('enterRight', [
    transition(':enter', [
      style({
        transform: 'translateX(100%)', opacity: 0
      }),
      animate ('0.5s 3s')        
    ]),
    transition(':leave', [
      style({
        opacity: 1
      }),
      animate('0.1s ease-out', style({
        opacity: 0
      }))
    ])
])

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({opacity: 0}),
    animate ('1s 3s')
  ]),
  transition(':leave', [
    style({
      opacity: 1
    }),
    animate('0.5s ease-out', style({
      opacity: 0
    }))
  ])
])