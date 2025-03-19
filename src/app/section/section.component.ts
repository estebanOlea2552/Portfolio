import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, RouterOutlet } from '@angular/router';
import {
  gatito,
  menuSm,
  section,
  bottomBar,
} from 'src/app/shared/animations/section.animations';
import { articles } from 'src/app/shared/animations/articles.animations';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from 'src/app/shared/components/top-bar/top-bar.component';
import { MenuLateralComponent } from 'src/app/shared/components/side-menu/menu-lateral.component';
import { GatitoTextoComponent } from 'src/app/shared/components/cat/gatito-texto.component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    TopBarComponent,
    MenuLateralComponent,
    GatitoTextoComponent,
  ],
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
