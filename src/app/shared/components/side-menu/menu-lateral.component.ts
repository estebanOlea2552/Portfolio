import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class MenuLateralComponent {
  constructor(private router: Router) {}

  navigateToNewRoute(route: String) {
    this.router.navigate([route]);
  }
}
