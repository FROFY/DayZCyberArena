import { Component, Input } from '@angular/core';
import { TourCard } from '../../../models/my-tour-card.ts/tour-card';

@Component({
  selector: 'app-my-tour-card',
  standalone: true,
  imports: [],
  templateUrl: './my-tour-card.component.html',
  styleUrl: './my-tour-card.component.scss'
})
export class MyTourCardComponent {
  @Input() myTourCard: TourCard = new TourCard();
}
