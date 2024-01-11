import { Component } from '@angular/core';
import { ChildrenOutletContexts, Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {
  
  constructor(private router: Router, private context: ChildrenOutletContexts){}
  
  navigateToNewRoute(route: String){
    this.router.navigate([route])
  }
}
