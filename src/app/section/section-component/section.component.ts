import { Component, OnInit, Optional } from '@angular/core';
import { animate, query, style, transition, trigger } from '@angular/animations';
import { ChildrenOutletContexts } from '@angular/router';
import { gatito, menuSm, section, bottomBar, topBar } from 'src/app/shared/animations/section.animation';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  animations: [section, menuSm, gatito, topBar, bottomBar,
    trigger('articles', [
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
  ]
})
export class SectionComponent implements OnInit {

  constructor(private context: ChildrenOutletContexts){}
  
  ngOnInit(): void {
    
  }

  getRouteAnimationData():string {
    return this.context.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}