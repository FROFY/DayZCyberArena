import { Component, Input } from '@angular/core';
import { SiteCard } from '../../models/site-card/site-card';

@Component({
  selector: 'app-site-card',
  standalone: true,
  imports: [],
  templateUrl: './site-card.component.html',
  styleUrl: './site-card.component.scss'
})
export class SiteCardComponent {
  @Input() siteCard: SiteCard = new SiteCard();
  pictureSource: string = "../../../assets/images/Firstpic.png";
}
