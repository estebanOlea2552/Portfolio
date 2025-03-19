import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class SocialComponent {
  mailPart1: string = 'estebanolea2306';
  mailPart2: string = '@gmail.com';
}
