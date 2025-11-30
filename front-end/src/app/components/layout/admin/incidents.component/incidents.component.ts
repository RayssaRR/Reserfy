import { Component } from '@angular/core';
import { CardsIncidentsComponents } from '../cards-incidents.components/cards-incidents.components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-incidents.component',
  imports: [CommonModule, CardsIncidentsComponents],
  templateUrl: './incidents.component.html',
  styleUrl: './incidents.component.scss',
})
export class IncidentsComponent {
  
}
