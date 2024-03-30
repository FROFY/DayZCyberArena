import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teammate-card',
  standalone: true,
  imports: [],
  templateUrl: './teammate-card.component.html',
  styleUrl: './teammate-card.component.scss'
})
export class TeammateCardComponent {
  @Input() name: string = '';
}
