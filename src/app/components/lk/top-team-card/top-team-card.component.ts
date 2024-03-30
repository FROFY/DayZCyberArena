import { Component, Input } from '@angular/core';
import { TopTeam } from '../../../models/top-team/top-team';

@Component({
  selector: 'app-top-team-card',
  standalone: true,
  imports: [],
  templateUrl: './top-team-card.component.html',
  styleUrl: './top-team-card.component.scss'
})
export class TopTeamCardComponent {
  @Input() team: TopTeam = new TopTeam();
}
