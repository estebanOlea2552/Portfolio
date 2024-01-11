import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { bottomBar, topBar } from 'src/app/shared/animations/home.animations';
import { gatitoSm, menuSm, section } from 'src/app/shared/animations/section.animation';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  animations: [section, menuSm, gatitoSm, topBar, bottomBar,
    trigger('miTrigger', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: '0px',
            left: '0px',
            height: '100%',
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({ transform: 'scale(0%)', height: '100%', width: '100%' })
        ], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
          query(':leave', [
            animate('0.3s ease-in-out', style({ transform: 'scale(0%)', height: '100%', width: '100%' }))
          ], { optional: true }),
          query(':enter', [
            animate('0.3s ease-in-out', style({ transform: 'scale(100%)', height: '100%', width: '100%' }))
          ], { optional: true }),
        ]),
      ])
    ]),   
  ],
})
export class SectionComponent {
  constructor(private context: ChildrenOutletContexts){}

  getRouteAnimationData(){
    console.log(this.context.getContext('primary')?.route?.snapshot?.data?.['animation'])
    return this.context.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
