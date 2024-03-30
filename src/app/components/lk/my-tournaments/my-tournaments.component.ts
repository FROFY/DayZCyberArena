import { Component } from '@angular/core';
import { MyTourCardComponent } from '../my-tour-card/my-tour-card.component';
import { NgFor } from '@angular/common';
import { TourCard } from '../../../models/my-tour-card.ts/tour-card';

@Component({
  selector: 'app-my-tournaments',
  standalone: true,
  imports: [MyTourCardComponent, NgFor],
  templateUrl: './my-tournaments.component.html',
  styleUrl: './my-tournaments.component.scss'
})
export class MyTournamentsComponent {
  myTours: TourCard[] = [
    {
      place: 1,
      totalPlace: 10,
      winSum: 5000,
    },
    {
      place: 3,
      totalPlace: 15,
      winSum: 1000,
    },
    {
      place: 2,
      totalPlace: 11,
      winSum: 3000,
    },
    {
      place: 10,
      totalPlace: 10,
      winSum: 0,
    },
    {
      place: 10,
      totalPlace: 10,
      winSum: 0,
    },
    {
      place: 10,
      totalPlace: 10,
      winSum: 0,
    },
    {
      place: 10,
      totalPlace: 10,
      winSum: 0,
    },
    {
      place: 10,
      totalPlace: 10,
      winSum: 0,
    },
    {
      place: 10,
      totalPlace: 10,
      winSum: 0,
    },
    {
      place: 10,
      totalPlace: 10,
      winSum: 0,
    },
  ]
}
