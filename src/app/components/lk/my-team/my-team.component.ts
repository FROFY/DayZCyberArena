import { Component } from '@angular/core';
import { TeammateCardComponent } from '../teammate-card/teammate-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-my-team',
  standalone: true,
  imports: [TeammateCardComponent, NgFor],
  templateUrl: './my-team.component.html',
  styleUrl: './my-team.component.scss'
})
export class MyTeamComponent {
  myName: string = 'FROFY';
  items = ["TeamMate1", "TeamMate2", "TeamMate3", "TeamMate4"];
}
