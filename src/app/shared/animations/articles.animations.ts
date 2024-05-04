import { trigger, transition, style, query, animate } from '@angular/animations'

export const articles = trigger('articles', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      //estilos iniciales
      query(':enter', [
        style({
          position: 'absolute',
          top: '0px',
          left: '0px',
          height: '100%',
          width: '100%'
        })
      ], { optional: true }),
      //estilos de transición
      query(':enter', [
        style({
          transform: 'scale(0%)',
          height: '100%',
          width: '100%'
        })
      ], { optional: true }),
      //animación
      query(':enter', [
        animate('0.3s ease-in-out',
          style({
            transform: 'scale(100%)',
            height: '100%', width: '100%'
          })
        )
      ], { optional: true }),
    ]),
  ])