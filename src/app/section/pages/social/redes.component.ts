import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class RedesComponent {
  mailPart1: string = 'estebanolea2306';
  mailPart2: string = '@gmail.com';
}
