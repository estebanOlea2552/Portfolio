import { Component } from '@angular/core';
import { ChildrenOutletContexts, Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css'],
})
export class MenuPrincipalComponent {
  constructor(
    private router: Router,
    private context: ChildrenOutletContexts
  ) {}

  navigateToNewRoute(route: String) {
    this.router.navigate([route]);
  }

  getRouteAnimationData() {
    console.log(
      this.context.getContext('primary')?.route?.snapshot?.data?.['animation']
    );
  }
}
