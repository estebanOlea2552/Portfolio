import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ChildrenOutletContexts, Router, NavigationEnd } from '@angular/router';
import { gatito, menuSm, section, bottomBar, topBar } from 'src/app/shared/animations/section.animation';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  animations: [section, menuSm, gatito, topBar, bottomBar,
    trigger('miTrigger', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter', [
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
          query(':enter', [
            animate('0.3s ease-in-out', style({ transform: 'scale(100%)', height: '100%', width: '100%' }))
          ], { optional: true }),
        ]),
    ])
  ]
})
export class SectionComponent {
  routeValue: any;

  constructor(private context: ChildrenOutletContexts, private router: Router){}

  ngOnInit(): void {
    
  }

  getRouteAnimationData(){
    return this.context.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
