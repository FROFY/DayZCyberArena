import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TeammateCardComponent } from '../teammate-card/teammate-card.component';
import { MyTeamComponent } from '../my-team/my-team.component';
import { TopTeamComponent } from '../top-team/top-team.component';
import { MyTournamentsComponent } from '../my-tournaments/my-tournaments.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    HeaderComponent,
    TeammateCardComponent,
    MyTeamComponent,
    TopTeamComponent,
    MyTournamentsComponent,
    RouterOutlet,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
