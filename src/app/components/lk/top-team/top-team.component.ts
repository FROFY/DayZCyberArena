import { Component } from '@angular/core';
import { TopTeamCardComponent } from '../top-team-card/top-team-card.component';
import { NgFor } from '@angular/common';
import { TopTeam } from '../../../models/top-team/top-team';

@Component({
  selector: 'app-top-team',
  standalone: true,
  imports: [TopTeamCardComponent, NgFor],
  templateUrl: './top-team.component.html',
  styleUrl: './top-team.component.scss'
})
export class TopTeamComponent {
  topTeams: TopTeam[] = [
    {
      teamName: 'Team 1',
      teamWins: '10'
    },
    {
      teamName: 'Team 2',
      teamWins: '9'
    },
    {
      teamName: 'Team 3',
      teamWins: '8'
    },
    {
      teamName: 'Team 4',
      teamWins: '7'
    },
  ]
}
