import { Component, input, Input } from '@angular/core';
import { Image } from './dashboard-item.model';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {
  // @Input({ required: true }) image!: Image;
  // @Input({ required: true }) title!: string;
  image = input.required<Image>();
  title = input.required<string>();
}
