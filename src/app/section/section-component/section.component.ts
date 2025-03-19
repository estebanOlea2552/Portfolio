import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import {
  gatito,
  menuSm,
  section,
  bottomBar,
} from 'src/app/shared/animations/section.animations';
import { articles } from 'src/app/shared/animations/articles.animations';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  animations: [section, menuSm, gatito, bottomBar, articles],
})
export class SectionComponent {
  constructor(private context: ChildrenOutletContexts) {}

  getRouteAnimationData(): string {
    return this.context.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
